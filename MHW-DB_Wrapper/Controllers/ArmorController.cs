using MHW_DB_Wrapper.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace MHW_DB_Wrapper.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArmorController : ControllerBase
    {
        private readonly ILogger<ArmorController> _logger;
        private readonly IHttpClientFactory _httpClientFactory;

        public ArmorController(ILogger<ArmorController> logger, IHttpClientFactory httpClientFactory)
        {
            _logger = logger;
            _httpClientFactory = httpClientFactory;

            // Note: Have to set the security protocol to that of webpage. Will look more into resolving this automatically
            System.Net.ServicePointManager.SecurityProtocol = System.Net.SecurityProtocolType.Tls13;
        }

        [HttpGet]
        ///<summary>Retrieve all armors within DB</summary>
        public async Task<IActionResult> GetAll()
        { 

            // Make call to armor getall of mhw-db. 
            //TODO: May move to seperate class/method
            var request = new HttpRequestMessage(HttpMethod.Get, "https://mhw-db.com/armor");// Create Request
            var client = _httpClientFactory.CreateClient();
           
            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                //using var responseStream = await response.Content.ReadAsStreamAsync();
                var responseStream = await response.Content.ReadAsStreamAsync();
                
                string armorJsonString = ReadStream(responseStream);

                return Ok(armorJsonString);
            }

            return BadRequest($"Armor GetAll request failed");
        }
        [HttpGet("id/{id}", Name = "GetArmorId")]
        public async Task<IActionResult> Get(int id)
        {
            string uri = $"https://mhw-db.com/armor/{id}";

            var request = new HttpRequestMessage(HttpMethod.Get, uri);// Create Request
            var client = _httpClientFactory.CreateClient();

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                //TODO: Make a method out of code, call from each get
                var responseStream = await response.Content.ReadAsStreamAsync();

                string armorJsonString = ReadStream(responseStream);

                // Convert the string to JSON, return
                var armor = JsonConvert.DeserializeObject<Armor>(armorJsonString);

                //return Ok(armor);
                return Ok(armorJsonString);
            }

            return BadRequest($"Armor Get request failed (for ID {id})");
        }
        
        //test for react
        //[HttpGet("id/am/{id}", Name = "GetArmorIdAm")]
        //public Armor GetAm(int id)
        //{
        //    string uri = $"https://mhw-db.com/armor/{id}";

        //    var request = new HttpRequestMessage(HttpMethod.Get, uri);// Create Request
        //    var client = _httpClientFactory.CreateClient();

        //    var response = client.SendAsync(request);
        //    response.RunSynchronously();

        //    response.Result.
        //    if (response.IsCompleted)
        //    {
        //        //TODO: Make a method out of code, call from each get
        //        var responseStream =  response..ReadAsStreamAsync();

        //        // Convert the stream to JSON, return
        //        string armorJsonString = ReadStream(responseStream);

        //        // Deserialize
        //        var armor = JsonConvert.DeserializeObject<Armor>(armorJsonString);

        //        return armor;
        //    }

        //    return null;
        //}

        /// <summary>
        /// Retrieves named Armor JSON object and status of request
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        [HttpGet("name/{name}")]
        public async Task<IActionResult> Get(string name)
        {
            string uri = $"https://mhw-db.com/armor?q={{\"name\":\"{name}\"}}";

            var request = new HttpRequestMessage(HttpMethod.Get, uri);// Create Request
            var client = _httpClientFactory.CreateClient();

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var responseStream = await response.Content.ReadAsStreamAsync();

                string armorJsonString = ReadStream(responseStream);

                // Convert the string to JSON, return
                var armor = JsonConvert.DeserializeObject<List<Armor>>(armorJsonString);

                return Ok(armor);
            }

            return BadRequest($"Armor Get request failed (for queried name {name})");
        }

        /// <summary>
        /// Retrieves JSON objects and status of request based on query string
        /// </summary>
        /// <param name="qstring">Query string of parameters to search for</param>
        /// <returns></returns>
        [HttpGet("search/armor/qname={armorQname}")]// Long winded form, may reduce to something that allows greater flexibility and more advanced searches
        public async Task<IActionResult> Search(string armorQname)
        {
            // Change uri to make use of like query search (example: https://mhw-db.com/armor?q={%22name%22:{%22$like%22:%22bone%20greaves%%22}} )
            string uri = $"https://mhw-db.com/armor?q={{\"name\":{{\"$like\":\"%{armorQname}%\"}}}}" + // Using wildcard (%) before and after
                $"&p={{\"id\":true, \"name\":true, \"type\":true, \"rank\":true}}";                                                  // Added projection capability for search results display
            // TODO: Could switch between wildcard and exact search somehow
            var request = new HttpRequestMessage(HttpMethod.Get, uri);  // 
            var client = _httpClientFactory.CreateClient();

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var responseStream = await response.Content.ReadAsStreamAsync();

                string armorJsonArray = ReadStream(responseStream);

                // convert array to json
                var armorResults = JsonConvert.DeserializeObject<Armor[]>(armorJsonArray);

                return Ok(armorResults);
            }

            return BadRequest($"Armor Search request failed ");
        }

        #region Stream Conversion. May move to seperate static class
        private string ReadStream(Stream stream)
        {
            MemoryStream memStream = (MemoryStream)stream;

            string jsonString;
            UnicodeEncoding uniEncoding = new UnicodeEncoding();

            // Read the stream
            try
            {
                memStream.Seek(0, SeekOrigin.Begin);

                using (StreamReader sr = new StreamReader(memStream))
                {
                    jsonString = sr.ReadToEnd();
                }

                memStream.Close();
                memStream.Dispose();

                return new string(jsonString);
            }
            catch (Exception ex)
            {
                // Log error
                memStream.Close();
                memStream.Dispose();
                return "Error reading stream";
            }
        }

        #endregion
    }
}

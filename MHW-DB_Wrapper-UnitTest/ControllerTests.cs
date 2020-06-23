using MHW_DB_Wrapper.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using NUnit.Framework;
using System.Net.Http;

namespace MHW_DB_Wrapper_UnitTest
{
    [TestFixture]
    public class ArmorControllerTests
    {
        private ArmorController _armorController;

        private readonly int armorId = 20;
        private readonly string armorName = "Bone Greaves";

        [SetUp]
        public void SetUpArmorCon()
        {
            // Setup of services and Clientfactory
            var services = TestStartUp.ServiceStartUp();
            IHttpClientFactory factory = services.BuildServiceProvider()
                                                 .GetRequiredService<IHttpClientFactory>();

            _armorController = new ArmorController(null, factory);
        }

        [Test]
        /// <summary>
        /// 
        /// </summary>
        public void GetAll()
        {
            var response = _armorController.GetAll();

            Assert.That(response.Result != null);

            // dispose stream

            //Console.WriteLine()
        }

        [Test]
        public void GetAllReadStream()
        {
            var responseStream = (OkObjectResult)_armorController.GetAll().Result;

            string responseValue = responseStream.Value.ToString();

            Assert.That(responseValue.StartsWith('['));


        }

        [Test]
        public void GetId()
        {
            var response = (OkObjectResult)_armorController.Get(armorId).Result;

            var responseValue = response.Value;

            Assert.That(responseValue != null);
        }

        [Test]
        public void GetThroughQueryName()       // Since slug cannot be used...
        {
            var response = (OkObjectResult)_armorController.Get(armorName).Result;

            var responseValue = response.Value;

            Assert.That(responseValue != null);
        }
        
    }



    public static class TestStartUp
    {
        public static IServiceCollection ServiceStartUp()
        {
            IServiceCollection services = new ServiceCollection();

            services.AddHttpClient();

            return services;
        }
    }
}

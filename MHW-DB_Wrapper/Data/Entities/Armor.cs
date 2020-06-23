using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MHW_DB_Wrapper.Data.Entities
{
    // NOTE: Newtonsoft Deserializer can be used
    public class Armor
    {
        public int id { get; set; }
        public string slug { get; set; }     // NOTE: DEPRECATED FROM API/JSON. SHOULD QUERY NAME INSTEAD
        public string name { get; set; }
        public ArmorType type { get; set; }
        public ArmorRank rank { get; set; }
        public int rarity { get; set; }
        public Defense defense { get; set; }
        public Resistances resistances { get; set; }
        public Slot[] slots { get; set; }
        public SkillRank[] skills { get; set; }
        public SetInfo armorSet { get; set; }
        //public ArmorAssets assets;    // Armor UI assets 
        public ArmorCraftingInfo crafting { get; set; }
        public ArmorAttributes attributes { get; set; }
    }

    //TODO: Move the enums to seperate class files
    public class Slot
    {
        public int rank;
    }

    //TODO: Move the enums to seperate class files
    public enum ArmorType
    {
        head,
        chest,
        gloves,
        waist,
        legs
    }

    public enum ArmorRank
    {
        low,
        high,
        master
    }
}

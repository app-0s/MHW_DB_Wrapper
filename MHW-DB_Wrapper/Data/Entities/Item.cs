namespace MHW_DB_Wrapper.Data.Entities
{
    public class Item
    {
        public int id;
        public string name;
        public string description;
        public int rarity;
        public int carryLimit;  // Maximum number of the item that can be in player's inventory; 0 = no limit/limit not available
        public int value;       // Zenny value
    }
}
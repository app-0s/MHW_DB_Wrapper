namespace MHW_DB_Wrapper.Data.Entities
{
    public class SetInfo
    {
        public int id;
        public string name;
        public ArmorRank rank;
        public int[] pieces;    // Array of IDs of all armor pieces in set
    }
}
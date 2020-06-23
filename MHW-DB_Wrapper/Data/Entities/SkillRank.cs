namespace MHW_DB_Wrapper.Data.Entities
{
    public class SkillRank
    {
        public int id;
        public string slug;     // Humand readable unique-identifier
        public int level;
        public string description;
        public int skill;       // ID of skill that the rank belongs to
        public string skillName;
        public SkillRankModifiers modifiers;
    }
}
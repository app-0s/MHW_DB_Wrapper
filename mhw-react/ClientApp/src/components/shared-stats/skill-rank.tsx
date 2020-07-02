import SkillRankModifiers from './skill-rank-modifiers';

export default 
    class SkillRank {
    id: number;
    slug: string;
    level: number;
    description: string;
    skill: number;
    skillName: string;
    modifiers: SkillRankModifiers;
}


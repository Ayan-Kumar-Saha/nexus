import { ISkillCategory } from "@/interfaces/skill-category";
import { FunctionComponent } from "react";

interface ISkillCategoryCardProps {
    category: ISkillCategory
}

const SkillCategoryCard: FunctionComponent<ISkillCategoryCardProps> = ({ category }) => {

    const { icon: Icon } = category;

    return (
        <div className="h-full border border-border/40 rounded-sm p-4 hover:border-primary/30 transition-colors bg-card">
            <div className="flex items-center gap-2 mb-3">
                <Icon className="text-primary shrink-0" size={15} />
                <h3 className="font-mono text-xs text-muted-foreground uppercase tracking-wide">{category.category}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill: string) => (
                    <span
                        key={skill}
                        className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-sm text-xs font-mono border border-border/30">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default SkillCategoryCard;

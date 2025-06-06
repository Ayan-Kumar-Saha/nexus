import { Card, CardContent } from "@/components/ui/card";
import { ISkillCategory } from "@/interfaces/skill-category";
import { FunctionComponent } from "react";

interface ISkillCategoryCardProps {
    category: ISkillCategory
}

const SkillCategoryCard: FunctionComponent<ISkillCategoryCardProps> = ({ category }) => {

    const { icon: Icon } = category;

    return (
        <Card className="h-full bg-background hover:border-primary/30 transition-colors">
            <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-3">
                    <Icon className="text-primary" size={20} />
                    <h3 className="text-md font-mono">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill: string) => (
                        <span
                            key={skill}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm">
                            {skill}
                        </span>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default SkillCategoryCard;
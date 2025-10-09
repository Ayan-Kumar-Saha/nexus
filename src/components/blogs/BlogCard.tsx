import {FunctionComponent} from "react";
import {IBlog} from "@/interfaces/blog";
import {Calendar, Clock, Code} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
import {useNavigate} from "react-router";
import {resolveSlug} from "@/lib/utils";
import {motion} from "framer-motion";

interface IBlogCardProps {
    blog: IBlog
}

const cardVariant = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const BlogCard: FunctionComponent<IBlogCardProps> = ({ blog }) => {
    const navigate = useNavigate();

    const { coverImage, name, description, tags, createdAt, readingTimeMins } = blog;

    const handleCardClick = () => {
        navigate(`/blogs/${resolveSlug(blog.name)}`)
    }

    const formatDate = (epochTimestamp: number): string => {
        const date = new Date(epochTimestamp);
        return date.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }

    const MotionCard = motion.create(Card);

    return (
        <MotionCard variants={cardVariant} onClick={handleCardClick} className={`overflow-hidden border border-border/50 transition-all hover:border-primary/20 hover:shadow-md cursor-pointer`}>
            <div className="h-38 bg-muted overflow-hidden">
                <img src={coverImage} alt={name} className="w-full h-full object-cover" />
            </div>
            <CardContent className="p-5">
                <div className="flex items-center justify-end gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(createdAt)}
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {readingTimeMins} mins
                    </div>
                </div>
                <h3 className="flex items-center gap-2 text-lg font-bold mb-2">
                    <Code size={20} className="text-primary" />
                    <span>{name}</span>
                </h3>
                <p className="text-muted-foreground text-sm mb-3">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </CardContent>
        </MotionCard>
    );
}

export default BlogCard;
import { FunctionComponent } from "react";
import { IProject } from "../interfaces/project";
import { LuCode, LuExternalLink, LuGithub } from "react-icons/lu";

interface IProjectCardProps {
    project: IProject
}

const ProjectCard: FunctionComponent<IProjectCardProps> = ({ project }) => {

    const { name, description, tags, isCodeAvailable, isDemoAvailable, codebaseLink, demoLink } = project;

    return (
        <div className="bg-card-background h-full overflow-hidden flex flex-col border border-border-default card-hover rounded-xl">
            <h3 className="flex items-center gap-3 font-mono p-6">
                <LuCode className="text-lg text-accent-text" /><span className="text-2xl">{name}</span>
            </h3>
            <div className="flex-grow p-6 pt-0">
                <p className="text-secondary-text mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {
                        tags.map(tag => (
                            <div className="py-0.5 px-2.5 text-xs font-semibold bg-code-background">{tag}</div>
                        ))
                    }
                </div>
            </div>

            <div className="flex justify-between items-center border-t border-border-default p-4 text-secondary-text min-h-15">
                {
                    isCodeAvailable
                        ? (
                            <a href={codebaseLink}
                                className="flex items-center gap-1 hover:text-accent-text"
                                target="_blank">
                                <LuGithub />
                                <span>Code</span>
                            </a>
                        )
                        : <span></span>
                }
                {
                    isDemoAvailable
                        ? (
                            <a href={demoLink}
                                className="flex items-center gap-1 hover:text-accent-text"
                                target="_blank">
                                <LuExternalLink />
                                <span>Demo</span>
                            </a>
                        )
                        : <span></span>
                }
            </div>
        </div>
    );
}

export default ProjectCard;
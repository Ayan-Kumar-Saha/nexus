import { FunctionComponent } from "react";

type ISectionHeaderProps = {
    title: string;
    description?: string
}

const SectionHeader: FunctionComponent<ISectionHeaderProps> = ({ title, description = '' }) => {
    return (
        <>
            <h1 className="font-mono relative overflow-hidden whitespace-nowrap border-r-4 pr-1 mb-6">
                <span className="text-primary">&gt;</span> {title}
            </h1>
            {description && <p className="text-muted-foreground mb-8">{description}</p>}
        </>
    )
}

export default SectionHeader;
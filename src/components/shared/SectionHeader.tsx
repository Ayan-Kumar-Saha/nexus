import { FunctionComponent } from "react";

type ISectionHeaderProps = {
    title: string;
    description?: string
}

const SectionHeader: FunctionComponent<ISectionHeaderProps> = ({ title, description = '' }) => {
    return (
        <>
            <h2 className="font-mono relative overflow-hidden whitespace-nowrap border-r-4 pr-1 mb-2">
                <span className="text-primary">&gt;</span> {title}
            </h2>
            {description && <p className="text-muted-foreground mb-8">{description}</p>}
        </>
    )
}

export default SectionHeader;
import { FunctionComponent } from "react";

type ISectionHeaderProps = {
    title: string;
    description?: string
}

const SectionHeader: FunctionComponent<ISectionHeaderProps> = ({ title, description = '' }) => {
    return (
        <div className="mb-10">
            <p className="font-mono text-xs text-primary mb-2">
                <span className="opacity-60">// </span>{title}
            </p>
            {description && (
                <p className="text-foreground text-lg md:text-xl font-medium max-w-2xl leading-snug">
                    {description}
                </p>
            )}
            <div className="mt-4 h-px bg-border" />
        </div>
    )
}

export default SectionHeader;

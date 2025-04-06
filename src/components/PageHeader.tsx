import { FunctionComponent } from "react";

type IPageHeaderProps = {
    title: string;
    description: string
}

const PageHeader: FunctionComponent<IPageHeaderProps> = ({ title, description }) => {
    return (
        <>
            <h1 className="mb-6 font-mono font-bold text-3xl">
                <span className="text-accent-text">&gt;</span> {title}
            </h1>
            <p className="text-secondary-text mb-8">{description}</p>
        </>
    )
}

export default PageHeader;
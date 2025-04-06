import { FunctionComponent } from "react";

interface CodeSnippetProps {
    code: string;
    language?: string;
}

const CodeSnippet: FunctionComponent<CodeSnippetProps> = ({ code, language = 'javascript' }) => {
    return (
        <div className="code-block">
            <pre>
                <code>{code}</code>
            </pre>
        </div>
    );
};

export default CodeSnippet;

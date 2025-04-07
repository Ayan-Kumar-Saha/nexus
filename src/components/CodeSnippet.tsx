import { FunctionComponent } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeSnippet: FunctionComponent = () => {
    return (
        <SyntaxHighlighter
            language="javascript"
            showLineNumbers={false}
            wrapLines={true}
            wrapLongLines={true}
            customStyle={{
                fontSize: '14px',
                padding: '16px 20px',
                lineHeight: '1.6',
                background: '#f8f9fc',
                overflowX: 'hidden',
                marginLeft: 0,
            }}
            codeTagProps={{
                style: {
                    whiteSpace: 'pre-wrap',
                },
            }}
        >
            {`const ayan = {
  name: "Ayan Kumar Saha",
  role: "Full Stack Developer",
  currentFocus: "Designing scalable apps",
  availableFor: ["New Oppurtunities", "Freelance"],
  preference: ["Remote", "On Site (Kolkata)"],
  sayHi: () => console.log("Let’s build something cool!"),
};`}
        </SyntaxHighlighter>
    );
};

export default CodeSnippet;

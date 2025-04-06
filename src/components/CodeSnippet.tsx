import { FunctionComponent } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeSnippet: FunctionComponent = () => {
    return (
        <div className="code-block rounded-xl overflow-hidden w-fit shadow-md">

            <div className="flex justify-between items-center px-4 py-2 bg-gray-800 text-white text-sm font-mono">
                <div className="flex items-center gap-2">
                    <span>ayan.js</span>
                </div>
                <div className="flex gap-2">
                    <span className="w-3 h-3 bg-red-500 rounded-full" />
                    <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <span className="w-3 h-3 bg-green-500 rounded-full" />
                </div>
            </div>

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
        </div>
    );
};

export default CodeSnippet;

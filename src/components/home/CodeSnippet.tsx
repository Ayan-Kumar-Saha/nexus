import { FunctionComponent } from "react";

const CodeSnippet: FunctionComponent = () => {
    const formatUptime = () => {
        const start = new Date("2020-09-01T00:00:00Z");
        const now = new Date();
        const diff = now.getTime() - start.getTime();

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const years = Math.floor(days / 365.25);
        const months = Math.floor((days % 365.25) / 30.44);
        const remDays = Math.floor((days % 365.25) % 30.44);

        return `${years}y ${months}m ${remDays}d`;
    };

    return (
        <div className="bg-card/10 backdrop-blur-sm border border-border rounded-lg shadow-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-card/80 border-b border-border px-4 py-2 flex items-center justify-between">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <p className="text-xs font-mono text-muted-foreground">
                    ayan@fullstack: ~ (zsh)
                </p>
                <div className="w-10"></div> {/* Spacer for symmetry */}
            </div>

            <div className="p-5 font-mono text-sm leading-relaxed">
                {/* Whoami */}
                <div className="mb-3">
                    <span className="text-primary font-bold">➜</span> 
                    <span className="text-cyan-400 ml-2">~</span> 
                    <span className="text-muted-foreground ml-2">whoami</span>
                    <div className="text-foreground mt-1 pl-4">ayan_kumar_saha</div>
                </div>

                {/* Uptime - Personalized "Load Average" */}
                <div className="mb-3">
                    <span className="text-primary font-bold">➜</span> 
                    <span className="text-cyan-400 ml-2">~</span> 
                    <span className="text-muted-foreground ml-2">uptime</span>
                    <div className="text-foreground mt-1 pl-4">
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} up {formatUptime()}, 1 user (active), load: high_creative_output
                    </div>
                </div>

                {/* Current Focus - Combining AI and SaaS goals */}
                <div className="mb-3">
                    <span className="text-primary font-bold">➜</span> 
                    <span className="text-cyan-400 ml-2">~</span> 
                    <span className="text-muted-foreground ml-2">echo $CURRENT_FOCUS</span>
                    <div className="text-yellow-200/90 mt-1 pl-4">
                        "Architecting niche SaaS & bridging business gaps with Applied AI"
                    </div>
                </div>

                {/* Learning - Specificity shows depth */}
                <div className="mb-3">
                    <span className="text-primary font-bold">➜</span> 
                    <span className="text-cyan-400 ml-2">~</span> 
                    <span className="text-muted-foreground ml-2">ls -l ~/skills/learning</span>
                    <div className="text-foreground mt-1 pl-4">
                        <span className="text-green-400">drwxr-xr-x</span> applied-ai <br />
                        <span className="text-green-400">drwxr-xr-x</span> ai-automation <br />
                        <span className="text-green-400">drwxr-xr-x</span> ai-driven-saas
                    </div>
                </div>

                {/* Cursor */}
                <div className="flex items-center">
                    <span className="text-primary font-bold">➜</span>
                    <span className="text-cyan-400 ml-2">~</span>
                    <span className="ml-2 w-2 h-4 bg-primary animate-caret-blink"></span>
                </div>
            </div>
        </div>
    );
};

export default CodeSnippet;
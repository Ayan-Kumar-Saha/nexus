import { FunctionComponent } from "react";

const CodeSnippet: FunctionComponent = () => {
    return (
        <div className="bg-[oklch(0.93_0.004_265)] dark:bg-[oklch(0.08_0.004_265)] border border-black/8 dark:border-white/8 rounded-sm shadow-lg overflow-hidden font-mono text-sm ring-1 ring-black/10">
            <div className="bg-[oklch(0.87_0.005_265)] dark:bg-[oklch(0.12_0.005_265)] border-b border-black/8 dark:border-white/8 px-4 py-2.5 flex items-center justify-between">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <p className="text-xs text-black/40 dark:text-white/30">ayan@dev: ~ (zsh)</p>
                <div className="w-12" />
            </div>

            <div className="p-5 leading-relaxed text-black/75 dark:text-white/80">
                <div className="mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-primary">❯</span>
                        <span className="text-black/45 dark:text-white/40">ls ~/domains</span>
                    </div>
                    <div className="mt-1 pl-5 text-black/65 dark:text-white/70 flex flex-wrap gap-x-4 gap-y-0.5">
                        <span>web</span>
                        <span>mobile</span>
                        <span>wearables</span>
                        <span>devops</span>
                        <span>ai</span>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-primary">❯</span>
                        <span className="text-black/45 dark:text-white/40">git log --oneline -3</span>
                    </div>
                    <div className="mt-1 pl-5 text-black/65 dark:text-white/70 space-y-0.5">
                        <div><span className="text-primary/70 dark:text-primary/60">a3f1c2e</span> shipped saas product v2</div>
                        <div><span className="text-primary/70 dark:text-primary/60">b9d4f91</span> wearable integration module</div>
                        <div><span className="text-primary/70 dark:text-primary/60">c2e9a1d</span> ci/cd across 20 projects</div>
                    </div>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-primary">❯</span>
                        <span className="text-black/45 dark:text-white/40">cat approach.txt</span>
                    </div>
                    <div className="mt-1 pl-5 text-amber-700/80 dark:text-amber-300/80">
                        clean_code · intentional_design · ship_fast
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-primary">❯</span>
                    <span className="w-2 h-4 bg-primary/80 animate-caret-blink" />
                </div>
            </div>
        </div>
    );
};

export default CodeSnippet;

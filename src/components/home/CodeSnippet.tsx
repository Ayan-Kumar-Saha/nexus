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

        return `${years} years, ${months} months, ${remDays} days`;
    };

    return (
        <div className="bg-card/10 backdrop-blur-sm border border-border rounded-lg shadow-lg overflow-hidden">
            <div className="bg-card/80 border-b border-border px-4 py-2 flex items-center">
                <div className="flex space-x-2 mr-4">
                    <div className="w-3 h-3 rounded-full bg-destructive/70"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
                <p className="text-xs font-mono text-muted-foreground">
                    ayankumarsaha@portfolio ~ developer.sh
                </p>
            </div>
            <div className="p-5 font-mono text-sm">
                <div className="mb-2 text-muted-foreground">
                    <span className="text-primary">$</span> whoami
                </div>
                <div className="mb-2 pl-4">ayankumarsaha</div>

                <div className="mb-2 text-muted-foreground">
                    <span className="text-primary">$</span> uptime
                </div>
                <div className="mb-2 pl-4">
                    {new Date().toLocaleTimeString()} up {formatUptime()}, 0 users, load average: 0.00, 0.01, 0.00
                </div>

                <div className="mb-2 text-muted-foreground">
                    <span className="text-primary">$</span> uname -a
                </div>
                <div className="mb-2 pl-4">
                    ayanOS 6.9.42-dev #1 SMP PREEMPT IST x86_64 AyanFullStack
                </div>

                <div className="mb-2 text-muted-foreground">
                    <span className="text-primary">$</span> echo $CURRENT_FOCUS
                </div>
                <div className="mb-2 pl-4">building reliable, scalable, robust apps</div>

                <div className="flex items-center">
                    <span className="text-primary">$</span>
                    <span className="ml-2 animate-pulse">_</span>
                </div>
            </div>
        </div>
    );
};

export default CodeSnippet;

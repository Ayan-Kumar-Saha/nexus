import { IDatePoint, IExperience, IPosition } from "@/interfaces/experience";
import { FunctionComponent } from "react";
import ResponsibilitiesDialog from "@/components/about-me/ResponsibilitiesDialog";

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

const formatDate = (d: IDatePoint) => `${MONTHS[d.month - 1]} ${d.year}`;

const calcDuration = (from: IDatePoint, to: IDatePoint | null): string => {
    const now = new Date();
    const endMonth = to ? to.month : now.getMonth() + 1;
    const endYear = to ? to.year : now.getFullYear();
    const total = (endYear - from.year) * 12 + (endMonth - from.month);
    const yrs = Math.floor(total / 12);
    const mos = total % 12;
    if (yrs === 0) return `${mos} mo`;
    if (mos === 0) return `${yrs} yr`;
    return `${yrs} yr ${mos} mo`;
};

interface IExperienceCardProps {
    experience: IExperience;
}

const PositionRow: FunctionComponent<{ position: IPosition; isLast: boolean }> = ({ position, isLast }) => {
    const toDate = position.isActive ? null : position.to;
    const duration = calcDuration(position.from, toDate);
    const dateLabel = position.isActive
        ? `${formatDate(position.from)} – now`
        : `${formatDate(position.from)} – ${formatDate(position.to)}`;

    return (
        <div className={`relative pl-4 ${!isLast ? 'pb-4 border-b border-border/20' : ''}`}>
            <div className="absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full bg-border" />
            <div className="flex items-start justify-between gap-4 flex-wrap">
                <p className="text-sm font-medium leading-snug">{position.role}</p>
                <div className="flex items-center gap-2 shrink-0">
                    <span className="font-mono text-xs text-muted-foreground">{dateLabel}</span>
                    <span className="font-mono text-xs px-1.5 py-0.5 rounded-sm bg-secondary text-secondary-foreground border border-border/30">
                        {duration}
                    </span>
                </div>
            </div>
            {position.responsibilities.length > 0 && (
                <ResponsibilitiesDialog position={position} />
            )}
        </div>
    );
};

const ExperienceCard: FunctionComponent<IExperienceCardProps> = ({ experience }) => {
    const hasActivePosition = experience.positions.some(p => p.isActive);

    const allFrom = experience.positions.map(p => p.from.year * 12 + p.from.month);
    const allTo = experience.positions.map(p =>
        p.isActive ? new Date().getFullYear() * 12 + new Date().getMonth() + 1 : p.to.year * 12 + p.to.month
    );
    const earliestFrom = experience.positions.reduce((min, p) =>
        (p.from.year * 12 + p.from.month) < (min.year * 12 + min.month) ? p.from : min,
        experience.positions[0].from
    );
    const totalDuration = calcDuration(
        earliestFrom,
        hasActivePosition ? null : experience.positions.reduce((max, p) =>
            (!p.isActive && (p.to.year * 12 + p.to.month) > (max.year * 12 + max.month)) ? p.to : max,
            experience.positions[0].to
        )
    );

    return (
        <div className="relative">
            <div className={`absolute -left-[25px] top-1.5 w-3 h-3 rounded-full border-2 ${
                hasActivePosition
                    ? 'bg-primary border-primary'
                    : 'bg-background border-border/60'
            }`}>
                {hasActivePosition && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
                )}
            </div>

            <div className="flex items-center gap-2 mb-3 flex-wrap">
                <h3 className="font-mono text-sm font-semibold">{experience.company}</h3>
                {hasActivePosition && (
                    <span className="font-mono text-xs px-1.5 py-0.5 rounded-sm bg-primary/10 text-primary border border-primary/20">
                        current
                    </span>
                )}
                <span className="font-mono text-xs text-muted-foreground ml-auto">
                    {totalDuration}{experience.positions.length > 1 ? ' total' : ''}
                </span>
            </div>

            <div className="space-y-0 border border-border/30 rounded-sm overflow-hidden bg-card">
                {experience.positions.map((position, i) => (
                    <div key={position.id} className={`px-4 pt-3 pb-3 ${i < experience.positions.length - 1 ? 'border-b border-border/20' : ''}`}>
                        <PositionRow position={position} isLast={i === experience.positions.length - 1} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;

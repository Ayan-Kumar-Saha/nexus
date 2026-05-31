import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { IPosition } from "@/interfaces/experience";
import { FunctionComponent } from "react";

interface IResponsibilitiesDialogProps {
    position: IPosition
}

const ResponsibilitiesDialog: FunctionComponent<IResponsibilitiesDialogProps> = ({ position }) => (
    <Dialog>
        <DialogTrigger asChild>
            {
                position.responsibilities.length > 0 &&
                <button className="mt-1.5 font-mono text-xs text-primary hover:underline underline-offset-4 cursor-pointer">
                    what I did →
                </button>
            }
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg rounded-sm">
            <DialogHeader>
                <DialogTitle className="font-mono text-sm">{position.role}</DialogTitle>
                <DialogDescription className="font-mono text-xs">
                    {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][position.from.month - 1]} {position.from.year}
                    {position.isActive ? ' – now' : ` – ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][position.to.month - 1]} ${position.to.year}`}
                </DialogDescription>
            </DialogHeader>
            <ul className="mt-2 space-y-2.5 text-sm text-muted-foreground">
                {position.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary mt-1 shrink-0">›</span>
                        <span>{responsibility}</span>
                    </li>
                ))}
            </ul>
        </DialogContent>
    </Dialog>
);

export default ResponsibilitiesDialog;
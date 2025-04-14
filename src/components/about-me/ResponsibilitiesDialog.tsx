import { Dialog, DialogContent, DialogHeader, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { IPosition } from "@/interfaces/experience";
import { FunctionComponent } from "react";

interface IResponsibilitiesDialogProps {
    position: IPosition
}

const ResponsibilitiesDialog: FunctionComponent<IResponsibilitiesDialogProps> = ({ position }) => (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="mt-2">
                <Info className="mr-1" size={14} /> Know More
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle>{position.role}</DialogTitle>
                <DialogDescription>
                    {position.from} - {position.isActive ? 'Now' : position.to}
                </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Responsibilities:</h4>
                <ul className="space-y-1.5 text-sm">
                    {
                        position.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start">
                                <span className="mr-2 text-primary">•</span>
                                <span>{responsibility}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </DialogContent>
    </Dialog>
);

export default ResponsibilitiesDialog;
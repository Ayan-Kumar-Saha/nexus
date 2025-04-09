import { FunctionComponent } from "react";

export interface INavLink {
    id: number;
    name: string;
    path: string;
    element: FunctionComponent;
    isActive: boolean
}
import { ObjectId } from "mongoose";

export interface Gestor {
    estado: "online" | "offline";
    disponible: boolean;
    users?: ObjectId[]; 
}

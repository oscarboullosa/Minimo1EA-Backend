import { ObjectId } from "mongoose";

export interface Location {
    nameLocation: string;
    latLocation: string;
    lonLocation: string; 
    descriptionLocation?: string;
}
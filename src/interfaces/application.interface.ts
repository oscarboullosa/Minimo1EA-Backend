import { ObjectId } from "mongoose";

export interface Application {
    idSender: ObjectId;
    idReceiver: ObjectId;
    typeApplication: "proposal" | "join"; 
    idActivity: ObjectId;
    descriptionApplication?: string;
}
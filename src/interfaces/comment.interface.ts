import { ObjectId } from "mongoose";

export interface Comment{
    idUserComment: ObjectId,
    idPublicationComment?: ObjectId,
    textComment: string,
    likesComment?: ObjectId[],
    responseComment?: ObjectId[], 
}
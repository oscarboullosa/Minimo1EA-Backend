import { ObjectId } from "mongoose";

export interface Publication {
    idUserPublication: ObjectId,
    likesPublication?: ObjectId[],
    textPublication?: string,
    photoPublication: string[], // Aquí van las fotos de las publicaciones.
    commentsPublication?: ObjectId[]
}
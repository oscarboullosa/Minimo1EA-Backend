import {  Schema, Types, model, Model } from "mongoose";
import { Publication } from "../interfaces/publication.interface";

const PublicationSchema = new Schema<Publication>(
    {
        idUserPublication:{
            type:Schema.Types.ObjectId,
            ref: 'users',
            required:true,
        },
        likesPublication:{
            type:[Schema.Types.ObjectId],
            ref: 'users',
            required:false,
        },
        textPublication:{
            type:String,
            required:false,
        },
        photoPublication:{
            type:[String],
            required:true,
        },
        commentsPublication:{
            type:[Schema.Types.ObjectId],
            ref: 'comments',
            required:false,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//Once the Schema is created, it must be implemented
//1st argument ('users') is the name of the collection
//2nd argument (UserSchema) is what it feds it
const PublicationModel = model('publications', PublicationSchema);

export default PublicationModel;
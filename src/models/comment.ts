import {  Schema, Types, model, Model } from "mongoose";
import { Comment } from "../interfaces/comment.interface";


const CommentSchema = new Schema<Comment>(
    {
        idUserComment:{
            type: Schema.Types.ObjectId,
            ref:'users',
            required:true,
        },
        idPublicationComment:{
            type: Schema.Types.ObjectId,
            ref:'publications',
            required:false,
        },
        textComment:{
            type: String,
            required:true,
        },
        likesComment:{
            type: [Schema.Types.ObjectId],
            ref:'users',
            required:false,
        },
        responseComment:{
            type: [Schema.Types.ObjectId],
            ref:'comments',
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
const CommentModel = model('comments', CommentSchema);

export default CommentModel;
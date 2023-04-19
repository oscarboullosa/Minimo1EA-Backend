import {  Schema, Types, model, Model } from "mongoose";
import { Application } from '../interfaces/application.interface';


const ApplicationSchema = new Schema<Application>(
    {
        idSender:{
            type: Schema.Types.ObjectId,
            ref:'users',
            required:true,
        },
        idReceiver:{
            type: Schema.Types.ObjectId,
            ref:'users',
            required:true,
        },
        typeApplication:{
            type: String,
            enum:["proposal","join"],
            required: true,
        },
        idActivity:{
            type: Schema.Types.ObjectId,
            ref:'activities',
            required:true,
        },
        descriptionApplication:{
            type: String,
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
const ApplicationModel = model('applications', ApplicationSchema);

export default ApplicationModel;
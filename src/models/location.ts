import {  Schema, Types, model, Model } from "mongoose";
import { Location } from "../interfaces/location.interface";


const LocationSchema = new Schema<Location>(
    {
        nameLocation:{
            type: String,
            required:true,
        },
        latLocation:{
            type: String,
            required:true,
        },
        lonLocation:{
            type: String,
            required:true,
        },
        descriptionLocation:{
            type: String,
            required:false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//Once the Schema is created, it must be implemented
//1st argument ('users') is the name of the collection
//2nd argument (UserSchema) is what it feds it
const LocationModel = model('locations', LocationSchema);

export default LocationModel;
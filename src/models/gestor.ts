import {  Schema, Types, model, Model } from "mongoose";
import { Gestor } from "../interfaces/gestor.interface";

const GestorSchema=new Schema<Gestor>(
    {
        estado:{
            type:String,
            enum:["online","offline"],
            required:true,
        },

        disponible:{
            type: Boolean,
            required:true,
        },

        users:{
            type: [Schema.Types.ObjectId],
            ref:'users',
        },
        
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const GestorModel = model('gestors', GestorSchema);

export default GestorModel;
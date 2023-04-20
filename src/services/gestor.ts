import { Types } from "mongoose";
import { Gestor } from "../interfaces/gestor.interface";
import GestorModel from "../models/gestor";

const insertGestor=async(item:Gestor)=>{
    const responseInsert=await GestorModel.create(item);
    return responseInsert;
};

const getGestores=async()=>{
    const responseItem=await GestorModel.find({});
    return responseItem;
};

const getGestor=async(id:string)=>{
    const responseItem = await GestorModel.findOne({_id: id});
    return responseItem;
};

const updateGestor=async(id: string, data: Gestor)=>{
    const responseItem = await GestorModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};
const deleteGestor=async(id: string) => {

    const responseItem = await GestorModel.findOneAndRemove({_id: id});
    return responseItem;
};
const getGestorByUser=async(idGestor:string)=>{
    const gestor=await GestorModel.findById(idGestor).populate('users');
    if(!gestor){
        throw new Error(`Gestor with ID ${idGestor} not found`);
    }
    return gestor.users;
};

const addGestorToUser=async(idUser:string,idGestor:string)=>{
    const responseItem=await GestorModel.findOneAndUpdate(
        {_id:idGestor},
        {$addToSet:{users:new Types.ObjectId(idUser)}},
        {new:true}
    ).populate('users');
    console.log(responseItem);
    return responseItem;
}

export{insertGestor,getGestor,getGestores,updateGestor,deleteGestor,getGestorByUser,addGestorToUser};

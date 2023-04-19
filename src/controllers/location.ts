import { Request,Response } from "express";
import { insertLocation, getLocation, getLocations, updateLocation, deleteLocation} from "../services/location";
import { handleHttp } from "../utils/error.handle";

const getLoc=async({params}:Request,res:Response)=>{
    try{
        const {idLocation}=params;
        const response=await getLocation(idLocation);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_LOCATION");
    }
};

const getLocs=async(req:Request,res:Response)=>{
    try{
        const response=await getLocations();
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_GET_LOCATIONS");
    }
};

const updateLoc=async ({params,body}:Request,res:Response)=>{
    try{
        const {idLocation}=params;
        const response=await updateLocation(idLocation,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_LOCATION");
    }
};

const postLoc=async ({body}:Request,res:Response)=>{
    try{
        const responsePerson=await insertLocation(body);
        res.send(responsePerson);
    }catch(e){
        handleHttp(res,"ERROR_POST_LOCATION");
    }
};

const deleteLoc=async ({params}:Request,res:Response)=>{
    try{
        const {idLocation}=params;
        const response=await deleteLocation(idLocation);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_USER");
    }
};

export{getLoc,getLocs,updateLoc,postLoc,deleteLoc};
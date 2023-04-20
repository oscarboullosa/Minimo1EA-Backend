import { Request,Response } from "express";
import { insertGestor,getGestor,getGestores,updateGestor,deleteGestor,getGestorByUser,addGestorToUser } from "../services/gestor";
import { handleHttp } from "../utils/error.handle";

const getGestorCtrl=async({params}:Request,res:Response)=>{
    try {
        const{idGestor}=params;
        const response=await getGestor(idGestor);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch (error) {
        handleHttp(res,"ERROR_GET_LOCATION");
    }
};

const getGestoresCtrl=async(req:Request,res:Response)=>{
    try {
        const response=await getGestores();
        res.send(response);
    } catch (error) {
        handleHttp(res,"ERROR_GET_LOCATIONS");
    }
};

const updateGestorCtrl=async ({params,body}:Request,res:Response)=>{
    try{
        const {idGestor}=params;
        const {idLocation}=params;
        const response=await updateGestor(idGestor,body);
        res.send(response);
    }
    catch(e){
        handleHttp(res,"ERROR_UPDATE_LOCATION");
    }
};

const postGestorCtrl=async ({body}:Request,res:Response)=>{
    try {
        const response=await insertGestor(body);
        res.send(response);
    } catch (error) {
        handleHttp(res,"ERROR_POST_LOCATION");
    }
};

const deleteGestorCtrl=async ({params}:Request,res:Response)=>{
    try {
        const{idGestor}=params;
        const response=await deleteGestor(idGestor);
        res.send(response);
    } catch (error) {
        handleHttp(res,"ERROR_DELETE_USER");
    }
};
const getUsersByGestorCtrl=async (req: Request, res: Response) => {
    const {gestorId}=req.params;
    try {
        const users=await getGestorByUser(gestorId);
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
      return res.status(500).json({ message: "Server error" });
    }
};

const addGestorToUserCtrl=async ({body}:Request,res:Response)=>{
    try {
        const{idUser,idGestor}=body;
        const response=await addGestorToUser(idUser,idGestor);
        res.send(response);
    } catch (error) {
        handleHttp(res,"ERROR_AL_AÑADIR");
    }
}

export{getGestorCtrl,getGestoresCtrl,updateGestorCtrl,postGestorCtrl,deleteGestorCtrl,getUsersByGestorCtrl,addGestorToUserCtrl};

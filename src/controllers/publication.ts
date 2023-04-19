import { Request,Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { postOnePublication, getAllPublications, getNumPublications, getPublication, updateOnePublication, deleteOnePublication } from "../services/publication";


// (1) Get (obtain) comments ...
const getPaginatePublications=async({params}:Request,res:Response)=>{
    try{
        const {numPage}=params;
        const response=await getNumPublications(numPage); // "numPage" nos sirve para el "paginate".
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_PAGINATED_PUBLICATIONS");
    }
};

// (2) Get (obtain) Publication ...
const getOnePublication=async({params}:Request,res:Response)=>{
    try{
        const {idPublication}=params;
        const response=await getPublication(idPublication); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_THAT_PUBLICATION");
    }
};

// (3) Post (creation) of a publication ...
const postPublication=async ({body}:Request,res:Response)=>{
    try{
        const response=await postOnePublication(body);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    }catch(e){
        handleHttp(res,"ERROR_POST_PUBLICATION");
    }
};

// (4) Put (edition) of a publication ...
const updatePublication=async ({params,body}:Request,res:Response)=>{
    try{
        const {idPublication}=params;
        const response=await updateOnePublication(idPublication,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_PUBLICATION");
    }
};

// (5) Delete comment ...
const deletePublication=async ({params}:Request,res:Response)=>{
    try{
        const {idPublication}=params;
        const response=await deleteOnePublication(idPublication);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_PUBLICATION");
    }
};

// (6) Get all publications
const getAllAvailablePublications=async(req:Request,res:Response)=>{
    try{
        const response=await getAllPublications(); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_ALL_PUBLICATIONS");
    }
};



export{postPublication, getPaginatePublications, getAllAvailablePublications, getOnePublication, updatePublication, deletePublication};

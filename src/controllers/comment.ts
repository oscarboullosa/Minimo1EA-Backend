import { Request,Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getCommentsPublication, postCommentPublication, postAnswerPublication, updateCommentPublication, deleteCommentPublication, getAllComments, getComment } from "../services/comment";

// (1) Get (obtain) comments ...
const getComments=async({params}:Request,res:Response)=>{
    try{
        const {idPublication,numPage}=params;
        const response=await getCommentsPublication(idPublication, numPage); // "numPage" nos sirve para el "paginate".
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_COMMENTS");
    }
};

// (2) Post (creation) of a comment of a publication ...
const postComment=async ({body}:Request,res:Response)=>{
    try{
        const response=await postCommentPublication(body);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    }catch(e){
        handleHttp(res,"ERROR_POST_COMMENT");
    }
};

// (3) Post (creation) of an answer to a comment ...
const postAnswer=async ({params,body}:Request,res:Response)=>{
    try{
        const {idComment}=params;
        const response=await postAnswerPublication(idComment,body);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    }catch(e){
        handleHttp(res,"ERROR_POST_ANSWER");
    }
};

// (4) Put (edition) of a comment ...
const updateComment=async ({params,body}:Request,res:Response)=>{
    try{
        const {idComment}=params;
        const response=await updateCommentPublication(idComment,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_COMMENT");
    }
};

// (5) Delete comment ...
const deleteComment=async ({params}:Request,res:Response)=>{
    try{
        const {idComment}=params;
        const response=await deleteCommentPublication(idComment);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_COMMENT");
    }
};

// (6) Get all comments
const getAllAvailableComments=async(req:Request,res:Response)=>{
    try{
        const response=await getAllComments(); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_ALL_COMMENTS");
    }
};

// (7) Get (obtain) comment ...
const getOneComment=async({params}:Request,res:Response)=>{
    try{
        const {idComment}=params;
        const response=await getComment(idComment); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_THAT_COMMENT");
    }
};

export{getComments,postComment,postAnswer,updateComment,deleteComment, getAllAvailableComments, getOneComment};
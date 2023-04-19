import { Comment } from "../interfaces/comment.interface";
import CommentModel from "../models/comment";
import paginate from 'mongoose-paginate-v2';
import PublicationModel from "../models/publication";




// (1) Get (obtain) comments ...
const getCommentsPublication = async(idPublication: string, numPage: string) => {
    const comentariosPorPagina = 2;
    const salto = (parseInt(numPage) - 1) * comentariosPorPagina;
    const responseItem = await CommentModel.find({ idPublicationComment:idPublication }).skip(salto).limit(comentariosPorPagina).exec();// Saltar los comentarios ya vistos// Limitar la cantidad de comentarios devueltos
    return responseItem;
};

// (2) Post (creation) of a comment of a publication ...
const postCommentPublication = async(item: Comment) => {
    const responseInsert = await CommentModel.create(item);
    const responseItem = await PublicationModel.findOneAndUpdate({ _id: item.idPublicationComment }, { $addToSet: { commentsPublication: responseInsert._id } },{new: true});
    return responseItem;
};

// (3) Post (creation) of an answer to a comment ...
const postAnswerPublication = async(idComment:string, item: Comment) => {
    const responseInsert = await CommentModel.create(item);
    const responseItem = await CommentModel.findOneAndUpdate({ _id: idComment }, { $addToSet: { responseComment: responseInsert._id } },{new: true});
    return responseItem;
};

// (4) Put (edition) of a comment ...
const updateCommentPublication = async(idComment:string, item: Comment) => {
    const responseItem = await CommentModel.updateOne({_id: idComment},item,{new: true});
    return responseItem;
};

// (5) Delete comment ...
const deleteCommentPublication = async(idComment: string) => {
    const responseItem = await CommentModel.findOneAndRemove({_id: idComment});
    return responseItem;
}

// (6) Get all comments
const getAllComments = async() => {
    const responseItem = await CommentModel.find({ })
    return responseItem;
};

// (7) Get (obtain) comment ...
const getComment = async(idComment: string) => {
    const responseItem = await CommentModel.findOne({_id: idComment })
    return responseItem;
};

export {getCommentsPublication, postCommentPublication, postAnswerPublication, updateCommentPublication, deleteCommentPublication, getAllComments, getComment};

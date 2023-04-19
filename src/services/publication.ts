//In charge to connect with the dB
import { ObjectId } from "mongoose";
import paginate from 'mongoose-paginate-v2';
import { Publication } from "../interfaces/publication.interface";
import PublicationModel from "../models/publication";




// (1) Get (obtain) comments ...
const getNumPublications = async(numPage: string) => {
    const publicacionesPorPagina = 3;
    const salto = (parseInt(numPage) - 1) * publicacionesPorPagina;
    const responseItem = await PublicationModel.find().skip(salto).limit(publicacionesPorPagina).exec();// Saltar los comentarios ya vistos// Limitar la cantidad de comentarios devueltos
    return responseItem;
};

// (2) Get (obtain) Publication ...
const getPublication = async(idPublication: string) => {
    const responseItem = await PublicationModel.findOne({_id: idPublication })
    return responseItem;
};

// (3) Post (creation) of a comment of a publication ...
const postOnePublication = async(item: Publication) => {
    const responseInsert = await PublicationModel.create(item);
    return responseInsert;
};

// (4) Put (edition) of a publication ...
const updateOnePublication = async(idPublication:string, item: Comment) => {
    const responseItem = await PublicationModel.updateOne({_id: idPublication},item,{new: true});
    return responseItem;
};

// (5) Delete publication ...
const deleteOnePublication = async(idPublication: string) => {
    const responseItem = await PublicationModel.findOneAndRemove({_id: idPublication});
    return responseItem;
}

// (6) Get all publications
const getAllPublications = async() => {
    const responseItem = await PublicationModel.find({})
    return responseItem;
};



export {getNumPublications, postOnePublication, getAllPublications, getPublication, updateOnePublication, deleteOnePublication};

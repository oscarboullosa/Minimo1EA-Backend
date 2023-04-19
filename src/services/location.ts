import { Location } from "../interfaces/location.interface";
import LocationModel from "../models/location";

const insertLocation = async(item: Location) => {
    const responseInsert = await LocationModel.create(item);
    return responseInsert;
};

const getLocations = async() => {
    const responseItem = await LocationModel.find({});
    return responseItem;
};

const getLocation = async(id: string) => {
    const responseItem = await LocationModel.findOne({_id: id});
    return responseItem;
};

const updateLocation = async(id: string, data: Location) => {
    const responseItem = await LocationModel.findOneAndUpdate({_id: id}, data,{new: true});
    return responseItem;
};

const deleteLocation = async(id: string) => {
    const responseItem = await LocationModel.findOneAndRemove({_id: id});
    return responseItem;
}


export {insertLocation, getLocation, getLocations, updateLocation, deleteLocation};

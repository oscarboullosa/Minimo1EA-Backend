import SubjectModel from "../models/subject";

//No hace nada esto.

const getOrders = async () => {
  const responseSubject = await SubjectModel.find({});
  return responseSubject;
};

export { getOrders };
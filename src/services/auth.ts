import { Auth } from './../interfaces/auth.interface';
import UserModel from "../models/user";
import { User } from "../interfaces/user.interface";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from '../utils/jwt.handle';

const registerNewUser = async ({ appUser, nameUser, surnameUser, passwordUser, mailUser, photoUser, birthdateUser, genderUser, ocupationUser, descriptionUser, roleUser, privacyUser }: User) => {
    const checkIs = await UserModel.findOne({ mailUser });
    if (checkIs) return "ALREADY_USER";
    const passHash = await encrypt(passwordUser); 
    const registerNewUser = await UserModel.create({ appUser, nameUser, surnameUser, passwordUser: passHash, mailUser, photoUser, birthdateUser, genderUser, ocupationUser, descriptionUser, roleUser, privacyUser, deletedUser: true});
    return registerNewUser;
  };

const loginUser = async (body: Auth) => {
    const { mailUser, passwordUser } = body;

    const checkIs = await UserModel.findOne({ mailUser: mailUser });
    if (!checkIs) return 'NOT_FOUND_USER';
    // if (!checkIs) return { error: 'NOT_FOUND_USER' };
  
    const passwordHash = checkIs.passwordUser; 
    const isCorrect = await verified(passwordUser, passwordHash);
    if (!isCorrect) return "PASSWORD_INCORRECT";
  
    const token = generateToken(checkIs.mailUser, checkIs.roleUser);
    const data = {token, user: checkIs};
    return data;
  };

export {registerNewUser, loginUser};
import { Router } from "express";
import { getSubjects } from "../controllers/order";
import { checkJwt } from "../middleware/session";
import { checkAdmin} from "../middleware/session";

/**
 * Esta ruta solo puede acceder las personas que tienen session activa!
 * que tenga un JWT valido!
 */
const router = Router();

router.get('/', checkAdmin, getSubjects);

export { router };
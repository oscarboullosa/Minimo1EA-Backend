import { Request, Response, Router } from "express";
import { getLoc,getLocs,updateLoc,postLoc,deleteLoc } from "../controllers/location";
import { logMiddleware } from "../middleware/log";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get("/all", logMiddleware, getLocs);
router.get("/:idLocation", getLoc);
router.post("/",postLoc);
router.put("/:idLocation",updateLoc);
router.delete("/:idLocation", deleteLoc);

export {router};
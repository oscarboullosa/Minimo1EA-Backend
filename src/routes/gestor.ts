import { Request, Response, Router } from "express";
import { getGestorCtrl,getGestoresCtrl,updateGestorCtrl,postGestorCtrl,deleteGestorCtrl,getUsersByGestorCtrl,addGestorToUserCtrl } from "../controllers/gestor";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get("/all", logMiddleware, getGestoresCtrl);
router.get("/:idGestor", getGestorCtrl);
router.post("/",postGestorCtrl);
router.put("/:idGestor",updateGestorCtrl);
router.delete("/:idGestor", deleteGestorCtrl);
router.get("/:idGestor",getUsersByGestorCtrl);
router.post("/addToUser",addGestorToUserCtrl);

export {router};

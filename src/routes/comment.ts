import { Request, Response, Router } from "express";
import { getComments, postComment, postAnswer, updateComment, deleteComment, getAllAvailableComments, getOneComment } from "../controllers/comment";
import { logMiddleware } from "../middleware/log";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

// http://localhost:3002/comment [GET]

// RUTAS PARA LOS COMENTARIOS ...

// (1) Get (obtain) comments from a publication...
router.get("/getComments/:idPublication/:numPage", getComments);

// (2) Post (creation) of a comment of a publication ...
router.post("/createComment",postComment);

// (3) Post (creation) of an answer to a comment ...
router.post("/createComment/:idComment",postAnswer);

// (4) Put (edition) of a comment ...
router.put("/updateComment/:idComment",updateComment);

// (5) Delete comment ...
router.delete("/deleteComment/:idComment", deleteComment);

// (6) Get all comments
router.get("/getAllComments", getAllAvailableComments);

// (7) Get (obtain) comment ...
router.get("/getComment/:idComment", getOneComment);

export {router};

import { Request, Response, Router } from "express";
import { logMiddleware } from "../middleware/log";
import { getPaginatePublications, postPublication, getAllAvailablePublications, getOnePublication, updatePublication, deletePublication } from "../controllers/publication";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

// http://localhost:5432/publication [GET]

// RUTAS PARA LOS COMENTARIOS ...

// (1) Get (obtain) paginate publications...
router.get("/getPublications/:numPage", getPaginatePublications);

// (2) Get (obtain) publication ...
router.get("/getPublication/:idPublication", getOnePublication);

// (3) Post (creation) of a publication ...
router.post("/createPublication",postPublication);

// (4) Put (edition) of a publication ...
router.put("/updatePublication/:idPublication",updatePublication);

// (5) Delete publication ...
router.delete("/deletePublication/:idPublication", deletePublication);

// (6) Get all publications
router.get("/getAllPublications", getAllAvailablePublications);


export {router};

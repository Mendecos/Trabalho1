import { Router } from "express"
import { livroCreate, livroDelete, livroIndex, livroUpdate } from "./controllers/livroController.js"



const router = Router()

router.get("/livros", livroIndex)
      .post("/livros", livroCreate)
      .put("/livros/:id", livroUpdate)
      .delete("/livros/:id", livroDelete)
     


   
export default router
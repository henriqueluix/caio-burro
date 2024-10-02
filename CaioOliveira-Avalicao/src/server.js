import express from "express";
import cors from "cors";

const PORT =  3013;
const app = express();

import "./models/palestranteModel.js"
import "./models/participanteModel.js"
import "./models/eventoModel.js"
import router from "./routes/provaRouter.js";


app.use(cors());
app.use(express.json());


app.use("/eventos", router)


app.use((request, response) => {
    response.status(404).json({message: "Rota não encontrada"});
});
app.listen(PORT, ()=>{
console.log(`Servidor do Presidente Lula http://localhost:${PORT}`)
})
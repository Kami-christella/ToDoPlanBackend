//import { createContact, getAllContact,getContactById,deleteContactById,updateContactById } from "../controllers/contactController.js";
import express from 'express';
import { createTask, getAllTask,deleteTaskById, updateTaskById,getTaskById } from "../controllers/taskController.js";

const taskRouter=express();
taskRouter.post("/createTask", createTask);
taskRouter.get("/getAllTask",getAllTask);
taskRouter.get("/getTaskById/:id",getTaskById);
taskRouter.delete("/deleteTaskById/:id",deleteTaskById);
taskRouter.put("/updateTaskById/:id",updateTaskById);


export default taskRouter;

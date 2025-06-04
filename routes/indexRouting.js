import express from "express";
import taskRouter from './task.js';

const mainRouter=express.Router();
mainRouter.use("/task", taskRouter);
export default mainRouter;




import task from "../models/task.js"

export const createTask=async(req, res)=>{

    try{
       const {taskname, duration}=req.body;
       const newTask=new task({taskname, duration});

       await newTask.save();

       res.status(201).json({success:true, message: "Task created successfully", Task: newTask});


    } catch(error){
       res.status(500).json({ success: false, message: "server Error", error: error.message});
       
    }
}

export const getAllTask =async(req,res)=>{
   try{
      const tasks= await task.find();
      res.status(200).json({success:true,tasks})

   } catch(error){
      res.status(500).json({ success: false, message: "server Error", error: error.message});
   }
}

export const getTaskById=async(req,res)=>{
   try{
      const {id}= req.params;
      const tasks=await task.findById(id);
       if(!tasks){
        return res.status(404).json({ success: false, message: "Task not found"});
       }
       res.status(200).json({ success: true, tasks});
   } catch(error){
      res.status(500).json({ success: false, message: "server Error", error: error.message});
   }
}

export const deleteTaskById=async(req,res)=>{
  try{
    const {id} =req.params;
    const tasks = await task.findByIdAndDelete(id);
    if(!tasks){
      return res.status(404).json({ success: false, message: "Task not found"});
     }
     res.status(200).json({ success: true, message: "Task deleted successfully"});
  }catch(error){
   res.status(500).json({ success: false, message: "server Error", error: error.message});
  }
}

export const updateTaskById= async(req,res)=>{
   try{
    const {id}=req.params;
    const updatedData=await task.findByIdAndUpdate(id,req.body);

    if(!updatedData){
      return res.status(404).json({ success: false, message: "Task not found"});
     }
     res.status(200).json({ success: true, message: "Task updated successfully"});
   }catch(error){
      res.status(500).json({ success: false, message: "server Error", error: error.message});
   }
}
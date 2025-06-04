import mongoose from 'mongoose';

const { Schema, model } = mongoose;


const taskSchema = new Schema(
    {
    
      taskname:{
          type: String,
          required:true
      },
      duration:{
        type: String,
        required:true
    }
   
  },
    {
        timestamps:true
    }
        
)

const Task = model("TaskTable", taskSchema);

export default Task;

import mongoose from 'mongoose';

const { Schema, model } = mongoose;


const taskSchema = new Schema(
    {
        taskid:{
          type: String,
          required:false,
          unique:true
      },
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

const Task = model("Task", taskSchema);

export default Task;

import mongoose from "mongoose"

const taskSchema= new mongoose.Schema({
    title:{
    type: String,
    required: true

    },
    description:{
    type: String,
    },

    status:{
        type: String,
        enum:["pending","inprogress","completed","review"],
        default:"pending"
    },

    priority:{
        type:String,
        enum:["Low","Medium","High"],
        default:"Medium"
    },
    dueDate:{
        type: Date,

    }

},
{
    timestamps:true
}
)
const task=mongoose.model("task",taskSchema)
export default task

const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
},{
    timeStamps: true
});


const TodoModel = mongoose.models.ToDo || mongoose.model('ToDo', Schema);

export default TodoModel;

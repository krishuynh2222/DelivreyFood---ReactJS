import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required:true},
    category: {type: String, required: true}
}) 

// Define a Mongoose model based on the schema
// If a model named 'food' already exists, use it; otherwise, create a new model named 'food'
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;
import mongoose from "mongoose";


const BookSchema = new mongoose.Schema({
    
    Name: { type: String, required: true },
    Author: { type: String, required: true },
    Page: { type: Number, required: true },
    Price: { type: Number, required: true },
    Image_url:{type: String, required: true}
}); 
    
const Book_model = mongoose.model("Books", BookSchema);

export default Book_model;
    
    
    


   
  
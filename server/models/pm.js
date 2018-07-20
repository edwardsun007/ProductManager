var mongoose = require('mongoose'); 

/* Define your schema here */
var ProductSchema = new mongoose.Schema({
    title: {type: String, required: [true, "title cannot be empty!"], minlength:[3,'title needs at least 3 characters!']},
    price: {type: Number, required: [true, "price cannot be empty!"], minlength:[1,'price needs at least one digit!']},
    image: {type: String, required: [true, "product must have a image!"]}
    }, {timestamps: true});    // if set true for timestamps, Mongoose will add created_at, updated_at fields for you

mongoose.model('Product', ProductSchema);
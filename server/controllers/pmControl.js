var mongoose = require("mongoose");

var Product = mongoose.model("Product");

module.exports = {
    // this is the second part in taskAPI , that starts with function(req,res)
    // retrieve all
    index: function(req, res) {
        console.log('Inside Control->Index.');
        Product.find({},function(err,products){
            if(err){
                console.log('Got Error from index:',err);
                res.json({message:"Error",error:err});
            }
            else{
                res.json({message:"Success",data:products});
            }
        })
    },
    
    getOne:function(req,res) {
        console.log('Inside Control->getOne..');
        console.log('req.params.id=',req.params.id);
        // FindOne !!
        Product.findOne({_id:req.params.id},function(err,product){
            if(err){
                console.log('Got Error from index:',err);
                res.json({message:"Error",error:err});
            }
            else{
                res.json({message:"Success",data:product});
            }
        })
    },

    // create new Product
    create: function(req, res) {
        console.log('pmControl->create()');
        console.log('POST DATA',req.body);
        console.log('req.body.title=',req.body.title);
        console.log('req.body.price=',req.body.price);
        console.log('req.body.image=',req.body.image);

        // add from req to database
        var newProduct = new Product({
            title:req.body.title,
            price:req.body.price,
            image:req.body.image
        });
    
        newProduct.save(function(err){
            if(err){
                console.log('We have error from control->create!',err);
                res.json({message:"Error",error:err});
            }
            else{
                res.json({message:"Success created new Product!"});
            }
        });
    },

    // update one by id
    updateOne:function(req, res) {
        console.log('POST DATA',req.body);
        console.log('req.params.id=',req.params.id);
        console.log('req.body.title=',req.body.title);
        console.log('req.body.price=',req.body.price);
        console.log('req.body.image=',req.body.image);

        Product.findOne(
            {_id:req.params.id},function(err,product){
                if(err){
                    console.log('Not found!');
                    res.json({message:"Error",error:err});
                }else{
                    console.log('Found product:',product);
                    product.title=req.body.title;
                    product.price=req.body.price;
                    product.image=req.body.image;
                    product.save(function(err,p){
                        if(err){
                            console.log('Save from update failed!');
                            res.json({message:"Error",error:err});
                        }else{
                            res.json({message:"update success",data:p});
                        }   
                    })
                }
            }

        );

        // add from req to database
        /*Product.findOneAndUpdate(
            {_id:req.params.id},
            {$set:
                {
                    title:req.body.title,
                    price:req.body.price,
                    image:req.body.image
                }
            },function(err,product){
                if(err){
                    console.log('Update product got err:',err);
                    res.json({message:"Error",error:err});
                }else{
                    res.json({message:"update success",data:product});
                }
            }
        );*/
    },

    // delete one
    deleteOne:function(req, res) {
        console.log('Delete one');
        console.log('req.params.id=',req.params.id);

        // findOneAndDelete
        Product.findOneAndDelete(
            {_id:req.params.id},function(err,product){
                if(err){
                    console.log('delete product got err:',err);
                    res.json({message:"Error",error:err});
                }else{
                    res.json({message:"delete success",data:product});
                }
            }
        );
    },

}
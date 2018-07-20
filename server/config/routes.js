const pmControl = require('../controllers/pmControl.js');


/* note (app)  means that in the file you import this, you need to require('route.js')(app) 
got it? */
module.exports = function(app){
    // get for read
    // this is the first part in those routes,  get('route', functionFromControl)
    /* form submit to here , we need to validate and show error if there is, if not save to db */

    // get one p by id
    app.get('/products/:id',pmControl.getOne);
    
    // create new one
    app.post('/products/create', pmControl.create);

    // update by id
    app.put('/product/:id',pmControl.updateOne);

    // get all
    app.get('/products',pmControl.index);

    // delete one
    app.delete('/product/:id',pmControl.deleteOne);

    // register new
    app.post('/register',pmControl.register);

    // login
    app.post('/login',pmControl.login);


}


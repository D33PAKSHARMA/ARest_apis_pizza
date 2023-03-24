import pizzaschema from '../models/pizzaschema';

const pizzas = {
    async getpizza(req,res){
        // res.send("this is pizza");
        await pizzaschema.find()
        .then(response=>{res.json(response)})
        .catch((err)=> console.log(err))
    },

    async uploadpizza(req,res){
    
        const {name , price , size , imgurl} = req.body;  //destructuring(extract) name,price,size from req body
        
        let newPizza;
        try{
            newPizza = await pizzaschema.create({  
                name,
                price,
                size,
                image:imgurl
            })
        }catch(err){
            console.log(err);
        }
        res.json(newPizza);    
    },

    async getsinglepizza(req,res){
        let doc;
        try {
            doc = await pizzaschema.findOne({_id:req.params.id});
        } catch (error) {
            console.log(error);
        }
        res.send(doc);
    },

    async getPizzas(req,res){
        let doc;
        try {
            doc = await pizzaschema.find({
                _id: { $in: req.body.ids },
            });
        } catch (error) {
            console.log(error);
        }
        res.json(doc);
    }
    
}

export default pizzas;
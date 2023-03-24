import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import pizzaRoutes from './routes';
import cors from 'cors';

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

mongoose.connect(process.env.URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DB Connected");
}).catch((e)=>{
    console.log(e);
})


app.use("/api" , pizzaRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Listning on port ${PORT}`);
})
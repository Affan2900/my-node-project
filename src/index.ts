//Importing express and Response and Request types
import express,{ Request, Response} from 'express';

//Creating an express app
const app = express();

//Creating a get route
app.get('/', (req: Request, res: Response) => {
  res.send("Hello, World!");
})

//Starting the server
app.listen(3000,()=>{
  console.log("Server is running");
})
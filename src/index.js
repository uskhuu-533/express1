import express from "express"
import { userRouter} from "./routers/user-router.js";
import { productRouter } from "./routers/product-router.js";
const app = express();
const port = 3000;



//path => GET, POST, PUT, DELETE
app.use(express.json());
app.use(`/users`, userRouter);
app.use(`/product`, productRouter)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
// {
//     "userName" : "12",
//     "password" : "12",
//     "firstName" : "a",
//     "lastName" : "b"
//     }

// {
//     "firstName" : "a",
//     "updatedName" : "c"
//     }

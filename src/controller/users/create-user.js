import { users } from "./get-user.js";
import { v4 as uuidv4 } from 'uuid';
import fs from "fs/promises"
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
export const createUser = (req, res) =>{
    const { firstName, lastName, userName, password, age } = req.body;
    const id = uuidv4();
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (users.map((user) => user.userName).includes(userName)) {
      res.send(`${userName} used, try another username`);
    } else {
      if (regex.test(password) == true) {
       users.push({ id, firstName, lastName, userName, password, age });
        fs.writeFile("src/db/users.json", JSON.stringify(users))
        res.send("post");
      } else {
        res.send("password weak");
      }
    }
}

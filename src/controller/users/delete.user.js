import { users } from "./get-user.js";
import fs from 'fs/promises'

export const deleteUsers = (req, res) => {
    const { userName } = req.body;
    const index = users.map((user) => user.userName).indexOf(userName);
    users.splice(index, index + 1);
    fs.writeFile("src/db/users.json", JSON.stringify(users))
    res.send("Deleted");
}
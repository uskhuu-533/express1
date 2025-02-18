import fs from "fs/promises"

const data = await fs.readFile("src/db/users.json")
export const users = JSON.parse(data) 
export const getUser = (req, res) => {
    res.send(users);
}
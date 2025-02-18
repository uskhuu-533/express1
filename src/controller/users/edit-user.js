import { users } from "./get-user.js";
import fs from 'fs/promises'
export const editUser = async (req, res) => {
    try{
    const { userName, updatedName } = req.body;
    if (!userName || !updatedName) {
        return res.status(400).send("Both userName and updatedName are required.");
      }
      const updatedUsers = users.map((user) =>
        user.userName === userName ? { ...user, userName: updatedName } : user
      );
      const userUpdated = updatedUsers.some(
        (user) => user.userName === updatedName
      );
      if (!userUpdated) {
        return res.status(404).send("User not found.");
      }
      if (users.map((user) => user.userName).includes(userName)){
        return res.status(404).send("username is already used ")
      }
    await fs.writeFile("src/db/users.json", JSON.stringify(updatedUsers))
    res.send("user name changed")
}catch(err){
    res.send(err)
}
}
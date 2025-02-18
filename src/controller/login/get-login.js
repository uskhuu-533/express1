import { users } from "../users/get-user.js";

export const checkPassword = (req, res) => {
    const { userName, password } = req.body;
    const user = users.find(
      (user) => user.userName == userName && user.password == password
    );
    const prolife = {message: "succes", prolife:{ firstName: user.firstName, lastName: user.lastName, userName:user.userName}}
    if (user) {
      res.status(200).send(prolife);
    } else {
      res.status(500).send("wrong password or username");
    }
}
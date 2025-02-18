import { products } from "./get-product.js";
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises'
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
const categoryList = await fs.readFile("src/db/category.json")
export const postProduct = (req, res) => {
    const id = uuidv4()
    let count = 1
    const {name, category, price} = req.body
    const category1 = category.split(",")
    const categories = category1.map((title, index)=>{
        return {id: index, title: title}
    })
    products.push({id, name, category:categories , price, count})
    res.send("posted")
}
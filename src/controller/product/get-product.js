export let products = []
export const getProduct = (req, res) => {
    res.send(products);
}
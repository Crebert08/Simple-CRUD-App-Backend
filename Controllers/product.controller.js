const Product = require('../Models/Product.model.js')



// Read All Products
const getProducts = async(req, res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: message.error})
    }
}

// Read One Product
const getProduct = async(req, res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: message.error});
    }
}

// Create A Product
const addProduct = async(req, res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.send(500).json({message: message.error})
    }
}


// Update A Product
const updateProduct = async(req, res)=>{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    
    if (!product){
        return res.status(404).json({message: "Product Not Found !"})
    }

    const UpdatedProduct = await Product.findById(id);

    res.status(200).json(UpdatedProduct);
}


// Delete A Product
const deleteProduct = async(req, res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product){
            return res.status(404).json({message: "Product Not Found !"})
        }
    

        res.status(200).json({message: "Product deleted successfully !"});
    } catch (error) {
        res.status(500).json({message: "Product Not Found !"});
    }
}

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}
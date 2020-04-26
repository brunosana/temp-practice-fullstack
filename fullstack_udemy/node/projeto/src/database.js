const sequence = {
    _id: 1,
    get id() {return this._id++;}
}

const produtos = {

}

function saveProduct(product){
    if(!product.id) product.id = sequence.id;
    produtos[product.id] = product;
    return product;
}

function getProduct(id){
    return produtos[id] || {};
}

function getProducts(){
    return Object.values(produtos);
}

function deleteProduct(id){
    const product = produtos[id];
    delete produtos[id];
    return product;
}

module.exports = {saveProduct, getProduct, getProducts, deleteProduct}
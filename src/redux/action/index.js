// For add item to cart

export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

// For delete item to cart

export const deleteCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}
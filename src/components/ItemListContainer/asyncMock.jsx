const products = [
    {
        id: '1',
        name: 'Wilson',
        price: 340000,
        category: 'Raqueta',
        img:'https://www.hectortenis.com/wp-content/uploads/2023/05/blade.jpeg',
        stock: 30,
        description: 'verde tornasolado'
    },
    { id: '2', name: 'Head', price: 380000, category: 'raqueta', img: 'https://http2.mlstatic.com/D_NQ_NP_618257-MLA70295974007_072023-O.webp',
    stock: 25,
        description: 'Naranja con negro'},
    { id: '3', name: 'Babolat', price: 420000, category: 'raqueta', img: 'data:image/jpeg;base64,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',
    stock: 15,
    description: 'amarilla con negro'}
]


export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}
import Cuchara from './assets/imgs/planocuchara.jpg'
import VasoConico from './assets/imgs/R20oConico20onz.jpg'
import BowlTapa from './assets/imgs/bowlTapa.jpg'
import Portacomidas from './assets/imgs/Portacomidas.jpg'
import VasoPapel from './assets/imgs/vasoPapel.png'

const products = [
    {
        id: '1',
        name: 'Cucharas PLA',
        price: '5,25',
        category: 'transparente',
        img: Cuchara,
        stock: '50',
        description: 'Paquete de 50 unidades.'
    },
    {
        id: '2',
        name: 'Vasos cónicos transparentes',
        price: '11.45',
        category: 'transparente',
        img: VasoConico,
        stock: '70',
        description: 'Paquete de 50 unidades.'
    },
    {
        id: '3',
        name: 'Bowl Caña De Azucar con tapa',
        price: '21.15',
        category: 'blanca',
        img: BowlTapa,
        stock: '45',
        description: 'Paquete de 50 unidades.'
    },
    {
        id: '4',
        name: 'Portacomida',
        price: '31',
        category: 'blanca',
        img: Portacomidas,
        stock: '30',
        description: '3 divisiones. Paquete de 100 unidades.'
    },
    {
        id: '5',
        name: 'Vaso 12 onzas',
        price: '3.75',
        category: 'papel',
        img: VasoPapel,
        stock: '35',
        description: 'Paquete de 50 unidades.'
    }
]

export const getProducts = () => {
    console.log(1)
    return new Promise((resolve) =>{
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

export const getProductsByCategory = (productCategory) => {
    console.log(2)
    console.log(products)
    console.log(products.filter(prod => prod.category === productCategory))
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
}
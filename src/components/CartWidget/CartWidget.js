import shopping_cart from './assets/shopping_cart.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='ContainerCartWidget'>
            <img src={shopping_cart} alt="shopping cart"/>
            0
        </div>
    )
}

export default CartWidget
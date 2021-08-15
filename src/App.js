import React, {useState, useEffect, Suspense, lazy } from 'react'
import { commerce } from './lib/commerce';

import { Products, Navbar, Cart, Checkout } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Program from './pages/program';
import Hero from './pages/hero';



const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('')

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());

    }

    const handleAddToCart = async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId, quantity);

        setCart(cart);
    }


    const handleUpdateCartQty = async (productId, quantity) => {
        const {cart} = await commerce.cart.update(productId, { quantity });

        setCart( cart )
    }

    const handleRemoveFromCart = async (productId) => {
        const {cart} = await commerce.cart.remove(productId);

        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const {cart} = await commerce.cart.empty();

        setCart(cart);
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    }

    useEffect(() =>{
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);
    
    const Navbar = lazy(() => import('./components/Navbar/Navbar'));
    const Products = lazy(() => import('./components/Products/Products'));
    const Product = lazy(() => import('./components/Products/Product/Product'));
    const CartItem = lazy(() => import('./components/Cart/CartItem/CartItem'));

    const Cart = lazy(() => import('./components/Cart/Cart'));
    const Checkout = lazy(() => import('./components/CheckoutForm/AddressForm'));


    return (
        <Router>
            
        <div>
        <Suspense fallback={<div>Loading</div>}>
            
            <Navbar totalItems={cart.total_items} />
        </Suspense>

            <Switch>
                <Route exact path='/'>

                    <Hero />
        <Suspense fallback={<div>Loading</div>}>

                    <Products products={products} onAddToCart={handleAddToCart} />        
                    
            </Suspense>
            <Program />
                </Route>
                <Suspense fallback={<div>Loading</div>}>

                <Route exact path='/cart'>
                    
                    <Cart 
                        cart={cart}
                        handleUpdateCartQty={handleUpdateCartQty}
                        handleRemoveFromCart={handleRemoveFromCart}
                        handleEmptyCart={handleEmptyCart}
                     />
                </Route>
                </Suspense>

                <Suspense fallback={<div>Loading</div>}>

                <Route exact path="/checkout">
                    <Checkout 
                        cart={cart} 
                        order={order}
                        onCaptureCheckout={handleCaptureCheckout}
                        error={errorMessage}
                    />
                </Route>
            </Suspense>

            </Switch>
            
        </div>
        </Router>
        

    )
}

export default App

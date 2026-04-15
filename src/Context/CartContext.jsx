import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // ✅ ADD TO CART
    const addToCart = (product) => {
        const priceString = String(product.price).replace(/Rs\.?\s*/, '').replace(/,/g, '');
        const price = parseFloat(priceString) || 0;

        setCartItems((prev) => {
            const existingItem = prev.find((item) => item.id === product.id);

            if (existingItem) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [
                ...prev,
                {
                    id: product.id,
                    title: product.title,
                    mainImg: product.mainImg,
                    price,
                    quantity: 1,
                }
            ];
        });
    };

    // ✅ REMOVE FROM CART
    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    // ✅ UPDATE QUANTITY
    const updateQuantity = (id, qty) => {
        if (qty <= 0) {
            setCartItems((prev) => prev.filter((item) => item.id !== id));
        } else {
            setCartItems((prev) =>
                prev.map((item) =>
                    item.id === id ? { ...item, quantity: qty } : item
                )
            );
        }
    };

    // ✅ TOTAL ITEMS
    const getTotalItems = () =>
        cartItems.reduce((sum, item) => sum + item.quantity, 0);

    // ✅ TOTAL PRICE
    const getTotalPrice = () =>
        cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                getTotalItems,
                getTotalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
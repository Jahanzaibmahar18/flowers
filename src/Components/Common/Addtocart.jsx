import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const Addtocart = () => {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        getTotalPrice
    } = useCart();

    // ✅ EMPTY CART UI
    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
                    <p className="text-gray-500 mb-6">
                        Start adding products to see them here
                    </p>

                    <Link
                        to="/products"
                        className="bg-pink-500 text-white px-6 py-3 rounded-lg"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-10">

            <div className="max-w-6xl mx-auto">

                <h1 className="text-3xl font-bold mb-8">
                    Shopping Cart
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* CART TABLE */}
                    <div className="lg:col-span-2">

                        <div className="bg-white shadow rounded-lg overflow-x-auto">

                            <table className="w-full">

                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="text-left p-4">Product</th>
                                        <th className="text-left p-4">Price</th>
                                        <th className="text-left p-4">Qty</th>
                                        <th className="text-left p-4">Total</th>
                                        <th className="text-left p-4">Action</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {cartItems.map((item) => (
                                        <tr key={item.id} className="border-t">

                                            {/* PRODUCT */}
                                            <td className="p-4 flex items-center gap-3">
                                                <img
                                                    src={item.mainImg}
                                                    alt={item.title}
                                                    className="w-14 h-14 rounded object-cover"
                                                />
                                                <span className="font-medium">
                                                    {item.title}
                                                </span>
                                            </td>

                                            {/* PRICE */}
                                            <td className="p-4 text-pink-600 font-semibold">
                                                Rs. {item.price.toLocaleString()}
                                            </td>

                                            {/* QTY */}
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">

                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(item.id, item.quantity - 1)
                                                        }
                                                        className="p-1 bg-gray-200 rounded"
                                                    >
                                                        <Minus size={16} />
                                                    </button>

                                                    <span className="px-2">
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(item.id, item.quantity + 1)
                                                        }
                                                        className="p-1 bg-gray-200 rounded"
                                                    >
                                                        <Plus size={16} />
                                                    </button>

                                                </div>
                                            </td>

                                            {/* TOTAL */}
                                            <td className="p-4 font-bold">
                                                Rs. {(item.price * item.quantity).toLocaleString()}
                                            </td>

                                            {/* REMOVE */}
                                            <td className="p-4">
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-500"
                                                >
                                                    <Trash2 />
                                                </button>
                                            </td>

                                        </tr>
                                    ))}

                                </tbody>

                            </table>

                        </div>
                    </div>

                    {/* ORDER SUMMARY */}
                    <div className="bg-white p-6 rounded-lg shadow h-fit">

                        <h2 className="text-xl font-bold mb-6">
                            Order Summary
                        </h2>

                        <div className="space-y-3 border-b pb-4">

                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>Rs. {getTotalPrice().toLocaleString()}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>Rs. 0</span>
                            </div>

                        </div>

                        <div className="flex justify-between font-bold text-lg mt-4">
                            <span>Total</span>
                            <span className="text-pink-600">
                                Rs. {getTotalPrice().toLocaleString()}
                            </span>
                        </div>

                        <button className="w-full mt-6 bg-pink-500 text-white py-3 rounded-lg">
                            Proceed to Checkout
                        </button>

                        <Link
                            to="/products"
                            className="block text-center mt-3 bg-gray-100 py-3 rounded-lg"
                        >
                            Continue Shopping
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Addtocart;
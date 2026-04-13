import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const Addtocart = () => {
    const { cartItems, removeFromCart, updateQuantity, getSubtotal } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const subtotal = getSubtotal(item.price) * item.quantity;
            return total + subtotal;
        }, 0);
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">ADD TO CART</h1>
                    <p className="text-gray-600 mb-6">Your cart is empty</p>
                    <Link
                        to="/products"
                        className="inline-block bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition font-medium"
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
                <h1 className="text-3xl font-bold text-gray-800 mb-10">ADD TO CART</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-50 border-b">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Product</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Price</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Quantity</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Subtotal</th>
                                            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {cartItems.map((item) => {
                                            const subtotal = getSubtotal(item.price) * item.quantity;
                                            return (
                                                <tr key={item.id} className="hover:bg-gray-50 transition">
                                                    <td className="px-6 py-4">
                                                        <div className="flex gap-4 items-center">
                                                            <img
                                                                src={item.mainImg}
                                                                alt={item.title}
                                                                className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                                                            />
                                                            <div>
                                                                <p className="font-medium text-gray-800">{item.title}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 text-pink-600 font-bold">{item.price}</td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center gap-3 w-32">
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                                className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
                                                            >
                                                                <Minus size={16} />
                                                            </button>
                                                            <span className="text-center font-semibold w-8">{item.quantity}</span>
                                                            <button
                                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                                className="p-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
                                                            >
                                                                <Plus size={16} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 font-bold text-gray-800">Rs. {subtotal.toLocaleString()}</td>
                                                    <td className="px-6 py-4">
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition"
                                                        >
                                                            <Trash2 size={18} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow p-6 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6 pb-6 border-b">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-semibold text-gray-800">Rs. {calculateTotal().toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-semibold text-gray-800">Rs. 0</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Tax</span>
                                    <span className="font-semibold text-gray-800">Rs. 0</span>
                                </div>
                            </div>

                            <div className="flex justify-between mb-6 text-lg font-bold">
                                <span>Total</span>
                                <span className="text-pink-600">Rs. {calculateTotal().toLocaleString()}</span>
                            </div>

                            <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition mb-3">
                                Proceed to Checkout
                            </button>

                            <Link
                                to="/products"
                                className="block text-center bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                            >
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Addtocart;
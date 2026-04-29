import React from 'react';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const Addtocart = () => {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        getTotalPrice
    } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
                <div className="text-center">
                    <ShoppingBag size={64} className="mx-auto mb-4 text-gray-300" />
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Your Cart is Empty</h1>
                    <p className="text-gray-500 mb-6 text-sm sm:text-base">
                        Start adding products to see them here
                    </p>

                    <Link
                        to="/products"
                        className="inline-block bg-pink-500 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-pink-600 transition-colors"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6 lg:p-10">

            <div className="max-w-7xl mx-auto">

                <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">
                    Shopping Cart
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

                    {/* Cart Items */}
                    <div className="lg:col-span-2">

                        <div className="bg-white shadow rounded-lg overflow-x-auto">

                            <table className="w-full min-w-[500px]">

                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="text-left p-3 sm:p-4 text-sm font-semibold">Product</th>
                                        <th className="text-left p-3 sm:p-4 text-sm font-semibold">Price</th>
                                        <th className="text-left p-3 sm:p-4 text-sm font-semibold">Qty</th>
                                        <th className="text-left p-3 sm:p-4 text-sm font-semibold">Total</th>
                                        <th className="text-left p-3 sm:p-4 text-sm font-semibold">Action</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {cartItems.map((item) => (
                                        <tr key={item.id} className="border-t">

                                            {/* PRODUCT */}
                                            <td className="p-3 sm:p-4">
                                                <div className="flex items-center gap-2 sm:gap-3">
                                                    <img
                                                        src={item.mainImg}
                                                        alt={item.title}
                                                        className="w-12 h-12 sm:w-14 sm:h-14 rounded object-cover"
                                                    />
                                                    <span className="font-medium text-sm sm:text-base truncate max-w-[120px] sm:max-w-none">
                                                        {item.title}
                                                    </span>
                                                </div>
                                            </td>

                                            <td className="p-3 sm:p-4 text-pink-600 font-semibold text-sm sm:text-base">
                                                Rs. {item.price.toLocaleString()}
                                            </td>

                                            {/* QTY */}
                                            <td className="p-3 sm:p-4">
                                                <div className="flex items-center gap-1 sm:gap-2">

                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(item.id, item.quantity - 1)
                                                        }
                                                        className="p-1.5 sm:p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                                                    >
                                                        <Minus size={14} sm:size={16} />
                                                    </button>

                                                    <span className="px-2 text-sm sm:text-base min-w-[24px] text-center">
                                                        {item.quantity}
                                                    </span>

                                                    <button
                                                        onClick={() =>
                                                            updateQuantity(item.id, item.quantity + 1)
                                                        }
                                                        className="p-1.5 sm:p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
                                                    >
                                                        <Plus size={14} sm:size={16} />
                                                    </button>

                                                </div>
                                            </td>

                                            <td className="p-3 sm:p-4 font-bold text-sm sm:text-base">
                                                Rs. {(item.price * item.quantity).toLocaleString()}
                                            </td>

                                            <td className="p-3 sm:p-4">
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-red-500 hover:bg-red-50 p-2 rounded transition-colors"
                                                >
                                                    <Trash2 size={16} sm:size={18} />
                                                </button>
                                            </td>

                                        </tr>
                                    ))}

                                </tbody>

                            </table>

                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow h-fit sticky top-24">

                        <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
                            Order Summary
                        </h2>

                        <div className="space-y-3 border-b pb-4">

                            <div className="flex justify-between text-sm sm:text-base">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="font-medium">Rs. {getTotalPrice().toLocaleString()}</span>
                            </div>

                            <div className="flex justify-between text-sm sm:text-base">
                                <span className="text-gray-600">Shipping</span>
                                <span className="text-green-600 font-medium">Free</span>
                            </div>

                            <div className="flex justify-between text-sm sm:text-base">
                                <span className="text-gray-600">Tax</span>
                                <span className="font-medium">Rs. 0</span>
                            </div>

                        </div>

                        <div className="flex justify-between font-bold text-lg mt-4">
                            <span>Total</span>
                            <span className="text-pink-600">
                                Rs. {getTotalPrice().toLocaleString()}
                            </span>
                        </div>

                        <button className="w-full mt-5 sm:mt-6 bg-pink-500 text-white py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors text-sm sm:text-base">
                            Proceed to Checkout
                        </button>

                        <Link
                            to="/products"
                            className="block text-center mt-3 bg-gray-100 py-3 rounded-lg hover:bg-gray-200 transition-colors text-sm sm:text-base"
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
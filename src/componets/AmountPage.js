"use client";

import { Button } from 'antd';
import React, { useState } from 'react';

const AmountPage = () => {
    const [quantity, setQuantity] = useState(1);
    const price = 19.99;
    const taxes = 1.00;
    const subtotal = price * quantity;
    const total = subtotal + taxes;

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="bg-gray-100 rounded-lg shadow-lg p-6 w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
                <div className="flex justify-between mb-4">
                    <div className="flex items-center">
                        <img
                            src="https://via.placeholder.com/80"
                            alt="Product Image"
                            className="mr-4"
                        />
                        <div>
                            <h2 className="font-bold">Product Name</h2>
                            <p className="text-gray-700">Product Description</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button className="text-red-500 hover:text-red-700">
                            <i className="fas fa-trash"></i>
                        </button>
                        <div className="mx-4">
                            <input
                                type="number"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="w-16 text-center"
                                min="1"
                            />
                        </div>
                        <span className="font-bold">${price.toFixed(2)}</span>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between items-center">
                    <span className="font-bold">Subtotal:</span>
                    <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>Taxes:</span>
                    <span>${taxes.toFixed(2)}</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between items-center">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-center mt-6">

                    <Button type="primary">Checkout Checkout</Button>
                </div>
            </div>
        </div>
    );
};

export default AmountPage;

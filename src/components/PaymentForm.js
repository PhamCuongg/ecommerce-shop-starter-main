import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import LogoPayment from '../img/anhpng.png'

const PaymentForm = () => {
  const { clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { total } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform checkout process here
    const message = `Name: ${name}\nEmail: ${email}\nAddress: ${address}\nYou have to pay ${total} $ upon receiving the item.`;
    alert(message);
    clearCart();
    window.location.href = '/';
  };

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen" style={{ backgroundImage: `url(${LogoPayment})`}}>
      <div className="container mx-auto">
        <form>
          <div className="flex flex-col mb-6">
            <label htmlFor="name" className="font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border-2 border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="email" className="font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border-2 border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col mb-6">
            <label htmlFor="address" className="font-medium mb-2">
              Address
            </label>
            <textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="px-4 py-2 border-2 border-gray-300 rounded-lg"
              required
            />
          </div>
          <div onClick={handleSubmit} className="mb-6">
            <button
              type="submit"
              className="bg-primary py-4 px-8 text-white"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PaymentForm;

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { cartData } from '../cartData';   // ✅ correct import
import { useDispatch } from 'react-redux';
import { ADD } from './redux/action/action';


const Carts = () => {
  const [data ,setData] = useState(cartData);

  const dispatch =useDispatch()
  const send = (item) => {
  dispatch(ADD(item));
};


  return (
    <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col"
        >
          {/* Image */}
          <div className="relative w-full h-56 overflow-hidden">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Rating badge */}
            <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-sm text-sm font-semibold text-gray-800 px-2 py-1 rounded-lg shadow">
              ⭐ {item.rating}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-between p-5">
            <div>
              <h2 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                {item.name}
              </h2>
              <p className="text-sm text-gray-500 mt-1 flex gap-2 flex-wrap">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </p>
              <p className="text-xl font-semibold text-orange-600 mt-2">
                ₹{item.price}
              </p>
            </div>

            {/* Color Options */}
            <div className="flex gap-2 mt-3">
              {item.colors.map((clr, i) => (
                <span
                  key={i}
                  className="w-6 h-6 rounded-full border"
                  style={{ backgroundColor: clr }}
                ></span>
              ))}
            </div>

            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-xl mt-5 w-full font-medium hover:bg-orange-600 hover:scale-105 transition-all duration-300"
              onClick={() =>  send(item)}
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Carts;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { DLT, INCREMENT, DECREMENT } from "./redux/action/action";

const CartItem = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let comparedata = getData.filter((item) => item.id == id);
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id, getData]);

  // ✅ Functions
  const dlt = (id) => {
    dispatch(DLT(id));
    navigate("/");
  };

  const increment = (item) => {
    dispatch(INCREMENT(item));
  };

  const decrement = (item) => {
    dispatch(DECREMENT(item));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h2 className="text-2xl font-bold text-rose-600 mb-6">
        Cart Item Details
      </h2>

      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <div className="flex gap-4 items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-28 w-28 object-cover rounded-lg shadow-md"
                />

                <div className="flex-1">
                  <ul className="space-y-1 text-slate-700">
                    <li>
                      <strong>ID:</strong> {item.id}
                    </li>
                    <li>
                      <strong>Name:</strong> {item.name}
                    </li>
                    <li>
                      <strong>Price:</strong> ₹{item.price}
                    </li>
                  </ul>

                  {/* ✅ Quantity Controls */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => decrement(item)}
                    >
                      -
                    </button>
                    <span className="font-semibold">{item.qnty || 1}</span>
                    <button
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => increment(item)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="text-red-500 hover:text-red-700 text-xl"
                  onClick={() => dlt(item.id)}
                >
                  🗑
                </button>
              </div>

              <div className="border-t mt-4 pt-3 flex justify-between font-semibold text-slate-700">
                <span>Total</span>
                <span className="text-rose-600">
                  ₹{(item.price * (item.qnty || 1)).toFixed(2)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartItem;

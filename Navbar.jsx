import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import Table from "@mui/material/Table";

import crr from "../assets/cart(1).gif";
import { useSelector, useDispatch } from "react-redux";   // ✅ yaha se dono import
import { DLT } from "./redux/action/action";
import banglesLogo from "../assets/logoo-removebg-preview (1).png";  // ✅ ye sahi hai


const Navbar = () => {
  // ✅ Redux state access
  const getData = useSelector((state) => state.cartreducer.carts);

  // ✅ Dispatch use karo (useSelector nahi!)
  const dispatch = useDispatch();

  // Menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // ✅ Delete function
  const dlt = (id) => {
    dispatch(DLT(id));
  };

  return (
    <nav className="bg-rose-600 text-white shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
     <NavLink
  to="/"
  className="flex items-center text-2xl font-bold tracking-wide gap-2"
>
  <img
    src={banglesLogo}   // ✅ correct variable name
    alt="Bangles Icon"
    className="w- h-11 object-contain"
  />
  Suhag Kangan Store
</NavLink>

          {/* Menu */}
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-200"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Carts "
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-200"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/carts.js"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-200"
              }
            >
              Cart
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-200"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-200"
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Cart Badge */}
          <Badge
            badgeContent={getData?.length || 0}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
          <button className="relative bg-yellow-400 text-white p-3 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-110 transition-all duration-200">
  🛒
  {/* Badge (item count) */}

</button>

          </Badge>
        </div>
      </div>

      {/* Dropdown Menu */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
          },
        }}
      >
        {getData && getData.length > 0 ? (
          <div className="card-d" style={{ width: "24rem", padding: 10 }}>
            <div className="overflow-x-auto max-w-[22rem]">
              <Table className="min-w-[600px] border-collapse">
                <thead>
                  <tr className="bg-rose-100 text-rose-700 text-left text-xs font-semibold">
                    <th className="px-2 py-2">Photo</th>
                    <th className="px-2 py-2">Name</th>
                    <th className="px-2 py-2">Price</th>
                    <th className="px-2 py-2">Qty</th>
                    <th className="px-2 py-2">Total</th>
                    <th className="px-2 py-2">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {getData.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-rose-50 transition duration-200 border-b text-sm"
                    >
                      {/* Photo */}
                      <td className="px-2 py-2">
                        <NavLink to={`/cart/${item.id}`} onClick={handleClose}>
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-md shadow"
                          />
                        </NavLink>
                      </td>

                      {/* Name */}
                      <td className="px-2 py-2 font-medium text-gray-800 truncate max-w-[90px]">
                        {item.name}
                      </td>

                      {/* Price */}
                      <td className="px-2 py-2 text-gray-700">₹{item.price}</td>

                      {/* Quantity (static for now) */}
                      <td className="px-2 py-2">
                        <div className="flex items-center gap-2">
                          <button className="w-6 h-6 flex items-center justify-center rounded bg-gray-200 text-gray-700 hover:bg-gray-300">
                            -
                          </button>
                          <span className="px-3 py-1 bg-white border rounded shadow text-gray-800 text-sm">
                            1
                          </span>
                          <button className="w-6 h-6 flex items-center justify-center rounded bg-gray-200 text-gray-700 hover:bg-gray-300">
                            +
                          </button>
                        </div>
                      </td>

                      {/* Total Price */}
                      <td className="px-2 py-2 font-semibold text-rose-600">
                        ₹{(item.price * (item.qnty || 1)).toFixed(2)}
                      </td>

                      {/* Delete */}
                      <td className="px-2 py-2">
                        <button
                          className="text-rose-600 hover:text-rose-800"
                          onClick={() => dlt(item.id)}
                        >
                          🗑
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              {/* 🔥 Total Price */}
              <div className="flex justify-between items-center mt-4 p-3 bg-rose-50 rounded-lg shadow">
                <h3 className="font-semibold text-gray-700">Total Price:</h3>
                <p className="text-lg font-bold text-rose-600">
                  ₹
                  {getData.reduce(
                    (total, item) => total + item.price * (item.qnty || 1),
                    0
                  )}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-6 w-[19rem] mx-auto mt-1">
            <i
              className="fas fa-close absolute top-3 right-3 text-gray-500 hover:text-rose-600 text-2xl cursor-pointer"
              onClick={handleClose}
            ></i>
            <p className="text-lg font-semibold text-gray-700 mb-4">
              YOUR CART IS EMPTY
            </p>
            <img
              src={crr}
              alt="Empty Cart"
              className="w-20 h-20 object-contain opacity-80"
            />
          </div>
        )}
      </Menu>
    </nav>
  );
};

export default Navbar;

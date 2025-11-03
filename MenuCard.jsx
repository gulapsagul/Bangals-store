import React from 'react'

const MenuCard = () => {
  return (
   
<>


    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      {/* Cart Sidebar */}
      <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 className="text-lg font-semibold text-rose-600">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-rose-600 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Example Item */}
          <div className="flex items-center gap-3 border-b pb-3">
            <img
              src="https://via.placeholder.com/60"
              alt="Bangle"
              className="h-16 w-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-slate-700">
                Golden Bangle
              </h3>
              <p className="text-xs text-slate-500">Qty: 1</p>
              <p className="text-sm font-semibold text-rose-600">₹499</p>
            </div>
            <button className="text-red-500 hover:text-red-700">🗑</button>
          </div>

          <div className="flex items-center gap-3 border-b pb-3">
            <img
              src="https://via.placeholder.com/60"
              alt="Bangle"
              className="h-16 w-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium text-slate-700">
                Silver Bangle
              </h3>
              <p className="text-xs text-slate-500">Qty: 2</p>
              <p className="text-sm font-semibold text-rose-600">₹899</p>
            </div>
            <button className="text-red-500 hover:text-red-700">🗑</button>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4">
          <div className="flex justify-between font-semibold text-slate-700">
            <span>Total</span>
            <span className="text-rose-600">₹1398</span>
          </div>
          <button className="mt-4 w-full rounded-lg bg-rose-600 py-2 text-white font-semibold hover:bg-rose-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  



   
    </>
  )
}

export default MenuCard
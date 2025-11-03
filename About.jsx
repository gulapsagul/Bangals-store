import React from "react";
import banglesLogo from "../../assets/logoo-removebg-preview (1).png"; // apna logo ka path use karein

const About = () => {
  return (
    <div className="min-h-screen bg-rose-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={banglesLogo}
            alt="Suhag Kangan Store"
            className="w-28 h-28 object-contain rounded-full border-4 border-rose-300 shadow-md"
          />
          <div>
            <h1 className="text-3xl font-bold text-rose-600">
              Suhag Kangan Store
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Tradition • Elegance • Beauty
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
          <p>
            <span className="font-semibold text-rose-600">Suhag Kangan Store</span> 
            ek trusted naam hai jo har tarah ke traditional aur modern bangles aur jewelry 
            ke liye jaana jata hai. Yahan aapko milegi har occasion ke liye perfect collection – 
            chahe wo shaadi ho, festival ho ya daily wear.
          </p>

          <p>
            Hamara mission hai har ek customer tak 
            <span className="font-semibold"> high-quality, stylish aur affordable </span> 
            bangles pohchana, jisse unki beauty aur bhi nikhar sake. 
          </p>

          <p>
            Har ek product hamare expert artisans ke dwara carefully design kiya jata hai 
            jisme tradition aur modern style ka perfect blend hota hai. 
            Yahan par aapko milega:
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside space-y-2">
            <li>💍 Shaadi aur festive collection</li>
            <li>🌸 Traditional aur modern designs</li>
            <li>⭐ Affordable prices with premium quality</li>
            <li>🚚 Quick delivery & easy returns</li>
          </ul>
        </div>

        {/* Quote / Highlight */}
        <div className="mt-8 bg-rose-100 border-l-4 border-rose-500 p-4 rounded-lg shadow">
          <p className="italic text-rose-700 text-lg">
            "Har kangan ek kahani kehta hai – apni kahani Suhag Kangan Store ke sath likhiye."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

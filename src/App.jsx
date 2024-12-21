import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      {/* 1. Warm & Cozy */}
      <div className="p-4 bg-[#F9F5EB]">
        <h1 className="text-5xl font-bold text-[#FF6F61]">Warm & Cozy</h1>
        <p className="text-[#F8E9A1]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
        <p className="text-[#6A0572]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
        <p className="text-[#3A3A3A]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
      </div>

      {/* 2. Modern & Minimalist */}
      <div className="p-4 bg-[#FFFFFF]">
        <h1 className="text-5xl font-bold text-[#4CAF50]">Modern & Minimalist</h1>
        <p className="text-[#FFC107]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
        <p className="text-[#2196F3]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
        <p className="text-[#212121]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
      </div>

      {/* 3. Bold & Elegant */}
      <div className="p-4 bg-[#F5F5F5]">
        <h1 className="text-5xl font-bold text-[#D72638]">Bold & Elegant</h1>
        <p className="text-[#3F88C5]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
        <p className="text-[#F49D37]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
        <p className="text-[#2E2E2E]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
      </div>

      {/* 4. Earthy & Organic */}
      <div className="p-4 bg-[#EDE6DB]">
        <h1 className="text-5xl font-bold text-[#2F5233]">Earthy & Organic</h1>
        <p className="text-[#A57248]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
        <p className="text-[#FFB400]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
        <p className="text-[#4A4A4A]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
      </div>

      {/* 5. Playful & Vibrant */}
      <div className="p-4 bg-[#FFFFFF]">
        <h1 className="text-5xl font-bold text-[#FF5722]">Playful & Vibrant</h1>
        <p className="text-[#8BC34A]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
        <p className="text-[#00BCD4]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
        <p className="text-[#333333]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
      </div>

      {/* 6. Luxurious & Premium */}
      <div className="p-4 bg-[#1E1E1E]">
        <h1 className="text-5xl font-bold text-[#FFD700]">Luxurious & Premium</h1>
        <p className="text-[#8B0000]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
        <p className="text-[#F5F5F5]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
        <p className="text-[#FFFFFF]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum dignissimos, dolores earum architecto consequatur at.</p>
      </div>
    </>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
  return (
    <div
  className="hero min-h-[410px]"
  style={{
    backgroundImage: `url(https://i.ibb.co/Svg2b5B/360-F-252388016-Kj-Pn-B9vgl-SCu-UJAum-CDNbm-Mz-Gdz-PAuc-K.jpg)`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-lg">
      <h1 className="mb-5 text-5xl font-bold text-[#FFD700]">"Indulge in a Feast of Flavors"</h1>
      <p className="mb-5 text-gray-200 text-lg">
      "Discover delicious meals, crafted with love and fresh ingredients. Your next culinary adventure starts here!"
      </p>
      <Link to='/allFood' className="btn bg-[#FF6F61] text-white hover:bg-[#E35B52]">Explore Our Foods</Link>
    </div>
  </div>
</div>
  );
};

export default Banner;

import { Link } from "react-router-dom";

const Promotional = () => {
  return (
  <div className="mt-12">
     <div className="text-center w-3/4 mx-auto space-y-5">
            <h2 className="text-3xl font-bold text-[#55AD9B] underline">Promotional Section</h2>
            <p className="text-lg text-gray-400">Discover the joy of eating healthy with DineWise! Our meals are crafted with fresh ingredients to deliver flavor, nutrition, and happiness in every bite.</p>
        </div>
      <div className="w-11/12 mx-auto mb-16 mt-8 bg-[#c8edd357] p-10 rounded-lg shadow-lg dark:bg-gray-800">
       
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-[#55AD9B] mb-4">
            Healthy Meals, Happy Lives!
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            At DineWise, we bring you a delicious array of top-quality, healthy
            meals crafted with love and fresh ingredients. Enjoy flavorful,
            guilt-free dining experiences that satisfy your taste buds while
            keeping your health in check. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link to="/allFood">
              <button className="btn bg-[#55AD9B] text-white px-6 py-3 font-bold rounded-md hover:bg-[#0D7C66] transition-all">
                Explore Menu
              </button>
            </Link>
            <Link to="/specialOffer">
              <button className="btn bg-white border-2 border-[#55AD9B] text-[#55AD9B] px-6 py-3 font-bold rounded-md hover:bg-[#55AD9B] hover:text-white transition-all">
                Special Offers
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2">
          <img
            src="https://i.ibb.co/9nNX0yj/Healthy-Meal-Prep-Ideas-for-Lunch.webp"
            alt="Healthy Meals"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Promotional;

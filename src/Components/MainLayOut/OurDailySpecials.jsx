import { GiFruitBowl, GiHotMeal, GiKnifeFork } from "react-icons/gi";
import { LuSalad } from "react-icons/lu";
import { PiChefHat } from "react-icons/pi";
import { TbSoup } from "react-icons/tb";

const OurDailySpecials = () => {
  return (
    <div className="mt-10 w-11/12 mx-auto">
        <div className="text-center space-y-3">
            <h2 className="text-3xl font-bold text-[#79D7BE] underline">Our Daily Specials</h2>
            <p className="text-lg text-gray-400">Indulge in our Daily Specials, where every dish is crafted with fresh, seasonal ingredients. Let DineWise's creative chefs surprise you with a new, mouthwatering meal every day!</p>
        </div>
     <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
         {/* one */}
      <div className="text-center space-y-3">
        <GiKnifeFork className="w-14 h-14 mx-auto text-[#640D5F]" />
        <div>
             <h2 className="font-mono text-2xl text-[#D91656] dark:text-white">Daily Fresh Menus</h2>
        <p className="font-serif text-gray-400 dark:text-white">
          Discover a new, delicious meal every day with our Daily Fresh Menus,
          crafted by DineWise's creative chefs using the finest seasonal
          ingredients
        </p>
        </div>
       
      </div>
         {/* two */}
      <div className="text-center space-y-3">
        <GiFruitBowl className="w-14 h-14 mx-auto text-[#640D5F]" />
        <div>
             <h2 className="font-mono text-2xl text-[#D91656] dark:text-white">Fresh Ingredients</h2>
        <p className="font-serif text-gray-400 dark:text-white">
        Experience the goodness of Fresh Ingredients, handpicked to ensure every meal is bursting with flavor. At DineWise, we believe healthy food starts with the best seasonal produce.
        </p>
        </div>
       
      </div>
         {/* three */}
      <div className="text-center space-y-3">
      <GiHotMeal className="w-14 h-14 mx-auto text-[#640D5F]" />
        <div>
             <h2 className="font-mono text-2xl text-[#D91656] dark:text-white">Tasty Meals</h2>
        <p className="font-serif text-gray-400 dark:text-white">
        Delight in our Tasty Meals, where every bite is a perfect balance of flavor and nourishment. DineWise serves up delicious dishes that make healthy eating a true pleasure!
        </p>
        </div>
       
      </div>
         {/* four */}
      <div className="text-center space-y-3">
      <PiChefHat className="w-14 h-14 mx-auto text-[#640D5F]" />
        <div>
             <h2 className="font-mono text-2xl text-[#D91656] dark:text-white">Creative Chef</h2>
        <p className="font-serif text-gray-400 dark:text-white">
        Meet our Creative Chefs who bring passion and innovation to every dish. At DineWise, we transform fresh ingredients into unforgettable culinary experiences!
        </p>
        </div>
       
      </div>
         {/* five */}
      <div className="text-center space-y-3">
      <TbSoup className="w-14 h-14 mx-auto text-[#640D5F]" />
        <div>
             <h2 className="font-mono text-2xl text-[#D91656] dark:text-white">Satisfying Soups</h2>
        <p className="font-serif text-gray-400 dark:text-white">
        Warm up with our Satisfying Soups, made with fresh, seasonal vegetables and savory broths. DineWise's soups are the perfect comfort food to brighten your day.
        </p>
        </div>
       
      </div>
         {/* six */}
      <div className="text-center space-y-3">
      <LuSalad className="w-14 h-14 mx-auto text-[#640D5F]" />
        <div>
             <h2 className="font-mono text-2xl text-[#D91656] dark:text-white">Healthy Salads</h2>
        <p className="font-serif text-gray-400 dark:text-white">
        Enjoy our Healthy Salads, filled with vibrant, fresh ingredients and nourishing flavors. DineWise's salads are perfect for a light yet satisfying meal anytime.
        </p>
        </div>
       
      </div>
     </div>
    </div>
  );
};

export default OurDailySpecials;

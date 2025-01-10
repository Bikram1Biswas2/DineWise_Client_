import { GiFruitBowl, GiHotMeal, GiKnifeFork } from "react-icons/gi";
import { LuSalad } from "react-icons/lu";
import { PiChefHat } from "react-icons/pi";
import { TbSoup } from "react-icons/tb";

const OurDailySpecials = () => {
  return (
    <div className="mt-10 w-11/12 mx-auto">
      <div className="text-center space-y-3 w-3/4 mx-auto">
        <h2 className="text-3xl font-bold text-[#55AD9B] underline">Our Daily Specials</h2>
        <p className="text-lg text-gray-400">
          Indulge in our Daily Specials, where every dish is crafted with fresh, seasonal ingredients. Let DineWise's creative chefs surprise you with a new, mouthwatering meal every day!
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8">
        {/* Card Template */}
        {[
          { Icon: GiKnifeFork, title: "Daily Fresh Menus", description: "Discover a new, delicious meal every day with our Daily Fresh Menus, crafted by DineWise's creative chefs using the finest seasonal ingredients." },
          { Icon: GiFruitBowl, title: "Fresh Ingredients", description: "Experience the goodness of Fresh Ingredients, handpicked to ensure every meal is bursting with flavor. At DineWise, we believe healthy food starts with the best seasonal produce." },
          { Icon: GiHotMeal, title: "Tasty Meals", description: "Delight in our Tasty Meals, where every bite is a perfect balance of flavor and nourishment. DineWise serves up delicious dishes that make healthy eating a true pleasure!" },
          { Icon: PiChefHat, title: "Creative Chef", description: "Meet our Creative Chefs who bring passion and innovation to every dish. At DineWise, we transform fresh ingredients into unforgettable culinary experiences!" },
          { Icon: TbSoup, title: "Satisfying Soups", description: "Warm up with our Satisfying Soups, made with fresh, seasonal vegetables and savory broths. DineWise's soups are the perfect comfort food to brighten your day." },
          { Icon: LuSalad, title: "Healthy Salads", description: "Enjoy our Healthy Salads, filled with vibrant, fresh ingredients and nourishing flavors. DineWise's salads are perfect for a light yet satisfying meal anytime." },
        ].map((item, index) => (
          <div
            key={index}
            className="text-center space-y-3 p-6 rounded-lg bg-[#c8edd357] shadow-md hover:shadow-lg transition-shadow"
          >
            <item.Icon className="w-14 h-14 mx-auto text-[#55AD9B]" />
            <h2 className="font-mono text-2xl text-[#55AD9B]">{item.title}</h2>
            <p className="font-serif text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurDailySpecials;

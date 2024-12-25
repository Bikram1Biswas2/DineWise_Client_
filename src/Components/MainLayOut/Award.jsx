import { GiDiamondTrophy, GiLaurelsTrophy, GiTrophy, GiTrophyCup } from "react-icons/gi";
import { HiTrophy } from "react-icons/hi2";


const Award = () => {
    return (
        <div className="mt-10 w-11/12 mx-auto">
           <div className="text-center space-y-3">
           <h2 className="text-3xl font-bold text-[#79D7BE] underline">Our Awards</h2>
           <p className="text-lg text-gray-500">At DineWise, we take pride in our dedication to quality and creativity, earning recognition for our exceptional culinary experiences. Our awards reflect our commitment to delivering the best meals crafted with passion and precision.</p>
           </div>
           <div className="mx-auto mt-5">
            <div className="grid sm:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-9/12 mx-auto">
            <GiDiamondTrophy className="text-[#640D5F] w-14 h-14" />
            <GiLaurelsTrophy className="text-[#640D5F] w-14 h-14" />
            <GiTrophy className="text-[#640D5F] w-14 h-14" />
            <GiTrophyCup className="text-[#640D5F] w-14 h-14" />
            <HiTrophy className="text-[#640D5F] w-14 h-14" />
            </div>
           <div className="flex flex-col md:flex-row justify-around mt-5 text-gray-500 ">
           <ul className="list-disc space-y-2">
                <li>Best Culinary Innovation Award</li>
                <li>Excellence in Food Quality</li>
                <li>Outstanding Chef of the Year</li>
                <li>Best Sustainable Practices in Dining</li>
                <li>Customer Choice Award</li>
            </ul>
            <ul  className="list-disc space-y-2">
            <li>Top Gourmet Restaurant Award</li>
                <li>Creative Cuisine Award</li>
                <li>Best Seasonal Menu Design</li>
                <li>Excellence in Service and Hospitality</li>
                <li>Best Fresh Ingredients Selection</li>
            </ul>
           </div>
           </div>

        </div>
    );
};

export default Award;
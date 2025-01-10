import { GiDiamondTrophy, GiLaurelsTrophy, GiTrophy, GiTrophyCup } from "react-icons/gi";
import { HiTrophy } from "react-icons/hi2";

const Award = () => {
    return (
        <div className="mt-10 w-11/12 mx-auto">
            {/* Heading Section */}
            <div className="text-center space-y-3 w-3/4 mx-auto mb-10">
                <h2 className="text-3xl font-bold text-[#55AD9B] underline ">
                    Our Awards
                </h2>
                <p className="text-lg text-gray-600 dark:text-white">
                    At DineWise, we take pride in our dedication to quality and creativity, earning recognition for our exceptional culinary experiences. Our awards reflect our commitment to delivering the best meals crafted with passion and precision.
                </p>
            </div>

            {/* Icons and Awards */}
            <div className="mx-auto mt-5">
                {/* Trophy Icons */}
                <div className="grid sm:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-9/12 mx-auto">
                    <GiDiamondTrophy className="text-[#FFD700] w-14 h-14 dark:text-white" />
                    <GiLaurelsTrophy className="text-[#FF5733] w-14 h-14 dark:text-white" />
                    <GiTrophy className="text-[#C70039] w-14 h-14 dark:text-white" />
                    <GiTrophyCup className="text-[#FF8C00] w-14 h-14 dark:text-white" />
                    <HiTrophy className="text-[#8B0000] w-14 h-14 dark:text-white" />
                </div>

                {/* Award List */}
                <div className="flex flex-col md:flex-row justify-around mt-5 text-gray-700 dark:text-white">
                    {/* Left Column */}
                    <ul className="list-disc space-y-2">
                        <li className="hover:text-[#FF5733] transition-colors dark:text-white">
                            Best Culinary Innovation Award
                        </li>
                        <li className="hover:text-[#FFD700] transition-colors dark:text-white">
                            Excellence in Food Quality
                        </li>
                        <li className="hover:text-[#C70039] transition-colors dark:text-white">
                            Outstanding Chef of the Year
                        </li>
                        <li className="hover:text-[#FF8C00] transition-colors dark:text-white">
                            Best Sustainable Practices in Dining
                        </li>
                        <li className="hover:text-[#8B0000] transition-colors dark:text-white">
                            Customer Choice Award
                        </li>
                    </ul>

                    {/* Right Column */}
                    <ul className="list-disc space-y-2">
                        <li className="hover:text-[#FF5733] transition-colors dark:text-white">
                            Top Gourmet Restaurant Award
                        </li>
                        <li className="hover:text-[#FFD700] transition-colors dark:text-white">
                            Creative Cuisine Award
                        </li>
                        <li className="hover:text-[#C70039] transition-colors dark:text-white">
                            Best Seasonal Menu Design
                        </li>
                        <li className="hover:text-[#FF8C00] transition-colors dark:text-white">
                            Excellence in Service and Hospitality
                        </li>
                        <li className="hover:text-[#8B0000] transition-colors dark:text-white">
                            Best Fresh Ingredients Selection
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Award;

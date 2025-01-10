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
                <p className="text-lg text-gray-600">
                    At DineWise, we take pride in our dedication to quality and creativity, earning recognition for our exceptional culinary experiences. Our awards reflect our commitment to delivering the best meals crafted with passion and precision.
                </p>
            </div>

            {/* Icons and Awards */}
            <div className="mx-auto mt-5">
                {/* Trophy Icons */}
                <div className="grid sm:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-9/12 mx-auto">
                    <GiDiamondTrophy className="text-[#FFD700] w-14 h-14" />
                    <GiLaurelsTrophy className="text-[#FF5733] w-14 h-14" />
                    <GiTrophy className="text-[#C70039] w-14 h-14" />
                    <GiTrophyCup className="text-[#FF8C00] w-14 h-14" />
                    <HiTrophy className="text-[#8B0000] w-14 h-14" />
                </div>

                {/* Award List */}
                <div className="flex flex-col md:flex-row justify-around mt-5 text-gray-700">
                    {/* Left Column */}
                    <ul className="list-disc space-y-2">
                        <li className="hover:text-[#FF5733] transition-colors">
                            Best Culinary Innovation Award
                        </li>
                        <li className="hover:text-[#FFD700] transition-colors">
                            Excellence in Food Quality
                        </li>
                        <li className="hover:text-[#C70039] transition-colors">
                            Outstanding Chef of the Year
                        </li>
                        <li className="hover:text-[#FF8C00] transition-colors">
                            Best Sustainable Practices in Dining
                        </li>
                        <li className="hover:text-[#8B0000] transition-colors">
                            Customer Choice Award
                        </li>
                    </ul>

                    {/* Right Column */}
                    <ul className="list-disc space-y-2">
                        <li className="hover:text-[#FF5733] transition-colors">
                            Top Gourmet Restaurant Award
                        </li>
                        <li className="hover:text-[#FFD700] transition-colors">
                            Creative Cuisine Award
                        </li>
                        <li className="hover:text-[#C70039] transition-colors">
                            Best Seasonal Menu Design
                        </li>
                        <li className="hover:text-[#FF8C00] transition-colors">
                            Excellence in Service and Hospitality
                        </li>
                        <li className="hover:text-[#8B0000] transition-colors">
                            Best Fresh Ingredients Selection
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Award;

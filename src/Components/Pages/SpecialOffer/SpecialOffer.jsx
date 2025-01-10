import { BsGiftFill } from "react-icons/bs";

const SpecialOffer = () => {
    return (
        <div className="mt-16 p-10 rounded-lg shadow-lg w-11/12 mx-auto bg-gradient-to-r from-[#55AD9B] to-[#79D7BE] dark:bg-black dark:bg-none">
            {/* Heading */}
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white underline decoration-[#C70039] decoration-4">
                    Special Offer
                </h2>
                <p className="text-lg text-white mt-2">
                    Celebrate our award-winning journey with an exclusive offer just for you! Enjoy world-class meals crafted by our creative chefs at unbeatable prices.
                </p>
            </div>

            {/* Offer Details */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center gap-6">
                {/* Left Side: Gift Icon */}
                <div className="text-center">
                    <BsGiftFill className="text-white w-28 h-28 mx-auto" />
                </div>

                {/* Right Side: Offer Text */}
                <div className="text-white space-y-4">
                    <h3 className="text-2xl font-semibold">Limited Time Offer</h3>
                    <p className="text-lg">
                        Get <span className="font-bold text-[#C70039]">25% off</span> your first order when you sign up today! Plus, receive a complimentary dessert with every meal to make your experience extra special.
                    </p>
                    <p className="text-sm italic">
                        *Offer valid until the end of this month. Terms and conditions apply.
                    </p>
                    <button className="mt-4 bg-[#C70039] hover:bg-[#8B0000] text-white py-2 px-6 rounded-full transition-all">
                        Claim Your Offer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;

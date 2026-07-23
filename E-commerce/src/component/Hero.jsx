import React from 'react'
import Photo from '../assets/Photo.png'

const Hero = () => {
    return (
        <>
            <section className="max-w-7xl mx-auto mt-8">
                <div className="bg-blue-950 rounded-3xl">

                    <div className="flex flex-col md:flex-row items-center">

                        {/* Left */}
                        <div className="flex-1 flex flex-col justify-center gap-6 px-10 py-12">

                            <h1 className="text-4xl md:text-6xl font-bold text-white">
                                Shop Smarter,
                                <span className="text-yellow-400"> Live Better.</span>
                            </h1>

                            <p className="text-gray-300 text-lg">
                                Discover premium quality products with modern design,
                                unbeatable prices, and fast delivery at your doorstep.
                            </p>

                            <button className="w-fit bg-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">
                                Shop Now
                            </button>

                        </div>

                        {/* Right */}
                        <div className="flex-1 flex justify-center items-center py-10">

                            <img
                                src={Photo}
                                alt="Hero"
                                className="w-72 md:w-[450px]"
                            />

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero
import React from 'react'

const AboutUs = () => {

    return (
        <>
            <div className='max-w-7xl mx-auto grid md:grid-cols-2 '>

                <div className='mx-auto '>

                    <img src="https://images.unsplash.com/photo-1687161136731-e608bffd29dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img"
                        className='h-120' />

                </div>

                <div className=' flex flex-col gap-4 p-5'>

                    <p className='text-blue-500'>ABOUT US</p>

                    <p className='text-black font-bold text-2xl'>Your Trusted Online Shopping <br />
                        Destination</p>

                    <p>We offer a wide collection of fashion , electronics , footwear , accessories and lifestyle products at the best price . Our mission is to provide quality products , fast delivery and a seamless shopping experience for every customer</p>

                    <div className='grid grid-cols-2 gap-5'>

                        <div className='bg-gray-100 rounded-lg p-3 '>

                            <p className='text-blue-500 text-2xl font-bold'>10K +</p>

                            <p className='text-gray-600 text-sm'>Happy Customers</p>

                        </div>

                        <div className='bg-gray-100 rounded-lg p-3 '>

                            <p className='text-blue-500 text-2xl font-bold'>500 +</p>

                            <p className='text-gray-600 text-sm'>Premium Products</p>

                        </div>

                        <div className='bg-gray-100 rounded-lg p-3 '>

                            <p className='text-blue-500 text-2xl font-bold'>100 +</p>

                            <p className='text-gray-600 text-sm'>Trusted Brands</p>

                        </div>

                        <div className='bg-gray-100 rounded-lg p-3 '>

                            <p className='text-blue-500 text-2xl font-bold'>24/7</p>

                            <p className='text-gray-600 text-sm'>Customer Support</p>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default AboutUs
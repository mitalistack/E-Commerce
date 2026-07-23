import React from 'react'
import { RiThreadsFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className='max-w-full mx-auto bg-blue-200 p-7'>

        <div className='grid md:grid-cols-2 lg:grid-cols-4'>

            <div className='flex flex-col gap-3 itmes-center justify-center'>

                <h1 className='text-2xl font-bold'>ShopEasy</h1>

                <p className='text-sm text-gray-800'>ShopEasy is your Trusted online shopping destination for electronics, fashion , shoes , watches and much more.</p>

                <div className='flex gap-3'>

                  <a href=""
                  className='bg-white rounded-full text-center hover:bg-black hover:text-white p-3'>
                    <FaFacebookF/>
                  </a>

                  <a href=""
                  className='bg-white rounded-full text-center hover:bg-black hover:text-white p-3'>
                    <FaInstagram/>
                  </a>

                  <a href=""
                  className='bg-white rounded-full text-center hover:bg-black hover:text-white p-3'>
                    <RiThreadsFill />
                  </a>

                  <a href=""
                  className='bg-white rounded-full text-center hover:bg-black hover:text-white p-3'>
                    <FaLinkedinIn/>
                  </a>

                </div>

            </div>

            <div>

                <h1 className='text-lg font-semibold'>Quick Links</h1>

                <div className='text-gray-600 flex flex-col gap-3 mt-4'>

                  <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">About</a>
                <a href="#">Contact</a>

                </div>

            </div>

            <div>

                <h1 className='text-lg font-semibold' >Categories</h1>

                <div className='text-gray-600 flex flex-col gap-3 mt-4'>

                  <a href="#">Electronics</a>
                  <a href="#">Fashion</a>
                  <a href="#">Shoes</a>
                  <a href="#">Watches</a>
                  <a href="#">Furniture</a>

                </div>

            </div>

            <div>

                <h1>Contact</h1>
                <div className='flex gap-2 text-center mt-4'>
                    <div className='flex items-center justify-center '><FaPhoneAlt /></div>
                  <div>+91 8770701787</div>
                </div>
                <div className='flex gap-2 text-center mt-4'>
                    <div className='flex items-center justify-center '><MdEmail /></div>
                  <div>mitalihariyale@gmail.com</div>
                </div>
                <div className='flex gap-2 text-center mt-4'>
                    <div className='flex items-center justify-center '><FaLocationDot /></div>
                  <div>Indore , Madhya Pradesh</div>
                </div>

            </div>
        </div>
        <hr  className='mt-5 '/>

        <div className='flex justify-between text-sm text-gray-600 mt-5 px-20'>
          <div>
           <p> @2026 ShopyEasy.All Rights Reserved</p>
          </div>
          <div className='flex gap-5'>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
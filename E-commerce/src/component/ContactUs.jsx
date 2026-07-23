import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

const ContactUs = () => {

    const [names, setNames] = useState("")
    const [email , setEmail] = useState("")
    const [message , setMessage] = useState("")


    const emailSubmit = (e)=>{
        e.preventDefault();

        const templateParams ={
        name : names ,
        email : email,
        message : message
    }

    emailjs 
    .send(
        "service_inp0trh",
        "template_6boqiwx",
        templateParams,
        "5uAeqav58NWPcyYF8",
    )
    .then(()=>{
        console.log("email sent...")
        alert("Email sent Successfully...")

        setName("")
        setEmail("")
        setMessage("")
    }).catch((error)=>{
        console.log(error)
    })
    }
    
  return (
    <>
     <section className="max-w-7xl mx-auto px-4 py-10">
  {/* Heading */}
  <div className="text-center mb-8">
    <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
    <p className="text-gray-500 text-sm mt-2">
      We'd love to hear from you. Send us a message anytime.
    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-6">

    {/* Contact Info */}
    <div className="bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-6 shadow-lg">

      <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

      <div className="space-y-6">

        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-lg">
            <FaLocationDot />
          </div>

          <div>
            <h3 className="font-semibold">Address</h3>
            <p className="text-sm text-gray-300">
              Indore, Madhya Pradesh
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-lg">
            <FaPhoneAlt />
          </div>

          <div>
            <h3 className="font-semibold">Phone</h3>
            <p className="text-sm text-gray-300">
              +91 8770701787
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-lg">
            <MdEmail />
          </div>

          <div>
            <h3 className="font-semibold">Email</h3>
            <p className="text-sm text-gray-300 break-all">
              mitalihariyale@gmail.com
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* Contact Form */}
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

      <form className="space-y-4"
      onSubmit={emailSubmit}>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            value={names}
            onChange={(e)=>{
                setNames(e.target.value)
            }}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            rows={4}
            placeholder="Write your message..."
            className="w-full border rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black"
            value={message}
            onChange={(e)=>{
                setMessage(e.target.value)
            }}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition"
          
        >
          Send Message
        </button>

      </form>
    </div>

  </div>
</section>
    </>
  );
};

export default ContactUs;
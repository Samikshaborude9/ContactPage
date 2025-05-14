import React from 'react';
import { useState } from 'react';
import {MdMessage} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import Button from "../components/Button";
import { HiMail } from "react-icons/hi";



const ContactForm = () => {
    const [name, setName] = useState(" ");
    const [email , setEmail]= useState(" ");
    const [text , setText] = useState(" ");

    const onSubmit = (event) => {
  event.preventDefault();
  console.log("Form submitted:", { name, email, text });
};

  return (
    <section className='flex max-w-[1000px] mx-auto mt-10 items-end gap-8 flex-wrap'>
            {/* Contact Form */}
      <div className="flex flex-col gap-6 flex-1">
        {/* Top Buttons */}
        <div className="flex gap-8">
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>

        {/* Email Form Button */}
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
        />

        {/* Contact Form */}
<form onSubmit={onSubmit} className="flex flex-col gap-5 pb-5">
  <div className="relative flex flex-col w-full">
    <label
      htmlFor="name"
      className="text-sm absolute -top-3 left-2 bg-white px-2"
    >
      Name
    </label>
    <input
      type="text"
      name="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="h-10 px-2 border rounded-md"
    />
  </div>

  <div className="relative flex flex-col w-full">
    <label
      htmlFor="email"
      className="text-sm absolute -top-3 left-2 bg-white px-2"
    >
      Email
    </label>
    <input
      type="email"
      name="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="h-10 px-2 border rounded-md"
    />
  </div>

  <div className="relative flex flex-col w-full">
    <label
      htmlFor="text"
      className="text-sm absolute -top-3 left-2 bg-white px-2"
    >
      Text
    </label>
    <textarea
      name="text"
      rows="8"
      value={text}
      onChange={(e) => setText(e.target.value)}
      className="p-2 border rounded-md resize-none"
    />
  </div>

  {/* Submit Button */}
  <div className="flex justify-end">
    <Button text="SUBMIT BUTTON" type="submit" />
  </div>

  {/* Display submitted values  real time */}      
  
  {/* <div className="text-sm mt-2 text-gray-700">
    {`${name} ${email} ${text}`}
  </div> */}
</form>

      </div>

      {/* Contact Image */}
      <div className="flex-1 min-w-[300px]">
        <img src="/images/contact.svg" alt="contact image" className="w-full" />
      </div>


    </section>
  );
};

export default ContactForm  
import React from "react";
// import styled from "styled-components";

const image3 = require("../img/icons8-location-100.png");
const image4 = require("../img/icons8-mail-100.png");
const image5 = require("../img/icons8-phone-100.png");

const Contact = () => {
  return (
    <>
      <div class="bg-[url('https://ukhnk407acv3nrmyc15obad1-wpengine.netdna-ssl.com/wp-content/uploads/2013/12/893.jpg')] -mt-2 py-1">
        <h1 className="text-5xl text-center font-semibold my-2 text-white">Contact Us</h1>
        <div className="text-center text-xl w-4/5 mx-auto text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius modi error minima? Ad nihil deleniti similique maxime eos veritatis tempore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, autem!</div>
        <div className="main flex justify-center ">
          <div className="info mx-20 self-center ">
            <div className="address flex my-5">
              <img className=" object-scale-down w-1/5 m-2" src={image3} alt="" />
              <div className="self-center">
                <div className=" text-rose-600 text-2xl font-semibold ">Address</div>
                <div className="text-white w-21 text-xl">hc-221,Rohini-110047</div>
              </div>
            </div>
            <div className="email flex my-5">
              <img className=" object-scale-down w-1/5 m-2" src={image4} alt="" />
              <div className="self-center">
                <div className="text-rose-600 text-2xl font-semibold">Email</div>
                <div className="text-white text-xl ">hello@gmail.com</div>
              </div>
            </div>
            <div className="phone flex my-5">
              <img className=" object-scale-down w-1/5 m-2" src={image5} alt="" />
              <div className="self-center">
                <div className="text-rose-600 text-2xl font-semibold">Phone</div>
                <div className="text-white text-xl">9212194330</div>
              </div>
            </div>
          </div>
          <div className=" my-4 ml-36 text-center rounded-md shadow-xl p-12 pt-7 bg-white bg-opacity-10 border border-slate-200 ">
            <h2 className="text-4xl my-1 text-rose-600 ">Message Us</h2>
            <form >
              <label className="text-white text-left font-extralight block ">Name</label>
              <input className="border rounded border-black px-2 py-1 w-96 box-border" type="text" required />
              <label className="text-white text-left font-extralight block ">Email</label>
              <input className="border rounded border-black px-2 py-1 w-96 box-border" type="text" required />
              <label className="text-white text-left font-extralight block " >Message</label>
              <textarea className="border rounded border-black px-2 py-1 w-96 box-border h-24 block" type="textarea" required />
              <button className="text-white bg-rose-600 p-4 border-0 rounded-2xl mt-8 cursor-pointer">Send Message</button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default Contact;

import React from "react";
import illus from "../data/AboutUsImages/illus.svg";

const About = () => {
  return (
    <div>
      <div className="w-full h-[40rem]">
        <div className="h-[10rem] pt-16 text-center w-[50rem] mx-auto text-3xl">
          <h1>We Design Build and ship world class digital products</h1>
        </div>
        <div>
          <div className="w-[35%] float-left h-[30rem] text-center">
            <ul className="pt-[3rem]">
              <ul>
                <li>
                  <h1 className="text-[4rem] font-medium">150+</h1>
                </li>
                <li>
                  <h3 className="text-[1.5rem] text-gray-500 mb-[3rem]  ">
                    Website & Apps launched
                  </h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h1 className="text-[4rem] font-medium">50+</h1>
                </li>
                <li>
                  <h3 className="text-[1.5rem] text-gray-500 mb-[3rem]">
                    Awards & recognition
                  </h3>
                </li>
              </ul>
            </ul>
          </div>
          <div className="w-[30%] float-left h-[30rem] text-center">
            <img src={illus} alt="description-image" />
          </div>
          <div className="w-[35%] float-right h-[30rem] text-center">
            <ul className="pt-[3rem]">
              <ul>
                <li>
                  <h1 className="text-[4rem] font-medium">100%</h1>
                </li>
                <li>
                  <h3 className="text-[1.5rem] text-gray-500 mb-[3rem]">
                    in-house & independent
                  </h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h1 className="text-[4rem] font-medium">Ind</h1>
                </li>
                <li>
                  <h3 className="text-[1.5rem] text-gray-500 mb-[3rem]">
                    working globally, proudly indian
                  </h3>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-[40rem]">section-2</div>
      <div className="w-full h-[40rem]">section 3</div>
    </div>
  );
};

export default About;

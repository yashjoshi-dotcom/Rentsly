import React from "react";
import ReactDOM from "react-dom";

document.querySelectorAll(".grid-background > div").forEach((elem) => {
  // Calculate random number for delay
  var delay = getRandomInt(0, 5);
  // Calculate random number for duration
  var duration = getRandomInt(3, 6);

  // Set both
  elem.style.animationDelay = `${delay}s`;
  elem.style.animationDuration = `${duration}s`;
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ComingSoon = () => {
  return (
    <div class="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <div class="grid-background absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12 scale-150">
        <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-7 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>

        <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>

        <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>

        <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-7 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>

        <div class="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-3 bg-gray-800 rounded animate-pulse"></div>

        <div class="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-1 bg-gray-800 rounded animate-pulse"></div>
        <div class="col-span-4 bg-gray-800 rounded animate-pulse"></div>
      </div>

      <div class="relative">
        <h2 class="text-white text-4xl md:text-8xl font-bold flex flex-row items-center">
          Coming
          <div class="relative text-sm mx-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-up-fill text-blue-500"
              viewBox="0 0 16 16"
            >
              <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
            <div class="absolute -top-12 transform -rotate-45 text-blue-500">
              <p class="font-light text-base text-white bg-blue-500 rounded-md px-2 py-0">
                super
              </p>
            </div>
          </div>
          Soon
        </h2>
      </div>
    </div>
  );
};

export default ComingSoon;

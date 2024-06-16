import React from "react";

function Home() {
  return (
    <section className="w-full h-[80%] flex flex-col justify-center items-center bg-navBackgroundLight text-navBackgroundDark dark:bg-navBackgroundDark dark:text-navBackgroundLight">
      <div className="flex flex-col justify-center items-center my-3">
        <div className="text-center items-center w-[80%] text-4xl font-platypi leading-tight font-extrabold">
          <h2>SummifyAI: An Automatic Text Summarizer</h2>
        </div>
        <div className=" text-base  mt-5">
          <p>Your Go to text-summarization tool.</p>
        </div>
        <div className="mt-5 w-[80%] flex justify-between px-5">
          <button className="bg-orange-700 rounded-full p-3 py-2 font-semibold hover:bg-red-600 hover:text-white dark:hover:bg-navBackgroundLight dark:hover:text-orange-600 text-xs">
            Learn More
          </button>
          <button className="group flex items-center justify-center hover:text-orange-600 text-xs">
            Try It Now
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;

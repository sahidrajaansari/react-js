import React from "react";

function Footer() {
  return (
    <footer className="flex items-center flex-col bg-backgroundColorSecondaryLight text-navBackgroundDark dark:bg-navBackgroundDark dark:text-navBackgroundLight py-5 select-none">
      <h2>SummifyAI: An Automatic Text Summarizer</h2>
      <hr className="border-1 w-[90%] border-black dark:border-white my-2 font-bold font-platypi"></hr>
      <div className="flex w-full justify-between px-10 text-lg">
        <div className="year">
          <p>2024</p>
        </div>
        <div className="px-5">
          <a href="#" className="px-2">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="px-2">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="px-2">
            <i className="far fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

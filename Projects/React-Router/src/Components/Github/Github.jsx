import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/sahidrajaansari")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <>
      <div className="bg-rose-500 text-center text-white font-sans text-2xl py-3">
        <img
          src={data.avatar_url}
          alt="Sahid Raja Ansari"
          className="rounded-full h-40 w-40 mx-auto mt-4"
        />
        <div className=" bg-rose-500 text-center text-white font-sans text-2xl">
          {/* Total no. of Followers of {data.login} is {data.followers} */}
        </div>
      </div>
    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};

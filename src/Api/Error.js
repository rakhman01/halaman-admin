import React from "react";

function Error() {
  return (
    <div className="w-screen min-h-screen bg-white flex flex-col flex-wrap justify-center items-center">
      <div>
        <img src="./assets/error.jpg" alt="error" className="w-60 h-auto" />
      </div>
      <div className="w-auto h-auto bg-white flex flex-wrap">
        <h1 className="text-8xl font-extrabold text-blue-800 mr-4">404</h1>
        <div className="flex flex-col gap-2 justify-center flex-wrap ">
          <h1 className=" text-opacity-80 text-black font-bold text-6xl">
            Page Not Found
          </h1>
          <h2 className="text-2x1 font-semibold">
            Please check the URL in the address bar and try again !
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Error;

import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-700">
        Subscribe now and get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum,
        voluptas maiores molestias nulla officiis deleniti quae rem minima
        dolore? Sunt, reiciendis cum nulla beatae facilis fugiat omnis possimus
        exercitationem atque!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="items-center w-full gap-3 sm:w-1/2 flex mx-auto border pl-3 mt-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button className="bg-black text-white text-xs px-6 py-4" type="Submit">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;

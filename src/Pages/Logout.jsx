import React from 'react';

function LogoutPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4">You have successfully Logged Out</h3>
        <h5 className="text-lg mb-4">Thank you so much for visiting us.</h5>
        <h5 className="text-lg mb-4">Please feel free to rate us.</h5>
      </div>
      <div className="pb-20 mb-20 min-h-[250px]">
        <div className="border border-black mb-10 p-4 flex flex-col items-center">
          <div className="stars flex mb-4">
            <input type="radio" id="five" name="rate" value="5" className="hidden" />
            <label htmlFor="five" className="text-xl">&#9733;</label>
            <input type="radio" id="four" name="rate" value="4" className="hidden" />
            <label htmlFor="four" className="text-xl">&#9733;</label>
            <input type="radio" id="three" name="rate" value="3" className="hidden" />
            <label htmlFor="three" className="text-xl">&#9733;</label>
            <input type="radio" id="two" name="rate" value="2" className="hidden" />
            <label htmlFor="two" className="text-xl">&#9733;</label>
            <input type="radio" id="one" name="rate" value="1" className="hidden" />
            <label htmlFor="one" className="text-xl">&#9733;</label>
            <span className="result"></span>
          </div>
          <h5 className="text-lg mb-4">Or</h5>
          <a href="Default.aspx" className="text-blue-600 hover:text-blue-800">Click here to go to home page</a>
        </div>
      </div>
    </div>
  );
}

export default LogoutPage;

import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-t-gray-200 py-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 mr-20 lg:mr-0">
            <h2 className="text-xl font-bold">Job Elevent</h2>
            <p className="text-sm">
              &copy; 2024 Your Company. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <p className="text-lg font-bold">
              Created by <span className="text-[#6A38C2]">Ankit</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

function TheHome() {
  return (
    <div className="container mx-auto">
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Delicious Food Delivered to Your Door
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Order from a wide range of cuisines and have it delivered fresh
              and hot!
            </p>
            <div className="mt-5"></div>
          </div>
        </div>
      </div>

      <div className="py-[2.81rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-yellow-600 font-semibold tracking-wide uppercase"></h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Discover Our Best Sellers
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Tantalize your taste buds with our hand-picked selection of
              top-rated dishes.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
          </div>
        </div>
      </div>

      <div className="bg-black border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to order?
            </p>
            <div className="mt-4">
              <Link to="/menu">
                <span className="inline-block primary-background py-2 px-6 border border-transparent rounded-md text-base font-medium text-white hover:brightness-125">
                  Explore Menu
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheHome;

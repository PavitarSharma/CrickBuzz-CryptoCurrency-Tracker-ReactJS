import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r to-cyan-500 from-blue-500">
      <div className="container mx-auto py-4 flex lg:flex-row flex-col md:px-0 px-10">
      {/* Top */}
      <div className="grid grid-cols-2">
        <div>
          <h5 className="text-sm font-semibold text-white mb-2">COINCAP.IO</h5>
          <ul>
            <li className="cursor-pointer text-gray-fade hover:text-white">
              Methodology
            </li>
            <li className="cursor-pointer text-gray-fade hover:text-white">
              Support
            </li>
            <li className="cursor-pointer text-gray-fade hover:text-white">
              Our API
            </li>
            <li className="cursor-pointer text-gray-fade hover:text-white">
              Rate Comparison
            </li>
            <li className="cursor-pointer text-gray-fade hover:text-white">
              Careers
            </li>
          </ul>
        </div>

        <div>
          <div>
            <h5 className="text-sm font-semibold text-white mb-2">LEGALS</h5>
            <ul>
              <li className="cursor-pointer text-gray-fade hover:text-white">
                Terms of Services
              </li>
              <li className="cursor-pointer text-gray-fade hover:text-white">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h5 className="text-sm font-semibold text-white mb-2">
              DISCLAIMER
            </h5>
            <p className="text-gray-fade hover:text-white cursor-pointer">
              Neither ShapeShift AG nor CoinCap are in any way associated with
              CoinMarketCap, LLC or any of its goods and services.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="grid grid-cols-2 mt-6">
        <div>
          <h5 className="text-sm font-semibold text-white">FOLLOW US</h5>
          <div className="flex items-center mt-2 gap-2">
            <BsTwitter size={22} color="#fff" />
            <AiFillFacebook size={22} color="#fff" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-sm font-semibold text-white">
            COINCAP APP AVAILABLE ON
          </h5>
          <button>
            <img
              src="https://coincap.io/static/images/stores/google_play.svg"
              alt="playstore-icon"
            />
          </button>
          <button>
            <img
              src="https://coincap.io/static/images/stores/apple_store.svg"
              alt="apple-icon"
            />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;

import { useState } from "react";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp, MdFavoriteBorder } from "react-icons/md";
import FormatPrice from "../helpers/FormatPrice";
import millify from "millify";

const CurrencyList = ({ currencies, setCurrencies }) => {
  const [orderPrice, setOrderPrice] = useState("ASC");
  const [orderMarket, setOrderMarket] = useState("ASC");
  const [orderPercentage, setOrderPercantage] = useState("ASC");


  const handleSortPrice = (col) => {
    if (orderPrice === "ASC") {
      const sorted = [...currencies].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setCurrencies(sorted);
      setOrderPrice("DSC");
    }

    if (orderPrice === "DSC") {
      const sorted = [...currencies].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setCurrencies(sorted);
      setOrderPrice("ASC");
    }
  };

  const handleSortMarket = (col) => {
    if (orderMarket === "ASC") {
      const sorted = [...currencies].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setCurrencies(sorted);
      setOrderMarket("DSC");
    }

    if (orderMarket === "DSC") {
      const sorted = [...currencies].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setCurrencies(sorted);
      setOrderMarket("ASC");
    }
  };

  const handleSortPercentage = (col) => {
    if (orderPercentage === "ASC") {
      const sorted = [...currencies].sort((a, b) => (a[col] > b[col] ? 1 : -1));
      setCurrencies(sorted);
      setOrderPercantage("DSC");
    }

    if (orderPercentage === "DSC") {
      const sorted = [...currencies].sort((a, b) => (a[col] < b[col] ? 1 : -1));
      setCurrencies(sorted);
      setOrderPercantage("ASC");
    }
  };

  return (
    <div>
      <div className="container flex justify-center mx-auto">
        <div className="flex flex-col">
          <div className="w-full md:mt-[-70px]">
            <div className="border-b border-gray-200 shadow py-8">
              <table className="divide-y divide-gray-300 w-full">
                <thead className="bg-gray-50">
                  <tr>
                  <th className="px-6 py-2 text-xs text-gray-500 cursor-pointer md:block hidden">
                      #
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500 cursor-pointer">
                      <div className="md:flex hidden items-center">
                        Text <MdOutlineArrowDropDown size={22} />
                      </div>
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500 cursor-pointer">
                      Name
                    </th>
                    <th
                      className="px-6 py-2 text-xs text-gray-500 cursor-pointer"
                      onClick={() => handleSortPrice("price")}
                    >
                      <div className="flex items-center">
                        Price{" "}
                        {orderPrice === "ASC" ? (
                          <MdOutlineArrowDropDown size={22} />
                        ) : (
                          <MdOutlineArrowDropUp size={22} />
                        )}
                      </div>
                    </th>
                    <th
                      className="px-6 py-2 text-xs text-gray-500 cursor-pointer"
                      onClick={() => handleSortMarket("marketCap")}
                    >
                      <div className="md:flex hidden items-center">
                        Market cap{" "}
                        {orderMarket === "ASC" ? (
                          <MdOutlineArrowDropDown size={22} />
                        ) : (
                          <MdOutlineArrowDropUp size={22} />
                        )}
                      </div>
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500 cursor-pointer">
                      <div className="md:block hidden">Supply</div>
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500 cursor-pointer md:block hidden">
                      Volume (24Hr)
                    </th>
                    <th
                      className="px-6 py-2 text-xs text-gray-500"
                      onClick={() => handleSortPercentage("priceChange1h")}
                    >
                      <div className="flex items-center">
                        Change (24Hr){" "}
                        {orderPercentage === "ASC" ? (
                          <MdOutlineArrowDropDown size={22} />
                        ) : (
                          <MdOutlineArrowDropUp size={22} />
                        )}
                      </div>
                    </th>
                  </tr>
                </thead>
                {currencies &&
                  currencies.map((currency, index) => {
                    const {
                      icon,
                      name,
                      price,
                      volume,
                      marketCap,
                      availableSupply,
                      symbol,
                      priceChange1h,
                      priceChange1d,
                    } = currency;
                    const percentageChange = (
                      priceChange1h + priceChange1d
                    ).toFixed(2);
                    return (
                      <tbody
                        key={currency.id}
                        className="bg-white divide-y divide-gray-300"
                      >
                        <tr className="whitespace-nowrap">
                        <td className="px-6 py-4 text-sm text-gray-900 md:block hidden">
                            <div className="">
                              {name === "Bitcoin" || name === "Ethereum" || name === "USD Coin" ? <MdFavoriteBorder size={22} className="text-orange-600" /> : null }
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            <div className="text-sm text-gray-900 md:block hidden">
                              {index + 1}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900 flex items-center gap-2">
                              <img
                                src={icon}
                                alt="icon"
                                className="w-10 h-10"
                              />
                              <div className="">
                                <p className="font-medium">{name}</p>
                                <span className="text-xs text-gray-500">
                                  {symbol}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">
                              {<FormatPrice price={price} />}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900 md:block hidden">
                              {millify(marketCap)}
                            </div>
                          </td>
                          <td className="px-6 py-4 ">
                            <div className="text-sm text-gray-900 md:block hidden">
                              {millify(availableSupply)}
                            </div>
                          </td>
                          <td className="px-6 py-4 md:block hidden">
                            <div className="text-sm text-gray-900">
                              {millify(volume)}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            {percentageChange < 0 ? (
                              <p className="text-red-500">
                                {percentageChange}%
                              </p>
                            ) : (
                              <p className="text-green-500">
                                {percentageChange}%
                              </p>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyList;

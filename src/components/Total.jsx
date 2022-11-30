import millify from "millify";
import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretDown } from "react-icons/ai";

export const TotalIndex = ({ currencies }) => {
  let totalMarket = 0;
  let exchangeVol = 0;

  currencies.forEach((currency) => {
    totalMarket += currency.marketCap;
    exchangeVol += currency.volume;
  });
  
  return (
    <>
      <div className="px-4 text-white">
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center justify-between border-b-[1px] pb-2 border-black">
            <h5>MARKET CAP:</h5>
            <h5>${millify(totalMarket)}</h5>
          </div>
          <div className="flex items-center justify-between border-b-[1px] pb-2 border-black">
            <h5>EXCHANGE VOL:</h5>
            <h5>${millify(exchangeVol)}</h5>
          </div>
          <div className="flex items-center justify-between border-b-[1px] pb-2 border-black">
            <h5>ASSETS:</h5>
            <h5>2,295</h5>
          </div>
        </div>

        <div className="flex items-center justify-between border-b-[1px] pb-2 border-black">
            <h5>EXCHANGES:</h5>
            <h5>73</h5>
          </div>
          <div className="flex items-center justify-between border-b-[1px] pb-2 border-black">
            <h5>MARKETS:</h5>
            <h5>13,086</h5>
          </div>
          <div className="flex items-center justify-between pb-2">
            <h5>BTC DOM INDEX:</h5>
            <h5>31.5%</h5>
          </div>
      </div>
    </>
  );
};

const Total = ({ currencies }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => setOpenMenu(!openMenu);
  let totalMarket = 0;
  let exchangeVol = 0;

  currencies.forEach((currency) => {
    totalMarket += currency.marketCap;
    exchangeVol += currency.volume;
  });

  return (
    <>
    <div className="md:hidden flex items-center justify-between px-4 py-2 text-white">
          <h5>Market Snapshot</h5>
          {
            !openMenu ? <AiFillCaretLeft onClick={handleOpenMenu}  /> : <AiFillCaretDown onClick={() => setOpenMenu(false)} />
          }
        </div>
      <div className="md:flex hidden md:flex-row flex-col items-center justify-center md:gap-[100px] gap-8 text-white font-bold h-48">
        
        <div className="flex items-center gap-10">
          <div>
            <h5>MARKET CAP</h5>
            <h5>${millify(totalMarket)}</h5>
          </div>
          <div>
            <h5>EXCHANGE VOL</h5>
            <h5>${millify(exchangeVol)}</h5>
          </div>
          <div>
            <h5>ASSETS</h5>
            <h5>2,295</h5>
          </div>
        </div>

        <div className="flex gap-10">
          <div>
            <h5>EXCHANGES</h5>
            <h5>73</h5>
          </div>
          <div>
            <h5>MARKETS</h5>
            <h5>13,086</h5>
          </div>
          <div>
            <h5>BTC DOM INDEX</h5>
            <h5>31.5%</h5>
          </div>
        </div>
      </div>
      <div>{openMenu ? <TotalIndex currencies={currencies} /> : null}</div>
    </>
  );
};

export default Total;

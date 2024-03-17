import Facebook from "../../assets/images/facebook.svg";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/images/twitter.svg";
import GooglePlay from "../../assets/images/GooglePlay.svg";
import AppleStore from "../../assets/images/AppleStore.svg";

export const Footer = () => {
  return (
    <footer className="bg-white mt-28 font-poppins">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 items-center">
          <div className="justify-self-center">
            <h6 className="font-medium text-5xl text-[#181E4B]">Jadoo.</h6>
            <p className="text-[#5E6282] font-medium text-sm w-56 mt-10">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 justify-self-center lg:col-span-3">
            <div className="mt-10">
              <h6 className="font-bold text-xl text-[#181E4B]">Company</h6>
              <ul className="mt-4 space-y-2">
                <li className="text-[#5E6282] font-medium text-lg">About</li>
                <li className="text-[#5E6282] font-medium text-lg">Blog</li>
                <li className="text-[#5E6282] font-medium text-lg">Mobile</li>
              </ul>
            </div>
            <div className="mt-10">
              <h6 className="font-bold text-xl text-[#181E4B]">Contact</h6>
              <ul className="mt-4 space-y-2">
                <li className="text-[#5E6282] font-medium text-lg">Help/FAQ</li>
                <li className="text-[#5E6282] font-medium text-lg">Press</li>
                <li className="text-[#5E6282] font-medium text-lg">
                  Affilates
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <h6 className="font-bold text-xl text-[#181E4B]">More</h6>
              <ul className="mt-4 space-y-2">
                <li className="text-[#5E6282] font-medium text-lg">
                  Airlinefees
                </li>
                <li className="text-[#5E6282] font-medium text-lg">Airline</li>
                <li className="text-[#5E6282] font-medium text-lg">
                  Low fare tips
                </li>
              </ul>
            </div>
          </div>
          <div className="justify-self-center">
            <ul className="mt-8 flex gap-6">
              <li>
                <img src={Facebook} alt="Facebook logo" />
              </li>
              <li>
                <img src={Instagram} alt="Instagram logo" />
              </li>
              <li>
                <img src={Twitter} alt="Twitter logo" />
              </li>
            </ul>
            <p className="font-medium text-[#5E6282] text-xl text-center mt-5">Discover our app</p>
            <div className="mt-5 flex gap-5">
              <img src={GooglePlay} alt="" />
              <img src={AppleStore} alt="" />
            </div>
          </div>
        </div>
        <p className="text-center text-[#5E6282] font-medium text-sm">All rights reserved@jadoo.co</p>
      </div>
    </footer>
  );
};

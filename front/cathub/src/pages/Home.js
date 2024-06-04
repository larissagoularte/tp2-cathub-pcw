import React from "react";
import BreedsIcon from '../assets/homeIcons/breeds-icon.png';
import InfoIcon from '../assets/homeIcons/info-icon.png';
import CareIcon from '../assets/homeIcons/care-icon.png';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="main-content w-screen bg-neutral-100 flex flex-col justify-center items-center gap-4 pt-14">
        <div className="title font-bold text-indigo-950 xl:text-4xl text-2xl">
            About CatHub
        </div>
        <div className="about-description w-2/3 text-center xl:text-xl">
            CatHub is your ultimate destination for all things cats! Whether you're a seasoned cat owner or just starting your journey with these adorable creatures, we've got you covered. Our mission is to provide valuable information and resources about various cat breeds, cat care tips, training techniques, and more. Feel free to explore our website and discover the wonderful world of cats with CatHub!
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 w-2/3 gap-14 pt-14">
          <Link to='/info'>
            <div className="flex flex-col items-center">
                <img src={InfoIcon} className="w-20" />
                <div className="font-bold text-indigo-950 text-xl">General Info</div>
                <p className="text-center">Learn general information about cats!</p>
            </div>

          </Link>
          <Link to='/breeds'>
            <div className="flex flex-col items-center">
                <img src={BreedsIcon} className="w-20" />
                <div className="font-bold text-indigo-950 text-xl">Breeds</div>
                <p className="text-center">Discover diverse cat breeds to find your purr-fect match when adopting!</p>
            </div>
          </Link>
          <Link to='/care'>
            <div className="flex flex-col items-center">
                <img src={CareIcon} className="w-20" />
                <div className="font-bold text-indigo-950 text-xl">Care</div>
                <p className="text-center">Master the art of nurturing your feline friend with expert care tips!</p>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Home
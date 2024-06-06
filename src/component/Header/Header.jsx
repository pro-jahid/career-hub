import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../assets/logo/CareerHub.png'


const Header = () => {
    const [open, setOpen] =useState(true)
    return (
        <div>
            <header className='bg-gradient-to-r from-indigo-100 py-5 md:py-8 rounded-md px-3 md:px-0 sticky top-0 md:static'>
            <div className="flex items-center justify-between container mx-auto relative">
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
                <button onClick={() => setOpen(!open)} className="md:hidden block text-4xl">
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className={`md:block duration-500 ${open ? 'hidden' : 'block absolute top-14 bg-black text-white w-full rounded-lg py-4'}`}>
                <div className="flex items-center flex-col md:flex-row z-10 md:gap-0 gap-4 flex-wrap justify-between px-5 md:px-0">
                    <ul className="flex items-center gap-4 md:gap-10 text-neutral-500 text-base font-medium font-['Manrope'] md:me-20 lg:me-60 xl:me-96 flex-wrap flex-col md:flex-row">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/static">Statistics</Link>
                        </li>
                        <li>
                            <Link to="/applied">Applied Jobs</Link>
                        </li>
                    </ul>
                    <button className="py-[15px] px-6 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg justify-start items-start gap-2.5 text-white text-xl font-extrabold font-['Manrope']">Star Applying</button>
                </div>
                </div>
            </div>
        </header>
        </div>
    );
};

export default Header;
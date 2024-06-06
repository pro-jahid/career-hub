import Bg1 from '../../assets/Images/bg1.png'
import Bg2 from '../../assets/Images/bg2.png'


const HeroSection = ({children}) => {
    return (
        <div className="bg-gradient-to-r -z-10 md:z-0 relative flex justify-center items-center from-indigo-100 w-full h-[220px]">
            <h2 className="text-zinc-900 text-[32px] font-extrabold font-['Manrope']">
                {children}
            </h2>
            <img className="absolute left-0 hidden md:block" src={Bg1} alt="" />
            <img className="absolute right-0 top-0 hidden md:block" src={Bg2} alt="" />
        </div>
    );
};

export default HeroSection;
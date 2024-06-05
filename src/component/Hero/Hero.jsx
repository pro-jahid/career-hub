import userImg from '../../assets/Images/file.png'

const Hero = () => {
    return (
        <div className='bg-gradient-to-r px-3 md:px-0 from-indigo-100 -z-10'>
            <div className="container mx-auto flex items-center justify-between flex-wrap gap-8 md:gap-0 flex-col-reverse md:flex-row pb-8 md:py-0">
                <div className="w-full md:w-1/2">
                    <h1 className="text-zinc-900 text-3xl md:text-5xl md:text-[4.37rem] font-extrabold font-['Manrope'] text-center md:text-start leading-[50px] md:leading-[80px]">One Step <br /> Closer To Your <br /> <span className='text-indigo-400'>Dream Job</span></h1>
                    <p className="text-neutral-500 text-lg font-medium font-['Manrope'] text-center md:text-start leading-[30px] mt-4">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div className="text-center md:text-start">
                        <button className="px-7 py-[15px] bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg justify-start items-start gap-2.5 inline-flex text-white text-xl font-extrabold font-['Manrope'] mt-5">Get Started</button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-between -z-10 md:z-0">
                    <div></div>
                    <img className='w-full drop-shadow-2xl' src={userImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
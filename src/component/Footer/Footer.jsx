import socialLogo from '../../assets/icons/social.png'
const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-white py-[60px]">
            <div className="container mx-auto grid md:grid-cols-5 px-5 md:px-0 gap-12">
                <div className="flex flex-col gap-5">
                    <h2 className="text-white text-[32px] font-extrabold font-['Manrope']">CareerHub</h2>
                    <p className="text-white text-opacity-70 text-base font-normal font-['Manrope']">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <img className='h-[42px] w-[156px] cursor-pointer' src={socialLogo} alt="" />
                </div>
                <ul className="flex flex-col gap-3 text-white text-opacity-70 text-base font-normal font-['Manrope']">
                    <h3 className="text-white text-xl font-semibold font-['Manrope']">Company</h3>
                    <li>About Us</li>
                    <li>Work</li>
                    <li>Latest News</li>
                    <li>Careers</li>
                </ul>
                <ul className="flex flex-col gap-3 text-white text-opacity-70 text-base font-normal font-['Manrope']">
                    <h3 className="text-white text-xl font-semibold font-['Manrope']">Product</h3>
                    <li>Prototype</li>
                    <li>Plans & Pricing</li>
                    <li>Customers</li>
                    <li>Integrations</li>
                </ul>
                <ul className="flex flex-col gap-3 text-white text-opacity-70 text-base font-normal font-['Manrope']">
                    <h3 className="text-white text-xl font-semibold font-['Manrope']">Support</h3>
                    <li>Help Desk</li>
                    <li>Sales</li>
                    <li>Become a Partner</li>
                    <li>Developers</li>
                </ul>
                <ul className="flex flex-col gap-3 text-white text-opacity-70 text-base font-normal font-['Manrope']">
                    <h3 className="text-white text-xl font-semibold font-['Manrope']">Contact</h3>
                    <li>524 Broadway , NYC</li>
                    <li>+1 777 - 978 - 5570</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
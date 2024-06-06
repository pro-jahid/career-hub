import { Link, useLoaderData } from "react-router-dom";
import HeroSection from "../HeroSection/HeroSection";
import { addToDb } from "../utilities/fakedb";
import Money from '../../assets/icons/money.png'
import Calender from '../../assets/icons/calendar.png'
import Phone from '../../assets/icons/phone.png'
import Email from '../../assets/icons/email.png'

const JobDetails = () => {
    const jobDetails = useLoaderData();

    const currentUrl = window.location.href;
    const url = currentUrl.split('/');
    const getId = parseInt(url[url.length - 1]);
    const findJob = jobDetails.find(job => job.id === getId);
    
    const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information} = findJob;
    return (
        <div className="">
            <HeroSection>Job Details</HeroSection>
            <div className="container mx-auto grid md:grid-cols-3 gap-[30px] py-14 md:py-[100px] px-3 md:px-0">
                <div className="md:col-span-2">
                    <div className="text-neutral-500 text-base font-medium font-['Manrope'] leading-loose mb-[24px]">
                        <span className="text-zinc-900 text-base font-extrabold font-['Manrope'] leading-loose">Job Description:</span>
                        {job_description}
                    </div>
                    <div className="text-neutral-500 text-base font-medium font-['Manrope'] leading-loose mb-[24px]">
                        <span className="text-zinc-900 text-base font-extrabold font-['Manrope'] leading-loose">Job Responsibility:</span>
                        {job_responsibility}
                    </div>
                    <div className="mb-[24px]">
                        <span className="text-zinc-900 text-base font-extrabold font-['Manrope'] leading-loose">Educational Requirements:</span>
                        <p className="text-neutral-500 text-base font-semibold font-['Manrope'] leading-loose mt-[5px]">{educational_requirements}</p>
                    </div>
                    <div>
                        <span className="text-zinc-900 text-base font-extrabold font-['Manrope'] leading-loose">Experiences:</span>
                        <p className="text-neutral-500 text-base font-semibold font-['Manrope'] leading-loose mt-[5px]">{experiences}</p>
                    </div>
                </div>
                <div className="">
                    <div className="bg-gradient-to-r from-indigo-200 to-violet-200 rounded-lg p-[30px]">
                        <h2 className="text-zinc-900 pb-4 text-xl font-extrabold font-['Manrope'] border-b border-indigo-400 border-opacity-50">Job Details</h2>
                        <div className='my-4 flex gap-2'>
                            <img src={Money} alt="" />
                            <h4 className="text-zinc-700 text-xl font-bold font-['Manrope']">Salary: <span className="text-neutral-500 text-xl font-medium font-['Manrope']">{salary} (Per Month)</span></h4>
                            
                        </div>
                        <div className='my-4 flex gap-2 mb-8'>
                            <img src={Calender} alt="" />
                            <h4 className="text-zinc-700 text-xl font-bold font-['Manrope']">Job Title: <span className="text-neutral-500 text-xl font-medium font-['Manrope']">{job_title}</span></h4>
                        </div>
                        <h2 className="text-zinc-900 pb-4 text-xl font-extrabold font-['Manrope'] border-b border-indigo-400 border-opacity-50">Contact Information</h2>
                        <div className='my-4 flex gap-2'>
                            <img src={Phone} alt="" />
                            <h4 className="text-zinc-700 text-xl font-bold font-['Manrope']">Phone: <span className="text-neutral-500 text-xl font-medium font-['Manrope']">{contact_information.phone}</span></h4>
                        </div>
                        <div className='my-4 flex gap-2'>
                            <img src={Email} alt="" />
                            <h4 className="text-zinc-700 text-xl font-bold font-['Manrope']">Email: <span className="text-neutral-500 text-xl font-medium font-['Manrope']">{contact_information.email}</span></h4>
                        </div>
                        <div className='my-4 flex gap-2 items-start'>
                            <img src={Location} alt="" />
                            <h4 className="text-zinc-700 text-xl font-bold font-['Manrope']">Address: <span className="text-neutral-500 text-xl font-medium font-['Manrope']">{contact_information.address}</span></h4>
                        </div>
                    </div>
                    <Link to="/applied">
                        <button onClick={() => addToDb(findJob.id)} className={`w-full py-[19px] mt-6 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg text-white text-xl font-extrabold font-['Manrope'] ${!open ? 'opacity-50': ''}`}>Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
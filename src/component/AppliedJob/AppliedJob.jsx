import { Link } from "react-router-dom";
import LocationImg from '../../assets/icons/Location.png'
import MoneyImg from '../../assets/icons/money.png'

const AppliedJob = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, job_type, location, salary, id} = job;
    return (
        <div>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 p-[30px]">
            <div className="flex gap-[32px] items-center">
            <div className="bg-zinc-100 rounded-lg flex items-center justify-center w-[240px] h-[240px] p-5">
                <img src={logo} alt="" />
            </div>
            <div>
                <h2 className="text-zinc-700 text-2xl font-extrabold font-['Manrope'] mb-[8px]">{job_title}</h2>
                <h6 className="text-neutral-500 text-2xl font-semibold font-['Manrope']">{company_name}</h6>
                <div className="flex gap-[16px] py-[16px]">
                    <button className="text-indigo-400 text-base font-extrabold font-['Manrope'] px-[19px] py-[9px] rounded border border-indigo-400 hover:bg-indigo-500 hover:text-white">{remote_or_onsite}</button>
                    <button className="text-indigo-400 text-base font-extrabold font-['Manrope'] px-[19px] py-[9px] rounded border border-indigo-400 hover:bg-indigo-500 hover:text-white">{job_type}</button>
                </div>
                <div className="flex gap-[24px] text-neutral-500 text-xl font-semibold font-['Manrope']">
                    <div className="flex gap-2">
                        <img src={LocationImg} alt="" />
                        <p>{location}</p>
                    </div>
                    <div className="flex gap-2">
                        <img src={MoneyImg} alt="" />
                        <p>{salary}</p>
                    </div>
                </div>
            </div>
            </div>
            <Link to={`/job/${id}`}>
                    <button className="text-white text-xl font-extrabold font-['Manrope'] px-[18px] py-[11px] bg-gradient-to-r from-indigo-400 to-violet-500 rounded">View Details</button>
            </Link>
        </div>
        </div>
    );
};

export default AppliedJob;
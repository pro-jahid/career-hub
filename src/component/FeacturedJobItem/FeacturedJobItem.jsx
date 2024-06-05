import { Link } from 'react-router-dom';
import Location from '../../assets/icons/Location.png';

const FeacturedJobItem = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, job_type, location, salary, id} = job;
    return (
        <div className="rounded-lg border border-gray-200 p-[40px] flex flex-col items-center md:items-start">
            <div>
                <img src={logo} alt="" />
            </div>
            <h2 className="text-zinc-700 text-2xl font-extrabold font-['Manrope'] mt-[25px] mb-[8px]">{job_title}</h2>
            <h4 className="text-neutral-500 text-xl font-semibold font-['Manrope']">{company_name}</h4>
            <div className="flex gap-4 py-[16px]">
                <button className="text-indigo-400 text-base font-extrabold font-['Manrope'] px-[19px] py-[9px] rounded border border-indigo-400 hover:bg-indigo-500 hover:text-white">{remote_or_onsite}</button>
                <button className="text-indigo-400 text-base font-extrabold font-['Manrope'] px-[19px] py-[9px] rounded border border-indigo-400 hover:bg-indigo-500 hover:text-white">{job_type}</button>
            </div>
            <div className="flex gap-3 md:gap-6 items-center flex-wrap text-neutral-500 text-xl font-semibold font-['Manrope']">
                <p className='flex gap-2 items-center'>
                    <img src={Location} alt="" />
                    {location}
                </p>
                <p>{salary}</p>
            </div>
            <div className="mt-[24px]">
                <Link to={`/job/${id}`}>
                    <button className="text-white text-xl font-extrabold font-['Manrope'] px-[18px] py-[11px] bg-gradient-to-r from-indigo-400 to-violet-500 rounded">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default FeacturedJobItem;
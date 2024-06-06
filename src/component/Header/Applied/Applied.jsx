

import AppliedJob from "../../AppliedJob/AppliedJob";
import HeroSection from "../../HeroSection/HeroSection";
import { getShoppingCart } from "../../utilities/fakedb";
import { useLoaderData } from "react-router-dom";

const Applied = () => {
    const jobsData = useLoaderData(); 
    const getJobApplied = getShoppingCart();

    const findJob = [];
    for(const getIds in getJobApplied){
        const getJobData = jobsData.find(job => job.id == getIds);
        findJob.push(getJobData)
    }

    return (
        <div>
            {<HeroSection>Applied Jobs</HeroSection>}
            <div className="container mx-auto py-[100px]">
                <div className="pb-[32px] text-end">
                    <select className="outline-none bg-zinc-100 p-2 rounded-lg text-zinc-700 text-xl font-semibold font-['Manrope']"> 
                        <option selected>Filter By</option>
                        <option value="Remote">Remote</option>
                        <option value="Onsite">Onsite</option>
                    </select>
                </div>
                <div className="flex flex-col gap-[24px]">
                    {
                        findJob.map(job=> <AppliedJob key={job.id} job={job}></AppliedJob>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Applied;
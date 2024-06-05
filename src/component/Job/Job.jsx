import { useEffect, useState } from "react";
import Item from "../Item/Item";

const Job = () => {
    const [job,setJob]= useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res =>res.json())
        .then(data=> setJob(data))
    },[])
    return (
        <div className="container mx-auto py-[80px] px-3 md:px-0">
            <div className='mb-8'>
                <h1 className="text-center text-zinc-800 text-3xl md:text-5xl font-semibold font-['Manrope'] mb-4">Job Category List</h1>
                <p className="text-center text-neutral-500 text-base font-medium font-['Manrope'] leading-relaxed">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-4 gap-[25px]">
                {
                    job.map(job=> <Item key={job.id} job={job}></Item>)
                }
            </div>
        </div>
    );
};

export default Job;
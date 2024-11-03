import React from 'react'
import LatestJobsCards from './LatestJobsCards'

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8]
function LatestJobs() {
    return (
        <>
            <div className="max-w-6xl mx-auto my-20">
                <h1 className="text-4xl font-bold text-[#10375C]"><span className='text-[#F3C623]'>Find Your Next</span> Career Adventure</h1>
                <div className="grid grid-cols-3 gap-4 my-5">
                    {
                        randomJobs.slice(0,6).map((job) => <LatestJobsCards key={job} job={job}>{job}</LatestJobsCards>)
                    }
                </div>
            </div>
        </>
    )
}

export default LatestJobs
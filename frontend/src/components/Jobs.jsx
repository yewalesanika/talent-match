import React from 'react'
import Navbar from './ui/shared/Navbar'
import Footer from './Footer'
import FilterCard from './FilterCard'
import Job from './Job'

const jobArray = [1, 2, 3, 4, 5, 6, 7, 8]
function jobs() {
    return (
        <>
            <Navbar></Navbar>
            <div className="max-7xl mx-auto mt-5">
                <div className="flex gap-5 ">
                    <div className="w-20%"></div>
                    <FilterCard></FilterCard>
                    {
                        jobArray.length <= 0 ? <span>Job not found</span> :
                        (
                            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
                                <div className="grid grid-cols-3 gap-4">
                                    {
                                        jobArray.map((job) => 
                                            (<div className="">
                                                <Job key={job} job={job}></Job>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default jobs
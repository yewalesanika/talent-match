import React from 'react'
import { Badge } from './ui/badge'

function LatestJobsCards() {
    return (
        <>
            <div className="p-5 rouneded-md shadow-xl bg-white border border-gray-200 cursor-pointer">
                <div className="">
                    <h1 className='font-medium text-lg'>Company Name</h1>
                    <p className='text-sm text-[#10375C]'>India</p>
                </div>
                <div className="">
                    <h1 className='font-bold text-lg my-2'>Job Title</h1>
                    <p className='text-sm text-[#10375C]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                    <Badge className="text-[#10375C] font-bold bg-[#F4F6FF]">12 Positions</Badge>
                    <Badge className="text-[#10375C] font-bold bg-[#F4F6FF]">Part time</Badge>
                    <Badge className="text-[#EB8317] font-bold bg-[#10375C]">6 lpa</Badge>
                </div>
            </div>
        </>
    )
}

export default LatestJobsCards
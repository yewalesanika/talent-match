import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

function Job() {
    return (
        <>
            <div className="p-5 rounded-md shadow-xl bg-white border border-gray-300">
                <div className="flex items-center justify-between">
                    <p className='text-sm text-gray-500'>2 days ago</p>
                    <Button className="bg-[#10375C] rounded-full" size="icon"><Bookmark /></Button>
                </div>
                <div className="flex items-center gap-2 my-2">
                    <Button className="bg-white p-6 hover:bg-white" size="icon">
                        <Avatar>
                            <AvatarImage src="data:image/png;base64,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" />
                        </Avatar>
                    </Button>
                    <div className="">
                        <h1 className='font-medium text-lg '>Microsoft</h1>
                        <p className="text-sm text-gray-500">India</p>
                    </div>
                </div>
                <div className=''>
                    <h1 className='font-bold text-lg my-2'>Title</h1>
                    <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                    <Badge className="text-[#10375C] font-bold bg-[#F4F6FF]">12 Positions</Badge>
                    <Badge className="text-[#10375C] font-bold bg-[#F4F6FF]">Part time</Badge>
                    <Badge className="text-[#EB8317] font-bold bg-[#10375C]">6 lpa</Badge>
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <Button className="bg-[#10375C] text-[#EB8317]">Details</Button>
                    <Button className="bg-[#10375C]">Save For Later</Button>
                </div>
            </div>
        </>
    )
}

export default Job
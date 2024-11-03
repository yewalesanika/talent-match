import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

function HeroSection() {
    return (
        <>
            <div className="text-center">
                <div className="flex flex-col gap-5 my-10">
                    <span className='mx-auto px-4 py-2 rounded-full bg-[#10375C] font-medium text-[#F4F6FF]'>Your <span className='text-[#F3C623]'>#1</span> Destination to Land the Perfect Job!</span>
                    <h1 className="text-5xl font-bold text-[#10375C]">Your Future Starts Here – <br /> <span className="text-[#EB8317]">Let’s Make It Happen!</span></h1>
                    <p className='text-[#10375C]'>Find the job you love and make every day count!</p>
                    <div className="flex w-[40%] shadow-lg border border-[#EB8317] pl-3 rounded-full items-center gap-4 mx-auto">
                        <input type="text" placeholder='find your dream jobs here' className='outline-none border-none w-full' />
                        <Button className="rounded-r-full bg-[#10375C] hover:bg-[#EB8317] hover:text-[#10375C]"><Search className='h-5 w-5 text-[#F3C623] font-bold text-2xl' /></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection
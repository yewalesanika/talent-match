import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filterData = [
    {
        filterType:"Location",
        array:["Pune","Mumbai","Bangalore","Chennai","Hydrabad"]
    },
    {
        filterType:"Industry",
        array:["Frontend Developer","Backend Developer","Java Developer","Ui/Ux Designer","Full Stack Web Developer"]
    },
    {
        filterType:"Salary",
        array:["0-40k","40k-60k","60k-90k","90k-120k","120k+"]
    }
]
function FilterCard() {
    return (
        <>
        <div className='bg-[#F4F6FF] p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr classname="mt-5"/>
            <RadioGroup>
                {
                    filterData.map((data)=>(
                        <div className="">
                            <h1 className='font-bold text-lg'>{data.filterType}</h1>
                            {
                                data.array.map((arr)=>{
                                    return (
                                        <div className="flex items-center space-x-2 my-2">
                                            <RadioGroupItem value={arr} key={arr}></RadioGroupItem>
                                            <Label>{arr}</Label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>
        </div>
        </>
    )
}

export default FilterCard
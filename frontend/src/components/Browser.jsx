import React from 'react'
import Navbar from './ui/shared/Navbar'
import Job from './Job'

const randomJob = [1, 2, 3]

function Browser() {
    return (
        <>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto my-10">
                <h1 className='font-bold text-xl  my-10'>Search Results ({randomJob.length})</h1>
                <div className="grid grid-cols-3 gap-4 mt-5">
                    {
                        randomJob.map((item) => {
                            return (
                                <Job />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Browser
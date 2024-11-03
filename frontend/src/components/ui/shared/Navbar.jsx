import React from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '../popover'
import { Button } from '../button'
import { Avatar, AvatarImage, AvatarFallback } from '../avatar'
import { LogOut, User2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
    // const user = false ;
    const {user} = useSelector(store=>store.auth);
    return (
        <>
            <div className="bg-[#F4F6FF]">
                <div className="flex items-center justify-between mx-auto max-w-5xl h-16">
                    <div className="">
                        <h1 className='text-2xl font-bold text-[#10375C] '>Talent <span className='text-[#F3C623]'>Match</span></h1>
                    </div>
                    <div className='flex items-center gap-12'>
                        <ul className="flex font-medium items-center gap-5">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/jobs">Jobs</Link></li>
                            <li><Link to="/browser">Browse</Link></li>
                        </ul>
                        {
                            !user ? (
                                <div className="flex items-center gap-2">
                                    <Link to="/login"><Button variant="outline" className="hover:bg-[#10375C] hover:text-white">Login</Button></Link>
                                    <Link to='/signup'><Button className="bg-[#F3C623] hover:bg-[#EB8317]">signup</Button></Link>
                                </div>
                            ) : (
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Avatar className="cursor-pointer">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80">
                                        <div className="">
                                            <div className="flex gap-4 space-y-2">
                                                <Avatar className="cursor-pointer">
                                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <div className="">
                                                    <h4 className='font-medium'>Sanika Yewale</h4>
                                                    <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-col my-2 text-gray-600">
                                                <div className="flex w-fit items-center gap-2 cursor-pointer">
                                                    <User2 />
                                                    <Button variant="link">View Profile</Button>
                                                </div>
                                                <div className="flex w-fit items-center gap-2 cursor-pointer">
                                                    <LogOut />
                                                    <Button variant="link">Logout</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
import { React, useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../label'
import { Input } from '../input'
import { RadioGroup } from '../radio-group'
import { Button } from '../button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/lib/constant.js'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'

function Signup() {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
    });

    const navigate = useNavigate();
    const loading = useSelector(store => store.auth.loading)
    const dispatch = useDispatch()

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        // console.log(input);
        const formData = new FormData();

        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);

        if (input.file) { 
            formData.append("file", input.file); 
        }

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/register`,formData,{
                headers:{
                    "Content-Type":"multipart/form-data",
                },
                withCredentials:true
            })
            if(res.data.success)
            {
                navigate("/login")
                toast.success(res.data.message)
            }
        } catch (error) {
            console.log("fe signup", error);
            toast.error(error.response.data.message)
        }
        finally {
            dispatch(setLoading(false));
        }
    }
    return (
        <>
            <div className="">
                <Navbar></Navbar>
                <div className="flex items-center justify-center max-w-7xl mx-auto">
                    <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-4'>
                        <h1 className='font-bold text-xl mb-5'>Sign Up</h1>
                        <div className='my-2'>
                            <Label>Full Name</Label>
                            <Input type="text" value={input.fullname} name="fullname" onChange={changeEventHandler} placeholder="abc"></Input>
                        </div>
                        <div className='my-2'>
                            <Label>Email</Label>
                            <Input type="email" value={input.email} name="email" onChange={changeEventHandler} placeholder="abc@gmail.com"></Input>
                        </div>
                        <div className='my-2'>
                            <Label>Phone Number</Label>
                            <Input type="text" value={input.phoneNumber} name="phoneNumber" onChange={changeEventHandler} placeholder="89643xxxxx"></Input>
                        </div>
                        <div className='my-2'>
                            <Label>Password</Label>
                            <Input type="password" value={input.password} name="password" onChange={changeEventHandler} placeholder="******"></Input>
                        </div>
                        <div className="flex items-center justify-between">
                            <RadioGroup className="flex items-center gap-4 my-4">
                                <div className="flex items-center space-x-2">
                                    <Input type="radio" name="role" value="student" checked={input.role === "student"} onChange={changeEventHandler} className="cursor-pointer"></Input>
                                    <Label htmlFor="option-one">Student</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Input type="radio" name="role" value="recruiter" checked={input.role === "recruiter"} onChange={changeEventHandler} className="cursor-pointer"></Input>
                                    <Label htmlFor="option-two">Recruiter</Label>
                                </div>
                            </RadioGroup>
                            <div className="flex items-center">
                                <Label className="p-5">Profile</Label>
                                <Input accept="image/*" type="file" onChange={changeFileHandler} ></Input>
                            </div>
                        </div>
                        {
                            loading ? <Button className="w-full my-2"><Loader2 className='mr-2 h-4 w4 animate-spin' />Please wait</Button> : <Button type="submit" className="bg-[#F3C623] w-full my-2 hover:bg-[#EB8317]">Login</Button>
                        }
                        <span className='text-sm'>Already an account? <Link to='/login' className='text-blue-600'>Login</Link></span>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
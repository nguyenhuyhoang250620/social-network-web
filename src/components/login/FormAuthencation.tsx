'use client'
import TextField from '@mui/material/TextField';
import { Checkbox, FormControlLabel,Button } from '@mui/material';
const ContentText = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-5 h-full">
            <div className='h-max w-[431px]'>
                <p className="text-black font-semibold text-5xl">Sign in</p>
                <p className="text-black text-base mt-10">If you don’t have an account register</p>
                <p className="text-black text-base">You can <a>Register here !</a></p>
                <TextField
                    required
                    id="outlined-required"
                    label="Email"
                    placeholder='Enter your email address'
                    className='w-full mt-10'
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    type='password'
                    placeholder="Enter your password"
                    className='w-full mt-10'
                />
                <div className='w-full flex justify-between items-center mt-10'>
                    <FormControlLabel control={<Checkbox defaultChecked />} className='text-black' label="Remember me" />
                    <p className='text-gray-400 text-base'>Forgot Password ?</p>
                </div>
                <Button variant="contained" className='bg-[#0C21C1] w-full rounded-3xl mt-10'>Login</Button>
                <p className='text-gray-400 text-base text-center mt-10'>or continue with</p>
                <div className='flex justify-center space-x-3 items-center mt-10'>
                    <img src="/assets/login/logo-1.png" alt="logo1" />
                    <img src="/assets/login/logo-2.png" alt="logo2" />
                    <img src="/assets/login/logo-3.png" alt="logo3" />
                </div>
            </div>
        </div>
    )
}
export default function FormAuthencation() {
    return (
        <div className="w-screen h-screen lg:p-10 p-5 bg-gray-50">
            <div className='bg-white h-full shadow-xl rounded-3xl'>
            <div className="h-[5%] w-full">logo</div>
            <div className="w-full h-[95%] grid grid-cols-12">
                <div className="lg:col-span-6 col-span-12">
                    <ContentText />
                </div>
                <div className="col-span-6 p-10 lg:block hidden">
                    <div className='w-full h-full bg-[#000842] rounded-2xl flex flex-col justify-start items-center'>
                        <img src="/assets/login/logo.png" alt="logo" />
                        <div className='w-full px-20 mt-20'>
                            <p className='text-yellow-50 font-semibold text-4xl'>Sign in to name</p>
                            <p className='text-gray-400 mt-5'>Lorem Ipsum is simply </p>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
}

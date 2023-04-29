import React, { useState, useEffect } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import { BiMessageAltAdd, BiTestTube } from 'react-icons/bi'
import { BsCapsulePill, BsCalendarCheck } from 'react-icons/bs'
import { useLogIn } from '../hooks/useLogin';
import { RiAlertFill } from 'react-icons/ri';
const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {logIn, error} =useLogIn();


    const submitHandler= async (e) => {
        e.preventDefault();
        

        await logIn(email,password)
        
        
        
    }
    return (
        <div className="login w-4/6 bg-white mx-auto flex ">

            <div className=' w-9/12 h-full bg-gray-200 shadow-xl p-20'>
                <Link to={'/'}><img src="./public/assets/log.png" alt="" className='w-3/4 mx-auto' /></Link>
                <p className='text-lg font-serif'>
                    If you have symptoms like those of the common cold, you may have COVID-19. It is important to test yourself to avoid spreading the virus and to initiate early treatment if you are high risk. Are you COVID-19 ready?
                </p>
                <p className='text-lg mt-10 font-serif'>
                    If you are attempting to schedule an appointment online with your provider and do not see available appointment times that meet your needs, please contact your provider’s office directly.</p>

                <div className='w-full flex mt-20'>
                    <div className='w-1/2 h-full border flex'>
                        <div className='w-1/2 h-full border'>
                            <BiMessageAltAdd className='w-20 h-20' />
                        </div>
                        <div>
                            <p className=' font-serif text-xl mr-28 mt-2 text-sky-900'>Communicate with your doctor</p>

                        </div>
                    </div>
                    <div className='w-1/2 h-full border flex'>
                        <div className='w-1/2 h-full border'>
                            <BiTestTube className='w-20 h-20' />
                        </div>
                        <div>
                            <p className=' font-serif text-xl mr-28 mt-2 text-sky-900'>Access your test results</p>


                        </div>
                    </div>
                </div>
                <div className='w-full flex mt-6'>
                    <div className='w-1/2 h-full border flex'>
                        <div className='w-1/2 h-full border'>
                            <BsCapsulePill className='w-20 h-20' />
                        </div>
                        <div>
                            <p className=' font-serif text-xl mr-28 mt-2 text-sky-900'>Request prescription refills</p>

                        </div>
                    </div>
                    <div className='w-1/2 h-full border flex'>
                        <div className='w-1/2 h-full border'>
                            <BsCalendarCheck className='w-20 h-20' />
                        </div>
                        <div>
                            <p className=' font-serif text-xl mr-28 mt-2 text-sky-900'>Manage your appointments</p>


                        </div>
                    </div>
                </div>
            </div>
            <div className='w-3/12 h-full bg-slate-300 shadow-xl'>
                <form className='mt-36' onSubmit={submitHandler}>
                {error && <div className=' w-56 h-10 ml-12 mb-4 flex border-2 border-red-800'>
                    <RiAlertFill className='w-8 h-8 text-red-700'/>
                    <p className='text-red-700 mt-1 ml-3'>{error}</p>
                </div>}
                    <div className='flex flex-col'>
                        <label className='block text-gray-700 text-lg font-mono font-bold mb-2 mx-auto'>Email</label>
                        <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email} className='mx-auto shadow appearance-none border rounded w-56 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username' />

                    </div>
                    <div className='flex flex-col'>
                        <label className='block text-gray-700 text-lg font-mono font-bold mb-2 mt-5 mx-auto'>Password</label>
                        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password} className='mx-auto shadow appearance-none border rounded w-56 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username' />

                    </div>
                    <button  className='log bg-sky-600 h-10 w-56 text-cyan-50 rounded focus:outline-none focus:shadow-outline hover:bg-sky-900 font-bold'>Sign in</button>
                </form>
                <div className='w-full mt-10'>
                    <h1 className='font-serif ml-28'>New User?</h1>
                    <Link to={'/register'} className='log'><button className=' bg-lime-600 h-10 w-56 mt-3 text-cyan-50 rounded focus:outline-none focus:shadow-outline hover:bg-lime-900'>Sign Up Now</button></Link>

                </div>
            </div>
        </div>
    )
}

export default Login;
import React, { useState, useEffect, ReactPropTypes } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSignUp } from '../hooks/useSignup'
import { RiAlertFill } from 'react-icons/ri'



const InputField= () => {
    const [firstName, setFirstName] =useState('')
    const [lastName, setLastName] = useState('')
    const [social, setSocial] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signUp, error } = useSignUp()





    const submitHandler = async (e) => {
        e.preventDefault();

        await signUp(firstName, lastName, social, email, password)

    }
    return (
        <div className="">



            <div className="min-h-screen bg-gray-200 py-6 flex flex-col justify-center sm:py-12">
                <img src="./src/assets/log.png" alt="" className='ji w-96 ' />

                
                <div className="relative py-3 sm:max-w-xl sm:mx-auto mt-14">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

                        <div className="max-w-md mx-auto">



                            <div>
                                {error && <div className=' mb-4 flex'>
                                    <RiAlertFill className='w-8 h-8 text-red-700' />
                                    <p className='text-red-700 mt-1 ml-3'>{error}</p>
                                </div>}
                                <h1 className="text-2xl font-semibold">Please identify yourself</h1>
                            </div>
                            <form onSubmit={submitHandler} className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input autoComplete="off" onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="first name" />
                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">First name</label>
                                    </div>
                                    <div className="relative">
                                        <input autoComplete="off" onChange={(e) => setLastName(e.target.value)} value={lastName} type='text' className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="last name" />
                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Last name</label>
                                    </div>
                                    <div className="relative">
                                        <input autoComplete="off" onChange={(e) => setSocial(e.target.value)} value={social} type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" maxLength={4} placeholder="ssn" />
                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Last 4 digit of SSN</label>
                                    </div>
                                    <div className="relative">
                                        <input autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email} type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="email" />
                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
                                    </div>
                                    <div className="relative">
                                        <input autoComplete="off" onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                        <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                    </div>
                                    <div className="relative">
                                        <button type='submit' className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InputField;
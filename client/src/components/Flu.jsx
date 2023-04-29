import React, { useState, useEffect } from "react";
import { BsCheck2Circle } from 'react-icons/bs'
import {FcCancel} from 'react-icons/fc'
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Flu = () => {
    const navigate = useNavigate()
    const [birthday, setBirthday] = useState('')
    const [vaccine,setVaccine] = useState('')
    const [date,setDate] =useState(new Date())
    const [location, setLocation] = useState('')
    const [error, setError] = useState(null)
    const { user } = useAuthContext()
    const [fields,setFields] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('You must be logged in')
            return 
        }
        
        const flu = { birthday,vaccine,date,location }
        
        const response = await fetch('http://localhost:8000/api/flu', {
                method: 'POST',
                body: JSON.stringify(flu),
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${user.token}`
                }
            })
        
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setFields(json.fields)
        }
        if (response.ok) {
            setError(null)
            navigate('/flu')
            console.log('New Appointment')
        }

    }

    return (
        <div className="w-full h-screen mt-24 bg-gray-300 ">
            <div className="w-full bg-sky-900 p-16">
                <h1 className="font-bold font-serif text-white text-3xl ml-56">Schedule An Appointment With Our Doctors</h1>

            </div>
            <form className="w-full h-full flex" onSubmit={handleSubmit}>
                <div className="w-3/5 h-full  p-24 flex gap-6">
                    <div className="w-3/5 h-full flex flex-col gap-6">

                        
                        <div className="w-96 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                            <div className="flex">
                                <div className="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                                <div>
                                    <p className="font-bold">All fields are required</p>
                                    
                                    {error && (
                                        <p className="font-bold text-red-800">{error}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <input type="text" className={`${fields.includes('birthday')? 'error' : ''} ml-10 p-4 w-72 h-10 rounded-md` } placeholder="Birthday MM/DD/YYYY" onChange={(e) => setBirthday(e.target.value)} value={birthday} />
                        
                        <select className={`${fields.includes('vaccine')? 'error' : ''} ml-10 w-72 h-10 p-2 ` } onChange={(e) => setVaccine(e.target.value)} value={vaccine} >
                            <option  className="font-bold">Pick A Vaccine</option>
                            <option value="Quadrivalent Influenza Vaccine" className="font-bold">Quadrivalent Influenza Vaccine</option>
                            <option value="Fluzone High-Dose Quadrivalent" className="font-bold">Fluzone High-Dose Quadrivalent</option>
                            <option value="Flucelvax Quadrivalent" className="font-bold">Flucelvax Quadrivalent</option>
                        </select>
                        <input type="text" className={`${fields.includes('date')? 'error' : ''} ml-10 p-4 w-72 h-10 rounded-md` } onChange={(e) => setDate(e.target.value)} value={date.toDateString()} />
                        <button type='submit' className="ml-10 w-48 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Schedule Now
                        </button>
                    </div>
                    <div>

                        <p className="font-bold text-xl mb-10">Date Selected : {date.toDateString()}</p>
                        <Calendar onChange={setDate} value={date} />
                    </div>
                </div>
                <div className="w-2/5 ">
                    <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li className="w-full border-b hover:bg-slate-300 border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className=" items-center pl-3">
                                <div>
                                    <input onChange={(e) => setLocation(e.target.value)} value='Centura Medical Group Primary Care Woodlands' type="checkbox" className="w-5 h-5 mt-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label className="w-full py-3 ml-6 font-serif text-xl text-sky-900 dark:text-gray-300">Centura Medical Group Primary Care Woodlands</label>
                                </div>
                                <div className="">
                                    <h1 className="ml-12">4344 Woodlands Blvd.
                                        STE 260
                                        CASTLE ROCK, CO, 80104</h1>
                                    <h1 className="ml-12">303-649-3155</h1>
                                    <div className="flex">
                                        <BsCheck2Circle className="ml-12 mt-6 text-green-600" />
                                        <h1 className="ml-2 mt-5 font-bold">Accepting new patients</h1>
                                    </div>
                                    <div className="flex">
                                        <BsCheck2Circle className="ml-12 mt-2 text-green-600" />
                                        <h1 className="ml-2 mt-1 font-bold">Flu shot available</h1>
                                    </div>
                                </div>


                            </div>
                        </li>
                        <li className="w-full border-b hover:bg-slate-300 border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className=" items-center pl-3">
                                <div>
                                    <input onChange={(e) => setLocation(e.target.value)} value='Aspen Creek Family Medicine' type="checkbox" name='location' className="w-5 h-5 mt-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label className="w-full py-3 ml-6 font-serif text-xl text-sky-900 dark:text-gray-300">Aspen Creek Family Medicine</label>
                                </div>
                                <div className="">
                                    <h1 className="ml-12">19641 E Parker Square Dr
                                        STE A
                                        PARKER, CO, 80134</h1>
                                    <h1 className="ml-12">303-840-3800</h1>
                                    <div className="flex">
                                        <BsCheck2Circle className="ml-12 mt-6 text-green-600" />
                                        <h1 className="ml-2 mt-5 font-bold">Accepting new patients</h1>
                                    </div>
                                    <div className="flex">
                                        <FcCancel className="ml-12 mt-2 text-red-600" />
                                        <h1 className="ml-2 mt-1 font-bold">Flu shot not available</h1>
                                    </div>
                                </div>


                            </div>
                        </li>
                        <li className="w-full border-b hover:bg-slate-300 border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className=" items-center pl-3">
                                <div>
                                    <input onChange={(e) => setLocation(e.target.value)} value='CHPG Cornerstar Primary Care' type="checkbox" className="w-5 h-5 mt-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label className="w-full py-3 ml-6 font-serif text-xl text-sky-900 dark:text-gray-300">CHPG Cornerstar Primary Care</label>
                                </div>
                                <div className="">
                                    <h1 className="ml-12">15901 E Briarwood Cir
                                        STE 200
                                        AURORA, CO, 80016</h1>
                                    <h1 className="ml-12">303-269-2626</h1>
                                    <div className="flex">
                                        <BsCheck2Circle className="ml-12 mt-6 text-green-600" />
                                        <h1 className="ml-2 mt-5 font-bold">Accepting new patients</h1>
                                    </div>
                                    <div className="flex">
                                        <FcCancel className="ml-12 mt-2 text-red-600" />
                                        <h1 className="ml-2 mt-1 font-bold">Flu shot not available</h1>
                                    </div>
                                </div>


                            </div>
                        </li>
                        <li className="w-full border-b hover:bg-slate-300 border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className=" items-center pl-3">
                                <div>
                                    <input onChange={(e) => setLocation(e.target.value)} value='CHPG Cornerstar Primary Care' type="checkbox" className="w-5 h-5 mt-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label className="w-full py-3 ml-6 font-serif text-xl text-sky-900 dark:text-gray-300">CHPG Cornerstar Primary Care</label>
                                </div>
                                <div className="">
                                    <h1 className="ml-12">15901 E Briarwood Cir
                                        STE 200
                                        AURORA, CO, 80016</h1>
                                    <h1 className="ml-12">303-269-2626</h1>
                                    <div className="flex">
                                        <BsCheck2Circle className="ml-12 mt-6 text-green-600" />
                                        <h1 className="ml-2 mt-5 font-bold">Accepting new patients</h1>
                                    </div>
                                    <div className="flex">
                                        <BsCheck2Circle className="ml-12 mt-2 text-green-600" />
                                        <h1 className="ml-2 mt-1 font-bold">Flu shot available</h1>
                                    </div>
                                </div>


                            </div>
                        </li>
                        <li className="w-full  border-b hover:bg-slate-300 border-gray-200 rounded-t-lg dark:border-gray-600">
                            <div className=" items-center pl-3">
                                <div>
                                    <input onChange={(e) => setLocation(e.target.value)} value='Centura Medical Group Primary Care Elizabeth' type="checkbox" className="w-5 h-5 mt-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label className="w-full py-3 ml-6 font-serif text-xl text-sky-900 dark:text-gray-300">Centura Medical Group Primary Care Elizabeth</label>
                                </div>
                                <div className="">
                                    <h1 className="ml-12">240 Elizabeth Blvd.
                                        Unit B
                                        ELIZABETH, CO</h1>
                                    <h1 className="ml-12">303-231-2436</h1>
                                    <div className="flex">
                                        <BsCheck2Circle className="ml-12 mt-6 text-green-600" />
                                        <h1 className="ml-2 mt-5 font-bold">Accepting new patients</h1>
                                    </div>
                                    <div className="flex">
                                        <BsCheck2Circle className="ml-12 mt-2 text-green-600" />
                                        <h1 className="ml-2 mt-1 font-bold">Flu shot available</h1>
                                    </div>
                                </div>


                            </div>
                        </li>


                    </ul>
                </div>

            </form>


        </div>
    )
}

export default Flu;
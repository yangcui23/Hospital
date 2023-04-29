import React, { useState, useEffect } from "react";
import axios from "axios";
import Detail from "./Detail";
import { BsListColumns } from 'react-icons/bs'
import { Link } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";
const All = () => {
    const { user } = useAuthContext()
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        const fetch = async () => {

            axios.get('http://localhost:8000/api/info', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
                .then(res => {
                    setAppointments(res.data);

                })
                .catch(err => {
                    console.log(err)
                });
        }
        if (user) {
            fetch()
        }
    }, [appointments])



    return (
        <div className="w-4/5 min-h-screen bg-sky-900 mx-auto flex">
            <div className="w-5/6 p-36">
                <div className="flex">
                    <h1 className=" font-serif font-bold text-3xl text-white ml-6 mt-4">Your Appointments Here</h1>
                    <BsListColumns className="mt-6 ml-5 w-7 h-7 text-white" />
                </div>
                {appointments && appointments.map((info) => (
                    <Detail key={info._id} info={info} id={info._id} appointments={appointments} setAppointments={setAppointments} />
                )

                )}
                
            </div>
            <div className="w-1/6 bg-slate-300 p-8">
                <div className="mt-36">
                    <p className="font-serif font-semibold text-sky-900 ml-5">No Appointment?</p>
                    <Link to={'/schedule'}><button className="hover:underline bg-green-400 w-48 h-10 rounded-sm mt-4 text-sky-900 font-mono font-bold hover:bg-green-500">Schedule Now</button></Link>
                </div>
                <div className="mt-12">
                    <p className="font-serif font-semibold text-sky-900 ml-10">New Patient?</p>
                    <Link to={'/register'}><button className="hover:underline bg-green-400 w-48 h-10 rounded-sm mt-4 text-sky-900 font-mono font-bold hover:bg-green-500">SignUp Now</button></Link>
                </div>

            </div>
        </div>
    )
}

export default All;
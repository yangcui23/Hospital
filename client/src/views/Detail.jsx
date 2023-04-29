import React, { useEffect } from "react"
import axios from "axios"
import { format, formatDistanceToNow } from "date-fns";
import { useInfoContext } from "../hooks/useInfoContext";
import { useAuthContext } from "../hooks/useAuthContext";
const Detail = (props) => {
    const { id, info, setAppointments} = props;
    const { user } = useAuthContext()


    const deleteHandler = (e) => {
        e.preventDefault()
        axios.delete('http://localhost:8000/api/info/' + id, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
            .then(res => {
                const newList = info.filter((info) => info._id !== id)
                setAppointments(newList);
                
            })
            .catch(err => console.log(err));
    }


    return (
        <div>

            <div className="w-full  p-12 border bg-gray-200 rounded-lg mt-6 ">

                <h1 className="text-black ml-14">Appointment Time : <span className="font-bold font-mono text-lg text-sky-900" >{format(new Date(info.date), 'MM/dd/yyyy')}</span></h1>
                <h2 className="text-black ml-14">Location : <span className="font-bold font-mono text-lg text-sky-900">{info.location}</span></h2>
                <h2 className="text-black ml-14">Patient Medical History : <span className="font-bold font-mono text-lg test-sky-900">{info.history}</span></h2>
                <h2 className="text-black ml-14">Patient Medication : <span className="font-bold font-mono text-lg text-sky-900">{info.medication}</span></h2>
                <h2 className="text-black ml-14">Patient Symptoms : <span className="font-bold font-mono text-lg text-sky-900">{info.symptoms}</span></h2>
                <h2 className="text-black ml-14">Patient Phone Number : <span className="font-bold font-mono text-lg text-sky-900">{info.phoneNum}</span></h2>
                <h2 className="text-black ml-14"> <span className="font-bold font-mono text-lg text-sky-900">{formatDistanceToNow(new Date(info.createdAt), { addSuffix: true })}</span></h2>
                <div className="flex gap-10 mt-5 w-full">
                    <p className="text-black font-bold mt-1 ml-14">Not able to make it?</p>
                    <button onClick={deleteHandler} className="text-white border bg-zinc-700 border-slate-200 rounded-sm h-9 p-1 hover:bg-sky-700 transform  transition duration-500 hover:scale-125 flex justify-center items-center ">Cancel Appointment</button>

                </div>


            </div>

        </div>
    )
}

export default Detail;
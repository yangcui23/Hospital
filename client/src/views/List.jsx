import React, { useEffect } from "react"
import axios from "axios"
import { format, formatDistanceToNow } from "date-fns";
import { useInfoContext } from "../hooks/useInfoContext";
import { useAuthContext } from "../hooks/useAuthContext";


const List = (props) => {
    const { id, flu, setAppointments} = props;
    const { user } = useAuthContext()


    const deleteHandler = (e) => {
        e.preventDefault()
        axios.delete('http://localhost:8000/api/flu/' + id, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
            .then(res => {
                const newList = flu.filter((flu) => flu._id !== id)
                setAppointments(newList);
                
            })
            .catch(err => console.log(err));
    }
    return (
        <div>

            <div className="w-full  p-12 border bg-gray-200 rounded-lg mt-6 ">

                <h1 className="text-black ml-14">Appointment Time : <span className="font-bold font-mono text-lg text-sky-900" >{format(new Date(flu.date), 'MM/dd/yyyy')}</span></h1>
                <h2 className="text-black ml-14">Location : <span className="font-bold font-mono text-lg text-sky-900">{flu.location}</span></h2>
                <h2 className="text-black ml-14">Vaccine : <span className="font-bold font-mono text-lg text-sky-900">{flu.vaccine}</span></h2>
                <h2 className="text-black ml-14">Birthday : <span className="font-bold font-mono text-lg test-sky-900">{format(new Date(flu.birthday), 'MM/dd/yyyy')}</span></h2>
                <h2 className="text-black ml-14"> <span className="font-bold font-mono text-lg text-sky-900">{formatDistanceToNow(new Date(flu.createdAt), { addSuffix: true })}</span></h2>
                <div className="flex gap-10 mt-5 w-full">
                    <p className="text-black font-bold mt-1 ml-14">Not able to make it?</p>
                    <button onClick={deleteHandler} className="text-white border bg-zinc-700 border-slate-200 rounded-sm h-9 p-1 hover:bg-sky-700 transform  transition duration-500 hover:scale-125 flex justify-center items-center ">Cancel Appointment</button>

                </div>


            </div>

        </div>
    )
}


export default List;
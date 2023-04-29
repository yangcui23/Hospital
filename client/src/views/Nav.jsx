import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLogOut } from "../hooks/useLogout";
import { FiLogOut } from 'react-icons/fi'
import { useRef } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { SiSuperuser } from 'react-icons/si'
const Navbar = () => {
    const [show, setShow] = useState(false);

    const [show3, setShow3] = useState(false);
    const [time, setTime] = useState('')
    const { user } = useAuthContext()

    const catMenu = useRef(null)

    const closeOpenMenus = (e) => {
        if (catMenu.current && show && !catMenu.current.contains(e.target)) {
            setShow(false)
        }
        if (catMenu.current && show3 && !catMenu.current.contains(e.target)) {
            setShow3(false)
        }
    }

    document.addEventListener('mousedown', closeOpenMenus)

    const { logOut } = useLogOut()
    useEffect(() => {
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();

        setTime(month + '/' + date + '/' + year);
    }, []);

    const handleClick = () => {
        logOut();
    }

    return (
        <div className="con shadow-lg ">
            <div className="h-8 bg-sky-900 flex  relative justify-between ">
                <div className="re w-1/6 bg-green-700">
                    <p className="mx-auto text-lg text-white font-bruno ace ml-6">Today is {time}</p>

                </div>
                <div className="flu">
                    <Link to={'/flu-appointment'} className="text-white hover:underline text-end">Schedule Your Flu Shot Appointment</Link>
                </div>
                <div className="rw w-80 bg-teal-400 flex">
                    {user && (

                        <p className="mx-auto text-lg text-sky-900 font-bruno ace ml-6 flex">Welcome Back!<span className=" text-sky-950 ml-8 font-bold font-serif flex mb-1"><SiSuperuser className="mt-1 mr-5" />{user.firstName}</span> </p>
                    )}
                </div>


            </div>
            <div className="nav flex w-full h-24 bg-white border-b items-center flex-wrap p-5 m-auto animated justify-between ">
                <div >
                    <Link to={'/about-centura'}><img src='https://www.logosvgpng.com/wp-content/uploads/2021/12/centura-health-logo-vector-2021.png' alt="centura" className="img" onClick={() => { window.scroll({ top: 0, left: 0 }); }} /></Link>
                </div>
                <div className="button">

                    <button
                        onClick={() => setShow(!show)}
                        className="text-black max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:underline font-medium rounded-lg text-2xl px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Patient Tools <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

                    <div
                        ref={catMenu} className={`${show ? `w-48 top-full opacity-100 visible` : 'top-[110%] invisible opacity-0'} dq absolute rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}>
                        <div className="hover:bg-slate-200 border block py-2 px-5 text-base font-semibold text-body-color  hover:text-primary">

                            <Link to={'/centura-login'} onClick={() => { window.scroll({ top: 0, left: 0 }); }} >Patient Portal</Link>
                        </div>
                        <div className="hover:bg-slate-200 border block py-2 px-5 text-base font-semibold text-body-color  hover:text-primary">

                            <Link to={'/schedule'} onClick={() => { window.scroll({ top: 0, left: 0 }); }} >Schedule Appointment</Link>
                        </div>

                    </div>






                    <button
                        onClick={() => setShow3(!show3)}
                        className="text-black max-w-xs transition duration-300 ease-in-out hover:scale-110 hover:underline font-medium rounded-lg text-2xl px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">About Us <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

                    <div
                        className={`${show3 ? `w-48 top-full opacity-100 visible` : 'top-[110%] invisible opacity-0'} dw absolute rounded border-[.5px] border-light bg-white py-5 shadow-card transition-all`}>
                        <div className="hover:bg-slate-200 border block py-2 px-5 text-base font-semibold text-body-color  hover:text-primary">

                            <Link to={'/about-centura'} >Who We Are</Link>
                        </div>
                        <div className="hover:bg-slate-200 border block py-2 px-5 text-base font-semibold text-body-color  hover:text-primary">

                            <Link to={'/contact-us'} >Contact Us</Link>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <Link to={'/'}><img src="https://media.istockphoto.com/id/1272687883/vector/stay-home-concept-home-love-heart-icon.jpg?s=170667a&w=0&k=20&c=3Sbd006WXLRZYmg5KJ2aLAp0s7wa1_TKdd9-b8cLITI=" className="home justify-end mr-5" onClick={() => { window.scroll({ top: 0, left: 0 }); }} /></Link>
                    <button onClick={handleClick}><FiLogOut className="w-4 h-4 text-sky-800" /></button>

                </div>
            </div>
        </div>


    )
}

export default Navbar;
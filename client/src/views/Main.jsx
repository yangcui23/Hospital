import { Link } from "react-router-dom";
import { GiPlagueDoctorProfile ,GiTreasureMap,GiHospital} from 'react-icons/gi'
import {FaHandHoldingHeart} from 'react-icons/fa'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {GiEvilBook} from 'react-icons/gi'
const Main = () => {
    return (
        <div className="box">
            <div className="video">
                <div className="inv">

                </div>
                <div className="div flex h-48 w-4/5 relative mx-auto rounded-lg">
                    <div className="d w-3/5 h-full opacity-100 bg-sky-900 rounded-lg p-10">
                        <h1 className="text-white text-3xl font-serif">Covid-19</h1>
                        <p className="text-white">While COVID-19 is not as disruptive as it once was, </p>
                        
                        <p className="text-white"> we remain vigilant in taking steps to control the spread of the virus and protect our caregivers,</p>
                        <p className="text-white"> patients and the communities we serve.</p>
                    </div>
                    <div className="f w-full h-full bg-white rounded-lg">
                        <div className="w-full h-36">
                            <GiEvilBook className="book w-11 h-20 text-indigo-800"/>
                            <p className="p text-xl text-sky-900">Appointments</p>
                        </div>
                        <div className="w-full bg-slate-400 h-12 ">
                            <Link to={'/schedule'} className="appoint text-2xl relative group text-sky-900">
                                <span >Schedule Primary Care Online</span>
                                <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-sky-800 group-hover:w-1/2 group-hover:transition-all"></span>
                                <span className="absolute -bottom-1 right-1/2 w-0 h-1 bg-sky-800 group-hover:w-1/2 group-hover:transition-all"></span>
                            </Link>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <div className="photos flex">
                <img src="https://freedesignfile.com/upload/2017/06/Group-of-happy-doctors-at-hospital-Stock-Photo-08.jpg" alt="" className="iw w-1/2" />
                <div className="intro w-1/2 p-20 bg-white">
                    <h1 className="h font-bruno ace text-6xl text-sky-900">Exceptional Health Care</h1>
                    <h1 className="h font-bruno ace text-6xl text-sky-900">With a Personal Mission</h1>
                    <p className=" text-lg mt-16">For over 100 years Centura Health's healing ministry has defined whole person care. We improve lives and strengthen communities by honoring the mind, body and spirit in equal measure. We understand that the way care is provided is as meaningful as the care itself, that's why we listen to and connect with every patient we serve. Then, now and always.</p>
                    <div className="mt-24 w-72 flex max-w-xs transition duration-300 ease-in-out hover:scale-110">   
                        <Link to={'/about-centura'} className="text-3xl text-sky-900 font-bruno ace hover:underline max-w-xs  " onClick={() => {window.scroll({top: 0,left: 0,behavior: "smooth",});}}>About Centura</Link>
                        <AiOutlineArrowRight className="mt-3 text-xl ml-3"/>
                    </div>
                </div>
            </div>
            <div className="eco">
                <div className="w-full h-24 p-10">
                    <h2 className="font-serif text-5xl text-sky-900 text-center">Meet Our Connected Ecosystem</h2>
                    <div className="mt-10">
                        <p className="text-center text-2xl">From big cities to small towns, across Colorado and western Kansas, </p>
                        <p className="text-center text-2xl">our associates are proud members of the communities they serve.</p>

                    </div>
                    <div className="q w-3/5 h-48  mx-auto flex">
                        <div className="w w-1/4 h-full ">
                            <GiPlagueDoctorProfile className="w-12 h-12 mx-auto  text-emerald-500 mt-20" />
                            <p className="text-center text-2xl font-serif text-sky-900">21,000 +</p>
                            <p className="text-center">Incredible Caregivers</p>
                        </div>
                        <div className="w-1/4 h-full ">
                            <GiTreasureMap className="w-12 h-12 mx-auto  text-emerald-500 mt-20"/>
                            <p className="text-center text-2xl font-serif text-sky-900">100 +</p>
                            <p className="text-center">Physician Practices</p>
                        </div>
                        <div className="w-1/4 h-full">
                            <GiHospital className="w-12 h-12 mx-auto  text-emerald-500 mt-20" />
                            <p className="text-center text-2xl font-serif text-sky-900">19</p>
                            <p className="text-center">Hospitals Across Colorado And Wester Kansas</p>
                        </div>
                        <div className="w-1/4 h-full">
                            <FaHandHoldingHeart className="w-12 h-12 mx-auto  text-emerald-500 mt-20"/>
                            <p className="text-center text-2xl font-serif text-sky-900">1</p>
                            <p className="text-center">Mission</p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}


export default Main;
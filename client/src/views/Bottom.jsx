import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import { RiTwitterLine } from 'react-icons/ri'


const Bottom= () => {
    return (
        <div className="bot">
            <div className="top w-3/5 h-3/5 flex mx-auto">
                <div className="w-1/4 flex-col p-8">
                    <h4 className="text-white text-2xl font-bold font-serif">About</h4>
                    <div className="h-14 mt-8">
                        <Link to={'/about-centura'} className="text-white hover:underline" onClick={() => { window.scroll({ top: 0, left: 0 }); }}>About Us</Link>

                    </div>
                    <div className="h-14">

                        <Link to={'/contact-us'} className="text-white hover:underline" onClick={() => { window.scroll({ top: 0, left: 0 }); }}>Contact Us</Link>
                    </div>
                </div>
                <div className="w-1/4 flex-col p-8">
                    <h4 className="text-white text-2xl font-bold font-serif">Patient Tools</h4>
                    <div className="h-14 mt-8">
                        <Link to={'/about-centura'} className="text-white hover:underline">Patient Portal</Link>

                    </div>
                    <div className="h-14">

                        <Link to={'/contact-us'} className="text-white hover:underline">Payment</Link>
                    </div>

                </div>
                <div className="w-1/4"></div>
                <div className="w-1/4">
                    <Link to={'/'}><img src="https://brandstore.centura.org/images/logo-new.png" className="bot-img w-36 ml-32 mt-12  " onClick={() => { window.scroll({ top: 0, left: 0 }); }} /></Link>
                    <p className="mt-10 ml-32 text-white text-lg font-bold">Corporate Office</p>
                    <p className="ml-32 text-white">9100 E Mineral Cir</p>
                    <p className="ml-32 text-white">Centennial, CO 80112</p>
                    <div className="flex mt-10 gap-4 ml-36">
                        <a href="https://www.facebook.com/CenturaHealth"><AiOutlineFacebook className="text-white" /></a>
                        <a href="https://twitter.com/CenturaHealth"><RiTwitterLine className="text-white" /></a>
                        <a href="https://www.instagram.com/centurahealth/"><AiOutlineInstagram className="text-white" /></a>
                        <a href="https://www.linkedin.com/company/centura-health/"><AiOutlineLinkedin className="text-white" /></a>
                    </div>
                </div>
            </div>
            <div className="bott w-full h-1/5 mt-20 flex gap-5">
                <Link to={'/ada-compliance'} className="text-white mt-5 ml-96" onClick={() => { window.scroll({ top: 0, left: 0 }); }}>ADA Compliance</Link>
                <span className="text-white mt-5">|</span>
                <Link to={'/disclaimer'} className="text-white mt-5" onClick={() => { window.scroll({ top: 0, left: 0 }); }}>Disclaimer</Link>
                <span className="text-white mt-5">|</span>
                <Link to={'/privacy-and-policy'} className="text-white mt-5" onClick={() => { window.scroll({ top: 0, left: 0 }); }}>Website Privacy & Policy</Link>
                <p className="text-white mt-5 ml-96">©2023 Centura Health</p>



            </div>
        </div>
    )
}


export default Bottom;
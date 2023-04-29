import { TiLocationArrow } from 'react-icons/ti'

const About = () => {
    return (
        <div>
            <div className="ab p-56">
                <h4 className="text-white font-bold font-sans text-2xl">Caregivers, On a Mission</h4>
                <h1 className="text-white font-bold font-serif text-7xl mt-7">Healing Individuals,</h1>
                <h1 className="text-white font-bold font-serif text-7xl mt-7">Uplifting Communites</h1>
                <h4 className="text-white font-sans text-2xl mt-7">Delivering a higher standard of care in pursuit of health and happiness for all.</h4>

            </div>
            <div className="fam w-full bg-white p-10">
                <h1 className="text-sky-900 font-serif text-center text-6xl">Driven By Deeper Values</h1>
                <div className="d1 w-4/5 mt-20 mx-auto flex">
                    <div className="w-1/2 h-full p-12">
                        <h1 className=" font-serif text-sky-900 text-4xl">Mission</h1>
                        <p className="mt-4">We extend the healing ministry of Christ by caring for those who are ill and by nurturing the health of the people in our communities.</p>
                        <h1 className=" font-serif text-sky-900 text-4xl mt-5">Vision</h1>
                        <p className="mt-4">Every community, every neighborhood, every life — whole and healthy.</p>
                        <h1 className=" font-serif text-sky-900 text-4xl mt-5">Values</h1>
                        <div className='flex mt-3'>
                            <div className='flex font-bold text-sky-900 text-lg'><TiLocationArrow className='mt-1 text-green-500' /> Compassion</div>
                            <div className='flex font-bold text-sky-900 ml-9 text-lg'><TiLocationArrow className='mt-1 text-green-500' /> Respect</div>
                        </div>
                        <div className='flex mt-3'>
                            <div className='flex font-bold text-sky-900 text-lg'><TiLocationArrow className='mt-1 text-green-500' /> Integrity</div>
                            <div className='flex font-bold text-sky-900 ml-16 text-lg'><TiLocationArrow className='mt-1 text-green-500' /> Excellence</div>
                        </div>
                        <div className='flex mt-3'>
                            <div className='flex font-bold text-sky-900 text-lg'><TiLocationArrow className='mt-1 text-green-500' /> Spirituality</div>
                            <div className='flex font-bold text-sky-900 ml-11 text-lg'><TiLocationArrow className='mt-1 text-green-500' /> Stewardship</div>
                        </div>
                    </div>
                    <div className="w-1/2 h-full">
                        <img src="https://st2.depositphotos.com/2848649/6154/i/600/depositphotos_61544265-stock-photo-family-having-fun-outdoors-in.jpg" alt="" className="w-3/5 ml-36" />
                    </div>
                </div>

            </div>
            <div className='w-full  bg-sky-800 p-24'>
                <div className='w-full h-20 border-white border-b-2'>
                    <h1 className='text-white font-serif text-5xl'>A legacy of daring and caring</h1>
                </div>
                <div className='flex'>
                    <div className='mt-10 '>

                        <img  src="https://media.licdn.com/dms/image/C5609AQGUgKAg7bI8vA/company-additional_502_282/0/1635448354555?e=1687996800&v=beta&t=F1sTPOxWPvtFU2Aloz61hxiyJP8vQk3imOktQ9W_7mM" alt="" className='' />
                    </div>
                    <div className='w-3/5 p-24 ml-48'>
                        <p className=' text-yellow-500 text-xl font-mono'>1882</p>
                        <p className='text-white text-3xl font-serif mt-5'>Radical roots</p>
                        <p className='text-white text-xl font-serif mt-7'>Our founder were daring and resourceful. They were Catholic sisters; faithful visionaries with unwavering motivation. They came to the region determined to deliver compassionate care and inspire more whole, healthy individuals. While our ecosystem has evolved since its founding, our commitment to share God's enduring love with those we serve remains the same. </p>

                    </div>
                </div>

            </div>
            <div className='w-full bg-white p-36 flex'>
                <div className='w-2/5 ml-20'>
                    <h4 className=' text-green-600 font-bold text-xl'>Sponsors</h4>
                    <h1 className='text-sky-900 font-serif text-6xl mt-5'>More impact, together</h1>
                    <p className='text-lg mt-5'>In 1996, a transformative chapter began. The union of two mission-driven health care leaders — united by one remarkable Mission, to extend the healing ministry of Christ — enabled Centura Health to amplify its impact and establish a higher standard of whole person care. Both sponsors are inclusive in their values, and emphasize the vital role that all types of spirituality can play in health care.</p>
                </div>
                <div className='w-2/5 ml-96'>
                    <img src="https://www.adventhealth.com/sites/default/files/styles/mobile_image_tall/public/media/pr-adventhealth-logo-hero_5_1.jpg?itok=EsxJWVlw" alt="" />
                </div>

            </div>
            <div className='w-full p-48 bg-white flex'>
                <img src="https://cdn.summitdaily.com/wp-content/uploads/sites/2/2022/07/47d9abad-222d-5d47-a1d5-8945865434de-1024x683.jpg" alt="" />
                <div className='w-3/5 ml-48'>
                    <h4 className=' text-green-600 font-bold text-xl'>Foundations</h4>
                    <h1 className='text-sky-900 font-serif text-6xl mt-5'>Partners in access</h1>
                    <p className='text-lg mt-5'>As a nonprofit, Christian-based organization, we provide services to all of those in need, regardless of their ability to pay. To make this possible, we rely on charitable gifts from our donors. These critical gifts finance improvements, equipment and help us remain on the leading edge of modern medicine. Most importantly, our donors help us serve all patients including the poor, elderly and uninsured.</p>
                </div>

            </div>
        </div>
    )
}

export default About;
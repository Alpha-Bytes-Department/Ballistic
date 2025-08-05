import React from 'react';
import bullet from "@/public/images/Bullet.png"
import Image from 'next/image';
import testimonial1 from "@/public/images/bg-testimonial1.jpg"
import testimonial2 from "@/public/images/bg-testimonial2.jpg"
import testimonial3 from "@/public/images/bg-testimonial3.jpg"

const Features = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex gap-3 items-center'>
                    <Image src={bullet} width={170} height={50} alt='bullet'/>
                    <h1 className='text-2xl font-bold'>Feature</h1>
                    <Image src={bullet} width={170} height={50} alt='bullet' className='rotate-180'/>
                </div>
                <p>Treating all skin co</p>
            </div>
            <div className='grid grid-cols-3 gap-5'>
                <div className=''>
                    <Image alt='textimonial1' width={400} height={400} src={testimonial1}/>
                    <div className='h-20 w-20 rounded-b-full bg-success border-8 border-white'></div>
                    <div>
                        <h1>Real-Time Environmental Data</h1>
                        <p>Automatically pulls local wind, temperature, and altitude for hyper-accurate results.</p>
                    </div>
                </div>
                <div>
                    <Image alt='textimonial2' width={400} height={400} src={testimonial2}/>
                    <div className='h-20 w-20 rounded-b-full bg-success border-8 border-white'></div>
                    <div>
                        <h1>Custom Weapon & Ammo Profiles</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div>
                    <Image alt='textimonial3' width={400} height={400} src={testimonial3}/>
                    <div className='h-20 w-20 rounded-b-full bg-success border-8 border-white'></div>
                    <div>
                        <h1>Ballistics Calculator</h1>
                        <p>Uses physics-based calculations to ensure real-world accuracy, no fluff.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
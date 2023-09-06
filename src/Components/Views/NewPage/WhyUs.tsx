import Image from 'next/image';
import React from 'react'

const WhyUs = () => {
    return (
        <section className=' py-20 bg-[#ffe6b8] bg-opacity-10'>
            <div className='container'>
                <h2 className='text-4xl font-semibold text-center pb-10'>Why organisations around the globe choose Interprefy</h2>
                <div className=' grid grid-cols-1 md:grid-cols-2  gap-10'>
                    {data.map((item, index) => {
                        return (
                            <div className=' flex gap-5'
                                key={index}>
                                <Image className=' object-contain pb-14' src={item.imge} alt={'card-img'} width={60} height={60} />
                                <div>
                                    <h3 className='text-xl font-semibold pb-2'>{item.heading}</h3>
                                    <div className='w-20 h-[2px] bg-[#8624e1] mb-3'></div>
                                    <p className='font-poppins font-semibold'>{item.para}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WhyUs;


const data = [
    {
        imge: '/1x.webp',
        heading: ' Language delivery',
        para: `Our RSI platform can support up to 100 languages and 400 interpreters per event and deliver interpretation to any event setup. `
    },
    {
        imge: '/2x.webp',
        heading: ' Language delivery',
        para: `Our RSI platform can support up to 100 languages and 400 interpreters per event and deliver interpretation to any event setup. `
    },
    {
        imge: '/3x.webp',
        heading: ' Language delivery',
        para: `Our RSI platform can support up to 100 languages and 400 interpreters per event and deliver interpretation to any event setup. `
    },
    {
        imge: '/4x.webp',
        heading: ' Language delivery',
        para: `Our RSI platform can support up to 100 languages and 400 interpreters per event and deliver interpretation to any event setup. `
    },
    {
        imge: '/5x.webp',
        heading: ' Language delivery',
        para: `Our RSI platform can support up to 100 languages and 400 interpreters per event and deliver interpretation to any event setup. `
    },
    {
        imge: '/6x.webp',
        heading: ' Language delivery',
        para: `Our RSI platform can support up to 100 languages and 400 interpreters per event and deliver interpretation to any event setup. `
    },
]
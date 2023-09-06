import Image from 'next/image';
import React from 'react'

const Speaking = () => {
    return (
        <section className='container'>
            <div className='py-10'>
                <h2 className=' text-3xl md:text-4xl font-semibold text-center pb-16'>Speaking Your Languages Since 2015</h2>
                <div className='flex flex-wrap lg:flex-nowrap lg:justify-center gap-7'>
                    {data.map((item, index) => {
                        return (
                            <div className='flex gap-6 items-center justify-center'
                                key={index}>
                                <Image src={item.img} alt={'images'} width={70} height={70} />
                                <div className='lg:block hidden bg-[#8624e1] w-[2px] h-32'></div>
                                <div>
                                    <h3 className='text-3xl font-semibold pb-2'>{item.number}</h3>
                                    <p className='sm:text-xl font-semibold'>{item.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Speaking;

const data = [
    {
        img: '/banner.svg',
        number: '50,000',
        text: 'successful events'
    },
    {
        img: '/location.svg',
        number: '28',
        text: 'countries on the team'
    },
    {
        img: '/settings.svg',
        number: '72',
        text: 'event platform integrations'
    },
]
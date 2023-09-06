import Image from 'next/image';
import React from 'react'

const Speaking = () => {
    return (
        <section className='container'>
            <div className='py-10'>
                <h2 className=' text-3xl md:text-4xl font-semibold text-center pb-16'>Speaking Your Languages Since 2015</h2>
                <div className='flex flex-wrap lg:flex-nowrap lg:justify-between gap-20 max-w-[900px] mx-auto'>
                    {data.map((item, index) => {
                        return (
                            <div className=''
                                key={index}>
                                <Image className='min-h-[120px] mx-auto flex justify-center pb-4' src={item.img} alt={'images'} width={70} height={70} />
                                <div>
                                    <h3 className='text-3xl font-semibold pb-2 text-center'>{item.number}</h3>
                                    <p className='sm:text-xl font-semibold text-center'>{item.text}</p>
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
import Image from 'next/image';
import React from 'react'

const Unlock = () => {
    return (
        <section className='container'>
            <div className='  py-20'>
                <h2 className='text-5xl text-center font-semibold pb-8'>Unlock Global Opportunities</h2>
                <p className=' text-center font-medium text-gray-500 pb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi soluta modi ut vero est, deleniti consequatur maxime asperiores cumque sint esse debitis tenetur ducimus adipisci delectus quo, suscipit minima ab?</p>
                <div className='flex flex-wrap md:flex-nowrap justify-center gap-10'>
                    {data.map((item, index) => {
                        return (
                            <div className='card-shadow border px-4 pt-2 pb-6 rounded-md' key={index}>
                                <Image className='pb-5 rounded-t-md' src={item.img} alt={'cards-img'} width={500} height={500} />
                                <h2 className='text-2xl font-semibold pb-3'>{item.heading}</h2>
                                <p className=' font-medium pb-10'>{item.para}</p>
                                <span className=' font-medium text-[#8624E1] border-b-2 border-b-[#8624E1] hover:border-black hover:text-black duration-500 cursor-pointer'>
                                    {item.btn}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Unlock;


const data = [
    {
        img: '/handson.webp',
        heading: 'Simultaneous interpretation',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, laboriosam.',
        btn: 'Explore interpretation'
    },
    {
        img: '/handson.webp',
        heading: 'Simultaneous interpretation',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, laboriosam.',
        btn: 'Explore captions'
    },
    {
        img: '/handson.webp',
        heading: 'Simultaneous interpretation',
        para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, laboriosam.',
        btn: 'Explore AI translation'
    },

]
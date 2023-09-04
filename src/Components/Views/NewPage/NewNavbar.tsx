import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { BiMenu } from 'react-icons/bi';
import { FaCross, FaHamburger } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

const NewNavbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [handleNav, sethandleNav] = useState(false)

    const solutionsDropdownRef = useRef(null);
    const resourcesDropdownRef = useRef(null);
    const aboutDropdownRef = useRef(null);

    const handleHover = (link: any) => {
        setActiveDropdown(link);
    };

    const handleCloseDropdown = () => {
        setActiveDropdown(null);
    };

    const handlenavbar = () => {
        sethandleNav(!handleNav)
    }

    return (
        <nav>
            <div className='flex justify-between items-center container z-[1000] relative'>
                <div className="max-w-[300px]">
                    <Link href={"/"}>
                        <Image loading="lazy" src="/logo.png" alt="logo" width={1000} height={0} />
                    </Link>
                </div>
                <div
                    className=" hidden lg:flex justify-between gap-5 cursor-pointer"
                    onMouseLeave={handleCloseDropdown}
                >
                    {links.map((item, index) => (
                        <div
                            className='flex gap-10 items-center text-lg'
                            key={index}
                            onMouseEnter={() => handleHover(item.link)}
                        >
                            {item.link}
                        </div>
                    ))}
                    <ul
                        ref={solutionsDropdownRef}
                        className={`absolute inset-x-0 w-full top-[64px] pt-6 z-20 py-2 rounded-lg shadow-xl`}
                        style={{
                            background: `linear-gradient(to bottom, transparent 10px, #fff 30px)`,
                            display: activeDropdown === 'Solutions' ? 'block' : 'none',
                        }}
                    >
                        <div className='flex justify-between gap-6 container relative'>
                            <div>
                                {fistImage.map((item, index) => (
                                    <div key={index}>
                                        <h2 className='text-2xl pb-6 font-semibold'>{item.mainHeading}</h2>
                                        <div className='pb-10'>
                                            {item.innerData.map((newItem, idx) => {
                                                return (
                                                    <div className='flex gap-2 items-center max-w-[300px] font-normal pb-5 cursor-pointer'
                                                        key={idx}
                                                    >
                                                        <Image src={newItem.img} alt={'images'} width={55} height={55} />
                                                        <span className='text-base'>{newItem.text}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                    </div>
                                ))}
                            </div>
                            <div>
                                {text.map((item, index) => (
                                    <div key={index}>
                                        <h2 className='text-2xl pb-6 font-semibold'>{item.mainHeading}</h2>
                                        {item.innerData.map((newItem, idx) => {
                                            return (
                                                <div className='flex gap-2 items-center max-w-[360px] font-normal pb-5 cursor-pointer'
                                                    key={idx}
                                                >
                                                    <span className='text-base'>{newItem.text}</span>
                                                </div>
                                            )
                                        })}
                                        <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                    </div>
                                ))}
                            </div>
                            <div>
                                {integrations.map((item, index) => (
                                    <div key={index}>
                                        <h2 className='text-2xl pb-6 font-semibold'>{item.mainHeading}</h2>
                                        <div className=' grid grid-cols-3 gap-5  pb-10'>
                                            {item.innerData.map((newItem, idx) => {
                                                return (
                                                    <div className='cursor-pointer'
                                                        key={idx}
                                                    >
                                                        <Image src={newItem.img} alt={'images'} width={70} height={70} />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ul>
                    <ul
                        ref={resourcesDropdownRef}
                        className={`absolute inset-x-0 w-full top-[64px] pt-6 z-20 py-8 rounded-lg shadow-xl`}
                        style={{
                            background: `linear-gradient(to bottom, transparent 10px, #fff 30px)`,
                            display: activeDropdown === 'Resources' ? 'block' : 'none', // Set display based on activeDropdown state
                        }}
                    >
                        <div className='flex justify-between gap-6 container relative'>
                            <div>
                                {secDrop2One.map((item, index) => (
                                    <div key={index}>
                                        <h2 className='text-2xl pb-6 font-semibold'>{item.mainHeading}</h2>
                                        <div className='pb-10'>
                                            {item.innerData.map((newItem, idx) => {
                                                return (
                                                    <div className='flex gap-2 items-center max-w-[300px] font-normal pb-5 cursor-pointer'
                                                        key={idx}
                                                    >
                                                        <span className='text-base'>{newItem.text}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                    </div>
                                ))}
                            </div>
                            <div>
                                {secDrop2Two.map((item, index) => (
                                    <div key={index} className=''>
                                        <h2 className='text-2xl pb-6 font-semibold'>{item.mainHeading}</h2>
                                        {item.innerData.map((newItem, idx) => {
                                            return (
                                                <div className='flex gap-2 items-center max-w-[360px] font-normal  cursor-pointer pb-4'
                                                    key={idx}
                                                >
                                                    <span className='text-base'>{newItem.text}</span>
                                                </div>
                                            )
                                        })}
                                        <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                    </div>
                                ))}
                            </div>
                            <div>
                                {secDrop2Three.map((item, index) => (
                                    <div key={index}>
                                        <h2 className='text-2xl pb-6 font-semibold'>{item.mainHeading}</h2>
                                        <div className=' '>
                                            {item.innerData.map((newItem, idx) => {
                                                return (
                                                    <div className=''
                                                        key={idx}
                                                    >
                                                        {newItem.video}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ul>
                    <ul
                        ref={aboutDropdownRef}
                        className={`absolute inset-x-0 w-full top-[64px] pt-6 z-20 py-2 rounded-lg shadow-xl`}
                        style={{
                            background: `linear-gradient(to bottom, transparent 10px, #fff 30px)`,
                            display: activeDropdown === 'About' ? 'block' : 'none',
                        }}
                    >
                        <div className='flex justify-between gap-6 container relative'>
                            <div>
                                {secDrop3One.map((item, index) => (
                                    <div key={index}>
                                        <h2 className='text-2xl pb-6 font-semibold'>{item.mainHeading}</h2>
                                        <div className='pb-10'>
                                            {item.innerData.map((newItem, idx) => {
                                                return (
                                                    <div className='flex gap-2 items-center max-w-[300px] font-normal pb-5 cursor-pointer'
                                                        key={idx}
                                                    >
                                                        <span className='text-base'>{newItem.text}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                    </div>
                                ))}
                            </div>
                            <div>
                                {secDrop3Two.map((item, index) => (
                                    <div key={index}>
                                        <h2 className='text-2xl pb-6 font-semibold'>{item.mainHeading}</h2>
                                        <div className='pb-16'>
                                            {item.innerData.map((newItem, idx) => {
                                                return (
                                                    <div className='flex gap-2 items-center max-w-[360px] font-normal pb-4 cursor-pointer'
                                                        key={idx}
                                                    >
                                                        <span className='text-base'>{newItem.text}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                    </div>
                                ))}
                            </div>
                            <div>
                                {secDrop3Three.map((item, index) => (
                                    <div key={index}>
                                        <h2 className='text-2xl pb-6 font-semibold'>{item.mainHeading}</h2>
                                        <div className=''>
                                            {item.innerData.map((newItem, idx) => {
                                                return (
                                                    <div className='cursor-pointer'
                                                        key={idx}
                                                    >
                                                        <div>
                                                            {newItem.video}
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ul>
                    <span className='text-sm px-3 py-2 flex justify-center items-center rounded-full border-2 border-gray-600 '>
                        Get A Demo
                    </span>
                    <span className=' text-sm px-3 py-2 flex justify-center items-center rounded-full bg-[#8624e1] text-white'>
                        Start bFree Trail
                    </span>
                </div>
                <span className='text-4xl cursor-pointer lg:hidden block'
                    onClick={handlenavbar}
                >
                    {handleNav ? (
                        <RxCross1 />
                    ) : (
                        <BiMenu />
                    )
                    }
                </span>
                <div className={` absolute z-[500] py-8 transition-all min-h-[370px] top-[105px] duration-700 bg-white max-w-[300px] sm:max-w-[400px] px-10 text-black w-full ${handleNav ? ' translate-x-[140px] opacity-100 ' : '  translate-x-[1000px] opacity-0'}`}>
                    {handleNav && (
                        <div
                            className=" flex flex-col justify-between gap-5 cursor-pointer"
                            onMouseLeave={handleCloseDropdown}
                        >
                            {links.map((item, index) => (
                                <div
                                    className='flex gap-10 items-center text-lg'
                                    key={index}
                                    onMouseEnter={() => handleHover(item.link)}
                                >
                                    {item.link}
                                </div>
                            ))}
                            <ul
                                ref={solutionsDropdownRef}
                                className={`absolute inset-x-0 w-full top-[50px] pt-6 z-20 py-2 rounded-lg shadow-xl`}
                                style={{
                                    background: `linear-gradient(to bottom, transparent 10px, #fff 30px)`,
                                    display: activeDropdown === 'Solutions' ? 'block' : 'none',
                                }}
                            >
                                <div className='flex flex-col justify-between gap-6 container relative'>
                                    <div>
                                        {fistImage.map((item, index) => (
                                            <div key={index}>
                                                <h2 className='text-2xl pb-6 font-semibold'>{item.mainHeading}</h2>
                                                <div className=' pb-1 sm:pb-10'>
                                                    {item.innerData.map((newItem, idx) => {
                                                        return (
                                                            <div className='flex gap-2 items-center max-w-[300px] font-normal pb-5 cursor-pointer'
                                                                key={idx}
                                                            >
                                                                <Image src={newItem.img} alt={'images'} width={55} height={55} />
                                                                <span className='text-base'>{newItem.text}</span>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        {text.map((item, index) => (
                                            <div key={index}>
                                                <h2 className='text-2xl pb-1 sm:pb-6 font-semibold'>{item.mainHeading}</h2>
                                                {item.innerData.map((newItem, idx) => {
                                                    return (
                                                        <div className='flex gap-2 items-center max-w-[360px] font-normal pb-5 cursor-pointer'
                                                            key={idx}
                                                        >
                                                            <span className='text-base'>{newItem.text}</span>
                                                        </div>
                                                    )
                                                })}
                                                <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        {integrations.map((item, index) => (
                                            <div key={index}>
                                                <h2 className='text-2xl pb-6 font-semibold'>{item.mainHeading}</h2>
                                                <div className=' grid grid-cols-3 gap-5  pb-10'>
                                                    {item.innerData.map((newItem, idx) => {
                                                        return (
                                                            <div className='cursor-pointer'
                                                                key={idx}
                                                            >
                                                                <Image src={newItem.img} alt={'images'} width={70} height={70} />
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ul>
                            <ul
                                ref={resourcesDropdownRef}
                                className={`absolute inset-x-0 w-full top-[100px] pt-6 z-20 py-8 rounded-lg shadow-xl`}
                                style={{
                                    background: `linear-gradient(to bottom, transparent 10px, #fff 30px)`,
                                    display: activeDropdown === 'Resources' ? 'block' : 'none', // Set display based on activeDropdown state
                                }}
                            >
                                <div className='flex flex-col justify-between gap-6 container relative'>
                                    <div>
                                        {secDrop2One.map((item, index) => (
                                            <div key={index}>
                                                <h2 className='text-2xl pb-6 font-semibold'>{item.mainHeading}</h2>
                                                <div className=' pb-1 sm:pb-10'>
                                                    {item.innerData.map((newItem, idx) => {
                                                        return (
                                                            <div className='flex gap-2 items-center max-w-[300px] font-normal pb-5 cursor-pointer'
                                                                key={idx}
                                                            >
                                                                <span className='text-base'>{newItem.text}</span>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        {secDrop2Two.map((item, index) => (
                                            <div key={index} className=''>
                                                <h2 className='text-2xl pb-6 font-semibold'>{item.mainHeading}</h2>
                                                {item.innerData.map((newItem, idx) => {
                                                    return (
                                                        <div className='flex gap-2 items-center max-w-[360px] font-normal  cursor-pointer pb-4'
                                                            key={idx}
                                                        >
                                                            <span className='text-base'>{newItem.text}</span>
                                                        </div>
                                                    )
                                                })}
                                                <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        {secDrop2Three.map((item, index) => (
                                            <div key={index}>
                                                <h2 className='text-2xl pb-6 font-semibold'>{item.mainHeading}</h2>
                                                <div className=' '>
                                                    {item.innerData.map((newItem, idx) => {
                                                        return (
                                                            <div className=''
                                                                key={idx}
                                                            >
                                                                {newItem.video}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ul>
                            <ul
                                ref={aboutDropdownRef}
                                className={`absolute inset-x-0 w-full top-[150px] pt-6 z-20 py-2 rounded-lg shadow-xl`}
                                style={{
                                    background: `linear-gradient(to bottom, transparent 10px, #fff 30px)`,
                                    display: activeDropdown === 'About' ? 'block' : 'none',
                                }}
                            >
                                <div className='flex flex-col justify-between gap-6 container relative'>
                                    <div>
                                        {secDrop3One.map((item, index) => (
                                            <div key={index}>
                                                <h2 className='text-2xl pb-6 font-semibold'>{item.mainHeading}</h2>
                                                <div className=' pb-1 sm:pb-10'>
                                                    {item.innerData.map((newItem, idx) => {
                                                        return (
                                                            <div className='flex gap-2 items-center max-w-[300px] font-normal pb-5 cursor-pointer'
                                                                key={idx}
                                                            >
                                                                <span className='text-base'>{newItem.text}</span>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        {secDrop3Two.map((item, index) => (
                                            <div key={index}>
                                                <h2 className='text-2xl pb-6 font-semibold'>{item.mainHeading}</h2>
                                                <div className='pb-16'>
                                                    {item.innerData.map((newItem, idx) => {
                                                        return (
                                                            <div className='flex gap-2 items-center max-w-[360px] font-normal pb-4 cursor-pointer'
                                                                key={idx}
                                                            >
                                                                <span className='text-base'>{newItem.text}</span>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        {secDrop3Three.map((item, index) => (
                                            <div key={index}>
                                                <h2 className='text-2xl pb-6 font-semibold'>{item.mainHeading}</h2>
                                                <div className=''>
                                                    {item.innerData.map((newItem, idx) => {
                                                        return (
                                                            <div className='cursor-pointer'
                                                                key={idx}
                                                            >
                                                                <div>
                                                                    {newItem.video}
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <span className=' absolute bottom-4 cursor-pointer'>{item.btn}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ul>
                            <span className='text-sm px-3 py-2 flex justify-center items-center rounded-full border-2 border-gray-600 '>
                                Get A Demo
                            </span>
                            <span className=' text-sm px-3 py-2 flex justify-center items-center rounded-full bg-[#8624e1] text-white'>
                                Start bFree Trail
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default NewNavbar;




const links = [
    {
        link: 'Solutions'
    },
    {
        link: 'Resources'
    },
    {
        link: 'About'
    },
    {
        link: 'Pricing'
    },
]




const fistImage = [
    {
        mainHeading: 'Our solutions',
        innerData: [
            {
                img: '/m1.svg',
                text: ' Remote simultaneous interpretation'
            },
            {
                img: '/m2.svg',
                text: ' Remote simultaneous interpretation'
            },
            {
                img: '/m3.svg',
                text: ' Remote simultaneous interpretation'
            },
        ],
        btn: 'Discover our products '
    }
]


const text = [
    {
        mainHeading: 'Use cases ',
        innerData: [
            {
                text: ' In-person and hybrid conferences'
            },
            {
                text: '  Webinars and virtual events'
            },
            {
                text: ' Trainings and townhalls'
            },
            {
                text: ' Online meetings​'
            },
        ],
        btn: 'Discover our products '
    }
]


const integrations = [
    {
        mainHeading: 'Integrations',
        innerData: [
            {
                img: '/m4.webp',
            },
            {
                img: '/m5.webp',
            },
            {
                img: '/m6.webp',
            },
            {
                img: '/m7.webp',
            },
            {
                img: '/m8.webp',
            },
            {
                img: '/m9.webp',
            },
        ],
        btn: 'Discover our products '
    }
]




const secDrop2One = [
    {
        mainHeading: ' News & inspiration ',
        innerData: [
            {
                text: 'Blog'
            },
            {
                text: 'Company news​'
            },
            {
                text: 'Webinars & ebooks​'
            },
            {
                text: 'Upcoming Interprefied events'
            },
        ],
        btn: 'Discover our products '
    }
]


const secDrop2Two = [
    {
        mainHeading: ' Help center  ',
        innerData: [
            {
                text: ' Frequently asked questions'
            },
            {
                text: 'Knowledge base'
            },
            {
                text: ' Become an Interprefy-approved interpreter'
            },

        ],
        btn: 'Contact us  '
    }
]


const secDrop2Three = [
    {
        mainHeading: ' How RSI works ',
        innerData: [
            {
                video: (
                    <div className="max-w-[300px]  ">
                        <LiteYouTubeEmbed
                            id="K1xWE4MdmTY"
                            title='rafiky'
                        />
                    </div>
                ),
            },
        ],
        btn: 'Discover our products '
    }
]


const secDrop3One = [
    {
        mainHeading: 'Our solutions',
        innerData: [
            {
                text: ' Remote simultaneous interpretation'
            },
            {
                text: ' Remote simultaneous interpretation'
            },
            {
                text: ' Remote simultaneous interpretation'
            },
        ],
        btn: 'Discover our products '
    }
]


const secDrop3Two = [
    {
        mainHeading: 'Use cases ',
        innerData: [
            {
                text: ' In-person and hybrid conferences'
            },
            {
                text: '  Webinars and virtual events'
            },
            {
                text: ' Trainings and townhalls'
            },
            {
                text: ' Online meetings​'
            },
        ],
        btn: 'Discover our products '
    }
]


const secDrop3Three = [
    {
        mainHeading: ' What is Interprefy? ',
        innerData: [
            {
                video: (
                    <div className="w-72 ">
                        <LiteYouTubeEmbed
                            id="K1xWE4MdmTY"
                            title='rafiky'
                        />
                    </div>
                ),
            },
        ],
        btn: 'Discover our products '
    }
]



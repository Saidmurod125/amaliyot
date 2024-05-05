import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "inline-block", background: "red" }}
            onClick={onClick}
        />
    );
}

export default function Resizable() {
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(90);

    function Responsive() {
        var settings = {
            dots: true,
          
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <div className="mb-10 text-black dark:text-white">
                <Slider {...settings} className='w-[100%] flex gap-3 justify-around  text-black dark:text-white mt-10 mb-10'>
                    {mainCard.map((item, index) => (
                        <div key={index} className='ml-2 rounded-lg gap-5 border transition-all duration-800 hover:shadow-lg w-[180px] h-[300px] flex justify-center items-center flex-col cursor-pointer mx-2   text-black dark:text-white'>
                            <img src={item.img} alt="" className='w-[100px] rounded-full h-[100px] mx-auto' />
                            <h2 className='capitalize h-[50px] mt-3 ml-2 font-semibold text-[15px] mb-3 text-center'>{item.text}</h2>
                            <h4 className='text-[#404040] text-[16px] font-normal text-center dark:text-white'>{item.addres}</h4>
                            <p className='text-[#404040] font-normal text-[16px] capitalize dark:text-white text-center'>{item.practice}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
    const mainCard = [
        {
            img: "https://anjumanlar.uz/img/conference-icons/republic-icon.jpg",
            text: 'Turkiston ma’rifatparvar ziyolilar merosining fan, adabiyot, madaniyat hamda ma’naviyat taraqqiyotidagi o‘rni',
            addres: "20.04.2024 Mirzo Qarshi shahri",
            practice: "fan ta'lim"
        },
        {
            img: "https://anjumanlar.uz/storage/UNMfcZhMsRiP55rH7kqGiXbucphO7b9WfYZ7SzAK.jpg",
            text: 'Yangi O‘zbekiston sharoitida tarix va etnologiya fanlarining dolzarb masalalari va istiqbollari',
            addres: "15.03.2024 Termiz shahri",
            practice: "fan ta'lim"
        },
        {
            img: "https://anjumanlar.uz/img/conference-icons/republic-icon.jpg",
            text: "Fan va ta'limda innovasion texnika va pedagogik texnologiyalarning rivojlanish istiqbollari",
            addres: "20.04.2024 Mirzo Qarshi shahri",
            practice: "axborot va kommunikatsiya"
        },
        {
            img: "https://anjumanlar.uz/img/conference-icons/republic-icon.jpg",
            text: "geografiya va kelajakka nazar",
            addres: "24.04.2024  nukus shahri",
            practice: "fan ta'lim"
        },
        {
            img: "https://anjumanlar.uz/storage/UNMfcZhMsRiP55rH7kqGiXbucphO7b9WfYZ7SzAK.jpg",
            text: 'Yangi O‘zbekiston sharoitida tarix va etnologiya fanlarining dolzarb masalalari va istiqbollari',
            addres: "15.03.2024 Termiz shahri",
            practice: "fan ta'lim"
        },
        {
            img: "https://anjumanlar.uz/storage/gJ0e7NVw5JeRORAR5K5Cs9hQzllsgm0gQsnQYGzK.jpg",
            text: "Psixologik tadqiqotlarda muammolar, yutuqlar, innovatsiyalar",
            addres: "22.11.2024  buxoro shahri",
            practice: "fan ta'lim"
        },
        {
            img: "https://anjumanlar.uz/img/conference-icons/republic-icon.jpg",
            text: "yangi o'zbekiston yoshlar ijodida",
            addres: "11.06.2024  mirzo ulug'bek tumani",
            practice: "fan ta'lim"
        }
    ];

    return (
        <div className="container mx-auto mb-10 slider-container ">
            <div className='ml-16 text-black dark:text-white '
                style={{
                    width: width + "%",
                    display: display ? "block" : "block",
                    
                }}
            >
                <Responsive />
            </div>
        </div>
    );
}
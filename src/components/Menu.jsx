import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { IoRemoveOutline } from "react-icons/io5";

function Menu() {
  const slides = [
    {
      url: "https://anjumanlar.uz/storage/sliders/YJip0j6sCGQwxIOrkACQbloKVhwU7qoGiHNZIg9a.jpg",
      name: "Scenic Lake",
      description:
        "Soliq qonunchiligini takomillashtirishning dolzarb masalalari: Milliy va xorijiy tajriba",
    },
    {
      url: "https://anjumanlar.uz/storage/sliders/N1U51mHiOj4D6yVusggEKU8C5UqVdSRZR9OcGCwJ.jpg",
      name: "Mountains at Sunrise",
      description:
        "Raqamli iqtisodiyot sharoitida biznes va tadbirkorlikni rivojlantirishning dolzarb muammolari",
    },
    {
      url: "https://anjumanlar.uz/storage/sliders/rxKqO6zMaYKGvMVEvfMRF8ZmFW2kNNnPNG9HtOMb.jpg",
      name: "Forest Path",
      description:
        "Innovatsion yondashuv asosida moliyaviy hisobotning xalqoro standartlarini joriy etish",
    },
    {
      url: "https://anjumanlar.uz/storage/sliders/442FLGBQMO877TuhaY3n2lzRgxtEtbW8zA8VfLeq.png",
      name: "City Skyline",
      description:
        "Milliy iqtisodiyotni rivojlantirishda zamonaviy marketing konsepsiyalaridan samarali foydalanishning dolzarb masalalari",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (

    <div className="max-w-[1570px] h-[780px] w-full m-auto py-10 px-4 relative group">
      <h1 className="mb-6 text-xl font-medium text-center dark:text-white">
        SAYT TEST REJIMIDA ISHLAMOQDA{" "}
      </h1>

      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full duration-500 bg-center bg-cover"
      >
        <div className="pt-[20%]">
          <p className="flex justify-center text-3xl font-bold text-center text-slate-100">
            Xalqaro va respublika miqyosida oʻtkaziladigan ilmiy va ilmiy texnik
            tadbirlar <br />
            platformasiga xush kelibsiz
          </p>
          <h1 className="text-lg text-center fon44t-sans pt-[16.4rem] text-slate-200">
            {slides[currentIndex].description}
          </h1>
        </div>
      </div>

      <div
        className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer"
        onClick={prevSlide}
        style={{ backgroundColor: "transparent" }}
      >
        <BsChevronCompactLeft size={30} />
      </div>

      <div
        className="hidden group-hover:block absolute top-[60%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer"
        onClick={nextSlide}
        style={{ backgroundColor: "transparent" }}
      >
        <BsChevronCompactRight size={30} />
      </div>

      <div className="flex justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={` cursor-pointer text-4xl ${
              currentIndex === slideIndex ? "text-primary" : "text-gray-500"
            }`}
          >
            <IoRemoveOutline />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

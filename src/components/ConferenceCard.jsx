function ConferenceCard({ conference }) {
    return (

        <div className="container px-2 mx-auto mt-8 mb-10 col-tspan-12 sm:col-span-12">
            <div className="flex items-center py-10 bg-white dark:bg-gray-800 dark:text-white box-shadowed ps-6 sm:ps-8 md:ps-10 dark:shadow-2xl lg:ps-12 xl:ps-20 rounded-xl">
                <div className="flex w-95">
                    <img
                        className="w-24 my-auto rounded-full h-22 sm:me-8 bg-opacity-primary"
                        src="https://anjumanlar.uz/storage/eDX7MqHMdazFjI4uVoQOutNBp3DYwH77BFT4HFfO.jpg"
                        alt="Conference Image"
                    />
                    <div className="pr-6 bg sm:pr-12 md:pr-20 lg:pr-30">
                        <h6 className="mt-0 font-medium">{conference.nomi}</h6>
                        <span className="text-sm">{conference.vaqti}</span>
                        <p className="mt-2 mb-0">Masul tashkilot: {conference.joyi}</p>
                    </div>
                </div>

                <div className="ml-auto card product product--grid">
                    <div className="product-item">
                        <div className="product-item__image">
                            <span className="like-icon">
                                <button type="button" className="content-center">
                                    <i className="la-heart icon lar"></i>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConferenceCard;
import React, { useState } from 'react';
import ConferenceCard from './ConferenceCard'; 
import Pagination from '@mui/material/Pagination';





import Stack from '@mui/material/Stack';

function Data() {
    const anjumanlar = [
        { id: 1, nomi: "Davlat boshqaruvchilarining majlisi", vaqti: "2024-05-10 14:00", joyi: "Davlat palatasi, Toshkent" },
        { id: 2, nomi: "Texnikachilar ittifoqi anjumani", vaqti: "2024-06-15 09:30", joyi: "Texnikachilar markazi, Samarqand" },
        { id: 3, nomi: "Xalqaro innovatsiya forumi", vaqti: "2024-07-20 10:00", joyi: "Dunyo siyosiy va madaniy markazi, Xiva" },
        { id: 4, nomi: "IT kengashining yig'ilishi", vaqti: "2024-08-05 11:30", joyi: "Innovatsion texnologiyalar markazi, Andijon" },
        { id: 5, nomi: "Dunyo ta'lim muassasalarining birligi", vaqti: "2024-09-18 13:45", joyi: "Mamlakatimizning ta'lim markazi, Namangan" },
        { id: 6, nomi: "Oliy o'quv yurtlarining rektoral ko'ngili", vaqti: "2024-10-30 15:20", joyi: "Toshkent davlat yuridik universiteti, Toshkent" },
        { id: 7, nomi: "Turizm sohasi yuksalishining eng yaxshi yo'nalishlari", vaqti: "2024-11-14 09:00", joyi: "Turizm texnologiyalari markazi, Bukhoro" },
        { id: 8, nomi: "Mehnat va ma'naviyat kengashi", vaqti: "2024-12-22 10:30", joyi: "Mehnat va ma'naviyat markazi, Qarshi" },
        { id: 9, nomi: "Iqtisodiyotning rivojlanishi strategiyasi", vaqti: "2025-01-08 12:15", joyi: "Iqtisodiyotni rivojlantirish markazi, Urganch" },
        { id: 10, nomi: "O'zbekistonning 30-yilligi munosabati bilan tanlov", vaqti: "2025-02-20 14:45", joyi: "Davlat milliy teatri, Toshkent" },
        { id: 11, nomi: "Yoshlar festivali", vaqti: "2025-03-18 10:00", joyi: "Yoshlar markazi, Nukus" },
        { id: 12, nomi: "Madaniyat va san'at ko'rgazmasi", vaqti: "2025-04-25 14:30", joyi: "Madaniyat markazi, Jizzax" },
        { id: 13, nomi: "Texnologiyalar va startaplar sammiti", vaqti: "2025-05-10 09:00", joyi: "Texnologiyalar markazi, Farg'ona" },
        { id: 14, nomi: "Oliy ta'lim konferentsiyasi", vaqti: "2025-06-15 11:00", joyi: "Oliy ta'lim markazi, Termez" },
        { id: 15, nomi: "Sanoat innovatsiyalari anjumani", vaqti: "2025-07-25 13:30", joyi: "Sanoat innovatsiyalari markazi, Navoiy" },
        { id: 16, nomi: "O'simliklar ilmiy tadqiqot anjumani", vaqti: "2025-08-30 09:45", joyi: "Ilmiy tadqiqot markazi, Qo'qon" },
        { id: 17, nomi: "Savdo va biznes forum", vaqti: "2025-09-18 15:30", joyi: "Biznes markazi, Andijon" },
        { id: 18, nomi: "Fizika va matematika anjumani", vaqti: "2025-10-10 10:00", joyi: "Fizika va matematika markazi, Samarqand" },
        { id: 19, nomi: "Tarixiy yodgorliklar qo'rg'onlash ko'rgazmasi", vaqti: "2025-11-14 14:00", joyi: "Tarix markazi, Buxoro" },
        { id: 20, nomi: "Kimyoviy muhandislik anjumani", vaqti: "2025-12-22 11:00", joyi: "Kimyoviy muhandislik markazi, Qarshi" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(anjumanlar.length / itemsPerPage); 

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentAnjumanlar = anjumanlar.slice(startIndex, startIndex + itemsPerPage); 

    return (
        <div className=''>
            {currentAnjumanlar.map((conference) => (
                <ConferenceCard  key={conference.id} conference={conference} />
            ))}

            <Stack direction="row" justifyContent="center" mt={2}>
                <Pagination 
                    count={totalPages} 
                    page={currentPage} 
                    onChange={handlePageChange} 
                    color="primary"
                />
            </Stack>
        </div>
    );
}

export default Data;

import React, { useEffect, useState } from 'react';
import ConferenceCard from './ConferenceCard'; 
import Pagination from '@mui/material/Pagination';





import Stack from '@mui/material/Stack';
import useAxios from '../service/useAxios';

function Data() {
    const [anjumanlar, setAnjumanlar] = useState([]);
    
const { data, loading } = useAxios(
    "https://6634d6199bb0df2359a2e7ca.mockapi.io/conference/conference"
  );
 useEffect(() => {
    if (data) {
      setAnjumanlar(data);
    }
  }, [data]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(anjumanlar?.length / itemsPerPage); 
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentAnjumanlar = anjumanlar?.slice(startIndex, startIndex + itemsPerPage); 

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
                    color="primary" className='pagination-style'
                />
            </Stack>
        </div>
    );
}

export default Data;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Breeds = () => {
    const [breeds, setBreeds] = useState([]);

    const truncateDescription = (description, maxLength) => {
        if (description.length <= maxLength) {
            return description;
        } else {
            return description.slice(0, maxLength) + '...';
        }
    };

    useEffect(() => {
        const fetchBreeds = async () => {
            try {
                const response = await fetch('http://localhost:8080/breeds/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if(response.ok) {
                    const data = await response.json(); 
                    setBreeds(data);
                } else {
                    console.error('Failed to fetch breeds...');
                }
            } catch (err) {
                console.error('Error fetching breeds: ', err)
            };
        }
        fetchBreeds();
        
    }, [])
    return (

        <section className='text-gray-900 body-font'>
        <div class="title font-bold text-4xl text-indigo-950 px-14 pt-5">Breeds</div>
          <div className='container px-5 py-12 mx-auto'>
            <div className='flex flex-wrap -m-4'>
                {breeds.map((breed) => (
                    <div key={breed._id} className='p-4 md:w-1/3'>
                    <div className='h-full border-2 border-gray-200 rounded-lg overflow-hidden'>
                      <img className='lg:h-48 md:h-36 w-full object-cover object-center' src={breed.image} alt='blog' />
                      <div className='p-6'>
                        <h2 className='tracking-widest text-xs title-font font-medium text-gray-500 mb-1'>BREED</h2>
                        <h1 className='title-font text-lg font-medium text-indigo-950 mb-3'>{breed.breed}</h1>
                        <p className='leading-relaxed mb-3'>{truncateDescription(breed.description, 100)}</p>
                        <div className='flex items-center flex-wrap '>
                          <Link to={`/breeds/${breed._id}`} className='text-indigo-900 inline-flex items-center md:mb-2 lg:mb-0'>Learn More
                            <svg className='w-4 h-4 ml-2' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'>
                              <path d='M5 12h14'></path>
                              <path d='M12 5l7 7-7 7'></path>
                            </svg>
                          </Link>
                          
                         
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              
            </div>
          </div>
        </section>
    )
}

export default Breeds
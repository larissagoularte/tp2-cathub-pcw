import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const BreedDetails = () => {
    const { _id } = useParams();
    const [breed, setBreed] = useState(null);

    useEffect(() => {
        const fetchBreedDetail = async () => {
            try {
                const response = await fetch(`http://localhost:8080/breeds/${_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
  
                if(response.ok) {
                    const data = await response.json();
                    setBreed(data);
                } else {
                    console.error('Failed to fetch breed details...', response.statusText);
                }
            } catch (err) {
                console.error('Error fetching breed details: ', err)
            };
        }
        fetchBreedDetail();

    }, [_id])

    if (!breed) {
        return null;
    }

    const iconImg = {
        backgroundImage: `url(${breed.icon})`,
    }

    return (
       <section className="text-indigo-950 body-font">
            <div className="container px-5 py-10 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={breed.image}/>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                        <div class="w-24 h-24 inline-flex items-center justify-center bg-cover text-gray-900" style={iconImg}>
                            
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                            <h2 className="font-medium title-font mt-4 text-indigo-950 text-lg">{breed.breed}</h2>
                            <div className="w-12 h-1 bg-indigo-950 rounded mt-2 mb-4"></div>
                            <p className="text-base text-gray-900">{breed.description}</p>
                        </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <div class="grid grid-cols-1 xl:grid-cols-2 gap-4 pt-5">
                            <div>
                                <p class="font-semibold text-gray-900 pb-1">PLAYFULLNESS</p>
                                    <ProgressBar 
                                        completed={breed.playfulness}
                                        customLabel=" " 
                                        maxCompleted={10}
                                        bgColor="#312e81"
                                        height="27px"
                                    />
                            </div>

                            <div>
                                <p class="font-semibold text-gray-900 pb-1">DOCILITY</p>
                                    <ProgressBar 
                                        completed={breed.docility}
                                        customLabel=" " 
                                        maxCompleted={10}
                                        bgColor="#312e81"
                                        height="27px"
                                    />
                            </div>

                            <div>
                                <p class="font-semibold text-gray-900 pb-1">GROOMING REQUIREMENTS</p>
                                    <ProgressBar 
                                        completed={breed.grooming}
                                        customLabel=" " 
                                        maxCompleted={10}
                                        bgColor="#312e81"
                                        height="27px"
                                    />
                            </div>

                            <div>
                                <p class="font-semibold text-gray-900 pb-1">ACTIVITY LEVEL</p>
                                    <ProgressBar 
                                        completed={breed.activity}
                                        customLabel=" " 
                                        maxCompleted={10}
                                        bgColor="#312e81"
                                        height="27px"
                                    />
                            </div>

                            <div>
                                <p class="font-semibold text-gray-900 pb-1">INDEPENDENCE</p>
                                    <ProgressBar 
                                        completed={breed.independence}
                                        customLabel=" " 
                                        maxCompleted={10}
                                        bgColor="#312e81"
                                        height="27px"
                                    />
                            </div>

                            <div>
                                <p class="font-semibold text-gray-900 pb-1">NEED FOR ATTENTION</p>
                                    <ProgressBar 
                                        completed={breed.attention}
                                        customLabel=" " 
                                        maxCompleted={10}
                                        bgColor="#312e81"
                                        height="27px"
                                    />
                            </div>

                            <div>
                                <p class="font-semibold text-gray-900 pb-1">INTELLIGENCE</p>
                                    <ProgressBar 
                                        completed={breed.intelligence}
                                        customLabel=" " 
                                        maxCompleted={10}
                                        bgColor="#312e81"
                                        height="27px"
                                    />
                            </div>

                            <div>
                                <p class="font-semibold text-gray-900 pb-1">FRIENDLINESS TO OTHER PETS</p>
                                    <ProgressBar 
                                        completed={breed.friendliness}
                                        customLabel=" " 
                                        maxCompleted={10}
                                        bgColor="#312e81"
                                        height="27px"
                                    />
                            </div>
                        </div>  
                        <div class="disclaimer text-xs pt-5">Disclaimer: While the characteristics mentioned here may frequently represent this breed, cats are individuals whose personalities and appearances will vary. Please consult the adoption organization for details on a specific pet.</div>         
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default BreedDetails
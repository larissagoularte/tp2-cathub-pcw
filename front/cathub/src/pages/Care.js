import React from 'react';
import exerciseIcon from '../assets/careIcons/exercise-icon.png';
import groomIcon from '../assets/careIcons/groom-icon.png';
import healthIcon from '../assets/careIcons/health-icon.png';
import houseIcon from '../assets/careIcons/house-icon.png';
import loveIcon from '../assets/careIcons/love-icon.png';
import nutritionIcon from '../assets/careIcons/nutrition-icon.png';


const Care = () => {
    return (
        
        <section class="text-indigo-950 body-font">
        <div class="title font-bold text-4xl text-indigo-950 px-14 pt-5">Care</div>
          <div class="container px-5 py-9 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-200 p-6 rounded-lg">
                  <div class="w-14 h-14 inline-flex items-center justify-center rounded-full bg-purple-200 mb-4">
                      <img src={nutritionIcon} class="w-9 mb-1" />
                  </div>
                  <h2 class="text-lg text-indigo-950 font-medium title-font mb-2">Nutrition</h2>
                  <p class="leading-relaxed text-gray-900 text-base">Provide your cat with a balanced diet consisting of high-quality cat food. Make sure they have access to fresh water at all times.</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-200 p-6 rounded-lg">
                  <div class="w-14 h-14 inline-flex items-center justify-center rounded-full bg-purple-200 mb-4">
                      <img src={groomIcon} class="w-9 mb-1 ml-1 " />
                  </div>
                  <h2 class="text-lg text-indigo-950 font-medium title-font mb-2">Grooming</h2>
                  <p class="leading-relaxed text-gray-900 text-base">Regular grooming helps keep your cat's coat clean and reduces shedding. Brush your cat's fur regularly and trim their nails as needed.</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-200 p-6 rounded-lg">
                  <div class="w-14 h-14 inline-flex items-center justify-center rounded-full bg-purple-200 mb-4">
                    <img src={healthIcon} class="w-9" />
                  </div>
                  <h2 class="text-lg text-indigo-950 font-medium title-font mb-2">Healthcare</h2>
                  <p class="leading-relaxed text-gray-900 text-base">Schedule regular check-ups with a veterinarian and keep up with vaccinations and parasite prevention treatments.</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-200 p-6 rounded-lg">
                  <div class="w-14 h-14 inline-flex items-center justify-center rounded-full bg-purple-200 mb-4">
                    <img src={exerciseIcon} class="w-9" />
                  </div>
                  <h2 class="text-lg text-indigo-950 font-medium title-font mb-2">Exercise</h2>
                  <p class="leading-relaxed text-gray-900 text-base">Encourage your cat to stay active with interactive toys and regular play sessions. Provide opportunities for climbing and scratching to satisfy their natural instincts.</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-200 p-6 rounded-lg">
                  <div class="w-14 h-14 inline-flex items-center justify-center rounded-full bg-purple-200 mb-4">
                    <img src={houseIcon} class="w-9 mb-1" />
                  </div>
                  <h2 class="text-lg text-indigo-950 font-medium title-font mb-2">Environment</h2>
                  <p class="leading-relaxed text-gray-900 text-base">Create a safe and stimulating environment for your cat with cozy resting areas, hiding spots, and vertical spaces to explore. Keep toxic plants and dangerous objects out of reach.</p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="border border-gray-200 p-6 rounded-lg">
                  <div class="w-14 h-14 inline-flex items-center justify-center rounded-full bg-purple-200 mb-4">
                    <img src={loveIcon} class="w-9 mt-1" />
                  </div>
                  <h2 class="text-lg text-indigo-950 font-medium title-font mb-2">Love and Attention</h2>
                  <p class="leading-relaxed text-gray-900 text-base">Give your cat plenty of love and attention to strengthen your bond. Spend quality time together, engage in interactive play, and provide affectionate interactions.</p>
                </div>
              </div>
            </div>

          </div>
        </section>
    )
}

export default Care
'use client';

import React, { useState } from 'react';
import Table from '../table/Table';
import Predios from '../../public/Prédios-inteligentes-scaled-e1606835611241.jpg';

const About = () => {
    const [item, setItem] = useState([Predios.src]);
    return (
        <section
            id="about"
            style={{
                backgroundImage: `url(${item})`,
            }}
            className="flex flex-col justify-start items-center gap-5 p-[0]!
            bg-[length:100%_100%]
            [mask-image:linear-gradient(to_top,transparent_0%,black_10%,black_90%,transparent_100%)]
            "
        >
            <div
                className="w-full h-full px-[10%] flex flex-col justify-start items-center gap-5 relative
                bg-radial from-gray-300/10 to-gray-900
                before:content-[''] after:absolute after:inset-0 after:bg-radial after:from-gray-900/40 after:to-[#0d171f]"
            >
                <div className="w-full h-full z-50 flex justify-center flex-col items-center gap-5">
                    <h1>Nossa história</h1>
                    <p className="text-xl! lg:px-[15%] font-extralight text-center font-[roboto]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestias sequi, iste enim
                        laudantium aliquid rerum? Totam dolor, voluptatibus quam placeat reiciendis facilis assumenda
                        earum dolorum aliquid ex iure animi. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint molestias sequi, iste enim laudantium aliquid rerum? Totam dolor, voluptatibus quam placeat
                        reiciendis facilis assumenda earum dolorum aliquid ex iure animi.
                    </p>
                    <iframe
                        className="rounded-2xl"
                        width="70%"
                        height="70%"
                        src="https://www.youtube.com/embed/zDZoFmYppm4?si=TETj6GOhqQWOunvH"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default About;

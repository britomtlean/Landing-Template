'use client';

import React from 'react';
import Table from '../table/Table';
import Predios from '../../public/Prédios-inteligentes-scaled-e1606835611241.jpg';
import { useState } from 'react';

const Services = () => {
    const [item, setItem] = useState([Predios.src]);

    return (
        <section
            id="services"
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
                    <h1>Serviços</h1>
                    <Table />
                </div>
            </div>
        </section>
    );
};

export default Services;

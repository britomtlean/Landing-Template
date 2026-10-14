'use client';

import React from 'react';
import Localizacao from '../localizacao/Localizacao';
import City from '../../public/magnific__ruas-de-cidadevista-frontal__95316.png';
import { useState } from 'react';

const Contact = () => {
    const [item, setItem] = useState([City.src]);
    return (
        <section
            style={{
                backgroundImage: `url(${item})`,
            }}
            id="contact"
            className="flex flex-col justify-start items-center gap-5 p-[0]! h-screen!
            bg-[length:100%_100%]
            [mask-image:linear-gradient(to_top,transparent_0%,black_5%,black_92%,transparent_100%)]
            "
        >
            <div
                className="w-full h-full px-[10%] flex flex-col justify-center items-center gap-5 relative py-10
                bg-radial from-gray-300/10 to-gray-900
                before:content-[''] after:absolute after:inset-0 after:bg-radial after:from-gray-900/40 after:to-[#0d171f]"
            >
                <h1 className='z-100'>Entre em contato</h1>
                <div className="w-full py-10 flex justify-center items-center z-50">
                    <Localizacao />

                    <div className="flex flex-col justify-center h-full w-2/5 items-center gap-4">
                        <h2 className="text-2xl! font-semibold">Mídias Sociais</h2>
                        <button className="bg-blue-500 w-3/4">instagram</button>
                        <button className="bg-blue-500 w-3/4">TikTok</button>
                        <button className="bg-blue-500 w-3/4">WhatsApp</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

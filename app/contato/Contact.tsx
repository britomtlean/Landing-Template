'use client';

import React from 'react';
import Localizacao from '../localizacao/Localizacao';
import City from '../../public/magnific__ruas-de-cidadevista-frontal__95316.png';
import { useState } from 'react';
import { IoLogoInstagram } from 'react-icons/io';
import { RiWhatsappLine } from 'react-icons/ri';
import { FaTiktok } from 'react-icons/fa';

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
                className="w-full h-full px-[10%] flex flex-col justify-center items-center gap-5 relative py-20
                bg-radial from-gray-300/10 to-gray-900
                before:content-[''] after:absolute after:inset-0 after:bg-radial after:from-gray-900/40 after:to-[#0d171f]"
            >
                <h1 className="z-100">Entre em contato</h1>
                <div className="w-full py-10 flex justify-center items-center z-50">
                    <Localizacao />

                    <div className="flex flex-col justify-start h-full w-2/5 items-center gap-4 py-15">
                        <h2 className="text-2xl! font-semibold mb-5">Mídias Sociais</h2>
                        <div className="flex justify-center gap-5 w-full py-2">
                            {' '}
                            <IoLogoInstagram className="size-10" />
                            <button
                                onClick={() => {
                                    window.open(`https://www.instagram.com/`, '_blank');
                                }}
                                className="bg-cyan-600 w-1/2"
                            >
                                instagram
                            </button>
                        </div>

                        <div className="flex justify-center gap-5 w-full py-2">
                            <FaTiktok className="size-10" />
                            <button
                                onClick={() => {
                                    window.open(`https://www.tiktok.com/`, '_blank');
                                }}
                                className="bg-cyan-600 w-1/2"
                            >
                                TikTok
                            </button>
                        </div>

                        <div className="flex justify-center gap-5 w-full py-2">
                            <RiWhatsappLine className="size-10" />
                            <button
                                onClick={() => {
                                    window.open(`https://web.whatsapp.com/`, '_blank');
                                }}
                                className="bg-cyan-600 w-1/2"
                            >
                                WhatsApp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

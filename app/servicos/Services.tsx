'use client';

import React from 'react';
import Table from '../table/Table';
import Predios from '../../public/Prédios-inteligentes-scaled-e1606835611241.jpg';
import { useState } from 'react';
import Image from 'next/image';
import Gif from '../../public/Técnico 3D com laptop e ferramentas.png';

const Services = () => {
    const [item, setItem] = useState([Predios.src]);

    return (
        <section
            id="services"
            style={{
                backgroundImage: `url(${item})`,
            }}
            className="flex flex-col justify-start items-center gap-5 p-0! min-h-screen! relative
            bg-[length:100%_100%]
            [mask-image:linear-gradient(to_top,transparent_0%,black_2%,black_96%,transparent_100%)]
            "
        >
            <div
                className="w-full h-full px-[10%] flex flex-col justify-center items-center gap-5 min-h-screen! relative
                bg-radial from-gray-300/10 to-gray-900
                before:content-[''] after:absolute after:inset-0 after:bg-radial after:from-gray-900/40 after:to-[#0d171f]"
            >
                <div className="w-full h-full z-50 flex justify-start flex-col items-center py-20 gap-5 min-h-screen!">
                    <h1 className="w-full text-4xl! z-50 text-center [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)] py-3">
                        Serviços
                    </h1>
                    <p className="text-xl! lg:px-[15%] py-10 text-center font-bold text-orange-100! font-led">
                        Aqui voce apresenta os seus servicos com os valores e a disponibilidade.<br></br>
                        Veja a tabela abaixo apresentando os meus.
                    </p>
                    <div className="flex justify-around w-full">
                        <Table />
                        <img
                            className={`rounded-lg hover:cursor-pointer max-w-[400px] bg-center`}
                            _ngcontent-pyp-c55=""
                            aria-hidden="true"
                            src={Gif.src}
                        ></img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

import React from 'react';
import './css/midia.css';
import './css/style.css';
import Diamond from '../../public/valor.png';
import Lock from '../../public/lock.png';
import Mind from '../../public/mindset.png';
import Pc from '../../public/computador.png';
import Image from 'next/image';

const Values = () => {
    return (
        <section id="values" className="flex flex-col items-center justify-center h-screen! gap-5 py-10!">
            <div className='w-full text-center'>
                <h1>Nossos Valores</h1>
            </div>

            <div className="h-full flex items-center gap-5 h-2/5! pt-5">
                <div className="card transition-all">
                    <div className="w-full flex justify-center">
                        <Image src={Mind.src} width={50} height={40} alt="Imagem de cadeado" />
                    </div>
                    <h3>Eficiência</h3>
                    <p>
                        Agende sua sessão de forma rápida e prática. O atendimento acontece por videochamada, permitindo
                        que você cuide da sua saúde emocional no conforto da sua casa.
                    </p>
                </div>

                <div className="card">
                    <div className="w-full flex justify-center">
                        <Image src={Pc.src} width={50} height={40} alt="Imagem de cadeado" />
                    </div>
                    <h3>Simplicidade</h3>
                    <p>
                        Agende sua sessão de forma rápida e prática. O atendimento acontece por videochamada, permitindo
                        que você cuide da sua saúde emocional no conforto da sua casa.
                    </p>
                </div>

                <div className="card">
                    <div className="w-full flex justify-center">
                        <Image src={Lock.src} width={50} height={40} alt="Imagem de cadeado" />
                    </div>
                    <h3>Segurança</h3>
                    <p>
                        Agende sua sessão de forma rápida e prática. O atendimento acontece por videochamada, permitindo
                        que você cuide da sua saúde emocional no conforto da sua casa.
                    </p>
                </div>
            </div>
            <p className="text-xl! px-[15%] py-10 font-extralight text-center font-[roboto]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestias sequi, iste enim laudantium
                aliquid rerum? Totam dolor, voluptatibus quam placeat reiciendis facilis assumenda earum dolorum aliquid
                ex iure animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestias sequi, iste enim
                laudantium aliquid rerum? Totam dolor, voluptatibus quam placeat reiciendis facilis assumenda earum
                dolorum aliquid ex iure animi.
            </p>

            <h1 className='w-full font-paladins text-center'>Brits Corporation</h1>
        </section>
    );
};

export default Values;

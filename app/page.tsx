'use client';

import './globals.css';
import Carrosel from './carrosel/Carrosel';
import Values from './valores/Values';
import Services from './servicos/Services';
import About from './sobre/About';
import Contact from './contato/Contact';
import Image from '../public/Ícone Neon de Avatar Interativo.png';
import Jaguar from '../public/jaguar(1).png';
import { whatsAppMessage } from './functions/message';

import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useRef, useState } from 'react';
import { TbPlayerPause, TbPlayerPlayFilled } from 'react-icons/tb';
import Fred from '../public/kuzu420-freddy-14694.gif'

export default function Home() {

    const { scrollY } = useScroll();

    const divRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const alertRef = useRef<HTMLAudioElement | null>(null);

    const [ player, setPlayer ] = useState(false);

    const ativarSom = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio('/sounds/music.mp3');
        }

        const audio = audioRef.current;

        try {
            if (!player) {
                audio.currentTime = 0;
                audio.play();
                audio.loop = true;
                setPlayer(true);
            } else {
                audio.pause();
                setPlayer(false);
            }
        } catch (error) {
            console.error('Não foi possível reproduzir o áudio:', error);
        }
    };

    const alert = () => {

        if (!alertRef.current) {
            alertRef.current = new Audio('/sounds/meme-fail-alert-locran-1-00-01.mp3');
        }

        const audio = alertRef.current;

        try {
            audio.currentTime = 0;
            audio.play();
        } catch (error) {
            console.error('Não foi possível reproduzir o áudio:', error);
        }
    };

    useMotionValueEvent(scrollY, 'change', (current) => {
        console.log(Math.round(scrollY.get()));

        if (!divRef.current) return;

        if (scrollY.get() > 750) {
            divRef.current.style.opacity = '1';
            divRef.current.style.top = Math.round(scrollY.get()).toString() + 'px';
        }

        if (scrollY.get() > 2500 && scrollY.get() < 4380) {
            imageRef.current!.style.transform = `rotateY(${current / 2.2}deg)`;
        }
    });

    return (
        <div className="h-full w-full flex flex-col items-center justify-center transition-all overflow-x-hidden!">
            {
                //APRESENTAÇÃO
                <section
                    className="relative py-10! h-[90vh]! bg-none!
                    flex flex-col justify-start items-center gap-[5%]
                    before:content-[''] before:absolute before:inset-0 before:-z-10 before:h-full before:w-9/10 before:border-b before:rounded-lg before:mx-auto"
                >
                    {
                        //H1
                    }

                    <motion.h1
                        className="font-paladins w-full text-center py-4 transition-all relative"
                        initial={{ left: '-80vw' }}
                        animate={{ left: 0 }}
                        transition={{ delay: 0, ease: 'easeIn', duration: 1 }}
                    >
                        UMA NOVA ERA ESTÁ CHEGANDO
                    </motion.h1>

                    <div className="w-full mx-auto text-center space-y-3 overflow-hidden!">
                        <motion.h1
                            className="w-full text-4xl! z-50 text-center [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.8, ease: 'easeOut', delay: 0.3 }}
                        >
                            Bem vindo a Brits Corporation
                        </motion.h1>
                        <motion.h2
                            className="text-lg! font-extralight! font-led"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2, ease: 'easeIn', delay: 0 }}
                        >
                            <motion.strong
                                className="text-lg! font-extralight! font-led"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2, ease: 'easeIn', delay: 0 }}
                            >
                                Trazendo
                            </motion.strong>{' '}
                            <motion.strong
                                className="text-lg! font-extralight! font-led"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2, ease: 'easeIn', delay: 0.5 }}
                            >
                                identidade,
                            </motion.strong>{' '}
                            <motion.strong
                                className="text-lg! font-extralight! font-led"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2, ease: 'easeIn', delay: 1 }}
                            >
                                tecnologia
                            </motion.strong>{' '}
                            <motion.strong
                                className="text-lg! font-extralight! font-led"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2, ease: 'easeIn', delay: 1.5 }}
                            >
                                e comunicacão para o seu negócio.
                            </motion.strong>{' '}
                        </motion.h2>
                    </div>
                    {
                        //CONTEUDO
                    }
                    <div className="w-full h-4/5 max-h-[500px] py-5 flex flex-col lg:flex-row lg:justify-center overflow-hidden! relative top-0!">
                        <div className="w-full lg:w-1/2 overflow-hidden!">
                            <Carrosel />
                        </div>

                        <motion.div
                            className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start gap-8 text-center font-led overflow-hidden!"
                            initial={{ y: '5%', opacity: 0, filter: 'blur(1px)' }}
                            whileInView={{
                                opacity: 1,
                                filter: 'blur(0px)',
                            }}
                            viewport={{ once: true }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1.5,
                                ease: 'easeIn',
                                delay: 1.5,
                            }}
                        >
                            <h1 className="text-2xl! text-center w-full font-black">O layout do seu site</h1>
                            <p className="text-xl! font-extralight! w-full px-[10%]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem magni veniam earum
                                itaque, neque consequuntur, ipsam suscipit provident iste reiciendis, incidunt
                                architecto ex voluptates vero quidem enim quod? Harum, alias.
                            </p>
                            <p className="text-xl! font-extralight! w-full px-[10%]">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem magni veniam earum
                                itaque, neque consequuntur, ipsam suscipit provident iste reiciendis, incidunt
                                architecto ex voluptates vero quidem enim quod? Harum, alias.
                            </p>
                            <button
                                onClick={() => {
                                    whatsAppMessage('Gostaria de criar um site');
                                }}
                                className="bg-cyan-500 w-1/3 mx-auto animate-bounce text-xl! shadow-xl/30 min-w-[202px]"
                            >
                                Entre em contato
                            </button>
                        </motion.div>
                    </div>
                </section>
            }
            {
                //CARROSEL
                <section className=" flex flex-col items-center gap-10 py-30! miin-h-[100vh]!">
                    <h1 className="w-full text-4xl! z-50 text-center [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)] py-3">
                        Um Dashboard do seu jeito
                    </h1>
                    <h1 className="font-led text-center">Crie um dashboard personalizado</h1>
                    <div className="w-full flex justify-around gap-5">
                        <iframe
                            className="rounded-2xl h-[768px] w-full overflow-y-hidden!"
                            src="https://legendary-lokum-5cefa7.netlify.app/"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
            }
            {
                //SOBRE
                <About />
            }
            {
                //VALORES
                <Values />
            }
            {
                //SERVIÇOS
                <Services />
            }
            {
                //INTERAÇÃO
                <section
                    className="px-[0%]! relative overflow-hidden! transform-3d  min-h-screen! py-40!
                bg-[length:100%_100%]
                [mask-image:linear-gradient(to_top,transparent_0%,black_10%,black_83%,transparent_100%)]
                after:[mask-image:linear-gradient(to_top,transparent_0%,black_0%,black_80%,transparent_100%)]
                after:rounded-2xl after:pointer-events-none"
                >
                    <h1 className="w-full text-4xl! z-50 text-center [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">
                        AINDA NÃO ACABOU
                    </h1>
                    <h1 className="w-full text-4xl! z-50 text-center absolute bottom-[10%] [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)] animate-bounce">
                        Continue rolando para baixo
                    </h1>

                    <motion.div className="w-full h-full " ref={imageRef}>
                        <motion.img
                            onClick={() => {
                                alert();
                            }}
                            className={` mx-auto hover:cursor-pointer`}
                            _ngcontent-pyp-c55=""
                            aria-hidden="true"
                            src={Image.src}
                            width={800}
                        ></motion.img>
                    </motion.div>
                </section>
            }
            {
                //CONTATO
                <Contact />
            }
            {
                //AGENDA
                <section
                    id="agendar"
                    className="flex flex-col items-center justify-start gap-10 min-h-screen! py-30!
                    bg-[length:100%_100%]
                    [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_100%,transparent_100%)]"
                >
                    <h1 className="w-full text-4xl! z-50 text-center [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)] py-3">
                        Agende o seu horário
                    </h1>

                    <form className="flex w-1/2 flex-col gap-5 rounded-2xl bg-white/10 p-6 border">
                        {/* Dia da semana */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="dia" className="text-sm font-medium">
                                Dia da semana
                            </label>

                            <select
                                id="dia"
                                name="dia"
                                required
                                defaultValue=""
                                className="w-full rounded-lg border border-white/20 bg-black/30 p-3 text-white outline-none focus:border-blue-400"
                            >
                                <option value="" disabled>
                                    Selecione um dia
                                </option>
                                <option value="segunda">Segunda-feira</option>
                                <option value="terca">Terça-feira</option>
                                <option value="quarta">Quarta-feira</option>
                                <option value="quinta">Quinta-feira</option>
                                <option value="sexta">Sexta-feira</option>
                                <option value="sabado">Sábado</option>
                                <option value="domingo">Domingo</option>
                            </select>
                        </div>

                        {/* Horário */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="horario" className="text-sm font-medium">
                                Horário
                            </label>

                            <select
                                id="horario"
                                name="horario"
                                required
                                defaultValue=""
                                className="w-full rounded-lg border border-white/20 bg-black/30 p-3 text-white outline-none focus:border-blue-400"
                            >
                                <option value="" disabled>
                                    Selecione um horário
                                </option>
                                <option value="09:00">09:00</option>
                                <option value="10:00">10:00</option>
                                <option value="11:00">11:00</option>
                                <option value="13:00">13:00</option>
                                <option value="14:00">14:00</option>
                                <option value="15:00">15:00</option>
                                <option value="16:00">16:00</option>
                                <option value="17:00">17:00</option>
                            </select>
                        </div>

                        {/* SERVIÇO */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="servico" className="text-sm font-medium">
                                Serviço
                            </label>

                            <select
                                id="servico"
                                name="servico"
                                required
                                defaultValue=""
                                className="w-full rounded-lg border border-white/20 bg-black/30 p-3 text-white outline-none focus:border-blue-400"
                            >
                                <option value="" disabled>
                                    Selecione um serviço
                                </option>
                                <option value="">Static Landing Page</option>
                                <option value="">Dinamic Landing Page</option>
                                <option value="">Saas Delivy</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="horario" className="text-sm font-medium">
                                WhatsApp
                            </label>

                            <input
                                className="w-full rounded-lg border border-white/20 bg-black/30 p-3 text-white outline-none focus:border-blue-400"
                                type="text"
                                placeholder="EX: 999999999"
                            />
                        </div>

                        {/* Botão */}
                        <button
                            type="submit"
                            className="w-3/4 mt-2 rounded-lg bg-purple-600 px-4 py-3 font-semibold text-white mx-auto"
                        >
                            Agendar horário
                        </button>
                    </form>

                    <div className="w-3/4 h-1/2 flex justify-around items-center py-10">
                        {' '}
                        <img src={Jaguar.src} className="w-30  right-80 bottom-[12%]" />
                        <h1 className=" bottom-[12%] w-full font-paladins text-center">Brits Corporation</h1>
                        <img src={Jaguar.src} className="w-30  left-80 bottom-[12%]" />
                    </div>
                </section>
            }
            {
                //DELIVERY
                <section className=" flex flex-col items-center gap-14 py-30! miin-h-[100vh]!">
                    <h1 className="w-full text-4xl! z-50 text-center [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">
                        Seu Delivery aqui
                    </h1>
                    <h1 className="font-led text-center">Venha fazer parte do nosso sistema de deliverys</h1>
                    <div className="w-full flex justify-around gap-5">
                        <iframe
                            className="rounded-2xl h-[768px] w-full overflow-y-hidden!"
                            src="https://colonia-menu-production.up.railway.app/colonia_material/catalogo"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
            }
            {
                //AGRADECIMENTO
                <section
                    className="p-[0%]! relative overflow-hidden! transform-3d h-screen!
                bg-[length:100%_100%]
                [mask-image:linear-gradient(to_top,transparent_0%,black_10%,black_100%,transparent_100%)]"
                >
                    <div className="w-full h-full flex flex-col justify-center items-center gap-5 relative min-h-screen!">
                        <h1 className="w-full text-4xl! z-50 text-center absolute top-30 [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">
                            CONGRATULATIONS
                        </h1>
                        <h1 className="w-full text-4xl! z-50 text-center absolute bottom-25 [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)] animate-bounce">
                            Obrigado por ter chego até aqui
                        </h1>
                        <img
                            className={`rounded-lg hover:cursor-pointer`}
                            _ngcontent-pyp-c55=""
                            aria-hidden="true"
                            src={Fred.src}
                            width={'400px'}
                        ></img>
                    </div>
                </section>
            }
            {
                //COMPONENTES DINAMICOS
            }

            <motion.div
                className={`p-5 absolute z-100 opacity-100 transition-all ease-out lg:right-[3%] 2xl:right-[8%]`}
                ref={divRef}
            >
                <button
                    onClick={() => {
                        whatsAppMessage('Gostaria de criar um site');
                    }}
                    className="bg-cyan-500 w-full mt-10! mx-auto animate-bounce text-xl! shadow-xl/30"
                >
                    Entre em contato
                </button>
            </motion.div>

            <motion.div className={`p-5 absolute z-100 top-10 lg:right-[3%] 2xl:right-[8%]`}>
                <button
                    onClick={() => {
                        ativarSom();
                    }}
                    className="border rounded-[100%]! p-2!"
                >
                    {!player ? <TbPlayerPlayFilled className="size-10" /> : <TbPlayerPause className="size-10" />}
                </button>
            </motion.div>
        </div>
    );
}

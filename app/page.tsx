'use client';

import './globals.css';
import Carrosel from './carrosel/Carrosel';
import Values from './valores/Values';
import Services from './servicos/Services';
import About from './sobre/About';
import Contact from './contato/Contact';
import Image from '../public/Ícone Neon de Avatar Interativo.png';
import Jaguar from '../public/jaguar(1).png';

import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useRef } from 'react';

export default function Home() {
    const { scrollY } = useScroll();
    const divRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const ativarSom = async () => {
        if (!audioRef.current) {
            audioRef.current = new Audio('/sounds/meme-fail-alert-locran-1-00-01.mp3');
        }

        const audio = audioRef.current;

        try {
            audio.currentTime = 0;
            await audio.play();
        } catch (error) {
            console.error('Não foi possível reproduzir o áudio:', error);
        }
    };

    useMotionValueEvent(scrollY, 'change', (current) => {
        console.log(Math.round(scrollY.get()));

        if (!divRef.current) return;

        if (scrollY.get() > 1400) {
            divRef.current.style.opacity = '1';
            divRef.current.style.top = Math.round(scrollY.get()).toString() + 'px';
        }

        if (scrollY.get() > 2600 && scrollY.get() < 40000) {
            imageRef.current!.style.transform = `rotateY(${current / 2.2}deg)`;
        }
    });

    return (
        <div className="h-full lg:flex flex-col items-center justify-center gap-10 relative transition-all">
            <motion.div className={`p-5 absolute z-100 opacity-100 transition-all ease-out right-40`} ref={divRef}>
                <button className="bg-cyan-500 w-full mt-10! mx-auto animate-bounce text-xl! shadow-xl/30">
                    Entre em contato
                </button>
            </motion.div>

            {
                //APRESENTAÇÃO
                <section
                    className="flex flex-col justify-start items-center gap-5 relative pt-10!
                    before:content-[''] before:absolute before:inset-0 before:-z-10 before:h-full before:w-9/10 before:border-b before:rounded-lg before:mx-auto"
                >
                    {
                        //H1
                    }

                    <h1 className="font-paladins w-full text-center py-4">UMA NOVA ERA ESTÁ CHEGANDO</h1>
                    <div className="w-full mx-auto text-center space-y-3 overflow-y-hidden!">
                        <motion.h1
                            className="text-3xl! font-black"
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
                            transition={{ duration: 2, ease: 'easeIn', delay: 1.5 }}
                        >
                            Trazendo identidade, tecnologia e comunicação para o seu negócio.
                        </motion.h2>
                    </div>
                    {
                        //CONTEUDO
                    }
                    <div className="w-full py-10 flex flex-col lg:flex-row lg:justify-center overflow-y-hidden!">
                        <div className="w-full lg:w-1/2 overflow-y-hidden!">
                            <Carrosel />
                        </div>

                        <motion.div
                            className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start gap-8 text-center font-led overflow-y-hidden!"
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
                            <h1 className="text-2xl! text-center w-full font-black">Olá eu me chamo Leandro</h1>
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
                            <button className="bg-cyan-500 w-1/3 mt-10! mx-auto animate-bounce text-xl! shadow-xl/30">
                                Entre em contato
                            </button>
                        </motion.div>
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
            <section
                className="p-[0%]! relative overflow-hidden! transform-3d pt-10!
                bg-[length:100%_100%]
                [mask-image:linear-gradient(to_top,transparent_0%,black_10%,black_96%,transparent_100%)]
                after:[mask-image:linear-gradient(to_top,transparent_0%,black_0%,black_80%,transparent_100%)]
                after:rounded-2xl after:pointer-events-none"
            >
                <h1 className="w-full text-4xl! z-50 text-center [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">
                    AINDA NÃO ACABOU
                </h1>
                <h1 className="w-full text-4xl! z-50 text-center absolute bottom-25 [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)] animate-bounce">
                    Continue rolando para baixo
                </h1>

                <motion.div className="w-full h-full" ref={imageRef}>
                    <motion.img
                        onClick={() => {
                            ativarSom();
                        }}
                        className={` mx-auto hover:cursor-pointer`}
                        _ngcontent-pyp-c55=""
                        aria-hidden="true"
                        src={Image.src}
                        width={800}
                    ></motion.img>
                </motion.div>
            </section>
            {
                //CONTATO
                <Contact />
            }
            {
                //AGENDA
                <section
                    id="agendamento"
                    className="flex flex-col items-center justify-start gap-10 h-screen! relative pt-10!"
                >
                    <img src={Jaguar.src} className="w-30 absolute right-80 bottom-40" />
                    <img src={Jaguar.src} className="w-30 absolute left-80 bottom-40" />
                    <h1 className="absolute  bottom-50 w-full font-paladins text-center">Brits Corporation</h1>
                    <h1 className="text-2xl font-bold">Agende o seu horário</h1>

                    <form className="flex w-1/2 flex-col gap-5 rounded-2xl bg-white/10 p-6">
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
                </section>
            }
            <section
                className="p-[0%]! relative overflow-hidden! transform-3d h-screen!
                bg-[length:100%_100%]
                [mask-image:linear-gradient(to_top,transparent_0%,black_5%,black_95%,transparent_100%)]
                after:[mask-image:linear-gradient(to_top,transparent_0%,black_0%,black_80%,transparent_100%)]
                after:rounded-2xl after:pointer-events-none"
            >
                <h1 className="w-full text-4xl! z-50 text-center absolute top-30 [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">
                    CONGRATULATIONS
                </h1>
                <h1 className="w-full text-4xl! z-50 text-center absolute bottom-25 [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)] animate-bounce">
                    Obrigador por ter chego até aqui
                </h1>
                <motion.div className="w-full h-full">
                    <motion.video
                        className={`object-cover h-full w-full opacity-60 `}
                        _ngcontent-pyp-c55=""
                        aria-describedby="video-description"
                        aria-labelledby="video-description"
                        aria-hidden="true"
                        autoPlay={true}
                        loop={true}
                        playsInline={true}
                        preload="auto"
                        poster=""
                    >
                        <source
                            _ngcontent-pyp-c55=""
                            type="video/mp4"
                            src="https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_14_Drone_Lift_Off1_20260928_Web_5b2db244f8.mp4"
                        />
                    </motion.video>
                </motion.div>
            </section>
        </div>
    );
}

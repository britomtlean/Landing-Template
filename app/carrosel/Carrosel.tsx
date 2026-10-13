'use client';

import { useState } from 'react';
import Predios from '../../public/Prédios-inteligentes-scaled-e1606835611241.jpg';
import City from '../../public/images.jpeg';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Carrosel = () => {
    const [item, setItem] = useState([Predios.src, City.src]);

    const nextProduct = () => {
        const first = item[0];
        const fila: Array<string> = item.filter((_, index) => index != 0);
        const newArray: Array<string> = [...fila, first];

        setItem(newArray);
    };

    const returnProduct = () => {
        const last = item[item?.length! - 1];
        const fila: Array<any> = item?.filter((_, index) => index != item?.length! - 1);
        const newArray: Array<any> = [last, ...fila];

        setItem(newArray);
    };

    return (
        <motion.div
            className={`w-full lg:w-full min-h-[220px] lg:h-[400px] relative overflow-y-hidden!
                flex justify-between items-center rounded-2xl
                object-cover
                bg-[length:100%_100%]
                [mask-image:linear-gradient(to_top,transparent_0%,black_3%,black_96%,transparent_100%)]
                after:content-[''] after:absolute after:inset-0 after:bg-radial after:from-gray-900/40 after:to-[#0d171f]
                after:[mask-image:linear-gradient(to_top,transparent_0%,black_0%,black_60%,transparent_100%)]
                `}
            style={{
                backgroundImage: `url(${item[0]})`,
            }}
            initial={{ left: -800 }}
            animate={{ left: 0 }}
            transition={{ delay: 0.3, ease: 'easeOut', duration: 3 }}
        >
            <button className="border-none! z-50" onClick={returnProduct}>
                <FaAngleLeft className="size-8 bg-black rounded-full" />
            </button>

            <h2 className="absolute w-full text-center top-70 px-20 bg-radial font-black from-black/20 to-[#0d171f00] text-xl! z-50 rounded-4xl py-5 [text-shadow:2px_2px_4px_rgba(0,0,0,0.8)]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eaque distinctio magni id sed harum
                veniam eum neque vitae odit et aliquam obcaecati, unde quasi! Et nam itaque obcaecati quas.
            </h2>

            <button className="border-none! z-50" onClick={nextProduct}>
                <FaAngleRight className="size-8 bg-black rounded-full" />
            </button>
        </motion.div>
    );
};

export default Carrosel;

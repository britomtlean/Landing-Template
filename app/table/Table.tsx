'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Table = () => {
    const [array, setArray] = useState<Array<any>>([]);
    const [busca, setBusca] = useState<string>('');

    //////////////////////////// SEARCH //////////////////////////////////

    const dadosFiltrados = array?.filter((item) => {
        const texto = busca.toLowerCase();
        return item.toLowerCase().includes(texto);
    });

    ////////////////////////////////////////////////////////////////////

    useEffect(() => {
        //
    }, []);

    return (
        <table
            className="w-full lg:w-1/2 lg:h-[400px] p-5 lg:p-7
                flex flex-col justify-start items-center
                row-start-1 row-span-4 col-start-4 col-span-4
                font-bold text-center
                bg-radial from-gray-600 to-[#0d171f]
                border border-white/10 rounded-3xl
                hover:border-[1px] hover:border-white
                "
        >
            <input
                type="text"
                placeholder="Buscar..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="my-4 px-4 py-2 rounded w-full text-[16px] font-normal shadow bg-slate-200/80 text-black!"
            />

            <thead className="w-full ">
                <tr className="w-full grid grid-cols-4 py-2 bg-slate-200 rounded-t-lg px-2 lg:px-8">
                    <th className="text-black!">Serviço</th>
                    <th className="text-black!">Valor</th>
                    <th className="text-black!">Disponibilidade</th>
                    <th className="text-black!"></th>
                </tr>
            </thead>

            <tbody className="w-full overflow-y-scroll rounded-b-lg">
                <tr
                    className="grid grid-rows-2 grid-cols-4 px-2 lg:px-10
                          w-full py-3 bg-black/50 text-white border-xl
                          font-medium font-sans hover:bg-black/40"
                >
                    <td>Cílios</td>
                    <td>{(30.0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td>Segunda - Sexta</td>
                    <Link href="#agendar" className="hover:cursor-pointer">
                        Agendar
                    </Link>
                </tr>

                <tr
                    className="grid grid-rows-2 grid-cols-4 px-2 lg:px-10
                          w-full py-3 bg-black/50 text-white border-xl
                          font-medium font-sans hover:bg-black/40"
                >
                    <td>Unha</td>
                    <td>{(30.0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td>Segunda - Sexta</td>
                    <Link href="#agendar" className="hover:cursor-pointer">
                        Agendar
                    </Link>
                </tr>

                <tr
                    className="grid grid-rows-2 grid-cols-4 px-2 lg:px-10
                          w-full py-3 bg-black/50 text-white border-xl
                          font-medium font-sans hover:bg-black/40"
                >
                    <td>Cabelo</td>
                    <td>{(30.0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td>Segunda - Sexta</td>
                    <Link href="#agendar" className="hover:cursor-pointer">
                        Agendar
                    </Link>
                </tr>
            </tbody>
        </table>
    );
};

export default Table;

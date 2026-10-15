'use client';

import './Menu.css';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function MenuLateral() {
    const [aberto, setAberto] = useState<boolean>(false);

    return (
        <>
            {/* Botão de abrir */}
            <button
                className="border-none! z-100"
                onClick={() => {
                    setAberto(!aberto);
                }}
            >
                <GiHamburgerMenu className={`${'botao-menu'}`} style={{ fontSize: '2rem' }} />
            </button>

            {/* Overlay escuro (fecha o menu ao clicar) */}
            {aberto && (
                <div
                    className="overlay"
                    onClick={() => {
                        setAberto(false);
                    }}
                ></div>
            )}

            {/* Menu lateral */}
            {
                <div className={`menu-lateral ${aberto ? 'ativo' : ''}`}>
                    <div className="menu-header py-5! flex items-center">
                        <button className="fechar border-none! z-100" onClick={() => setAberto(false)}>
                            <span className="text-2xl!">x</span>
                        </button>
                        <h1 className="font-paladins absolute w-full text-center">Brits</h1>
                    </div>

                    <ul>
                        <li>
                            <button onClick={() => {window.location.href = "#services"; setAberto(false)}} className='w-full! h-full! border-none! p-0!'>Serviços</button>
                        </li>
                        <li><button onClick={() => {window.location.href = "#values"; setAberto(false)}} className='w-full! h-full! border-none! p-0!'>Valores</button>
                        </li>
                        <li><button onClick={() => {window.location.href = "#about"; setAberto(false)}} className='w-full! h-full! border-none! p-0!'>Sobre</button>
                        </li>
                        <li><button onClick={() => {window.location.href = "#contact"; setAberto(false)}} className='w-full! h-full! border-none! p-0!'>Contato</button>
                        </li>
                        <li><button onClick={() => {window.location.href = "#agendar"; setAberto(false)}} className='w-full! h-full! border-none! p-0!'>Agendar</button>
                        </li>
                    </ul>
                </div>
            }
        </>
    );
}

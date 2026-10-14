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
                        <li>Serviços</li>
                        <li>Valores</li>
                        <li>Sobre</li>
                        <li>Contato</li>
                        <li>Agendar</li>
                    </ul>
                </div>
            }
        </>
    );
}

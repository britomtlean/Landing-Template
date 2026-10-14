'use client';

import { useState } from 'react';
import './Menu.css';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function MenuLateral() {
    const [aberto, setAberto] = useState<boolean>(false);

    return (
        <>
            {/* Botão de abrir */}
            <button className="border-none! z-100" onClick={() => setAberto(true)}>
                <GiHamburgerMenu className={`${'botao-menu'}`} style={{ fontSize: '2rem' }} />
            </button>

            {/* Overlay escuro (fecha o menu ao clicar) */}
            {aberto && <div className="overlay" onClick={() => setAberto(false)}></div>}

            {/* Menu lateral */}
            <div className={`menu-lateral ${aberto ? 'ativo' : ''}`}>


                <div className="menu-header">
                    <button className="fechar border-none!" onClick={() => setAberto(false)}>
                        <span className="text-2xl!">x</span>
                    </button>
                </div>

                <ul>
                    <li>Serviços</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </div>
        </>
    );
}

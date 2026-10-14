'use client';

import React from 'react';
import MenuLateral from '../menu/Menu';

const Header = () => {
    return (
        <header>


            <h1 className={`font-paladins text-4xl`}>Brits</h1>

            <nav>
                <li>
                    <a href="#services">Serviços</a>
                </li>
                <li>
                    <a href="#values">Valores</a>
                </li>
                <li>
                    <a href="#about">Sobre</a>
                </li>
                <li>
                    <a href="#contact">Contato</a>
                </li>
                <li>
                    <a href="#agendamento">Agendar</a>
                </li>
            </nav>

            <button
                onClick={() => {
                    alert('Funcionando');
                }}
                className="bg-cyan-500"
            >
                Contato
            </button>
        </header>
    );
};

export default Header;

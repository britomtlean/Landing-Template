'use client';

import React from 'react';

type Pedido = {
    produtos: Record<string, any>[];
    valorTotal: number;
    nomeCliente: string;
    contatoCliente: string;
    enderecoCliente: string;
};

const Message = () => {

    const pedido: Pedido = {
        produtos: [
            {
                produtoId: '6a10d5b7ae6f124854579c0e',
                nome: 'Whey Protein',
                quantidade: 1,
                valorUnitario: 150.0,
                subtotal: 150.0,
            },
        ],
        valorTotal: 150.0,
        nomeCliente: 'Leandro',
        contatoCliente: '966709259',
        enderecoCliente: 'Estra da Matriz 00',
    };

    const whatsappMessage = () => {
        const numeroPedido = Date.now().toString().slice(-8); //GERA O ID DO PEDIDO

        const resumoProdutos = pedido.produtos
            .map((p) => `📌 ${p.quantidade} x ${p.nome} - R$ ${p.subtotal.toFixed(2).replace('.', ',')}`)
            .join('\n');

        //GERA MENSAGEM
        const mensagem = "Gostaria de criar um site!"

        window.open(`https://wa.me/5521966709259?text=${encodeURIComponent(mensagem)}`, '_blank'); //ABRE UMA ABA PARA ENVIAR A MENSAGEM
    };

    return (
        <button
            className="bg-green-500"
            onClick={() => {
                whatsappMessage();
            }}
        >
            <h1 className='font-led text-lg!'>Quero criar um site</h1>
        </button>
    );
};

export default Message;

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
        const mensagem = `
ESPAÇO FITNESS

Acompanhe abaixo o pedido

Pedido nº: #${numeroPedido}
Realizado em: ${new Date().toLocaleString('pt-BR')}

-----------------------------
🍽️ RESUMO DO PEDIDO

${resumoProdutos}

-----------------------------
💳 PAGAMENTO

▪️ Taxa de Entrega: R$ 5,00
▪️ Valor Total do Pedido: R$ ${pedido.valorTotal.toFixed(2).replace('.', ',')}

-----------------------------
🏠 ENDEREÇO DE ENTREGA

${pedido.enderecoCliente}

⏲️ Previsão de Entrega: 45 a 80 minutos

-----------------------------
🤩 ${pedido.nomeCliente}
📞 ${pedido.contatoCliente}
💳 Crédito

Clique no link para acompanhar seu pedido:
https://seusite.com/pedido/${numeroPedido}`;

        window.open(`https://wa.me/5521966709259?text=${encodeURIComponent(mensagem)}`, '_blank'); //ABRE UMA ABA PARA ENVIAR A MENSAGEM
    };

    return (
        <button
            className="bg-green-500 z-100"
            onClick={() => {
                whatsappMessage();
            }}
        >
            Enviar Pedido pelo WhatsApp
        </button>
    );
};

export default Message;



export const whatsAppMessage = (message: string) => {

    //GERA MENSAGEM

    window.open(`https://wa.me/5521966709259?text=${encodeURIComponent(message)}`, '_blank'); //ABRE UMA ABA PARA ENVIAR A MENSAGEM
};

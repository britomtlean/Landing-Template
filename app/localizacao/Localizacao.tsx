'use client';

import { MdOutlinePlace } from 'react-icons/md';

const Localizacao = () => {
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent('Rio de Janeiro')}&output=embed`;
    return (
        <div className="w-1/2 h-full flex flex-col gap-10 items-center justify-center bg-cover bg-center bg-no-repeat">
            <h2 className='text-2xl! font-semibold'>Localização</h2>

            <div className="w-full lg:h-[400px] overflow-hidden rounded-2xl relative z-10">
                <iframe
                    src={mapUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
            {
                //ENDEREÇO
            }
            <div className='w-full flex justify-center gap-5'>
                <MdOutlinePlace className='size-10' /> <h2 className='text-2xl! font-semibold'>Avenida das Américas, 3000 - Rio de Janeiro.</h2>
            </div>
        </div>
    );
};

export default Localizacao;

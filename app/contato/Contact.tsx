import React from 'react'
import Localizacao from '../localizacao/Localizacao';

const Contact = () => {
  return (
      <section id="contact" className="flex flex-col justify-start items-center gap-20">
          <h1>Entre em contato</h1>
          <div className="h-full w-full flex justify-center items-center">
              <Localizacao />

              <div className="flex flex-col justify-center h-full w-2/5 items-center gap-4">
                  <h2 className="text-2xl! font-semibold">Mídias Sociais</h2>
                  <button className="bg-blue-500 w-3/4">instagram</button>
                  <button className="bg-blue-500 w-3/4">TikTok</button>
                  <button className="bg-blue-500 w-3/4">WhatsApp</button>
              </div>
          </div>
      </section>
  );
}

export default Contact

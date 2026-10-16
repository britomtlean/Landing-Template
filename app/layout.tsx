import './globals.css';
import type { Metadata } from 'next';
import { RiWhatsappLine } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';


//FONTES E COMPONENTES
import localFont from 'next/font/local';
import Message from './message/Message';
import Header from './header/Header';
import Carrosel from './carrosel/CarroselMobile';
import Gif from '../public/olho_animado_transparente.gif'


export const paladins = localFont({
    src: './font/paladins/paladins.ttf',
    variable: '--font-paladins',
    display: 'swap',
});

export const paladins3D = localFont({
    src: './font/paladins/paladins3d.ttf',
    variable: '--font-paladins-3d',
    display: 'swap',
});

export const led = localFont({
    src: './font/led.ttf',
    variable: '--font-led',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Brits Corporation',
    description: 'Site para apresentação de serviços',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {

          const itens = [
              <div key="1" className="flex h-full items-center justify-center">
                  Seu conteúdo aqui
              </div>,
              <div key="2" className="flex h-full items-center justify-center b">
                  Sim, é aqui
              </div>,
              <div key="3" className="flex h-full items-center justify-center">
                  É aqui mesmo
              </div>,
              <div key="4" className="flex h-full items-center justify-center">
                  Eu ja falei que é aqui
              </div>,
              <div key="5" className="flex h-full items-center justify-center">
                  Acabou o conteúdo
              </div>,
          ];


    return (
        <html lang="pt-br" className={`h-full antialiased scroll-smooth`}>
            <body
                className={`${paladins.variable} ${paladins3D.variable} ${led.variable} items-center min-w-screen min-h-screen`}
            >
                <Header />
                <main className="hidden lg:flex">{children}</main>

                <main className="flex lg:hidden flex-col">
                    <section className="flex flex-col items-center justify-start h-full!">
                        <h1 className="w-full text-center text-white! font-led my-10">Mobile detected</h1>
                        <img
                            className={`rounded-lg hover:cursor-pointer`}
                            _ngcontent-pyp-c55=""
                            aria-hidden="true"
                            src={Gif.src}
                            width={'300px'}
                        ></img>
                    </section>

                    <section className="w-full h-full py-10 text-center font-led flex flex-col gap-10">
                        <div className='w-3/4 py-2 mx-auto'>
                            <Message />
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae expedita dolorem
                            ratione facilis similique porro, quo alias illum sunt, nostrum at consequatur temporibus
                            nisi nihil illo iste. Cum, cumque.
                        </p>

                        <Carrosel itens={itens} />
                    </section>
                </main>

                <footer className="shadow-xl/30 shadow-[0_0_40px_2px_rgba(180,197,223,0.5)] inset-shadow-sm border-t">
                    <div className="h-full w-full flex flex-col justify-center items-center gap-10">
                        <div className="flex justify-center items-center gap-6 w-full lg:gap-20">
                            <div className="flex gap-2">
                                <RiWhatsappLine className="size-10" />
                                <a className="rounded-lg">WhatsApp</a>
                            </div>

                            <div className="flex gap-2">
                                <IoLogoInstagram className="size-10" />
                                <a className="rounded-lg">Instagram</a>
                            </div>

                            <div className="flex gap-2">
                                <MdOutlineMarkEmailUnread className="size-10" />
                                <a className="rounded-lg">Email</a>
                            </div>
                        </div>

                        <h2>Todos os direitos reservados ©.</h2>
                    </div>
                </footer>
            </body>
        </html>
    );
}

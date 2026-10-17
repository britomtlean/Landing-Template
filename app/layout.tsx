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
import Fred from '../public/kuzu420-freddy-14694.gif';
import Landing from './Landing';
import Image from '../public/eu.jpg'


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
                className={`${paladins.variable} ${paladins3D.variable} ${led.variable} items-center w-screen min-h-screen`}
            >
                <Header />
                <main className="hidden lg:flex">{children}</main>

                <main className="flex lg:hidden flex-col gap-4">
                    <section className="flex flex-col items-center justify-start h-full! bg-none!">
                        <h1 className="w-full text-center text-white! font-led my-10">Mobile detected</h1>
                        <img
                            className={`rounded-lg hover:cursor-pointer`}
                            _ngcontent-pyp-c55=""
                            aria-hidden="true"
                            src={Gif.src}
                            width={'300px'}
                        ></img>
                    </section>

                    <section className="w-full h-full pt-10 text-center font-led flex flex-col gap-5 bg-none!">
                        <div className="w-3/4 py-2 mx-auto">
                            <Message />
                        </div>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae expedita dolorem
                            ratione facilis similique porro, quo alias illum sunt, nostrum at consequatur temporibus
                            nisi nihil illo iste. Cum, cumque.
                        </p>
                        <h1 className="text-2xl!">Divulgue o seus produtos</h1>
                        <Carrosel itens={itens} />
                    </section>

                    <section className="flex flex-col items-center gap-10 py-20! bg-none! rounded-2xl!">
                        <h1 className="text-2xl! font-led">Divulgue suas redes</h1>
                        <Landing />
                    </section>

                    <section className="flex flex-col items-center gap-10 bg-none! rounded-2xl! ">
                        <h1 className="text-2xl! font-led text-center">Crie o seu perfil</h1>
                        <img
                            className={`rounded-[100%] hover:cursor-pointer`}
                            _ngcontent-pyp-c55=""
                            aria-hidden="true"
                            src={Image.src}
                            width={'300px'}
                        ></img>
                        <p className="px-[3%] font-led text-xl! text-center">
                            Faca uma apresentacao sobre voce ou da sua empresa. Divulgue os seus servicos e mostre como
                            voce chegou ate aqui.
                        </p>
                    </section>

                    <section className="flex flex-col items-center gap-5 relative bg-none!">
                        <h1 className="font-led text-2xl!">O seu canal no youtube</h1>
                        <iframe
                            className="rounded-2xl w-[100%]  min-h-[200px] overflow-x-hidden!"
                            src="https://www.youtube.com/embed/vEwPnjqWQ-g?si=zO7DyEvQuPsNgRMt"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        <p className="px-[3%] font-led text-xl! text-center">
                            Use o seu canal para apresentar o seu conteudo. O limite esta na sua imaginacao.
                        </p>
                    </section>

                    <section className="w-full bg-none! flex flex-col space-y-5 pb-20!">
                        <img
                            className={`rounded-lg hover:cursor-pointer`}
                            _ngcontent-pyp-c55=""
                            aria-hidden="true"
                            src={Fred.src}
                            width={'300px'}
                        ></img>
                        <h1 className="font-led text-xl! text-center">
                            Toda sugestao e bem vinda.
                            <br></br>
                            Se voce tem alguma ideia de conteudo para criar sinta-se a vontade para vir ate
                            aqui.
                        </h1>
                        <div className="p-3/4 w-full flex justify-center">
                            <Message />
                        </div>
                    </section>
                </main>

                <footer className="shadow-xl/30 shadow-[0_0_20px_2px_rgba(180,197,223,0.5)] inset-shadow-sm border-t">
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

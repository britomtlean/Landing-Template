import './globals.css';
import type { Metadata } from 'next';
import { RiWhatsappLine } from 'react-icons/ri';
import { IoLogoInstagram } from 'react-icons/io';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';

//COMPONENTES
import MenuLateral from './menu/Menu';

//FONTES
import localFont from 'next/font/local';
import Message from './message/Message';
import Header from './header/Header';

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
    title: 'Landind Page',
    description: 'Minha Landing Page',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang="pt-br" className={`h-full antialiased scroll-smooth`}>
            <body
                className={`${paladins.variable} ${paladins3D.variable} ${led.variable} items-center  min-w-screen min-h-screen`}
            >
                <Header/>
                <main className="hidden lg:flex">{children}</main>

                <main className="flex lg:hidden">
                    <section className="flex items-center justify-center flex-col gap-5">
                        <h1 className="w-full text-black! text-center animate-pulse text-white!">Mobile detected</h1>
                        <Message />
                    </section>
                </main>
                <footer className="shadow-xl/30 shadow-[0_0_40px_2px_rgba(180,197,223,0.5)] inset-shadow-sm border-t">
                    <div className="h-full w-full flex flex-col justify-center items-center gap-10">
                        <div className="flex justify-center items-center gap-6 w-full lg:gap-20">
                            <div className="flex gap-2">
                                <RiWhatsappLine className="size-10" />
                                <a>WhatsApp</a>
                            </div>

                            <div className="flex gap-2">
                                <IoLogoInstagram className="size-10" />
                                <a>Instagram</a>
                            </div>

                            <div className="flex gap-2">
                                <MdOutlineMarkEmailUnread className="size-10" />
                                <a>Email</a>
                            </div>
                        </div>

                        <h2>Todos os direitos reservados ©.</h2>
                    </div>
                </footer>
            </body>
        </html>
    );
}

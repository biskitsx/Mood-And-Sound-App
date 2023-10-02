import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const font = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className={font.className}>
            <Component {...pageProps} />
        </main>
    )
} 

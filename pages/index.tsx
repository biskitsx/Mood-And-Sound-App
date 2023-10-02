import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import SoundBox from '@/components/SoundBox';
import { sounds } from '@/data/sounds';
import Image from 'next/image';
import { useRef, useState } from 'react';

export type AudioRef = {
    lightRain: React.MutableRefObject<HTMLAudioElement | null>;
    wind: React.MutableRefObject<HTMLAudioElement | null>;
    campFire: React.MutableRefObject<HTMLAudioElement | null>;
    keyboard: React.MutableRefObject<HTMLAudioElement | null>;
    clock: React.MutableRefObject<HTMLAudioElement | null>;
    step: React.MutableRefObject<HTMLAudioElement | null>;
    wave: React.MutableRefObject<HTMLAudioElement | null>;
    book: React.MutableRefObject<HTMLAudioElement | null>;
    bird: React.MutableRefObject<HTMLAudioElement | null>;
    guitar: React.MutableRefObject<HTMLAudioElement | null>;
    trap: React.MutableRefObject<HTMLAudioElement | null>;
    thunder: React.MutableRefObject<HTMLAudioElement | null>;
    heart: React.MutableRefObject<HTMLAudioElement | null>;
};

export type IsPlaying = {
    lightRain: boolean;
    wind: boolean;
    campFire: boolean;
    keyboard: boolean;
    clock: boolean;
    step: boolean;
    wave: boolean;
    book: boolean;
    bird: boolean;
    guitar: boolean;
    trap: boolean;
    thunder: boolean;
    heart: boolean;

};

export default function Home() {
    const audioRefs: AudioRef = {
        clock: useRef(null),
        lightRain: useRef(null),
        wind: useRef(null),
        campFire: useRef(null),
        keyboard: useRef(null),
        step: useRef(null),
        wave: useRef(null),
        book: useRef(null),
        bird: useRef(null),
        guitar: useRef(null),
        trap: useRef(null),
        thunder: useRef(null),
        heart: useRef(null),

    };

    const [isPlaying, setIsPlaying] = useState({
        wood: false,
        lightRain: false,
    });

    return (
        <div className="flex flex-col gap-16 justify-center items-center">
            <Nav />
            <div className='w-9/12 flex flex-col gap-16 justify-center items-center'>
                <div className='text-center flex flex-col gap-2'>
                    <h1 className="text-4xl md:text-6xl font-extrabold">Welcome to <span className="rainbow"> Mood & Sound </span> 🎧</h1>
                    {/* <Image src="/smile.webp" alt='smile' width={60} height={50} className='w-full' /> */}

                    <p className='text-base-content/60 md:text-lg xl:text-2xl'>
                        Choose your mood and enjoy!
                    </p>
                    {/* <p className="py-6">
                        Click to play sound and click again to stop sound.
                    </p> */}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 items-center justify-center w-full">
                    {sounds.map((sound, index) => (
                        /* @ts-ignore */
                        <SoundBox audioRefs={audioRefs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} soundName={sound.name} src={sound.src} icon={sound.icon} badgeName={sound.badgeName} key={index} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

import Nav from '@/components/Nav';
import SoundBox from '@/components/SoundBox';
import { sounds } from '@/data/sounds';
import { useRef, useState } from 'react';

export type AudioRef = {
    wood: React.MutableRefObject<HTMLAudioElement | null>;
    lightRain: React.MutableRefObject<HTMLAudioElement | null>;
};

export type IsPlaying = {
    wood: boolean;
    lightRain: boolean;
};

export default function Home() {
    const audioRefs: AudioRef = {
        wood: useRef(null),
        lightRain: useRef(null),
    };

    const [isPlaying, setIsPlaying] = useState({
        wood: false,
        lightRain: false,
    });

    return (
        <div className="p-3 flex flex-col gap-10 justify-center items-center">
            <Nav />
            <div className='w-9/12 flex flex-col gap-10 justify-center items-center'>
                <div className='text-center'>
                    <h1 className="text-5xl font-bold">Welcome to <span className='text-primary-focus'>Background Sound 🎧</span> </h1>
                    <p className="py-6">
                        Click to play sound and click again to stop sound.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center justify-center w-full">
                    {sounds.map((sound, index) => (
                        /* @ts-ignore */
                        <SoundBox audioRefs={audioRefs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} soundName={sound.name} src={sound.src} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

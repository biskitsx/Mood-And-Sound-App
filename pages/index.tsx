import { useRef, useEffect, useState } from 'react';

type AudioRef = {
    wood: React.MutableRefObject<HTMLAudioElement | null>;
    lightRain: React.MutableRefObject<HTMLAudioElement | null>;
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

    useEffect(() => {
        audioRefs.wood.current = new Audio('/audio/wood.mp3');
        audioRefs.lightRain.current = new Audio('/audio/light-rain.mp3');
    }, []);

    const playAndStopSound = (type: keyof AudioRef) => {
        const audio = audioRefs[type].current;
        if (audio) {
            audio.loop = !isPlaying[type];
            isPlaying[type] ? audio.pause() : audio.play();
            setIsPlaying((prevState) => ({ ...prevState, [type]: !prevState[type] }));
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Welcome to Background Sound 🎧</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <div className="flex gap-10 items-center justify-center">
                        <button onClick={() => playAndStopSound('wood')} className="btn btn-primary">
                            {isPlaying.wood ? 'Stop Wood' : 'Play Wood'}
                        </button>
                        <button onClick={() => playAndStopSound('lightRain')} className="btn btn-primary">
                            {isPlaying.lightRain ? 'Stop Rain' : 'Play Rain'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

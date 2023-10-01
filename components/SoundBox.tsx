import { AudioRef, IsPlaying } from '@/pages';
import { useEffect } from 'react'
import React from 'react'

interface SoundBoxDTO {
    audioRefs: AudioRef;
    isPlaying: IsPlaying;
    setIsPlaying: React.Dispatch<React.SetStateAction<IsPlaying>>;
    soundName: keyof AudioRef;
    src: string
}

function SoundBox({ audioRefs, isPlaying, setIsPlaying, soundName, src }: SoundBoxDTO) {
    const playAndStopSound = (type: keyof AudioRef) => {
        const audio = audioRefs[type].current;
        if (audio) {
            audio.loop = !isPlaying[type];
            isPlaying[type] ? audio.pause() : audio.play();
            setIsPlaying((prevState) => ({ ...prevState, [type]: !prevState[type] }));
        }
    };
    useEffect(() => {
        audioRefs[soundName].current = new Audio(src);
    }, []);

    const baseCSS = "rounded-xl uppercase flex flex-col justify-center items-center font-medium shadow-md bg-white w-full h-44 flex flex-col ease-in gap-1 text-lg"
    return (
        <button onClick={() => playAndStopSound(soundName)} className={isPlaying[soundName] ? baseCSS + " bg-secondary" : baseCSS}>
            {/* // <button onClick={() => playAndStopSound(soundName)} className={baseCSS}> */}
            <h1 className='text-lg'>
                {isPlaying[soundName] ? `Stop ${soundName}` : `Play ${soundName}`}
            </h1>
            {isPlaying[soundName] &&
                <p><span className="loading loading-bars loading-lg"></span></p>
            }
        </button>
    )
}

export default SoundBox
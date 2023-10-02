import { AudioRef, IsPlaying } from '@/pages';
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface SoundBoxDTO {
    audioRefs: AudioRef;
    isPlaying: IsPlaying;
    setIsPlaying: React.Dispatch<React.SetStateAction<IsPlaying>>;
    soundName: keyof AudioRef;
    src: string
    icon: IconDefinition
    badgeName: string
}

function SoundBox({ audioRefs, isPlaying, setIsPlaying, soundName, src, icon, badgeName }: SoundBoxDTO) {
    const playAndStopSound = (type: keyof AudioRef) => {
        const audio = audioRefs[type].current;
        if (audio) {
            // audio.volume = 0.5;
            audio.currentTime = 0;
            audio.loop = !isPlaying[type];
            isPlaying[type] ? audio.pause() : audio.play();
            setIsPlaying((prevState) => ({ ...prevState, [type]: !prevState[type] }));
        }
    };
    useEffect(() => {
        audioRefs[soundName].current = new Audio(src);
    }, []);

    return (
        <button onClick={() => playAndStopSound(soundName)} className={isPlaying[soundName] ? 'sound-box-active sound-box relative' : 'sound-box'}>
            <div className='w-full justify-center items-center h-full flex relative'>
                <div className="badge absolute top-2 left-2 badge-accent">{badgeName}</div>

                {
                    isPlaying[soundName] ?
                        <FontAwesomeIcon icon={icon} className='text-5xl animate-spin-slow ' />
                        :
                        <FontAwesomeIcon icon={icon} className='text-5xl' />
                }
            </div>

        </button>
    )
}

export default SoundBox
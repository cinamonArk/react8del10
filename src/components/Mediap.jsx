import React, { useRef, useState } from 'react';
import Myvideo from '../videos/fuego.mp4';

function Mediap() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(true); // Estado para controlar la visibilidad
    const mediaRef = useRef(null);

    const handlePlay = () => {
        mediaRef.current.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        mediaRef.current.pause();
        setIsPlaying(false);
    };

    const handleTogglePlay = () => {
        if (isPlaying) {
            handlePause();
        } else {
            handlePlay();
        }
    };

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            {isVisible && (
                <video width={400} height={400} ref={mediaRef}>
                    <source src={Myvideo} type='video/mp4' />
                    Tu navegador no soporta el video.
                </video>
            )}
            <div>
                <button onClick={handleTogglePlay}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <button onClick={toggleVisibility}>
                    {isVisible ? "Ocultar Video" : "Mostrar Video"}
                </button>
            </div>
        </div>
    );
}

export default Mediap;

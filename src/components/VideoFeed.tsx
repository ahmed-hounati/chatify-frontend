import React, { useEffect, useRef } from 'react';

interface VideoFeedProps {
    mediaStream: MediaStream;
    isMuted?: boolean;
}

export const VideoFeed: React.FC<VideoFeedProps> = ({ mediaStream, isMuted = false }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.srcObject = mediaStream;
        }
    }, [mediaStream]);

    return <video ref={videoRef} autoPlay playsInline muted={isMuted} />;
};

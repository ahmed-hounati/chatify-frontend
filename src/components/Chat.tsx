import { VideoFeed } from './VideoFeed';
import { useLocalCameraStream } from '../hooks/useLocalCamera';

export const Chat = () => {
    const { localStream } = useLocalCameraStream();

    return (
        <div className="flex">
            {/* Chat sidebar and components would go here */}
            <div className="video-container">
                {localStream ? (
                    <VideoFeed mediaStream={localStream} isMuted={true} />
                ) : (
                    <p>Loading video...</p>
                )}
            </div>
        </div>
    );
};

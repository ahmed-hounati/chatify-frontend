import { FunctionComponent } from 'react';
import { VideoFeed } from './VideoFeed';
import { useChatConnection } from '../hooks/useChatConnection.ts';
import { usePeerConnection } from '../hooks/usePeerConnection.ts';

interface Props {
    localStream: MediaStream;
}

export const VideoChatRoom: FunctionComponent<Props> = ({ localStream }) => {
    const { peerConnection, guestStream } = usePeerConnection(localStream);
    useChatConnection(peerConnection);

    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-black'>Your Video</h2>
            <VideoFeed mediaStream={localStream} isMuted={true} />

            {guestStream && (
                <div>
                    <h2>Guest Video</h2>
                    <VideoFeed mediaStream={guestStream} />
                </div>
            )}
        </div>
    );
};
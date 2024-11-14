// usePeerConnection.tsx
import { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { socket } from '../socket';

export function usePeerConnection(localStream: MediaStream) {
    const { roomName } = useParams();
    const [guestStream, setGuestStream] = useState<MediaStream | null>(null);

    const peerConnection = useMemo(() => {
        const connection = new RTCPeerConnection({
            iceServers: [{ urls: 'stun:stun2.1.google.com:19302' }],
        });

        connection.addEventListener('track', ({ streams }) => {
            setGuestStream(streams[0]);
        });

        connection.addEventListener('icecandidate', ({ candidate }) => {
            if (candidate) {
                socket.emit('send_candidate', { candidate, roomName });
            }
        });

        localStream.getTracks().forEach((track) => {
            connection.addTrack(track, localStream);
        });

        return connection;
    }, [localStream, roomName]);

    return {
        peerConnection,
        guestStream,
    };
}

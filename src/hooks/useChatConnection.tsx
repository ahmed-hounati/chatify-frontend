import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { socket } from '../socket';

export function useChatConnection(peerConnection: RTCPeerConnection) {
    const { roomName } = useParams();

    useEffect(() => {
        // Join the specified room when connected
        socket.emit('join_room', roomName);

        // Handle incoming WebRTC offers, answers, and candidates
        socket.on('send_connection_offer', async (offer) => {
            await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
            const answer = await peerConnection.createAnswer();
            await peerConnection.setLocalDescription(answer);
            socket.emit('send_answer', { roomName, answer });
        });

        socket.on('answer', (answer) => {
            peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
        });

        socket.on('send_candidate', (candidate) => {
            peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
        });

        return () => {
            socket.disconnect();
        };
    }, [peerConnection, roomName]);
}

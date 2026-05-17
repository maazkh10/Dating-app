import { Server } from "socket.io";

let io ; 

export const initSocket = (server) =>{
    io = new Server(server, {
        cors : {
            origin: "*"
        }
    })

    io.on("connection" , (sock) =>{
        console.log("user conennted" , sock.id)

        // jont room 
      
        sock.on("join-chat" , (matchId) =>{
            sock.join(matchId)
            console.log(`user join ${matchId}`)
        })

        sock.on("send-message" , (data) =>{
            const {matchId , message} = data;

            io.to(matchId).emit("receive-message" , message)
        })
        // discpnnenctd 
        sock.on("disconnect" , () =>{
            console.log("user diconneted")
        })
    })
}

export {io}
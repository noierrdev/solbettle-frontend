import { Typography } from "@mui/material";
import {io} from "socket.io-client"
import { BACKEND_URL } from "../../AppConfigs";
const socket=io(`${BACKEND_URL}/bettle`)
export default function(props){
    return (
        <Typography>
            Hello World!
        </Typography>
    )
}
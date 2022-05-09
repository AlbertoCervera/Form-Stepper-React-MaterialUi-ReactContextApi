import "./CardForm.css"
import SendIcon from '@mui/icons-material/Send';


export default function FinalizarEnviar() {

    return(
        <div className="card-form">
            <h1 style={{textAlign:"center"}}><SendIcon sx={{fontSize:"40px"}}/>Finalizar y Enviar</h1>
        </div>
    )
}
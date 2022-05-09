import "./CardForm.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';



export default function Finalizado() {

    return(
        <div className="card-form">
            <h1>Enviado y Guardado...</h1>
            <div className="succes">
                <CheckCircleIcon sx={{fontSize: "400px",color: "#00cc22",zIndex:"2"}} />
                <div className="circle"></div>
            </div>
            
        </div>  
    )
}
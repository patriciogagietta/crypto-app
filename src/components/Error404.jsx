import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container-error">
            <div>
                <p>La ruta que buscas no existe</p>
            </div>
            <Link to='/' className="back-to-home">
                Volver a Inicio
            </Link>
        </div>
    );
};

export default Error404;
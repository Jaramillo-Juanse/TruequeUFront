import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <main>
            Página no encontrada, vuelve al inicio.
            <div>
                <Link to="/">Home</Link>
            </div>
        </main>
    )
}
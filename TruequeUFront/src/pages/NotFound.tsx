import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <main>
            We can't locate this page, please come back home
            <div>
                <Link to="/">Back to Home</Link>
            </div>
        </main>
    )
}
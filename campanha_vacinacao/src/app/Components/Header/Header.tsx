import Link from "next/link";
import styles from "../../page.module.css"
export default function Header() {
    return (
        <header style={{ backgroundColor: '#506175' }}>
            <p>Vacine-se</p>

            <nav style={{ display: "flex", gap: "20px" }}>
                <Link href="/beneficios" style={{ color: "white", textDecoration: "none" }}>
                    Benefícios
                </Link>
                <Link href="/agendar" style={{ color: "white", textDecoration: "none" }}>
                    Agendar
                </Link>
                <Link href="/calendario" style={{ color: "white", textDecoration: "none" }}>
                    Calendário
                </Link>
            </nav>
        </header>

    );
}
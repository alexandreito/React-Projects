import reactLogo from "../assets/react_logo.png"

export default function Navbar() {
    return (
        <header>
            <nav>
                <img src={reactLogo} alt="React logo" />
                <span>React Facts</span>
            </nav>
        </header>    
    )
}
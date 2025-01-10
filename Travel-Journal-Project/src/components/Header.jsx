import globe from "../assets/globe.png"

export default function Header(){
    return (
        <header>
            <img src={globe} alt="Globe" className="globe"/>
            <h1>my travel journal.</h1>
        </header>        
    )
}
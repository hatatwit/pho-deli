import Navbar from "../components/Navbar";

import "./styles.css";

export default function Home() {
    return (
        <div className="home" id="home">
            <Navbar/>
            <h1>Welcome</h1>
            <p>To Pho Deli in Malden, MA</p>
        </div>
    )
}
import React from "react";
import "./../CSS/navbar.css";

function Navbar() {
    return (
        <div className="Nav">
            <h1>
                <a href="" className="title-link">Mechagressive: The Reborn</a>
            </h1>

            <ul>
                <h2>
                    <li>
                        <a href="#">Chapter</a>
                    </li>

                </h2>
                <h2>
                    <li>
                        <a href="#">Mec'Leng Dictionary</a>
                    </li>

                </h2>
                <h2>
                    <li>
                        <a href="#">MechaWiki</a>
                    </li>
                </h2>
            </ul>
        </div>
    );
}

export default function NavigationBar() {
    return (
        <>
            <Navbar />
        </>
    );
}

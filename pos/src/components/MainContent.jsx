import { useState } from "react";

/* Stickers */
import Rubiks from '../assets/sticker-1.png';
import Dog from '../assets/sticker-2.png';
import Bird from '../assets/sticker-3.png';
import Cat from '../assets/sticker-4.png';
import Capybara from '../assets/sticker-5.png';

/* Keychains */
import EarlAgustin from '../assets/track-1.png';
import Ivos from '../assets/track-2.png';
import Niki from '../assets/track-3.png';
import Bea from '../assets/track-4.png';
import Clairo from '../assets/track-5.png';
import Faye from '../assets/track-6.png';
import Coj from '../assets/track-7.png';
import Tyler from '../assets/track-8.png';

export default function MainContent({ onAddToOrder }) {
    const [filter, setFilter] = useState("All");

    const items = [
        { name: "Computer vs. Rubiks Cube", src: Rubiks, category: "Sticker" },
        { name: "Dr. PomPom", src: Dog, category: "Sticker" },
        { name: "Pigeon Loading", src: Bird, category: "Sticker" },
        { name: "Cat Gaming", src: Cat, category: "Sticker" },
        { name: "Sleeping Capybara", src: Capybara, category: "Sticker" },
        { name: "Earl Agustin", src: EarlAgustin, category: "Keychain" },
        { name: "IV of Spades", src: Ivos, category: "Keychain" },
        { name: "Niki", src: Niki, category: "Keychain" },
        { name: "Beabadoobee", src: Bea, category: "Keychain" },
        { name: "Clairo", src: Clairo, category: "Keychain" },
        { name: "Faye Webster", src: Faye, category: "Keychain" },
        { name: "Tyler, The Creator", src: Tyler, category: "Keychain" },
        { name: "Cup of Joe", src: Coj, category: "Keychain" },
    ];

    const filteredItems = filter === "All" ? items : items.filter(item => item.category === filter);

    return (
        <>
            <div className="buttons-wrapper">
                <button
                    className={filter === "All" ? "active" : ""}
                    onClick={() => setFilter("All")}
                >
                    All
                </button>
                <button
                    className={filter === "Sticker" ? "active" : ""}
                    onClick={() => setFilter("Sticker")}
                >
                    Stickers
                </button>
                <button
                    className={filter === "Keychain" ? "active" : ""}
                    onClick={() => setFilter("Keychain")}
                >
                    Laminated Keychains
                </button>
            </div>

            {filteredItems.map((item, index) => (
                <div
                    className="item"
                    key={index}
                    onClick={() => onAddToOrder(item)}
                >
                    <img 
                        className={item.category.toLowerCase()} 
                        src={item.src} 
                        alt={item.name} 
                    />
                    <p>{item.name}</p>
                </div>
            ))}
        </>
    );
}
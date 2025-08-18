import { useState } from "react";

/* Stickers */
import Rubiks from '../../assets/sticker-1.png';
import Dog from '../../assets/sticker-2.png';
import Bird from '../../assets/sticker-3.png';
import Cat from '../../assets/sticker-4.png';
import Capybara from '../../assets/sticker-5.png';
import MatchaHomie from '../../assets/sticker-6.png';
import MatchaGirly from '../../assets/sticker-7.png';
import Error from '../../assets/sticker-8.png';
import Clover from '../../assets/sticker-9.png';
import Chats from '../../assets/sticker-10.png';
import Sparkle from '../../assets/sticker-11.png';

/* Keychains */
import EarlAgustin from '../../assets/keychain-1.png';
import Ivos from '../../assets/keychain-2.png';
import Niki from '../../assets/keychain-3.png';
import Bea from '../../assets/keychain-4.png';
import Clairo from '../../assets/keychain-5.png';
import Faye from '../../assets/keychain-6.png';
import Coj from '../../assets/keychain-7.png';
import Tyler from '../../assets/keychain-8.png';
import Basketball from '../../assets/keychain-9-rect.png';
import Airplane from '../../assets/keychain-10-rect.png';
import OldHouse from '../../assets/keychain-11-rect.png';
import Med from '../../assets/keychain-12-rect.png';
import Heart from '../../assets/keychain-13-rect.png';

export default function MainContent({ onAddToOrder, itemsFromDB, orderedItems }) {
    const [filter, setFilter] = useState("All");

    const stickerPrice = 15;
    const keychainPrice = 120;

    const items = [
        { name: "Computer vs. Rubik's Cube", src: Rubiks, category: "Sticker", price: stickerPrice },
        { name: "Dr. PomPom", src: Dog, category: "Sticker", price: stickerPrice },
        { name: "Loading Pigeon", src: Bird, category: "Sticker", price: stickerPrice },
        { name: "Catto Gaming", src: Cat, category: "Sticker", price: stickerPrice },
        { name: "Sleeping Capybara", src: Capybara, category: "Sticker", price: stickerPrice },
        { name: "Matcha Homie", src: MatchaHomie, category: "Sticker", price: stickerPrice },
        { name: "Matcha Girly", src: MatchaGirly, category: "Sticker", price: stickerPrice },
        { name: "Error", src: Error, category: "Sticker", price: stickerPrice },
        { name: "Clover", src: Clover, category: "Sticker", price: stickerPrice },
        { name: "Chats", src: Chats, category: "Sticker", price: stickerPrice },
        { name: "Sparkle", src: Sparkle, category: "Sticker", price: stickerPrice },
        { name: "Earl Agustin", src: EarlAgustin, category: "Keychain", price: keychainPrice },
        { name: "IV of Spades", src: Ivos, category: "Keychain", price: keychainPrice },
        { name: "Niki", src: Niki, category: "Keychain", price: keychainPrice },
        { name: "Beabadoobee", src: Bea, category: "Keychain", price: keychainPrice },
        { name: "Clairo", src: Clairo, category: "Keychain", price: keychainPrice },
        { name: "Faye Webster", src: Faye, category: "Keychain", price: keychainPrice },
        { name: "Tyler, The Creator", src: Tyler, category: "Keychain", price: keychainPrice },
        { name: "Cup of Joe", src: Coj, category: "Keychain", price: keychainPrice },
        { name: "Basketball", src: Basketball, category: "rect", price: keychainPrice},
        { name: "Airplane", src: Airplane, category: "rect", price: keychainPrice},
        { name: "Old House", src: OldHouse, category: "rect", price: keychainPrice},
        { name: "Med", src: Med, category: "rect", price: keychainPrice},
        { name: "Heart", src: Heart, category: "rect", price: keychainPrice},
    ];

    const filteredItems = filter === "All" ? items : items.filter(item => item.category === filter);

    const itemsFromDBByName = new Map(itemsFromDB.map(item => [item.product_name, item]));
    const orderedItemsByName = new Map(orderedItems.map(item =>[item.name, item]));

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

            {filteredItems.map((item, index) => {
                const orderedItemQty = orderedItemsByName.get(item.name)?.quantity || 0;
                const itemFromDBQty = itemsFromDBByName.get(item.name)?.stocks_quantity || 0;

                return(
                    <div
                    className={`item fade-in ${(orderedItemQty + 1) > itemFromDBQty ? "item-out-of-stock" : ""}`}
                    key={index}
                    onClick={() => {
                        if((orderedItemQty + 1) > itemFromDBQty){
                            return;
                        }
                        onAddToOrder(item)}}
                    >
                    <img 
                        className={(item.category.toLowerCase().includes("rect")) ? "rect" : item.category.toLowerCase()} 
                        src={item.src} 
                        alt={item.name} 
                    />
                    <p>{item.name}</p>
                </div>
                )
                
            })}
        </>
    );
}
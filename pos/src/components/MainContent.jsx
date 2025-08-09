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

export default function MainContent(){
    return (
        <div className="items-container">
            <div className="buttons-wrapper">
                <button>All</button>
                <button>Stickers</button>
                <button>Laminated Keychains</button>
            </div>

            <div className="item">
                <img class="sticker" src={Rubiks} alt="Sticker-1" />
                <p>Computer vs. Rubiks Cube</p>
            </div>
            
            <div className="item">
                <img class="sticker" src={Dog} alt="Sticker-2" />
                <p>Dr. PomPom</p>
            </div>

            <div className="item">
                <img class="sticker" src={Bird} alt="Sticker-3" />
                <p>Pigeon Loading</p>
            </div>

            <div className="item">
                <img class="sticker" src={Cat} alt="Sticker-4" />
                <p>Cat Gaming</p>
            </div>

            <div className="item">
                <img class="sticker" src={Capybara} alt="Sticker-5" />
                <p>Sleeping Capybara</p>
            </div>

            <div className="item">
                <img class="keychain" src={EarlAgustin} alt="Keychain-1" />
                <p>Earl Agustin</p>
            </div>

            <div className="item">
                <img class="keychain" src={Ivos} alt="Keychain-2" />
                <p>IV of Spades</p>
            </div>

            <div className="item">
                <img class="keychain" src={Niki} alt="Keychain-3" />
                <p>Niki</p>
            </div>

            <div className="item">
                <img class="keychain" src={Bea} alt="Keychain-4" />
                <p>Beabadoobee</p>
            </div>

            <div className="item">
                <img class="keychain" src={Clairo} alt="Keychain-5" />
                <p>Clairo</p>
            </div>

            <div className="item">
                <img class="keychain" src={Faye} alt="Keychain-6" />
                <p>Faye Webster</p>
            </div>

            <div className="item">
                <img class="keychain" src={Tyler} alt="Keychain-7" />
                <p>Tyler, The Creator</p>
            </div>

            <div className="item">
                <img class="keychain" src={Coj} alt="Keychain-8" />
                <p>Cup of Joe</p>
            </div>
        </div>
    );
}
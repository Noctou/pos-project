/* Stickers */
import Rubiks from '../assets/sticker-1.png';
import Dog from '../assets/sticker-2.png';
import Bird from '../assets/sticker-3.png';
import Rat from '../assets/sticker-4.png';
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
            </div>
            
            <div className="item">
                <img class="sticker" src={Dog} alt="Sticker-2" />
            </div>

            <div className="item">
                <img class="sticker" src={Bird} alt="Sticker-3" />
            </div>

            <div className="item">
                <img class="sticker" src={Rat} alt="Sticker-4" />
            </div>

            <div className="item">
                <img class="sticker" src={Capybara} alt="Sticker-5" />
            </div>

            <div className="item">
                <img class="keychain" src={EarlAgustin} alt="" />
            </div>

            <div className="item">
                <img class="keychain" src={Ivos} alt="" />
            </div>

            <div className="item">
                <img class="keychain" src={Niki} alt="" />
            </div>

            <div className="item">
                <img class="keychain" src={Bea} alt="" />
            </div>

            <div className="item">
                <img class="keychain" src={Clairo} alt="" />
            </div>

            <div className="item">
                <img class="keychain" src={Faye} alt="" />
            </div>

            <div className="item">
                <img class="keychain" src={Tyler} alt="" />
            </div>

            <div className="item">
                <img class="keychain" src={Coj} alt="" />
            </div>
        </div>
    );
}
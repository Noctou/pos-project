import Orders from '../components/Orders';
import MainContent from '../components/MainContent';
import Calculator from '../components/Calculator';

export default function HomePage(){
    return(
        <>
            <div className="container home">
                <div className="layer">
                <div className="items-container">
                    <MainContent />
                </div>
                <div className="orders-container">
                    <Orders />
                    <Calculator />
                </div>
                </div>
            </div>
        </>
    )
}
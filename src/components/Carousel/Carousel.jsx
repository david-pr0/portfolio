import davidAutomoveis from '../../assets/david-automoveis.png';
import onePiece from '../../assets/one-piece.png';
import disneyPlus from '../../assets/disney-plus.png';
import davidImoveis from '../../assets/david-imoveis.png';
import { Image } from './Catousel.style';

const Carousel = () => {
    return (
        <div className="container">
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <a href="https://site-dr-automoveis.vercel.app" target="_blanc">
                            <Image src={davidAutomoveis} alt="..." />
                        </a>
                    </div>
                    <div className="carousel-item">
                        <a href="https://landing-page-one-piece-delta.vercel.app" target="_blanc">
                            <Image src={onePiece} alt="..." />
                        </a>
                    </div>
                    <div className="carousel-item">
                        <a href="https://clone-disneyplus-nine-lime.vercel.app" target="_blanc">
                            <Image src={disneyPlus} alt="..." />
                        </a>
                    </div>
                    <div className="carousel-item">
                        <a href="https://site-david-imoveis.vercel.app" target="_blanc">
                            <Image src={davidImoveis} alt="..." />
                        </a>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Carousel
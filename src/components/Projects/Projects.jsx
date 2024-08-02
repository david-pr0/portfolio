import davidAutomoveis from '../../assets/david-automoveis.png';
import onePiece from '../../assets/one-piece.png';
import disneyPlus from '../../assets/disney-plus.png';
import davidImoveis from '../../assets/david-imoveis.png';
import drGames from '../../assets/dr-games.png';
import restaurante from '../../assets/restaurante.png';
import { Ul } from './Projects.style';

const Projects = () => {
    return (
        <div className="container">
            <h2 className="text-center p-5">Projetos finalizados</h2>
            <Ul>
                <li className="btn btn-dark">
                    <a href="https://landing-page-one-piece-delta.vercel.app" target="_blanc">
                        <h3 className='p-2'>Página de steaming com o tema de One Piece</h3>
                        <img src={onePiece} alt="..." className='w-100' />
                    </a>
                </li>
                <li className="btn btn-dark">
                    <a href="https://site-dr-automoveis.vercel.app" target="_blanc">
                        <h3 className='p-2'>Página para um e-commerce de veículos</h3>
                        <img src={davidAutomoveis} alt="..." className='w-100' />
                    </a>
                </li>
                <li className="btn btn-dark">
                    <a href="https://clone-disneyplus-nine-lime.vercel.app" target="_blanc">
                        <h3 className='p-2'>Clone da interface da página do Disney+</h3>
                        <img src={disneyPlus} alt="..." className='w-100' />
                    </a>
                </li>
                <li className="btn btn-dark">
                    <a href="https://site-dr-games.vercel.app" target="_blanc">
                        <h3 className='p-2'>Página para um e-commerce de jogos</h3>
                        <img src={drGames} alt="..." className='w-100' />
                    </a>
                </li>
                <li className="btn btn-dark">
                    <a href="https://site-david-imoveis.vercel.app" target="_blanc">
                        <h3 className='p-2'>Página para um e-commerce de imóveis</h3>
                        <img src={davidImoveis} alt="..." className='w-100' />
                    </a>
                </li>
                <li className="btn btn-dark">
                    <a href="https://site-restaurante-six.vercel.app" target="_blanc">
                        <h3 className='p-2'>Página de informações para um restaurante</h3>
                        <img src={restaurante} alt="..." className='w-100' />
                    </a>
                </li>
            </Ul>
        </div>
    )
}

export default Projects
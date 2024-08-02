import banner from '../../assets/banner.png';
import { Image, Text, Div } from './About.style';

const About = () => {
    return (
        <div className="container pt-5 pb-5">
            <Div className='d-lg-grid'>
                <div>
                    <h2>Quem sou eu?</h2>
                    <Text>Sou um desenvolvedor freelancer sempre em busca de aprender novas tecnologias e melhorar minhas habilidades. Minha especialidade é o desenvolvimento front-end, e estou pronto para atender qualquer tipo de demanda nessa área. Além disso, estou me aprofundando no desenvolvimento back-end, o que me permitirá, em breve, criar aplicações completas, desde o banco de dados até a interface que você, usuário, interage. Dê uma olhada em alguns dos meus projetos abaixo e, se tiver interesse nos meus serviços, sinta-se à vontade para entrar em contato!</Text>
                </div>
                <div>
                    <Image src={banner} alt="..."/>
                </div>
            </Div>
        </ div>
    )
}
export default About
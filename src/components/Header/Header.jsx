import { Image, Link, Div, Ul, Li, Container } from "./Header.style";
import avatar from "../../assets/avatar.png"

const Header = () => {
    return (
        <div className="container pt-5 pb-5">
            <Container className="d-lg-flex justify-content-between">
                <Div>
                    <Image src={avatar} alt="Minha imagem"/>
                    <div>
                        <h1>David Rafael</h1>
                        <h2>Dev Front End</h2>
                    </div>
                </Div>
                <div>
                    <Ul className="ms-md-auto m-0 h-100">
                        <h2>Entre em contato:</h2>
                        <Li>
                            <i className="bi bi-whatsapp" /><p className="ms-3">(81)99233-9174</p>
                        </Li>
                        <Li>
                            <i className="bi bi-envelope-at" /><p className="ms-3">davidsoudev@gmail.com</p>
                        </Li>
                        <Li>
                            <i className="bi bi-linkedin" /><Link href="https://linkedin.com/in/david-rafael-dev" target="_blanc" className="ms-3">LinkedIn</Link>
                        </Li>
                    </Ul>
                </div>
            </Container>
        </div>
    )
}

export default Header
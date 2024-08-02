import styled from "styled-components";

export const Image = styled.img `
    width: 100%;
    height: 270px;

    @media (max-width: 767px) {
        display: none;
    }
`

export const Text = styled.p `
    text-align: justify;
    font-size: 18px;

    @media (max-width: 767px) {
        font-size: 16px;
    }
`

export const Div = styled.div `
    grid-template-columns: 1fr 1fr;
    gap: 25px;

    @media (max-width: 1300px) {
        grid-template-columns: 1fr;
    }
`
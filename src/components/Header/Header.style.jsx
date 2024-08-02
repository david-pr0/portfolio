import styled from "styled-components";

export const Image = styled.img `
    border-radius: 50%;
    padding-right: 16px;
    max-width: 180px;
    width: 100%;
    max-height: 180px;
    height: 100%;

    @media (max-width: 767px) {
        padding: 0;
        padding-bottom: 16px;
    }
`

export const Div = styled.div `
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`

export const Link = styled.a `
    text-decoration: underline;
`

export const Ul = styled.ul `
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 767px) {
        padding: 0;
        padding-top: 24px;
        text-align: center;
    }
`

export const Li = styled.li `
    display: flex;
    font-size: 18px;

    @media (max-width: 767px) {
        justify-content: center;
    }
`

export const Container = styled.div `
    @media (max-width: 1023px) {
        display: flex;
    }

    @media (max-width: 767px) {
        display: block;
    }
`
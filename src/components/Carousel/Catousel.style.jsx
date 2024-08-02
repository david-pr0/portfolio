import styled from "styled-components";

export const Image = styled.img `
    display: block;
    width: 100%;
    height: 700px;

    @media (max-width: 1023px) {
        height: 450px;
    }

    @media (max-width: 767px) {
        height: 250px;
    }
`
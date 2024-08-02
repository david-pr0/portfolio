import styled from "styled-components";

export const Ul = styled.ul `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    padding: 0;

    & li {
        & img {
            height: 200px;
        }
    }

    @media (max-width: 1023px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        gap: 0;

        & li {
            & img {
                height: 150px;
            }
        }
    }
`
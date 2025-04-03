import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const PlayerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0.75rem auto 0.25rem;
    width: 25%;
    align-items: center;
    position: absolute;
    bottom: 2rem;
    left: 2rem;
    height: 30rem;
`;

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PlayerName = styled.div`
    color: var(--primary-white);
    text-shadow: 0px 0px 2rem var(--primary-white);
    margin: 0.5rem 0rem 0rem 0.75rem;
    font-family: clubSign;
    font-size: var(--body-size);
`;

export const IconContainer = styled.div`
    display: flex;
`;

export const CustomIcon = styled(FontAwesomeIcon)`
    height: var(--body-size);
    width: var(--body-size);
    /* color: rgb(48, 47, 47); */
    color: red;
    background-color: transparent;
    -webkit-text-stroke: 2px var(--primary-pink);
    text-shadow: 0px 0px 20px var(--primary-pink);
`;

export const ScoreContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ScoreWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Score = styled.div`
    font-size: var(--body-size);
`;

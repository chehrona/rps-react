import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: green;
    padding: 0rem 2rem;
`;

export const InnerContainer = styled.div`
    padding: 0.75rem 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
`;

export const PlayerName = styled.div`
    color: var(--primary-white);
    text-shadow: 0px 0px 2rem var(--primary-white);
    margin: 0.5rem 0rem 0rem 0.75rem;
    font-size: var(--subtitle-size);
`;

export const IconContainer = styled.div`
    display: flex;
`;

export const CustomIcon = styled(FontAwesomeIcon)`
    height: var(--subtitle-size);
    width: var(--subtitle-size);
    /* color: rgb(48, 47, 47); */
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
    color: var(--primary-white);
    margin-left: 0.75rem;
`;

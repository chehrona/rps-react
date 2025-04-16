import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const PlayerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28%;
    height: 100%;
    flex-direction: column;
    gap: 1rem;
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
    padding: 1rem 0.5rem 2rem 0.5rem;
    font-size: var(--subtitle-size);
`;

export const CustomIcon = styled(FontAwesomeIcon)<{ $color: string }>`
    height: var(--subtitle-size);
    width: var(--subtitle-size);
    color: transparent;
    stroke-width: 0.75rem;
    stroke: ${({ $color }) => $color && $color};
    filter: ${({ $color }) => `drop-shadow(0rem 0rem 0.5rem ${$color})`};
`;

export const ScoreContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

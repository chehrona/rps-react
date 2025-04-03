import styled, { keyframes } from 'styled-components';

const shadowFade = keyframes`
    50% {box-shadow: 0px 0px 2rem var(--primary-blue);}
`;

export const BorderContainer = styled.div<{ $delay?: number }>`
    border: 0.5rem double var(--primary-blue);
    border-radius: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${shadowFade} 10s infinite;
    width: 100%;
    height: 100%;
    animation-delay: ${({ $delay }) => ($delay ? `${$delay}s` : '0s')};
`;

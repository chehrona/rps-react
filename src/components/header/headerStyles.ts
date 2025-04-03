import styled, { keyframes, css } from 'styled-components';

type HeaderLetterProps = {
    $delay?: number;
    $margin?: boolean;
    $color: string;
    $font: string;
};

const flickerLetterPink = keyframes`
    0% {
        opacity: 1;
        color: var(--primary-pink);
        text-shadow: 0 0 30px rgba(253, 4, 153, 0.6), 0 0 60px rgba(253, 4, 153, 0.45), 0 0 110px rgba(253, 4, 153, 0.25), 0 0 100px rgba(253, 4, 153, 0.1);
      }
      13.9% {
        opacity: 1;
        color: var(--primary-pink);
        text-shadow: 0 0 30px rgba(253, 4, 154, 0.6), 0 0 60px rgba(253, 4, 153, 0.45), 0 0 110px rgba(253, 4, 153, 0.25), 0 0 100px rgba(253, 4, 153, 0.1);
      }
      14% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      14.9% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      15% {
        opacity: 1;
        color: var(--primary-pink);
        text-shadow: 0 0 30px rgba(253, 4, 153, 0.55), 0 0 60px rgba(253, 4, 153, 0.4), 0 0 110px rgba(253, 4, 153, 0.2), 0 0 100px rgba(253, 4, 153, 0.1);
      }
      15.9% {
        opacity: 1;
        color: rgb(94, 92, 92);
        text-shadow: none;
      }
      16% {
        opacity: 1;
        color: var(--primary-pink);
        text-shadow: 0 0 30px rgba(253, 4, 153, 0.55), 0 0 60px rgba(253, 4, 153, 0.4), 0 0 110px rgba(253, 4, 153, 0.2), 0 0 100px rgba(253, 4, 153, 0.1);
      }
      16.1% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      22.9% {
        opacity: 1;
        color: var(--primary-pink);
        text-shadow: 0 0 30px rgba(253, 4, 153, 0.55), 0 0 60px rgba(253, 4, 153, 0.4), 0 0 110px rgba(253, 4, 153, 0.2), 0 0 100px rgba(253, 4, 153, 0.1);
      }
      23% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      24.9% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      25% {
        opacity: 1;
        color: var(--primary-pink);
        text-shadow: 0 0 30px rgba(253, 4, 153, 0.55), 0 0 60px rgba(253, 4, 153, 0.35), 0 0 100px rgba(253, 4, 153, 0.1);
      }
      34.9% {
        opacity: 1;
        color: var(--primary-pink);
        text-shadow: 0 0 30px rgba(253, 4, 153, 0.55), 0 0 60px rgba(253, 4, 153, 0.35), 0 0 100px rgba(253, 4, 153, 0.1);
      }
      35% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      39.9% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      40% {
        opacity: 1;
        color: var(--primary-pink);
        text-shadow: 0 0 30px rgba(253, 4, 153, 0.55), 0 0 60px rgba(253, 4, 153, 0.35);
      }
      42.9% {
        opacity: 1;
        color: var(--primary-pink);
        text-shadow: 0 0 30px rgba(253, 4, 153, 0.55), 0 0 60px rgba(253, 4, 153, 0.35);
      }
      43% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      44.9% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      45% {
        opacity: 1;
        color: var(--primary-pink);
        text-shadow: 0 0 30px rgba(253, 4, 153, 0.45), 0 0 60px rgba(253, 4, 153, 0.25);
      }
      50% {
        opacity: 1;
        color: var(--primary-pink);
        text-shadow: 0 0 30px rgba(253, 4, 153, 0.45), 0 0 60px rgba(253, 4, 153, 0.25);
      }
      54.9% {
        opacity: 1;
        color: var(--primary-pink);
        text-shadow: 0 0 30px rgba(253, 4, 153, 0.45), 0 0 60px rgba(253, 4, 153, 0.25);
      }
      55% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      69.4% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      69.5% {
        opacity: 1;
        color: var(--primary-pink);
        text-shadow: 0 0 30px rgba(253, 4, 153, 0.45), 0 0 60px rgba(253, 4, 153, 0.25);
      }
      69.9% {
        opacity: 1;
        color: var(--primary-pink);
        text-shadow: 0 0 30px rgba(253, 4, 153, 0.45), 0 0 60px rgba(253, 4, 153, 0.25);
      }
      70% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      79.4% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      79.9% {
        opacity: 1;
        color: var(--primary-pink);
        text-shadow: 0 0 30px rgba(253, 4, 153, 0.25);
      }
      80% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      89.8% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      89.9% {
        opacity: 1;
        color: var(--primary-pink);
        text-shadow: none;
      }
      90% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      99.9% {
        opacity: 1;
        color: var(--primary-pink);
        text-shadow: none;
      }
      100% {
        opacity: 1;
      }
`;

const flickerLetterWhite = keyframes`
    0% {
        opacity: 1;
        color: white;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      13.9% {
        opacity: 1;
        color: white;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.45), 0 0 110px rgba(255, 255, 255, 0.25), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      14% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      14.9% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      15% {
        opacity: 1;
        color: white;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      22.9% {
        opacity: 1;
        color: white;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.4), 0 0 110px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      23% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      24.9% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      25% {
        opacity: 1;
        color: white;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      34.9% {
        opacity: 1;
        color: white;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35), 0 0 100px rgba(255, 255, 255, 0.1);
      }
      35% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      39.9% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      40% {
        opacity: 1;
        color: white;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
      }
      42.9% {
        opacity: 1;
        color: white;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.55), 0 0 60px rgba(255, 255, 255, 0.35);
      }
      43% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      44.9% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      45% {
        opacity: 1;
        color: white;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
      }
      50% {
        opacity: 1;
        color: white;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
      }
      54.9% {
        opacity: 1;
        color: white;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
      }
      55% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      69.4% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      69.5% {
        opacity: 1;
        color: white;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
      }
      69.9% {
        opacity: 1;
        color: white;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.45), 0 0 60px rgba(255, 255, 255, 0.25);
      }
      70% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      79.4% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      79.9% {
        opacity: 1;
        color: white;
        text-shadow: 0 0 30px rgba(255, 255, 255, 0.25);
      }
      80% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      89.8% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      89.9% {
        opacity: 1;
        color: white;
        text-shadow: none;
      }
      90% {
        opacity: 1;
        text-shadow: none;
        color: rgb(94, 92, 92);
      }
      100% {
        opacity: 1;
      }
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0.75rem auto 0.25rem;
    width: 36rem;
    align-items: center;
`;

export const InnerContainer = styled.div`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderSection = styled.div`
    margin-right: 1rem;

    &:last-child {
        margin-right: 0rem;
    }
`;

export const HeaderLetter = styled.div<HeaderLetterProps>`
    font-size: ${({ $font }) => $font && `${$font}`};
    font-family: clubSign;
    text-align: center;
    margin: 0 auto;
    display: inline-flex;
    color: ${({ $color }) => $color && `${$color}`};
    text-shadow: ${({ $color }) => $color && `0rem 0rem 2rem ${$color}`};
    margin-right: ${({ $margin }) => ($margin ? '1rem' : '0rem')};

    ${({ $delay, $color }) =>
        $delay
            ? css`
                  animation: ${$color === 'var(--primary-pink)'
                          ? flickerLetterPink
                          : flickerLetterWhite}
                      30s ${$delay}s infinite;
              `
            : css`
                  animation: none;
              `};
`;

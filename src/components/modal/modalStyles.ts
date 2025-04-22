import styled, { css } from 'styled-components';

export const MainContainer = styled.div<{ $open: boolean }>`
    background-color: red;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;

    ${({ $open }) =>
        $open
            ? css`
                  display: flex;
              `
            : css`
                  display: none;
              `};
`;

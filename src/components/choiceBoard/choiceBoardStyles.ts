import styled, { css } from 'styled-components';

export const IconContainer = styled.div<{ $disabled: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    height: 10rem;
    min-height: 10rem;
    width: 20rem;

    ${({ $disabled }) =>
        $disabled
            ? css`
                  pointer-events: none;
              `
            : css`
                  pointer-events: all;
              `}
`;

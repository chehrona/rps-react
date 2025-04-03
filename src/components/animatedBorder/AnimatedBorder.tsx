import React, { ReactNode } from 'react';

// Styled components
import { BorderContainer } from './animatedBorderStyles';

const AnimatedBorder: React.FC<{ children: ReactNode; delay: number }> = ({
    children,
    delay,
}) => {
    return <BorderContainer $delay={delay}>{children}</BorderContainer>;
};

export default AnimatedBorder;

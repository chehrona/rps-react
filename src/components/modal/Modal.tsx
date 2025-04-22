import React, { useEffect, useState } from 'react';

import { MainContainer } from './modalStyles';

const Modal: React.FC<{ message: string }> = ({ message }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (message.length !== 0) {
            setIsVisible(true);

            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    return <MainContainer $open={isVisible}></MainContainer>;
};

export default Modal;

import React from 'react';

import { Container } from './styles';

interface Tooltip {
    title: string;
    className?: string;
}

const Tooltip: React.FC<Tooltip> = ({title, children}) => (
    <Container>
        {children}
        <span>{title}</span>
    </Container>
);
export default Tooltip;
import React, { ReactNode, MouseEventHandler } from 'react';
import styles from '@/styles/components/Card.module.css'

interface CardProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

const Card: React.FC<CardProps> = ({children, onClick}) => {
    return (
        <div className={`${styles.card}`} onClick={onClick}>
            {children}
        </div>
    )
}

export default Card;
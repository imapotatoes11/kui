import React, { ReactNode, MouseEventHandler } from 'react';
import styles from '@/styles/components/Button.module.css';

interface ButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'none';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, size = 'medium', color = 'primary', disabled = false }) => {
    return (
        <button
            className={`${styles.button} ${styles[size]} ${styles[color]}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
import React, { ReactNode, MouseEventHandler } from 'react';
import styles from '@/styles/components/ConfigButton.module.css';

interface ConfigButtonProps {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    position?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
    variant?: 'default' | 'outline' | 'borderless';
    disabled?: boolean;
}

const ConfigButton: React.FC<ConfigButtonProps> = ({children, onClick, position = 'bottomleft', variant = 'default', disabled}) => {
    var fvariant = `rounded-lg bg-white shadow-lg`;
    if (variant === 'outline') {
        fvariant = `rounded-lg border-2 border-blue-500 text-blue-600`
    } else if (variant === 'borderless') {
        fvariant = `rounded-lg`
    }

    return (
        <button
            className={`${fvariant} ${styles.configbutton} ${styles[position]}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default ConfigButton;
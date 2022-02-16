import React from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

const Container = ({ className, children }) => {
    return (
        <div className={cn(styles.container, className)}>
            {children}
        </div>
    );
};

export default Container;

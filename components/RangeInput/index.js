import React, {useState} from 'react';
import styles from './style.module.scss';

const RangeInput = ({
                        name, min = 0, max = 1, value,
                        onChange, ...props
                    }) => {
    return (
        <div className={styles.rangeInputWrapper}
             style={{
                 '--progress-width': `${(value / max) * 100}%`,
             }}
        >
            <input className={styles.rangeInput}
                   name={name}
                   type={'range'}
                   min={min}
                   max={max}
                   value={value}
                   onChange={onChange}
                   {...props}
            />
        </div>
    );
};

export default RangeInput;

import React, {useState} from 'react';
import styles from './style.module.scss';

const RangeInput = ({ name, min=0, max=1, ...props }) => {
    const [value, setValue] = useState(0);

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
                   onChange={e => setValue(e.target.value)}
                   {...props}
            />
        </div>
    );
};

export default RangeInput;

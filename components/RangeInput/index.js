import React, {useCallback, useState} from 'react';
import styles from './style.module.scss';
import cn from "classnames";

const RangeInput = ({
                        name, min = 0, max = 1, value,
                        onChange, ...props
                    }) => {
    const [drag, setDrag] = useState(false);

    const onDragEnter = useCallback((e) => {
        setDrag(true);
    }, []);

    const onDragExit = useCallback((e) => {
        setDrag(false);
    }, []);

    return (
        <div className={styles.rangeInputWrapper}
             style={{
                 '--progress-width': `${(value / max) * 100}%`,
             }}
        >
            <input className={cn(styles.rangeInput, {
                [styles.drag]: drag,
            })}
                   name={name}
                   type={'range'}
                   min={min}
                   max={max}
                   value={value}
                   onChange={onChange}
                   aria-label={name}
                   onMouseDown={onDragEnter}
                   onMouseUp={onDragExit}
                   {...props}
            />
        </div>
    );
};

export default RangeInput;

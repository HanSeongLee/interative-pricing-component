import React from 'react';
import styles from './style.module.scss';
import RangeInput from "../RangeInput";
import ToggleButton from "../ToggleButton";

const PricingForm = () => {
    return (
        <form className={styles.form}>
            <div className={styles.body}>
                <p className={styles.pageviews}>
                    100K PAGEVIEWS
                </p>
                <RangeInput name={'type'}
                            min={0}
                            max={6}
                />
                <div className={styles.priceContainer}>
                    <span className={styles.price}>
                        $16.00&nbsp;
                    </span>
                    <span className={styles.period}>
                        / month
                    </span>
                </div>
                <div className={styles.billingContainer}>
                    <span>Monthly Billing</span>
                    <ToggleButton name={'period'} />
                    <span className={styles.yearlyBillingLabel}>
                        Yearly Billing
                        <span className={styles.discountLabel}>-25%</span>
                    </span>
                </div>
            </div>
            <div className={styles.footer}>
                <ul className={styles.featureContainer}>
                    <li className={styles.featureItem}>
                        Unlimited websites
                    </li>
                    <li className={styles.featureItem}>
                        100% data ownership
                    </li>
                    <li className={styles.featureItem}>
                        Email reports
                    </li>
                </ul>

                <button className={styles.submitButton}
                        type={'submit'}
                >
                    Start my trial
                </button>
            </div>
        </form>
    );
};

export default PricingForm;

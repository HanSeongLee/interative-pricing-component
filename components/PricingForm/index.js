import React from 'react';
import styles from './style.module.scss';
import RangeInput from "../RangeInput";
import ToggleButton from "../ToggleButton";
import {Controller, useForm} from 'react-hook-form';
import FeatureContainer from "../../containers/FeatureContainer";

const PricingForm = ({ onSubmit, priceTable, yearlyDiscount }) => {
    const { control, handleSubmit, watch } = useForm();
    const type = Number(watch('type', 0));
    const yearlyBilling = watch('yearlyBilling', false);
    const formatter = Intl.NumberFormat('en', { notation: 'compact' });

    const monthlyBilling = () => {
        const price = priceTable[type].price;
        const discount = yearlyBilling ? (price * (yearlyDiscount / 100)) : 0;
        const monthlyPrice = price - discount;
        return monthlyPrice.toFixed(2);
    };

    return (
        <form className={styles.form}
              onSubmit={handleSubmit(onSubmit)}
        >
            <div className={styles.body}>
                <p className={styles.pageviews}>
                    {`${formatter.format(priceTable[type].pageViews)} PAGEVIEWS`}
                </p>
                <div className={styles.controller}>
                    <Controller name={'type'}
                                control={control}
                                defaultValue={'3'}
                                render={({field}) => (
                                    <RangeInput name={'type'}
                                                min={0}
                                                max={6}
                                                {...field}
                                    />
                                )}
                    />
                </div>
                <div className={styles.priceContainer}>
                    <span className={styles.price}>
                        ${monthlyBilling()}&nbsp;
                    </span>
                    <span className={styles.period}>
                        / month
                    </span>
                </div>
                <div className={styles.billingContainer}>
                    <span>Monthly Billing</span>
                    <Controller name={'yearlyBilling'}
                                control={control}
                                defaultValue={false}
                                render={({field}) => (
                                    <ToggleButton {...field} />
                                )}
                    />
                    <span className={styles.yearlyBillingLabel}>
                        Yearly Billing
                        <span className={styles.discountLabel}
                              data-value={yearlyDiscount}
                        ></span>
                    </span>
                </div>
            </div>
            <div className={styles.footer}>
                <FeatureContainer className={styles.featureContainer}
                                  items={priceTable[type]?.options}
                />

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

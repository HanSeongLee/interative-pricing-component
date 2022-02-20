import React, {useCallback} from 'react';
import PricingForm from "../../components/PricingForm";

const priceTable = [
    {
        pageViews: 10000,
        price: 5,
        options: [
            '100% data ownership',
        ]
    },
    {
        pageViews: 40000,
        price: 8,
        options: [
            '100% data ownership',
        ]
    },
    {
        pageViews: 80000,
        price: 12,
        options: [
            '100% data ownership',
            'Email reports',
        ]
    },
    {
        pageViews: 100000,
        price: 16,
        options: [
            'Unlimited websites',
            '100% data ownership',
            'Email reports',
        ]
    },
    {
        pageViews: 500000,
        price: 32,
        options: [
            'Unlimited websites',
            '100% data ownership',
            'Email reports',
        ]
    },
    {
        pageViews: 10000000,
        price: 60,
        options: [
            'Unlimited websites',
            '100% data ownership',
            'Phone support',
            'Email reports',
        ]
    },
    {
        pageViews: 25000000,
        price: 120,
        options: [
            'Unlimited websites',
            '100% data ownership',
            'Enhanced SSL security',
            'Phone support',
            'Email reports',
        ]
    },
];

const PricingFormContainer = () => {
    const onSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    return (
        <PricingForm onSubmit={onSubmit}
                     priceTable={priceTable}
                     yearlyDiscount={25}
        />
    );
};

export default PricingFormContainer;

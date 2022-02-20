import React from 'react';
import FeatureItem from "../../components/FeatureItem";

const FeatureContainer = ({ items, ...props }) => {
    return (
        <ul {...props}>
            {items?.map((item, index) => (
                <FeatureItem key={index}>
                    {item}
                </FeatureItem>
            ))}
        </ul>
    );
};

export default FeatureContainer;

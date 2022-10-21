import React from 'react';
import { Iprops } from './LazyItem';

const LazyImage = ({src, name} :Iprops) => {
    return (
        <img src={src} width={320} height={180}/>
    );
};

export default LazyImage;
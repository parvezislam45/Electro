import React from 'react';
import BestDeal from './BestDeal';
import BestSeller from './BestSeller';
import Feature from './Feature';
import NewsShelter from './NewsShelter';
import Recently from './Recently';
import Shop from './Shop';
import Side from './Side';
import SpecialOffer from './SpecialOffer';

const Home = () => {
    return (
        <div>
           <Side></Side> 
           <Shop></Shop>
           <SpecialOffer></SpecialOffer>
           <BestDeal></BestDeal>
           <BestSeller></BestSeller>
           <Recently></Recently>
           <Feature></Feature>
           <NewsShelter></NewsShelter>
        </div>
    );
};

export default Home;
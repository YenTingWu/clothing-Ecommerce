import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/Collections-overview/Collections-overview';
import CollectionPage from '../CollectionPage/CollectionPage'


import './ShopPage.scss';

const ShopPage = ({ match }) =>   (
    <div className='shopPage'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);


export default ShopPage;


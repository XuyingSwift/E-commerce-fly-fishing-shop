import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/Collection-overview/CollectionOverview.component'
import CollectionPage from '../CollectionPage/CollectionPage.component'

const ShopPage = ({ match }) => {
    return (
        <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
}

export default ShopPage;
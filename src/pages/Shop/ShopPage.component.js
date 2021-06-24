import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/Collection-overview/CollectionOverview.component'
import CollectionPage from '../CollectionPage/CollectionPage.component'

import {updateCollections} from '../../redux/shop/shop.actions';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import WithSpinner from '../../components/Spinner/WithSpinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) => dispatch(updateCollections(collectionMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)
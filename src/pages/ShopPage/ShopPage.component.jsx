import React from 'react';
import SHOP_DATA from './ShopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }

    }

    render() {
        const {collections} = this.state;
        return (
            <div className='shoppage'>
                {collections.map(({id, ...otherProps}) => (<CollectionPreview key={id} {...otherProps}/>))}
            </div>
        )
    }
}

export default ShopPage;
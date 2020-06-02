import React from 'react';
import collections from '../../localDatas/shop.data';
import CollectionPreview from '../../components/preview-collection/CollectionPreview';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: collections
        }
    }
    
    render() {
        const { collections } = this.state;

        return (
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))
        )
    }
}

export default ShopPage;


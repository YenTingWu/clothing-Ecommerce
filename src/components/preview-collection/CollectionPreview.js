import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items, match }) => (
    <div className='collection-preview'>      
        <Link to={`${match.url}/${title.toLowerCase()}`}>
            <h1 className='title' >{title.toUpperCase()}</h1>
        </Link>
        <div className='preview'>
            {items
                .filter((item, index) => index < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
            ))}
        </div>
    </div>
)

export default withRouter(CollectionPreview);
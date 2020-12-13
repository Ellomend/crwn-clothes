import React, { Component } from 'react';
import { SHOP_DATA } from './ShopPageData'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

class ShopPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    }
  }
  render () {
    const { collections } = this.state
    return (
      <div className="shop-page">
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview {...otherCollectionProps} key={id}/>
          ))
        }
      </div>
    );
  }
}

export default ShopPage;

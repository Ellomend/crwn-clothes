import React from 'react';

import './CollectionItem.scss'
import CustomButton from "../CustomButton/CustomButton"
import { connect } from "react-redux"
import { addItem } from "../../redux/cart/cartActions"

const CollectionItem = ({item, addItem}) => {
  const {imageUrl, price, name} = item
  return (
    <div className="collection-item">
      <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
    </div>
  );
};

const mapDispatchToProps = {
  addItem: addItem
}
export default connect(null, mapDispatchToProps)(CollectionItem);

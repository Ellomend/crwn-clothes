import React from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'
import { connect } from "react-redux"


const ShopPage = ({directory}) => {
  return (
    <div className="shop-page">
      {
        directory.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview {...otherCollectionProps} key={id}/>
        ))
      }
    </div>
  )
}

const mapStateToProps = ({directory}) => ({
  directory
})

export default connect(mapStateToProps)(ShopPage)


// class ShopPage extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       collections: SHOP_DATA
//     }
//   }
//   render () {
//     const { collections } = this.state
//     return (
//       <div className="shop-page">
//         {
//           collections.map(({id, ...otherCollectionProps}) => (
//             <CollectionPreview {...otherCollectionProps} key={id}/>
//           ))
//         }
//       </div>
//     );
//   }
// }

// export default ShopPage;

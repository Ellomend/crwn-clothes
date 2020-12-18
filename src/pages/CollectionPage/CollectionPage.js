import React from "react"

import './CollectionPage.scss'
import { selectCollection } from "../../redux/shop/shopSelector"
import { connect } from "react-redux"

const CollectionPage = ({collection}) => {
  return (
    <div className='collection-page'>
      <pre>
        {JSON.stringify(collection)}
      </pre>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)

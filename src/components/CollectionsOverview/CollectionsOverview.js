import React from "react"

import './CollectionsOverview.scss'
import { createStructuredSelector } from "reselect"
import { selectCollectionsForPreview } from "../../redux/shop/shopSelector"
import { connect } from "react-redux"
import CollectionPreview from "../CollectionPreview/CollectionPreview"

import './CollectionsOverview.scss'

const CollectionsOverview = ({collections}) => {
  return (
    <div className="collections-overview">
      {
        collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview {...otherCollectionProps} key={id}/>
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)



import React from 'react';

import './Directory.scss'
import MenuItem from '../MenuItem/MenuItem'
import { selectDirectorySections } from "../../redux/directory/directorySelector"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {
        sections.map( ({id, ...otherSectionProps}) => {
          return <MenuItem key={id} {...otherSectionProps}/>
        })
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)

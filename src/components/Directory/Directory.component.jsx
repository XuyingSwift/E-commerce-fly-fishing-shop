import React from 'react';
import MenuItem  from '../MenuItem/MenuItem.component';
import './Directory.styles.scss'
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux'

const Directory = ({sections}) => {
 

        return (
            <div className='menu-container'>
                {sections.map(({id, ...otherProps}) => (
                    <MenuItem key={id} {...otherProps}/>
                ))}
            </div>
        )
    
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
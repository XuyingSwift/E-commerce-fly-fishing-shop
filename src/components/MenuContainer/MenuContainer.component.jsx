import React from 'react';
import MenuItem  from '../MenuItem/MenuItem.component';
import './MenuContainer.styles.scss'

class MenuContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [{
                title: 'hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: 'hats'
              },
              {
                title: 'jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: 'hats'
              },
              {
                title: 'sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: 'hats'
              },
              {
                title: 'womens',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: 'hats'
              },
              {
                title: 'mens',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: 'hats'
              }
            ]
        }
    }

    render() {
        return (
            <div className='menu-container'>
                {this.state.items.map(({id, ...otherProps}) => (
                    <MenuItem key={id} {...otherProps}/>
                ))}
            </div>
        )
    }
}

export default MenuContainer;
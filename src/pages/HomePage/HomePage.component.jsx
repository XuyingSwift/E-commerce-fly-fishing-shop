import React from 'react';
import './HomePage.styles.scss';
import Directory from '../../components/Directory/Directory.component'


export const HomePage = () => {
    return(
        <div className='homepage'> 
            <Directory/>
        </div>
    );
}

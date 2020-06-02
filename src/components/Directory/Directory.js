import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './Directory.scss';

import sections from '../../localDatas/sections.data';

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: sections
        }
    }

    render() {
        const { sections } = this.state;

        return (
            <div className="directory-menu">
                {
                    sections.map(({ id, ...otherSectionProps }) => 
                    // ES6 expression: 
                    // ...otherSectionProps is all properties inside section except id
                        <MenuItem key={id} {...otherSectionProps} />
                    ) 
                }
            </div>
        )
    }
}

export default Directory;
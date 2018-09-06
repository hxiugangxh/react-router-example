import React from 'react'
import './subHeader.css'

class SubHeader extends React.Component {
    render() {
        return(
            <div className='subHeader'>
                {this.props.title}
            </div>
        )
    }
}

export default SubHeader;
import React from 'react';

class Checkbox extends React.Component {
    render() {
        return (
            <label className='stateCheckbox'>
                <input type='checkbox'
                    checked={this.props._isToggled(this.props.localStore)} 
                    onChange={() => this.props.toggleLocation(this.props.localStore.id)}
                    /> {this.props.localStore.name.replace(/7-Eleven/, '')}
                <span className="checkmark"></span>
                <h6>{`${this.props.localStore.city}, ${this.props.localStore.state}`}</h6>
            </label>
        )
    }
}


export default Checkbox;
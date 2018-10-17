import React from 'react';

import Checkbox from './checkbox';
import stateFullName from '../../stateFullName.json';


class CheckboxWrapper extends React.Component {
    render() {
        const {locations} = this.props;
        const stateLocations = locations.filter((location) => location.state === this.props.stateName); 
        
        return (
            <div className='stateContainer'>
                <div className='stateHeader'>
                    <h3>{stateFullName[this.props.stateName]} </h3>
                    {(stateLocations.filter((location) => location.selected === true ).length === stateLocations.length) ?
                        (
                            <p onClick={() => this.props.stateDeSelectAll(this.props.stateName)}>
                                Deselect All
                            </p> 
                        )
                        :
                        (
                            <p onClick={() => this.props.stateSelectAll(this.props.stateName)}>
                                Select All
                            </p> 
                        )}
                </div>
                <div className='stateContent'>
                    {this.props.locations.filter((location) => location.state === this.props.stateName).map((showLocation) => {
                    return (
                            <Checkbox
                                id={ showLocation.id }
                                key={ showLocation.id }
                                localStore={ showLocation }
                                _isToggled={ this.props._isToggled }
                                toggleLocation={this.props.toggleLocation}
                            />
                        )
                    }
                )}
                </div>
            </div>
        )
    }
}


export default CheckboxWrapper;

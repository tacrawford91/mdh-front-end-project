import React from 'react'

import CheckboxWrapper from './checkboxWrapper';
import { createFilter } from 'react-search-input'

const KEYS_TO_FILTERS = ['name', 'address', 'city', 'state', 'zip_code', 'country', 'longitude', 'latitude', 'id']

class CheckboxWindow extends React.Component {
    render() {
        const filteredLocations = this.props.locations.filter(createFilter(this.props.searchTerm, KEYS_TO_FILTERS))
        const activeDisplay = filteredLocations.reduce((locations, { name, address, city, state, zip_code, country, longitude, latitude, id }) => {
            if (!locations[state]) locations[state] = [];
            locations[state].push({ name, address, city, state, zip_code, country, longitude, latitude, id });
            return locations;
        }, {});

        return (
            <div className='stateWrapper'>
                {Object.keys(activeDisplay).map((locationState) => {
                    return (
                        <CheckboxWrapper
                            allSelected={this.props.allSelected}
                            deSelectAll={this.props.deSelectAll}
                            key={locationState}
                            localLocations={activeDisplay[locationState]}
                            locations={this.props.locations}
                            selectAll={this.props.selectAll}
                            selected={this.props.selected}
                            stateDeSelectAll={this.props.stateDeSelectAll}
                            stateName={locationState}
                            stateSelectAll={this.props.stateSelectAll}
                            toggleLocation={this.props.toggleLocation}
                        />
                    )
                })}
            </div>
        )
    }

    searchUpdated(term) {
        this.setState({ searchTerm: term })
    }
}
export default CheckboxWindow

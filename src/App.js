import React from 'react';

import CheckboxWindow from './components/checkbox/checkboxWindow';
import LocationData from './locations.json';
import MapContainer from './components/map/map';
import SearchHeader from './components/search/searchHeader';
import styles from './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: LocationData.sort((a, b) => a.state.localeCompare(b.state)).map(location => ({ ...location, selected: 0 })),
      searchTerm: '',
      allSelected: 0
    }
  }

  _getLocationObject = (locationID) => {
    let locationArray = this.state.locations.filter((location) => location.id === locationID);
    return locationArray[0];
  }
  _isToggled = (location) => {
    return (location.selected === 1 || location.selected === true );
  }
  _updateLocation = (updatedLocation) => {
    let updatedLocations = this.state.locations.map((location) => {
      if (location.id === updatedLocation.id) {
        location = updatedLocation;
      }
      return location;
    })
    this.setState({ locations: [...updatedLocations] })
  }

  deSelectAll = () => {
    let updateLocations = [...this.state.locations];
    updateLocations.map((location) => location.selected = false);
    this.setState({
      locations: [...updateLocations]
    })
  }
  hideInfo = () => {
    this.setState({ showInfo: 0 });
  }
  searchHandler = (term) => {
    this.setState({ searchTerm: term });
  }
  selectAll = () => {
    let updateLocations = [...this.state.locations];
    updateLocations.map((location) => location.selected = true);
    this.setState({
      locations: [...updateLocations]
    })
  }
  showInfo = () => {
    this.setState({ showInfo: 1 });
  }
  stateDeSelectAll = (deSelectedState) => {
    let updateLocations = [...this.state.locations];
    updateLocations.forEach((location) => {
      if (location.state === deSelectedState) {
        return location.selected = false;
      }
    });

    this.setState({ locations: [...updateLocations] });
  }
  stateSelectAll = (selectedState) => {
    let updateLocations = [...this.state.locations];
    updateLocations.forEach((location)=> {
      if (location.state === selectedState) {
        return location.selected = true;
      }
    });

    this.setState({locations: [...updateLocations]});
  }

  toggleLocation = (locationID) => {
    let locationObject = this._getLocationObject(locationID);
    locationObject.selected = !locationObject.selected;
    this._updateLocation(locationObject);
    this.setState({ locations: [...this.state.locations] });
  }
  render() {
    return (
      <section className={ styles.app }>
        <SearchHeader
          deSelectAll={ this.deSelectAll }
          hideInfo={ this.hideInfo }
          locations = { this.state.locations }
          searchHandler={ this.searchHandler }
          selectAll={ this.selectAll }
          showInfo={ this.showInfo }
        />
        <div className='mainWrapper'>
          <div className='dataWrapper'>
            <CheckboxWindow
              deSelectAll={ this.deSelectAll }
              _isToggled={ this._isToggled }
              locations={ this.state.locations }
              searchTerm={ this.state.searchTerm }
              selectAll={ this.selectAll }
              stateDeSelectAll={ this.stateDeSelectAll }
              stateSelectAll={ this.stateSelectAll }
              toggleLocation={ this.toggleLocation }
            />
          </div>
          <div className='mapWrapper'>
            <MapContainer
              _isToggled= { this._isToggled }
              locations={ this.state.locations }
              showInfo={ this.state.showInfo }
            />
          </div>
        </div>
      </section>
    );
  }
}

export default App;

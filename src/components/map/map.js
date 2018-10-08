import React from 'react';

import { Map, InfoWindow, Marker, GoogleApiWrapper,} from 'google-maps-react';

const APIKEY = 'AIzaSyAnyOZMsMoFHbhSubGRPAg2_9LYV8av9Fo';

export class MapContainer extends React.Component {

    render() {
        return (
            <div>
                <Map google={this.props.google} zoom={4}
                    style={{ width: '50vw', height: '100%' }}
                    initialCenter={{
                        lat: 38.854339,
                        lng: -94.780297
                    }}
                >
                    {this.props.locations.map((location) => {
                        return (this.props.selected.filter((currentPin) => location.id === currentPin.id).length === 1) ?
                            (
                                <Marker
                                    key={location.id}
                                    name={location.name}
                                    position={{ lat: location.latitude, lng: location.longitude }}
                                    icon={{
                                        url: 'http://maps.google.com/mapfiles/ms/icons/red.png',
                                        scale: 3
                                    }}
                                />
                            )
                            :
                            (
                                <Marker name={location.name}
                                    key={location.id}
                                    position={{ lat: location.latitude, lng: location.longitude }}
                                    icon={{
                                        url: 'http://maps.google.com/mapfiles/ms/icons/grey.png',
                                        scale: 3
                                    }}
                                />
                            )
                    }
                    )
                    }
                    {this.props.selected.map((location) => {
                        return (
                            <InfoWindow
                                key={location.id}
                                position={{ lat: location.latitude, lng: location.longitude }}
                                visible={(!!this.props.showInfo)}>
                                <div>
                                    <p>Location id: {location.id}</p>
                                    <p>Store: {location.name}</p>
                                </div>
                            </InfoWindow>
                        )
                    }
                    )
                    }


                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (APIKEY)
})(MapContainer);

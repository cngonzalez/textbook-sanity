import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker'
import config from 'config:@sanity/google-maps-input'

function toPlainText(blocks = []) {
  return blocks
    .map(block => {
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map(child => child.text).join('')
    })
    .join('\n\n')
}


// Return map bounds based on list of places
const getMapBounds = (map, maps, places) => {
  const bounds = new maps.LatLngBounds();

  places.forEach((place) => {
    bounds.extend(new maps.LatLng(
      place.geolocation.lat,
      place.geolocation.lng,
    ));
  });
  return bounds;
};

const apiIsLoaded = (map, maps, places) => {
  const bounds = getMapBounds(map, maps, places);
  map.fitBounds(bounds);
  bindResizeListener(map, maps, bounds);
};

// Re-center map when resizing the window
const bindResizeListener = (map, maps, bounds) => {
  maps.event.addDomListenerOnce(map, 'idle', () => {
    maps.event.addDomListener(window, 'resize', () => {
      map.fitBounds(bounds);
    });
  });
};

class Map extends Component {
  static defaultProps = {
    center: {
    lat: 40.7058254,
    lng: -74.1180863
    },
    zoom: 15,
    mapPoints: []
  };

  render() {
    const { center, zoom, mapPoints } = this.props
    const validPoints = mapPoints.filter(point => (
      point.geolocation
      && point.geolocation?.lat
      && point.geolocation?.lng
    ))
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{key: config.apiKey}}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapReactApiInternals
          onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, mapPoints)}
        >
          { validPoints.map((point, i) => 
            <Marker
              lat={point.geolocation.lat}
              lng={point.geolocation.lng}
              text={toPlainText(point.description)}
              key={i}
            />)}
      </GoogleMapReact>
      </div>
    );
  }
}

export default Map;

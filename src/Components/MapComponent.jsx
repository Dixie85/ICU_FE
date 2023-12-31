import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapComponent = ({ markers }) => {
  return (
    <MapContainer center={[0, 0]} zoom={1} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://github.com/Dixie85">Dixe85</a>'
      />
      {markers.map((marker) => (
        <Marker key={marker.id} position={[marker.lat, marker.lng]}>
          <Popup>{marker.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
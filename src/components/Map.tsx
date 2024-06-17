import { GoogleMap , useJsApiLoader, Marker} from '@react-google-maps/api'
import  styles  from '../style/Map.module.css'

export function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBO_yCyD5rkWazHjAYTWCxrIUCRrgKdns4"
    })
    
    const position = {
      lat: -3.729024076810223, 
      lng: -38.51107165531361
      }

  return (
    <div className={styles.map}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{width: '550px', height: '380px'}}
          center={position}
          zoom={15}
        >
          <Marker
            position={position}
          />
        </GoogleMap>
      ) : <></>}
    </div>
  )
}
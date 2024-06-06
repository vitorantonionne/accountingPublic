import { GoogleMap , useJsApiLoader, Marker} from '@react-google-maps/api'
import  styles  from '../style/Map.module.css'

export function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBO_yCyD5rkWazHjAYTWCxrIUCRrgKdns4"
  })

  const position = {
    lat: -3.729892240972425, 
    lng: -38.51104680190622
  }

  return (
    <div className={styles.map}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{width: '550px', height: '380px'}}
          center={position}
          zoom={15}
          // onLoad={onLoad}
          // onUnmount={onUnmount}
        >
          <Marker
            position={position}
          />
        </GoogleMap>
      ) : <></>}
    </div>
  )
  
}
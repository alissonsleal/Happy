import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import mapMarker from '../images/map-marker.png';
import { useNavigation } from '@react-navigation/native';


export default function OrphanagesMap() {
    const navigation = useNavigation();

    function handleNavigateToOrphanageDetails() {
        navigation.navigate('OrphanageDetails')
    }

    return(
         <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        style={{ 
          flex:1,
          width: '100%',
          height: '100%'
        }}
        initialRegion={{ 
          latitude: -15.7980821,
          longitude: -47.8896703,
          latitudeDelta: 0.03,
          longitudeDelta: 0.03
        }}
      >
        <Marker 
        icon={mapMarker}
        calloutAnchor={{ 
          x: 2.7, 
          y: 0.8
        }}
        coordinate={{ 
          latitude: -15.7980821,
          longitude: -47.8896703,
        }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetails} >
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Nome do local</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

        <View style={styles.footer} >
          <Text style={styles.footerText} > 2 locais encontrados</Text>
          <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {alert('button pressed')}} >
            <Feather name='plus' size={20} color='#fff' />
          </TouchableOpacity>
        </View>

    </View>
    )
}

    const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center'

  },
  calloutText: {
    color: '#0089a5',
    fontSize:14,
    fontFamily: 'Nunito_700Bold',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 24,
    right: 24,
    height: 56,
    borderRadius: 20,
    backgroundColor: '#fff',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    elevation: 3,
  },
  footerText:{
    color: '#8fa7b3',
    fontFamily: 'Nunito_700Bold',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  createOrphanageButton: {
    
    width: 56,
    height: 56,
    borderRadius: 20,
    backgroundColor: '#15c3d6',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
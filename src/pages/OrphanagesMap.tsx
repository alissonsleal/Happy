import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineArrowRight } from "react-icons/ai";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "../styles/pages/orphanagesMap.css";

import logo from "./../images/mapMarker.svg";
import mapIcon from "../utils/mapIcons";
import api from "../services/api";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then((r) => {
      setOrphanages(r.data);
    })
  }, [])

  return (
    <div id="pageMap">
      <label htmlFor="hamburguer">&#9776;</label>
      <input type="checkbox" id="hamburguer" onClick={() => {}} />
      <aside className="toggleMenu" >
        <div id="itemBar">
        <main>
          <header>
            <img src={logo} alt="Happy Logo"/>
          </header>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas Crianças estão esperando a sua visita :)</p>
        </main>

        <footer>
          <strong>Brasília</strong>
          <span>Distrito Federal</span>
        </footer>
        </div>
      </aside>

      <Map
        center={[-15.7911685, -47.9309832]}
        zoom={12.5}
        style={{ width: "100%", height: "100%" }}
        zoomControl={false}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {
          orphanages.map(orphanage => {
            return(
              <Marker 
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="mapPopup">
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <AiOutlineArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
            )
          })
        }

      </Map>

      <Link to="/orphanages/create" className="createOrphanage">
        <AiOutlinePlus size={32} />
      </Link>
    </div>
  );
}

export default OrphanagesMap;

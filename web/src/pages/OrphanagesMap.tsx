import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus, AiOutlineArrowRight } from "react-icons/ai";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "../styles/pages/orphanagesMap.css";

import logo from "./../images/mapMarker.svg";
import mapIcon from "../utils/mapIcons";

function OrphanagesMap() {
  return (
    <div id="pageMap">
      <aside>
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
      </aside>

      <Map
        center={[-15.7911685, -47.9309832]}
        zoom={12.5}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

      <Marker 
        icon={mapIcon}
        position={[-15.7911685, -47.9309832]}
      >
        <Popup closeButton={false} minWidth={240} maxWidth={240} className="mapPopup">
          Casa da Criança
          <Link to="/orphanages/1">
            <AiOutlineArrowRight size={20} color="#FFF" />
          </Link>
        </Popup>
      </Marker>

      </Map>

      <Link to="/orphanages/create" className="createOrphanage">
        <AiOutlinePlus size={32} />
      </Link>
    </div>
  );
}

export default OrphanagesMap;

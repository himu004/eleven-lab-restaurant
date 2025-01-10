import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const FindUs = () => {
  const position = [23.8103, 90.4125]; // Dhaka coordinates

  return (
    <div className=" bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Find Us</h1>
          <div className="space-y-4">
            <p className="text-gray-600">
              <span className="font-semibold">Address:</span>
              <br />
              123 Gulshan Avenue
              <br />
              Dhaka 1212, Bangladesh
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Phone:</span>
              <br />
              +880 1234-567890
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Email:</span>
              <br />
              info@restaurant.com
            </p>
          </div>
        </motion.div>

        <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>Our Restaurant Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default FindUs;

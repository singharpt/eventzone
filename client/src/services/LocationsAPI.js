import axios from "axios";

const LocationsAPI = async () => {
  try {
    const url = "http://localhost:3000/locations";
    const response = await axios.get(url);
    if (response.status === 200) {
      return response.data.data;
    } else {
      return [];
    }
  } catch {
    console.error("No data returned from server");
    return [];
  }
};

export default LocationsAPI;

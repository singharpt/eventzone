import axios from "axios";

const EventsAPI = async (locationId) => {
  try {
    const url = "http://localhost:3000/events/";
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

export default EventsAPI;

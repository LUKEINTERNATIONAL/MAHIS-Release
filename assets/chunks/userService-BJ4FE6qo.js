import { S as Service, U as UserService, V as LocationService } from '../index-Cz12Kt3o.js';

async function getUserLocation() {
  const data = localStorage.getItem("locationData");
  return data ? JSON.parse(data) : null;
}
async function getUserFacility() {
  try {
    const userId = Service.getUserID();
    const user_data = await UserService.getUserByID(userId);
    if (user_data.location_id != null) {
      const response = await LocationService.getFacility(user_data.location_id);
      return response;
    }
  } catch (error) {
  }
}
async function pseudo_recordCurrentLogin() {
  try {
    const userId = Service.getUserID();
    await UserService.recordCurrentLogin(userId);
  } catch (error) {
  }
}

export { getUserLocation as a, getUserFacility as g, pseudo_recordCurrentLogin as p };

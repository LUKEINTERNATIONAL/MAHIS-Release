import { S as Service } from '../index-Bpb3_0mI.js';
import './vendor-CCA5uLDN.js';
import './lodash-Dm7Pej-A.js';

const isTaskPermitted = async (taskName) => {
  const adminTasks = await getAdminSetUserActivities();
  if (!adminTasks.length) {
    return true;
  }
  return adminTasks.some((permitted) => {
    return permitted.toLowerCase() === `${taskName}`.toLowerCase();
  });
};
const isTaskUserSelected = async (taskName) => {
  const userActivities = await getUserSelectedActivities();
  if (!userActivities.length) {
    return true;
  }
  return userActivities.some((activity) => {
    return activity.toLowerCase() === `${taskName}`.toLowerCase();
  });
};
const getAdminSetUserActivities = async () => {
  try {
    const data = await Service.getJson("user_properties", {
      property: "ART_Admin_assigned_activities"
    });
    return data.property_value.split(",");
  } catch (e) {
    return [];
  }
};
const getUserSelectedActivities = async () => {
  try {
    const data = await Service.getJson("user_properties", {
      property: "activities"
    });
    return data.property_value.split(",");
  } catch (e) {
    return [];
  }
};

export { isTaskUserSelected as a, isTaskPermitted as i };

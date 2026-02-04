import { S as Service } from '../index-kwyS_uSy.js';

function isNCDClerk() {
  const roleData = JSON.parse(localStorage.getItem("userRoles"));
  const roles = roleData ? roleData : [];
  if (roles.some(
    (role) => role.role === "General Registration Clerk" || roles.some((role2) => role2.role === "Vitals Clerk" || roles.some((role3) => role3.role === "Registration Clerk"))
  ) && Service.getProgramID() == 32) {
    return true;
  } else {
    return false;
  }
}
function isClinician() {
  const roleData = JSON.parse(localStorage.getItem("userRoles"));
  const roles = roleData ? roleData : [];
  if (roles.some((role) => role.role === "Clinician")) {
    return true;
  } else {
    return false;
  }
}

export { isClinician as a, isNCDClerk as i };

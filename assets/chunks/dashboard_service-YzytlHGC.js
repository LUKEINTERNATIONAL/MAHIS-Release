import { S as Service } from '../index-CKTz1PXB.js';

async function getVaccinesData() {
  const data = await Service.getJson("eir/followup");
  return data;
}

export { getVaccinesData as g };

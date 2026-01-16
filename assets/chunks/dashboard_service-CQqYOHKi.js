import { S as Service } from '../index-I4g3KlCH.js';

async function getVaccinesData() {
  const data = await Service.getJson("eir/followup");
  return data;
}

export { getVaccinesData as g };

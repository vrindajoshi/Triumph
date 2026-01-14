import { getBase } from "../config/airtable.js";

export async function getAllSongs() {
  const base = getBase();
  const records = await base("Songs").select().all();
  return records.map(record => ({
    id: record.get("id"),
    instrument: record.get("instrument"),
    link: record.get("link"),
    name: record.get("name"),
    composer: record.get("composer"),
    created_at: record.get("created_at"),
    played: record.get("played?"),
  }));
}

export async function updatePlayedStatusByNameAndPerson(
  name,
  personId,
  played
) {
  const base = getBase();
  
  const records = await base("Songs")
    .select({
      filterByFormula: `AND(
        {name} = "${name}",
        {id} = "${personId}"
      )`,
      maxRecords: 1
    })
    .all();

  if (records.length === 0) {
    return null;
  }

  if (records.length > 1) {
    return "MULTIPLE";
  }

  const record = records[0];
  
  await base("Songs").update(record.id, {
    "played?": played,
  });

  return {
    recordId: record.id,
    name: record.get("name"),
    played,
  };
}
// UPDATE lol

export const updateByFields = async (req, res) => {
  const { where, update } = req.body;

  try {
    // 1️⃣ Build Airtable formula
    const formula = `AND(${Object.entries(where)
      .map(([k, v]) => `{${k}}='${v}'`)
      .join(",")})`;

    // 2️⃣ Find matching records
    const records = await base("Songs")
      .select({ filterByFormula: formula })
      .firstPage();

    if (records.length === 0) {
      return res.status(404).json({ error: "No matching records found" });
    }

    // 3️⃣ Update all matches
    const updated = await base("Songs").update(
      records.map(r => ({
        id: r.id,
        fields: update,
      }))
    );

    res.json({
      updatedCount: updated.length,
      records: updated.map(r => r.fields),
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

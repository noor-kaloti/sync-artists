import { syncArtists } from "./src/utils/syncArtists.js";

async function runOnce() {
  try {
    console.log("🔁 Starting sync...");
    await syncArtists();
    console.log("✅ Sync finished.");
  } catch (err) {
    console.error("❌ Error in sync:", err);
    process.exit(1);
  }
}

runOnce();

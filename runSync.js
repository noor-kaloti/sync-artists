import { syncArtists } from "./src/utils/syncArtists.js";

async function loopForever() {
  while (true) {
    try {
      console.log("🔁 Starting sync...");
      await syncArtists();
      console.log("✅ Sync done. Waiting 15 minutes...");
      await new Promise((res) => setTimeout(res, 15 * 60 * 1000)); // wait 15 minutes
    } catch (err) {
      console.error("❌ Error in sync:", err);
      await new Promise((res) => setTimeout(res, 5 * 60 * 1000)); // wait 5 mins before retry
    }
  }
}

loopForever();

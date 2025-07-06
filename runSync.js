// runSync.js
import { syncArtists } from "./src/utils/syncArtists.js";

async function runForever() {
  while (true) {
    try {
      await syncArtists();
    } catch (err) {
      console.error("❌ Error in syncArtists:", err);
    }

    console.log("⏳ Sleeping for 15 minutes before next run...");
    await new Promise((resolve) => setTimeout(resolve, 15 * 60 * 1000)); // 15 minutes
  }
}

runForever();

# Cooking video files

Drop two `.mp4` files in this folder and the homepage will play them on
autoloop, muted, fullscreen, with no extra wiring:

| File              | Where it plays                                                |
|-------------------|---------------------------------------------------------------|
| `hero.mp4`        | Top of `/` — behind "Private Chef. Ghar Pe." headline          |
| `kitchen.mp4`     | The "Live cooking. Your home." section                         |

## Tips

- Keep each clip under ~15 MB so initial paint isn't slow. 720p H.264 is plenty for a background loop.
- Loops feel best when the last frame matches the first.
- Until you add these files, the `<video poster>` falls back to the
  existing Unsplash photo so the page still works.

## Where to get clips

- pixabay.com/videos — free, direct .mp4 download, no attribution required
- mixkit.co/free-stock-video — free, hotlink-friendly
- coverr.co — free, direct download

Search terms that match the brand: "pan flipping food", "chef cooking",
"sizzling oil", "vegetables in wok", "steam rising pot".

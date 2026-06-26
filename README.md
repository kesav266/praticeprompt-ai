# PromptForge

PromptForge is an image-prompt practice app for learning how to write better AI prompts through realistic target-image challenges, cleaner AI-style reference scenes, generated-output comparison, scoring, history, and a local leaderboard.

## Features

- Local handle-based login
- Level-based image prompting missions across Nature, Tech, Green Energy, Urban, Food, and Health with polished AI-style reference visuals
- Target image and generated image comparison after submission
- Suggested stronger prompts shown only after the user attempts a challenge
- AI-image simulator scoring for prompt quality
- Prompt history and best score tracking
- Local leaderboard stored in browser storage
- Responsive 3D-styled interface with animated motion background

## Run

Use the local server so the app can call the image-generation proxy:

```powershell
python server.py
```

Then open `http://localhost:8000`.

## Real Image API

Do not put API keys in `app.js` or `index.html`. Set them as environment variables before starting the server:

```powershell
$env:PROMPTFORGE_API_KEY="your_api_key_here"
$env:PROMPTFORGE_IMAGE_API_URL="https://provider.example.com/v1/images/generations"
python server.py
```

## Notes

The scoring still uses prompt-feature matching so the app can compare target vs generated intent consistently. The backend can display a real generated image when `PROMPTFORGE_IMAGE_API_URL` and `PROMPTFORGE_API_KEY` are configured.

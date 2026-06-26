const missions = [
  {
    id: "nature-valley",
    level: 1,
    type: "Nature",
    title: "Lone tree field",
    brief: "Create a real-world landscape image from the target photo. Describe the land, sky, subject placement, colors, and camera style without seeing any sample answer first.",
    scene: "A bright green rolling field with one leafy tree centered under a blue sky and large white clouds.",
    requirements: ["Name the centered tree", "Mention green rolling field", "Mention blue sky and white clouds", "Add realistic photo constraints"],
    keywords: ["tree", "field", "grass", "green", "sky", "clouds", "blue", "photo", "realistic"],
    hint: "Observation tip: include subject, setting, object placement, lighting, and realism constraints.",
    output: "Your prompt produced a nature landscape with a field, sky, clouds, and a lone tree.",
    solutionPrompts: [
      "Create a photorealistic wide landscape of a bright green rolling grass field with one full leafy tree centered in the middle distance, deep blue sky, large soft white clouds, clear daylight, natural colors, no people, no buildings, 16:9.",
      "Generate a realistic nature photo: single green tree centered on smooth vivid green hills, blue sky above, big white cumulus clouds, sunny daytime lighting, clean open composition, sharp detail.",
      "Photorealistic countryside scene with a lone leafy tree in the center, bright green field and rolling hill shapes, blue sky, dramatic white clouds, calm natural mood, no text or extra objects."
    ],
    visual: {
      imageUrl: "assets/nature-lone-tree-ai.svg",
      sun: "white",
      sunPosition: "center",
      platform: "grass",
      centerObject: "green tree",
      leftObject: "green hills",
      rightObject: "white clouds",
      mood: "nature",
      style: "photo"
    }
  },
  {
    id: "tech-desk",
    level: 2,
    type: "Tech",
    title: "Smart workspace",
    brief: "Recreate a clean technology workspace. Strong image prompts describe devices, materials, lighting, composition, and what should not appear.",
    scene: "A modern desk scene with a silver laptop on the left, a cyan hologram on the right, and cool white studio light.",
    requirements: ["Name devices", "Mention material/color", "Mention composition", "Keep it clean and modern"],
    keywords: ["laptop", "hologram", "desk", "silver", "cyan", "modern", "studio"],
    hint: "Observation tip: identify the device, the futuristic element, and the lighting mood.",
    output: "Your prompt produced a tech workspace with a laptop and holographic display.",
    solutionPrompts: [
      "Create a realistic modern tech workspace on a dark desk, silver laptop on the left, cyan holographic interface on the right, cool white studio lighting, minimal background, sharp product-photo style, no people.",
      "Generate a clean technology scene: silver laptop left side, floating cyan hologram right side, dark desktop surface, polished modern office mood, realistic reflections, 16:9.",
      "Photorealistic desk setup with a silver laptop, cyan holographic UI, soft white light, high-end tech product photography, uncluttered composition."
    ],
    visual: {
      imageUrl: "assets/tech-smart-workspace.svg",
      sun: "white",
      sunPosition: "center",
      platform: "desk",
      leftObject: "silver laptop",
      rightObject: "cyan hologram",
      mood: "tech",
      style: "studio"
    }
  },
  {
    id: "green-energy",
    level: 3,
    type: "Green Energy",
    title: "Solar field",
    brief: "Prompt an image of sustainable energy. The target depends on objects, surface, color, light, and environmental context.",
    scene: "A green field with a dark solar panel on the left, a white wind turbine on the right, and clear sunlight.",
    requirements: ["Mention renewable energy objects", "Mention field/green setting", "Add realistic lighting", "Avoid city clutter"],
    keywords: ["solar", "panel", "wind", "turbine", "green", "field", "renewable"],
    hint: "Observation tip: name both energy objects and describe the clean outdoor setting.",
    output: "Your prompt produced a green energy scene with solar and wind elements.",
    solutionPrompts: [
      "Create a realistic green energy landscape with a dark solar panel on the left, a white wind turbine on the right, bright sunlight, fresh green field, clean sky, no city buildings, 16:9.",
      "Generate a sustainable energy photo: solar panel array in left foreground, wind turbine on right, green grass field, clear daylight, optimistic clean-energy mood, realistic detail.",
      "Photorealistic renewable energy scene with green field, dark solar panel left, white wind turbine right, soft sunlight, uncluttered natural background."
    ],
    visual: {
      imageUrl: "assets/green-energy-solar.svg",
      sun: "amber",
      sunPosition: "right",
      platform: "grass",
      leftObject: "dark solar panel",
      rightObject: "white turbine",
      mood: "green",
      style: "photo"
    }
  },
  {
    id: "urban-night",
    level: 4,
    type: "Urban",
    title: "Rainy city crossing",
    brief: "Create a real-world city scene. Advanced prompts specify weather, reflections, signs, lighting, and exact subject placement.",
    scene: "A rainy city street with a yellow taxi on the left, a red traffic light on the right, and wet reflections.",
    requirements: ["Mention weather", "Mention vehicle and signal", "Mention reflections", "Use cinematic realism"],
    keywords: ["city", "rain", "taxi", "traffic", "red", "yellow", "reflection"],
    hint: "Observation tip: include weather, street surface, vehicle, signal color, and cinematic camera style.",
    output: "Your prompt produced an urban rainy street with taxi and traffic light details.",
    solutionPrompts: [
      "Create a cinematic realistic rainy city street at night, yellow taxi on the left, red traffic light on the right, wet asphalt reflections, neon city glow, no readable text, 16:9.",
      "Generate a real-world urban photo: rain-soaked crosswalk, yellow taxi left foreground, red traffic signal right side, reflective pavement, moody cinematic lighting.",
      "Photorealistic rainy downtown street with yellow cab on the left, red traffic light on the right, glossy reflections, dark evening atmosphere, sharp realistic detail."
    ],
    visual: {
      imageUrl: "assets/urban-rainy-crossing.svg",
      sun: "red",
      sunPosition: "right",
      platform: "concrete",
      leftObject: "yellow taxi",
      rightObject: "red traffic light",
      mood: "urban",
      style: "cinematic"
    }
  },
  {
    id: "food-market",
    level: 5,
    type: "Food",
    title: "Fresh market table",
    brief: "Prompt a food image where freshness and arrangement matter. Use object names, colors, surface texture, and camera angle.",
    scene: "A rustic table with red tomatoes on the left, green herbs on the right, and warm kitchen light.",
    requirements: ["Name food items", "Mention colors", "Mention table/surface", "Use close-up realism"],
    keywords: ["tomatoes", "herbs", "table", "red", "green", "kitchen", "close-up"],
    hint: "Observation tip: food prompts get better when they include freshness, texture, light, and camera angle.",
    output: "Your prompt produced a fresh food still life with tomatoes and herbs.",
    solutionPrompts: [
      "Create a realistic close-up food photo on a rustic wooden table, red tomatoes on the left, green herbs on the right, warm kitchen light, fresh texture, shallow depth of field, no hands.",
      "Generate a market-style still life: bright red tomatoes left, fresh green herbs right, wooden table surface, warm natural kitchen lighting, photorealistic macro detail.",
      "Photorealistic food scene with red tomatoes and green herbs arranged on a rustic table, warm soft light, close-up composition, rich fresh colors."
    ],
    visual: {
      imageUrl: "assets/food-market-table.svg",
      sun: "amber",
      sunPosition: "center",
      platform: "wood",
      leftObject: "red tomatoes",
      rightObject: "green herbs",
      mood: "food",
      style: "close-up"
    }
  },
  {
    id: "health-clinic",
    level: 6,
    type: "Health",
    title: "Clean clinic",
    brief: "Create a trustworthy healthcare image. Precise prompts control cleanliness, mood, equipment, and visual sensitivity.",
    scene: "A clean clinic table with a blue stethoscope on the left, a white medicine bottle on the right, and soft white light.",
    requirements: ["Mention medical objects", "Mention clean setting", "Mention colors", "Avoid scary or graphic content"],
    keywords: ["clinic", "stethoscope", "medicine", "blue", "white", "clean", "health"],
    hint: "Observation tip: healthcare prompts should be calm, clean, realistic, and non-graphic.",
    output: "Your prompt produced a clean healthcare still life with medical objects.",
    solutionPrompts: [
      "Create a calm realistic healthcare still life on a clean clinic table, blue stethoscope on the left, white medicine bottle on the right, soft white light, sterile background, no people, no graphic content.",
      "Generate a trustworthy medical image: blue stethoscope left, white medicine bottle right, clean white clinic surface, soft clinical lighting, realistic product-photo style.",
      "Photorealistic clean clinic scene with simple medical tools, blue stethoscope, white medicine bottle, calm healthcare mood, no blood, no readable labels."
    ],
    visual: {
      imageUrl: "assets/health-clean-clinic.svg",
      sun: "white",
      sunPosition: "center",
      platform: "clinic",
      leftObject: "blue stethoscope",
      rightObject: "white medicine bottle",
      mood: "health",
      style: "clean"
    }
  }
];

const defaultPlayers = [
  { name: "PromptPilot", xp: 420, best: 92, level: 5 },
  { name: "ClarityCrafter", xp: 330, best: 86, level: 4 },
  { name: "ContextKing", xp: 240, best: 81, level: 3 }
];

const state = {
  user: null,
  mission: missions[0],
  history: [],
  players: []
};

const els = {};
const store = createStorage();

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  loadState();
  bindEvents();
  startMotionField();
  syncAuth();
  renderAll();
});

function cacheElements() {
  [
    "authPanel", "appPanel", "loginForm", "username", "profileName", "logoutButton",
    "statLevel", "statXp", "statRank", "missionLevel", "missionType", "missionTitle",
    "missionBrief", "sceneCard", "requirements", "promptInput", "evaluateButton",
    "hintButton", "hintText", "newMissionButton", "resultPanel", "scoreValue",
    "aiOutput", "feedbackList", "historyList", "leaderboardList", "clearHistoryButton",
    "targetPreview", "generatedPreview", "statusValue", "solutionPanel", "solutionPrompts"
  ].forEach((id) => {
    els[id] = document.getElementById(id);
  });
  els.navButtons = Array.from(document.querySelectorAll(".nav-button"));
  els.views = Array.from(document.querySelectorAll(".view"));
}

function loadState() {
  state.user = store.get("promptforge:user");
  state.history = readJson("promptforge:history", []);
  state.players = readJson("promptforge:players", defaultPlayers);
  if (!Array.isArray(state.history)) state.history = [];
  if (!Array.isArray(state.players)) state.players = [...defaultPlayers];
  if (state.user && !state.players.some((player) => player.name === state.user)) {
    state.players.push({ name: state.user, xp: 0, best: 0, level: 1 });
  }
}

function saveState() {
  store.set("promptforge:history", JSON.stringify(state.history));
  store.set("promptforge:players", JSON.stringify(state.players));
}

function createStorage() {
  const memory = {};
  try {
    const testKey = "promptforge:test";
    window.localStorage.setItem(testKey, "1");
    window.localStorage.removeItem(testKey);
    return {
      get: (key) => window.localStorage.getItem(key),
      set: (key, value) => window.localStorage.setItem(key, value),
      remove: (key) => window.localStorage.removeItem(key)
    };
  } catch (error) {
    return {
      get: (key) => memory[key] || null,
      set: (key, value) => {
        memory[key] = String(value);
      },
      remove: (key) => {
        delete memory[key];
      }
    };
  }
}

function readJson(key, fallback) {
  try {
    return JSON.parse(store.get(key) || JSON.stringify(fallback));
  } catch (error) {
    return fallback;
  }
}

function bindEvents() {
  els.loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = cleanName(els.username.value);
    if (!name) return;
    state.user = name;
    store.set("promptforge:user", name);
    if (!state.players.some((player) => player.name === name)) {
      state.players.push({ name, xp: 0, best: 0, level: 1 });
    }
    saveState();
    syncAuth();
    renderAll();
  });

  els.logoutButton.addEventListener("click", () => {
    state.user = null;
    store.remove("promptforge:user");
    syncAuth();
  });

  els.evaluateButton.addEventListener("click", evaluatePrompt);
  els.hintButton.addEventListener("click", () => {
    els.hintText.textContent = state.mission.hint;
  });
  els.newMissionButton.addEventListener("click", nextMission);
  els.clearHistoryButton.addEventListener("click", () => {
    state.history = state.history.filter((item) => item.user !== state.user);
    saveState();
    renderHistory();
  });

  els.navButtons.forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  window.addEventListener("resize", resizeCanvas);
}

function cleanName(value) {
  return value.trim().replace(/[^\w -]/g, "").slice(0, 24);
}

function syncAuth() {
  const loggedIn = Boolean(state.user);
  els.authPanel.classList.toggle("hidden", loggedIn);
  els.appPanel.classList.toggle("hidden", !loggedIn);
  if (loggedIn) {
    els.profileName.textContent = state.user;
    chooseMissionForPlayer();
  }
}

function chooseMissionForPlayer() {
  const player = currentPlayer();
  const index = Math.min(player.level - 1, missions.length - 1);
  state.mission = missions[index];
}

function currentPlayer() {
  let player = state.players.find((item) => item.name === state.user);
  if (!player) {
    player = { name: state.user, xp: 0, best: 0, level: 1 };
    state.players.push(player);
  }
  return player;
}

function renderAll() {
  if (!state.user) return;
  renderStats();
  renderMission();
  renderHistory();
  renderLeaderboard();
}

function renderStats() {
  const player = currentPlayer();
  els.statLevel.textContent = player.level;
  els.statXp.textContent = player.xp;
  els.statRank.textContent = rankName(player.xp);
}

function rankName(xp) {
  if (xp >= 520) return "Architect";
  if (xp >= 340) return "Strategist";
  if (xp >= 180) return "Builder";
  if (xp >= 80) return "Scout";
  return "Rookie";
}

function renderMission() {
  const mission = state.mission;
  els.missionLevel.textContent = `Level ${mission.level}`;
  els.missionType.textContent = mission.type;
  els.missionTitle.textContent = mission.title;
  els.missionBrief.textContent = mission.brief;
  els.requirements.innerHTML = mission.requirements
    .map((item) => `<div class="requirement">${escapeHtml(item)}</div>`)
    .join("");
  renderScene(els.sceneCard, mission.visual, mission.scene);
  els.hintText.textContent = "";
  els.resultPanel.classList.add("hidden");
  els.solutionPanel.classList.add("hidden");
}

async function evaluatePrompt() {
  const prompt = els.promptInput.value.trim();
  if (!prompt) {
    els.hintText.textContent = "Write a prompt first, then generate an image.";
    return;
  }

  els.evaluateButton.disabled = true;
  els.evaluateButton.textContent = "Generating...";

  const result = scorePrompt(prompt, state.mission);
  const generation = await requestGeneratedImage(prompt, state.mission);
  if (generation.imageUrl) {
    result.imageUrl = generation.imageUrl;
    result.output = generation.message || result.output;
  } else if (generation.message) {
    result.output = generation.message;
  }

  const player = currentPlayer();
  const gained = Math.max(10, Math.round(result.score * 0.55));
  player.xp += gained;
  player.best = Math.max(player.best, result.score);
  if (result.score >= 78 && player.level < missions.length) {
    player.level += 1;
  }

  const record = {
    user: state.user,
    missionId: state.mission.id,
    title: state.mission.title,
    level: state.mission.level,
    prompt,
    score: result.score,
    status: result.status,
    output: result.output,
    at: new Date().toISOString()
  };

  state.history.unshift(record);
  state.history = state.history.slice(0, 40);
  saveState();

  els.scoreValue.textContent = result.score;
  els.statusValue.textContent = result.status;
  els.aiOutput.textContent = result.output;
  els.feedbackList.innerHTML = result.feedback
    .map((item) => `<div class="feedback-chip">${escapeHtml(item)}</div>`)
    .join("");
  renderScene(els.targetPreview, state.mission.visual, "Target image");
  renderGeneratedPreview(result);
  renderSolutionPrompts(state.mission);
  els.resultPanel.classList.remove("hidden");
  els.solutionPanel.classList.remove("hidden");

  renderStats();
  renderHistory();
  renderLeaderboard();
  els.evaluateButton.disabled = false;
  els.evaluateButton.textContent = "Generate image";
}

async function requestGeneratedImage(prompt, mission) {
  try {
    const response = await fetch("/api/generate-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt,
        missionId: mission.id,
        target: mission.visual
      })
    });
    if (!response.ok) return {};
    return await response.json();
  } catch (error) {
    return {};
  }
}

function scorePrompt(prompt, mission) {
  const text = prompt.toLowerCase();
  const words = text.match(/[a-z0-9]+/g) || [];
  const uniqueWords = new Set(words);
  const keywordHits = mission.keywords.filter((keyword) => text.includes(keyword)).length;
  const requirementHits = mission.requirements.filter((requirement) => {
    return requirement.toLowerCase().split(" ").some((word) => word.length > 4 && text.includes(word));
  }).length;
  const hasFormat = /(json|table|bullet|list|format|concise|paragraph|steps)/.test(text);
  const hasConstraints = /(avoid|only|must|do not|no |limit|source|factual|uncertain)/.test(text);
  const hasContext = words.length >= 22;
  const hasRole = /(act as|you are|expert|coach|assistant|designer|critic)/.test(text);

  const generatedVisual = generateVisualFromPrompt(text, mission.visual);
  const visualScore = compareVisuals(generatedVisual, mission.visual);

  let score = 12;
  score += Math.min(30, keywordHits * 5);
  score += Math.min(20, requirementHits * 5);
  score += hasFormat ? 5 : 0;
  score += hasConstraints ? 8 : 0;
  score += hasContext ? 7 : 0;
  score += hasRole ? 3 : 0;
  score += uniqueWords.size > 34 ? 5 : 0;
  score += visualScore.points;
  score = Math.min(100, score);

  const status = score >= 82 ? "Matched" : score >= 60 ? "Close" : "Needs work";

  const feedback = [];
  feedback.push(visualScore.objectMatch ? "Object match is strong: the generated image contains the main target elements." : "Name every target object so the image generator does not invent or skip elements.");
  feedback.push(visualScore.colorMatch ? "Color match is strong." : "Add exact colors for each object, not just the object names.");
  feedback.push(visualScore.positionMatch ? "Composition match is strong." : "Mention left, right, center, top, or background positions.");
  feedback.push(hasConstraints ? "Useful generation constraints detected." : "Add constraints such as clean 3D, no readable text, simple background, or 16:9.");

  return {
    score,
    status,
    feedback,
    generatedVisual,
    output: buildAiOutput(mission, score, status, visualScore)
  };
}

function generateVisualFromPrompt(text, target) {
  const hasSun = includesAny(text, ["sun", "light", "glow", "orb", "circle"]);
  const hasPlatform = includesAny(text, ["platform", "base", "stage", "ground", "surface"]);
  const centerPresent = target.centerObject ? objectMentioned(text, target.centerObject) : false;
  const leftPresent = objectMentioned(text, target.leftObject);
  const rightPresent = objectMentioned(text, target.rightObject);

  return {
    sun: hasSun ? detectTargetColor(text, target.sun) : "none",
    sunPosition: detectPosition(text, "unknown"),
    platform: hasPlatform ? detectPlatform(text, "plain") : "none",
    centerObject: centerPresent ? withDetectedColor(text, target.centerObject) : "none",
    centerPosition: centerPresent && includesAny(text, ["center", "centered", "middle"]) ? "center" : "unknown",
    leftObject: leftPresent ? withDetectedColor(text, target.leftObject) : "none",
    rightObject: rightPresent ? withDetectedColor(text, target.rightObject) : "none",
    leftPosition: leftPresent && includesAny(text, ["left", "left side"]) ? "left" : "unknown",
    rightPosition: rightPresent && includesAny(text, ["right", "right side"]) ? "right" : "unknown",
    mood: includesAny(text, [target.mood, "futuristic", "product", "coach", "structured", "workflow"]) ? target.mood : "plain",
    style: includesAny(text, [target.style, "3d", "thumbnail", "dashboard", "technical", "agent", "clean"]) ? target.style : "basic"
  };
}

function compareVisuals(generated, target) {
  let points = 0;
  const centerMatch = target.centerObject ? generated.centerObject !== "none" : true;
  const objectMatch = centerMatch && generated.leftObject !== "none" && generated.rightObject !== "none";
  const centerColorMatch = target.centerObject ? objectColorMatches(generated.centerObject, target.centerObject) : true;
  const colorMatch = centerColorMatch && objectColorMatches(generated.leftObject, target.leftObject)
    && objectColorMatches(generated.rightObject, target.rightObject)
    && (generated.sun === target.sun || generated.sun === "none");
  const centerPositionMatch = target.centerObject ? generated.centerPosition === "center" : true;
  const positionMatch = centerPositionMatch && generated.leftPosition === "left"
    && generated.rightPosition === "right"
    && (generated.sunPosition === target.sunPosition || generated.sunPosition === "unknown");
  const platformMatch = generated.platform === target.platform;
  const styleMatch = generated.style === target.style || generated.mood === target.mood;

  if (objectMatch) points += 12;
  if (colorMatch) points += 12;
  if (positionMatch) points += 10;
  if (platformMatch) points += 8;
  if (styleMatch) points += 8;

  return { points, objectMatch, colorMatch, positionMatch, platformMatch, styleMatch };
}

function buildAiOutput(mission, score, status, visualScore) {
  if (status === "Matched") {
    return `${mission.output} The generated image closely matches the target in objects, colors, and composition.`;
  }
  if (status === "Close") {
    const misses = [];
    if (!visualScore.colorMatch) misses.push("colors");
    if (!visualScore.positionMatch) misses.push("positions");
    if (!visualScore.platformMatch) misses.push("platform/background");
    return `The generated image is close to the target, but improve ${misses.join(", ") || "specific visual constraints"} to raise the match score.`;
  }
  return "The generated image misses important target details. Rewrite the prompt with exact objects, colors, positions, style, and constraints.";
}

function renderScene(container, visual, label) {
  if (visual.imageUrl) {
    container.innerHTML = `
      <img class="target-photo" src="${escapeHtml(visual.imageUrl)}" alt="${escapeHtml(label)}">
      <div class="scene-label">${escapeHtml(label)}</div>
    `;
    return;
  }

  const sunStyle = visual.sun === "none" ? "display:none" : "";
  const platformStyle = visual.platform === "none" ? "display:none" : "";
  const centerStyle = visual.centerObject === "none" || !visual.centerObject ? "display:none" : "";
  const leftStyle = visual.leftObject === "none" ? "display:none" : "";
  const rightStyle = visual.rightObject === "none" ? "display:none" : "";

  container.innerHTML = `
    <div class="layer sun ${colorClass(visual.sun)} ${positionClass(visual.sunPosition)}" style="${sunStyle}"></div>
    <div class="layer platform ${platformClass(visual.platform)}" style="${platformStyle}"></div>
    <div class="layer object center ${objectClass(visual.centerObject || "")} ${colorClass(objectColor(visual.centerObject || "neutral"))}" style="${centerStyle}"></div>
    <div class="layer object ${objectClass(visual.leftObject)} ${colorClass(objectColor(visual.leftObject))}" style="${leftStyle}"></div>
    <div class="layer object two ${objectClass(visual.rightObject)} ${colorClass(objectColor(visual.rightObject))}" style="${rightStyle}"></div>
    <div class="scene-label">${escapeHtml(label)}</div>
  `;
}

function renderGeneratedPreview(result) {
  if (result.imageUrl) {
    els.generatedPreview.innerHTML = `
      <img class="generated-image" src="${escapeHtml(result.imageUrl)}" alt="Generated image from your prompt">
      <div class="scene-label">Generated by API</div>
    `;
    return;
  }
  renderScene(els.generatedPreview, result.generatedVisual, "Generated from your prompt");
}

function renderSolutionPrompts(mission) {
  els.solutionPrompts.innerHTML = mission.solutionPrompts
    .map((prompt, index) => `
      <article class="solution-item">
        <span>${index + 1}</span>
        <p>${escapeHtml(prompt)}</p>
      </article>
    `)
    .join("");
}

function includesAny(text, terms) {
  return terms.some((term) => text.includes(term));
}

function objectMentioned(text, objectName) {
  return objectName.split(" ").some((word) => word.length > 3 && text.includes(word));
}

function detectColor(text, fallback) {
  const colors = ["amber", "coral", "cyan", "green", "blue", "dark", "white", "red", "yellow", "silver", "gray"];
  return colors.find((color) => text.includes(color)) || fallback;
}

function detectPlatform(text, fallback) {
  if (includesAny(text, ["green-blue", "green blue", "green and blue", "green-blue"])) return "green-blue";
  if (includesAny(text, ["grass", "field", "valley"])) return "grass";
  if (includesAny(text, ["desk", "workspace"])) return "desk";
  if (includesAny(text, ["concrete", "street", "asphalt", "road", "pavement"])) return "concrete";
  if (includesAny(text, ["wood", "wooden", "table"])) return "wood";
  if (includesAny(text, ["clinic", "medical", "sterile", "white surface"])) return "clinic";
  if (text.includes("dark")) return "dark";
  return fallback;
}

function detectPosition(text, fallback) {
  if (includesAny(text, ["upper right", "top right", "right"])) return "right";
  if (includesAny(text, ["upper left", "top left", "left"])) return "left";
  if (includesAny(text, ["center", "middle"])) return "center";
  return fallback;
}

function withDetectedColor(text, objectName) {
  const targetColor = objectColor(objectName);
  const noun = objectName.split(" ").slice(1).join(" ") || objectName;
  if (!isColorWord(targetColor)) return objectName;
  return text.includes(targetColor) ? objectName : `neutral ${noun}`;
}

function objectColorMatches(generatedName, targetName) {
  const targetColor = objectColor(targetName);
  if (!isColorWord(targetColor)) return generatedName !== "none";
  return generatedName !== "none" && objectColor(generatedName) === targetColor;
}

function objectColor(objectName) {
  return String(objectName).split(" ")[0] || "neutral";
}

function isColorWord(value) {
  return ["amber", "coral", "cyan", "green", "blue", "dark", "white", "red", "yellow", "silver", "gray"].includes(value);
}

function colorClass(color) {
  return `color-${String(color).replace(/[^a-z-]/g, "")}`;
}

function platformClass(platform) {
  return `platform-${String(platform).replace(/[^a-z-]/g, "")}`;
}

function positionClass(position) {
  return position === "left" ? "sun-left" : position === "center" || position === "unknown" ? "sun-center" : "sun-right";
}

function objectClass(objectName) {
  if (objectName.includes("tree")) return "object-tree";
  if (objectName.includes("river")) return "object-river";
  if (objectName.includes("laptop")) return "object-laptop";
  if (objectName.includes("hologram")) return "object-hologram";
  if (objectName.includes("solar")) return "object-solar";
  if (objectName.includes("turbine")) return "object-turbine";
  if (objectName.includes("taxi")) return "object-taxi";
  if (objectName.includes("traffic")) return "object-light";
  if (objectName.includes("tomatoes")) return "object-tomatoes";
  if (objectName.includes("herbs")) return "object-herbs";
  if (objectName.includes("stethoscope")) return "object-stethoscope";
  if (objectName.includes("medicine")) return "object-bottle";
  if (objectName.includes("card") || objectName.includes("panel")) return "object-card";
  if (objectName.includes("checklist") || objectName.includes("dots") || objectName.includes("meter")) return "object-meter";
  if (objectName.includes("workflow")) return "object-workflow";
  if (objectName.includes("block")) return "object-block";
  return "object-crystal";
}

function detectTargetColor(text, targetColor) {
  if (text.includes(targetColor)) return targetColor;
  return detectColor(text, "neutral");
}

function nextMission() {
  const index = missions.findIndex((mission) => mission.id === state.mission.id);
  state.mission = missions[(index + 1) % missions.length];
  els.promptInput.value = "";
  renderMission();
}

function setView(name) {
  els.navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === name);
  });
  els.views.forEach((view) => {
    view.classList.toggle("active-view", view.id === `${name}View`);
  });
}

function renderHistory() {
  const items = state.history.filter((item) => item.user === state.user);
  if (!items.length) {
    els.historyList.innerHTML = `<div class="history-item"><p>No attempts yet. Generate an image to start tracking progress.</p></div>`;
    return;
  }
  els.historyList.innerHTML = items.map((item) => `
    <article class="history-item">
      <div>
        <h2>${escapeHtml(item.title)} - Level ${item.level}</h2>
        <strong class="status-line">${escapeHtml(item.status || "Scored")}</strong>
        <p>${escapeHtml(item.prompt)}</p>
        <small>${new Date(item.at).toLocaleString()}</small>
      </div>
      <div class="score-badge">${item.score}</div>
    </article>
  `).join("");
}

function renderLeaderboard() {
  const rows = [...state.players]
    .sort((a, b) => b.xp - a.xp || b.best - a.best)
    .map((player, index) => `
      <article class="leaderboard-row">
        <div class="rank-number">${index + 1}</div>
        <div>
          <h2>${escapeHtml(player.name)}</h2>
          <span class="subtle">${rankName(player.xp)} - Level ${player.level} - Best ${player.best}</span>
        </div>
        <strong>${player.xp} XP</strong>
      </article>
    `).join("");
  els.leaderboardList.innerHTML = rows;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

let canvas;
let ctx;
let particles = [];
let pointer = { x: 0, y: 0 };

function startMotionField() {
  canvas = document.getElementById("motionField");
  ctx = canvas.getContext("2d");
  resizeCanvas();
  window.addEventListener("pointermove", (event) => {
    pointer = { x: event.clientX, y: event.clientY };
  });
  requestAnimationFrame(drawMotionField);
}

function resizeCanvas() {
  if (!canvas) return;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  particles = Array.from({ length: Math.min(72, Math.floor(window.innerWidth / 18)) }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    z: 0.4 + Math.random() * 1.8,
    vx: -0.28 + Math.random() * 0.56,
    vy: -0.2 + Math.random() * 0.4
  }));
}

function drawMotionField() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles.forEach((particle, index) => {
    const dx = pointer.x - particle.x;
    const dy = pointer.y - particle.y;
    const distance = Math.max(80, Math.hypot(dx, dy));
    particle.x += particle.vx + dx / distance / 16;
    particle.y += particle.vy + dy / distance / 20;

    if (particle.x < -20) particle.x = window.innerWidth + 20;
    if (particle.x > window.innerWidth + 20) particle.x = -20;
    if (particle.y < -20) particle.y = window.innerHeight + 20;
    if (particle.y > window.innerHeight + 20) particle.y = -20;

    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.z * 1.8, 0, Math.PI * 2);
    ctx.fillStyle = index % 3 === 0 ? "rgba(65,230,156,0.7)" : "rgba(255,201,87,0.42)";
    ctx.fill();

    particles.slice(index + 1, index + 5).forEach((next) => {
      const gap = Math.hypot(particle.x - next.x, particle.y - next.y);
      if (gap < 150) {
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(next.x, next.y);
        ctx.strokeStyle = `rgba(144,255,213,${0.11 - gap / 1800})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    });
  });
  requestAnimationFrame(drawMotionField);
}

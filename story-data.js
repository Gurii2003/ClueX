// Load saved form data
const rawData = localStorage.getItem("mysteryData");

if (!rawData) {
  document.getElementById("storyOutput").textContent =
    "⚠️ No story data found. Please go back and complete the form.";
  throw new Error("No saved mysteryData");
}

const data = JSON.parse(rawData);

// Ensure required fields exist
if (!data.detective || !data.suspect || !data.crime || !data.location) {
  document.getElementById("storyOutput").textContent =
    "⚠️ Incomplete story data. Go back and fill all fields.";
  throw new Error("Incomplete data");
}

const stories = {
  noir: [
    `The night air in ${data.location} was thick with fog, the kind that made streetlamps look like dying stars. Detective ${data.detective} stood quietly near the alley entrance, cigarette glowing against the darkness. From the moment the ${data.crime} was reported, every instinct told ${data.detective} that this wasn’t just another case. There was something personal. Someone had left clues, almost mocking the law. Witnesses had described seeing ${data.suspect} near the scene just hours before — a figure slipping into shadows as though they belonged there. The rain began to fall, heavier now, washing the blood into the gutters. ${data.detective} felt the weight of every step taken, every unanswered question echoing in the mist. Hours passed. No phone calls, no breakthroughs. Then, the matchbook. A single matchbook with the insignia of a forgotten bar. ${data.suspect} had made a mistake. The city was quiet as ${data.detective} pieced together the truth, realizing some mysteries were dark enough to swallow whole.`,
    `In ${data.location}, the rain clung to every rooftop and windowpane, blurring the city's edges like a watercolor in motion. ${data.detective} adjusted their hat, determined to push forward despite the chill that crept under every collar. The ${data.crime} had shaken the neighborhood — a crime so elegant in its brutality that it felt crafted by someone who understood consequence. ${data.suspect} was the name whispered at every corner café and dimly lit bar, an enigma wrapped in rumors. ${data.detective} sifted through interviews and broken clues, each fragment arriving like a late confession. The deeper they went, the more the city seemed to whisper back at them. Footsteps echoed where no one stood, neon signs flickered with hidden intent, and every face seemed to look guilty. A battered photograph was found — ${data.suspect} smiling, unaware of what would happen that night. It was enough to redraw the lines, enough to make ${data.detective} realize that when the city watches you, it never forgets.`
    /* 8 more Noir long templates… */
  ],
  thriller: [
    `The first call came at 2:47 a.m. — a frantic tremor in the voice of someone who had seen too much in ${data.location}. Detective ${data.detective} grabbed their coat and keys, mind already racing through possibilities. The ${data.crime} was described in fragmented terms: “something wrong,” “the lights went out,” “I think ${data.suspect} was there.” By the time ${data.detective} reached the scene, neighbors had gathered, eyes wide with exhausted terror. Flickering neon lights painted the street in harsh angles, and somewhere, just out of sight, a door slammed shut. The air smelled of gasoline and fear. No witnesses could agree on more than a few details, but all spoke of ${data.suspect} as though their name was a curse. ${data.detective} crouched by a shattered window, knuckles white, feeling the pulse of the city beneath every footstep. Somewhere in the maze of alleyways, a secret lurked. The silence cracked like lightning when a distant scream split the air — and then it was a chase, relentless and unforgiving, weaving through the night until the truth finally clawed its way into reality.`,
    `Sirens wailed in ${data.location}, but they were miles away when the first explosion rocked the abandoned factory. Detective ${data.detective} sprinted forward, heart drumming against ribs, boots splashing through dark puddles that reflected flickering lights. This wasn’t the usual ${data.crime}, no — this was calculated, precise, a message carved into the bones of the city. Witnesses had vanished, doors were locked tight, and all signs pointed toward ${data.suspect}, though no one could swear it aloud. ${data.detective} felt time slip like sand between gloved fingers — every second a countdown, every breath a gamble. Somewhere between the broken glass and scorching cigarettes on the curb, a truth waited. Sweat stung their eyes, and footsteps echoed like taunts. Then the whisper: a name on the wind, carried through corridors of fear and half‑remembered warnings. ${data.detective} knew the end was close — too close — and this time, someone wouldn’t walk away alive.`,
    /* 8 more Thriller long templates… */
  ],
  police: [
    `OFFICIAL POLICE REPORT — ${data.crime.toUpperCase()}: On the evening of December 22nd in ${data.location}, Detective ${data.detective} arrived at the scene with the first responding officers. Witness statements identified ${data.suspect} as present near the location shortly before the incident. Multiple forensic teams collected evidence, including footprints, fibers, and video surveillance. As of this report, officers are interviewing known associates and documenting potential motives. All collected data has been catalogued and submitted for further review.`,
    `INCIDENT SUMMARY — On record: The ${data.crime} occurred in ${data.location} at approximately 20:15 hours. Initial investigation shows signs consistent with forced entry and potential concealment. Detective ${data.detective} led interview procedures with multiple witnesses who each provided varying accounts. ${data.suspect} has been flagged for follow‑up questioning. Evidence materials include photographs, trace DNA samples, and verified eyewitness reports. Next steps include forensic review and timeline reconstruction.`,
    /* 8 more Police long templates… */
  ]
};

const styleList = Object.keys(stories);
const selectedStyle =
  data.style && styleList.includes(data.style) ? data.style : "noir";

const storySet = stories[selectedStyle];
const randomIndex = Math.floor(Math.random() * storySet.length);
const chosenTemplate = storySet[randomIndex];

const finalStory = chosenTemplate
  .replaceAll("{{detective}}", data.detective)
  .replaceAll("{{suspect}}", data.suspect)
  .replaceAll("{{crime}}", data.crime)
  .replaceAll("{{location}}", data.location);

// Output to page
document.getElementById("storyOutput").textContent = finalStory;

const imgEl = document.getElementById("generatedImage");
if (imgEl) {
  const randomImage = imageList[Math.floor(Math.random() * imageList.length)];
  imgEl.src = "assets/" + randomImage;
}

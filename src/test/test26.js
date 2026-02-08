// TEST 26

// Present Continuous, Past Simple, Adverbs of frequency,
// Past Continuous, Be going to, Prepositions of place
// + verbi irregolari


export const MULTIPLE_CHOICE = [
    {
        id: 1,
        text: "Yesterday, we ____ a great photo of the Eiffel Tower at sunset.",
        options: ["took", "take", "are taking"],
        correctIndex: 0,
        explanation: {
            correct:
                `"Yesterday" → Past Simple. Verbo irregolare: take → took.`,
            wrongByIndex: {
                1: `"take" è presente: non va con "yesterday".`,
                2: `"are taking" è Present Continuous: non descrive un fatto concluso.`,
            },
        },
    },
    {
        id: 2,
        text: "The cat is hiding ____ the curtains, so I can’t see it clearly.",
        options: ["behind", "on", "between"],
        correctIndex: 0,
        explanation: {
            correct:
                `"Behind" = dietro le tende, quindi nascosto.`,
            wrongByIndex: {
                1: `"on" = sopra: non è l’idea di “nascondersi”.`,
                2: `"between" richiede due elementi (between A and B).`,
            },
        },
    },
    {
        id: 3,
        text: "At 7 p.m. yesterday, we ____ dinner when you called.",
        options: ["had", "were having", "have"],
        correctIndex: 1,
        explanation: {
            correct:
                `Ora precisa nel passato + azione in corso → Past Continuous: were having.`,
            wrongByIndex: {
                0: `"had" (Past Simple) non evidenzia che l’azione era in corso.`,
                2: `"have" è presente: non va con "yesterday".`,
            },
        },
    },
    {
        id: 4,
        text: "Listen! Someone ____ a song in the hallway.",
        options: ["sings", "is singing", "sang"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Listen!" → azione in corso ora → Present Continuous: is singing.`,
            wrongByIndex: {
                0: `"sings" suona come abitudine, non come azione adesso.`,
                2: `"sang" è passato.`,
            },
        },
    },
    {
        id: 5,
        text: "My cousin ____ forgets birthdays because she saves them in her calendar.",
        options: ["rarely", "always", "often"],
        correctIndex: 0,
        explanation: {
            correct:
                `Se li salva nel calendario, è logico che dimentichi raramente → "rarely".`,
            wrongByIndex: {
                1: `"always" contraddice l’idea che si organizza.`,
                2: `"often" indica frequenza alta, poco coerente.`,
            },
        },
    },
    {
        id: 6,
        text: "I’m tired — I ____ go to bed early tonight.",
        options: ["am going to", "went", "go"],
        correctIndex: 0,
        explanation: {
            correct:
                `Intenzione/piano futuro basato su una situazione presente → be going to.`,
            wrongByIndex: {
                1: `"went" è passato.`,
                2: `"go" (Present Simple) non rende l’idea di piano/decisione.`,
            },
        },
    },
    {
        id: 7,
        text: "While he ____ to work, he saw an accident.",
        options: ["drove", "was driving", "drives"],
        correctIndex: 1,
        explanation: {
            correct:
                `Azione in corso nel passato + evento (saw) → Past Continuous: was driving.`,
            wrongByIndex: {
                0: `"drove" non mette in evidenza l’azione “in corso” con "while".`,
                2: `"drives" è presente/abitudine.`,
            },
        },
    },
    {
        id: 8,
        text: "The remote control is ____ the couch cushions.",
        options: ["between", "under", "in"],
        correctIndex: 0,
        explanation: {
            correct:
                `Se è “fra” i cuscini → between the cushions (due elementi).`,
            wrongByIndex: {
                1: `"under" = sotto: diverso da “fra due cuscini”.`,
                2: `"in" = dentro: suona come “dentro un contenitore”.`,
            },
        },
    },
    {
        id: 9,
        text: "Two hours ago, I ____ your email and replied immediately.",
        options: ["wrote", "read", "am reading"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Two hours ago" → Past Simple. "read" è irregolare: stessa forma, pronuncia /red/.`,
            wrongByIndex: {
                0: `"wrote" significa “scrissi”, ma qui serve “lessi”.`,
                2: `"am reading" è Present Continuous, non un’azione conclusa.`,
            },
        },
    },
    {
        id: 10,
        text: "Look! The bus ____ — run if you want to catch it!",
        options: ["is leaving", "left", "leaves"],
        correctIndex: 0,
        explanation: {
            correct:
                `"Look!" + situazione adesso → Present Continuous: is leaving.`,
            wrongByIndex: {
                1: `"left" è passato: troppo tardi rispetto all’avviso.`,
                2: `"leaves" suona come orario/abitudine (timetable), non come “ora”.`,
            },
        },
    },
];

export const GAP_FILL = [
    {
        id: 1,
        text: "Right now, the students ______ (write) a test.",
        answers: ["are writing"],
        explanation: {
            correct:
                `"Right now" → Present Continuous: are writing.`,
            wrong:
                `Serve "are + -ing". Il Present Simple qui suona come abitudine.`,
        },
    },
    {
        id: 2,
        text: "Last month, I ______ (buy) a new laptop.",
        answers: ["bought"],
        explanation: {
            correct:
                `"Last month" → Past Simple. Buy → bought (irregolare).`,
            wrong:
                `"buyed" non esiste. Con un tempo passato finito serve Past Simple.`,
        },
    },
    {
        id: 3,
        text: "She ______ (usually / go) to the gym after work.",
        answers: ["usually goes"],
        explanation: {
            correct:
                `Abitudine + 3ª persona singolare: goes. Avverbio prima del verbo: usually goes.`,
            wrong:
                `Con "she" serve -s/-es (goes). E "usually" va prima del verbo principale.`,
        },
    },
    {
        id: 4,
        text: "While I ______ (look) for my keys, I found an old photo.",
        answers: ["was looking"],
        explanation: {
            correct:
                `Azione in corso nel passato + evento (found) → Past Continuous: was looking.`,
            wrong:
                `Con "while" l’azione lunga va al Past Continuous, non al Past Simple.`,
        },
    },
    {
        id: 5,
        text: "They ______ (move) to a bigger apartment next month. They already found one.",
        answers: ["are going to move"],
        explanation: {
            correct:
                `Piano futuro già deciso + prove (hanno già trovato casa) → be going to.`,
            wrong:
                `Serve la struttura "are going to + verbo".`,
        },
    },
    {
        id: 6,
        text: "The shoes are ______ the bed, not on the carpet.",
        answers: ["under"],
        explanation: {
            correct:
                `Posizione “sotto” → under the bed.`,
            wrong:
                `"On" è sopra; "in" è dentro; "between" richiede due riferimenti.`,
        },
    },
    {
        id: 7,
        text: "Two days ago, we ______ (meet) our new neighbors.",
        answers: ["met"],
        explanation: {
            correct:
                `"Ago" → Past Simple. Meet → met (irregolare).`,
            wrong:
                `"meeted" non esiste. Con "ago" serve Past Simple.`,
        },
    },
    {
        id: 8,
        text: "At 11 p.m. last night, he ______ (sleep) when I texted him.",
        answers: ["was sleeping"],
        explanation: {
            correct:
                `Ora precisa + azione in corso nel passato → Past Continuous: was sleeping.`,
            wrong:
                `Serve "was/were + -ing" per un’azione in corso nel passato.`,
        },
    },
    {
        id: 9,
        text: "My friends ______ (often / be) noisy on the bus.",
        answers: ["are often"],
        explanation: {
            correct:
                `Con "be" e soggetto plurale: are + avverbio → are often.`,
            wrong:
                `Con soggetto plurale serve "are". E l’avverbio va dopo "be": are often.`,
        },
    },
    {
        id: 10,
        text: "Look! The dog ______ (run) across the street!",
        answers: ["is running"],
        explanation: {
            correct:
                `"Look!" → azione in corso ora → Present Continuous: is running.`,
            wrong:
                `Con "Look!" di solito serve "is + -ing" per un’azione che sta succedendo adesso.`,
        },
    },
];

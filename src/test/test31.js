// TEST 31

// Present Continuous, Past Simple, Adverbs of frequency,
// Past Continuous, Be going to, Prepositions of place
// VERBI IRREGOLARI 

export const MULTIPLE_CHOICE = [
    {
        id: 1,
        text: "Two minutes ago, I ____ your message but I couldn't answer.",
        options: ["read", "read (past)", "am reading"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Two minutes ago" → Past Simple. "read" è irregolare: stessa forma, pronuncia /red/.`,
            wrongByIndex: {
                0: `"read" al presente non è coerente con "two minutes ago" (passato).`,
                2: `"am reading" è Present Continuous: non descrive un fatto concluso.`,
            },
        },
    },
    {
        id: 2,
        text: "The keys are ____ the box on the shelf.",
        options: ["in", "under", "between"],
        correctIndex: 0,
        explanation: {
            correct:
                `Dentro un contenitore → "in the box".`,
            wrongByIndex: {
                1: `"under" = sotto: non significa “dentro”.`,
                2: `"between" richiede due riferimenti (between A and B).`,
            },
        },
    },
    {
        id: 3,
        text: "Look! The plane ____ off right now.",
        options: ["takes", "is taking", "took"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Look!" → azione in corso ora → Present Continuous: is taking off.`,
            wrongByIndex: {
                0: `"takes" suona come abitudine/orario.`,
                2: `"took" è passato.`,
            },
        },
    },
    {
        id: 4,
        text: "Last night, she ____ a strange dream.",
        options: ["has", "had", "is having"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Last night" → Past Simple. Have → had (irregolare).`,
            wrongByIndex: {
                0: `"has" è presente.`,
                2: `"is having" è Present Continuous.`,
            },
        },
    },
    {
        id: 5,
        text: "While we ____ home, we saw a fox near the road.",
        options: ["went", "were going", "go"],
        correctIndex: 1,
        explanation: {
            correct:
                `Azione in corso nel passato + evento (saw) → Past Continuous: were going.`,
            wrongByIndex: {
                0: `"went" non evidenzia l’azione in corso con "while".`,
                2: `"go" è presente.`,
            },
        },
    },
    {
        id: 6,
        text: "He ____ loses his temper because he's very calm.",
        options: ["never", "often", "always"],
        correctIndex: 0,
        explanation: {
            correct:
                `Se è molto calmo, è logico che non perda mai la pazienza → "never".`,
            wrongByIndex: {
                1: `"often" contraddice “very calm”.`,
                2: `"always" è l’opposto di “very calm”.`,
            },
        },
    },
    {
        id: 7,
        text: "At 9 p.m. yesterday, I ____ a book when the lights went out.",
        options: ["read", "was reading", "am reading"],
        correctIndex: 1,
        explanation: {
            correct:
                `Ora precisa nel passato + azione in corso → Past Continuous: was reading.`,
            wrongByIndex: {
                0: `"read" (Past Simple) non mostra l’azione in corso in quel momento.`,
                2: `"am reading" è presente.`,
            },
        },
    },
    {
        id: 8,
        text: "Your shoes are ____ the bed, not on the floor.",
        options: ["under", "in", "between"],
        correctIndex: 0,
        explanation: {
            correct:
                `"Under" = sotto il letto.`,
            wrongByIndex: {
                1: `"in" = dentro: un letto non è un contenitore.`,
                2: `"between" richiede due riferimenti.`,
            },
        },
    },
    {
        id: 9,
        text: "It’s very late — we ____ miss the last train.",
        options: ["are going to", "went", "go"],
        correctIndex: 0,
        explanation: {
            correct:
                `Previsione basata su una situazione presente (è tardi) → be going to.`,
            wrongByIndex: {
                1: `"went" è passato.`,
                2: `"go" è troppo neutro e non mostra previsione.`,
            },
        },
    },
    {
        id: 10,
        text: "Listen! Someone ____ the doorbell again.",
        options: ["rings", "is ringing", "rang"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Listen!" → azione in corso ora → Present Continuous: is ringing.`,
            wrongByIndex: {
                0: `"rings" suona come abitudine.`,
                2: `"rang" è passato.`,
            },
        },
    },
];

export const GAP_FILL = [
    {
        id: 1,
        text: "Right now, she ______ (run) to the station.",
        answers: ["is running"],
        explanation: {
            correct:
                `"Right now" → Present Continuous: is running.`,
            wrong:
                `Serve "is/are + -ing" per un’azione che sta succedendo ora.`,
        },
    },
    {
        id: 2,
        text: "Yesterday, they ______ (find) a lost dog near their house.",
        answers: ["found"],
        explanation: {
            correct:
                `"Yesterday" → Past Simple. Find → found (irregolare).`,
            wrong:
                `"finded" non esiste.`,
        },
    },
    {
        id: 3,
        text: "He ______ (often / be) tired after work.",
        answers: ["is often"],
        explanation: {
            correct:
                `Con "be": verbo + avverbio → is often.`,
            wrong:
                `Non: often is.`,
        },
    },
    {
        id: 4,
        text: "While I ______ (write) an email, the internet went down.",
        answers: ["was writing"],
        explanation: {
            correct:
                `Azione in corso + evento → Past Continuous: was writing.`,
            wrong:
                `Con "while" l’azione lunga va al Past Continuous.`,
        },
    },
    {
        id: 5,
        text: "We ______ (go) to see a doctor tomorrow. The pain is getting worse.",
        answers: ["are going to go"],
        explanation: {
            correct:
                `Decisione basata su situazione presente → be going to: are going to go.`,
            wrong:
                `Serve la struttura "are going to + verbo".`,
        },
    },
    {
        id: 6,
        text: "The notebook is ______ the drawer.",
        answers: ["in"],
        explanation: {
            correct:
                `Dentro un contenitore → in the drawer.`,
            wrong:
                `"On" è sopra; "under" è sotto; "between" richiede due riferimenti.`,
        },
    },
    {
        id: 7,
        text: "Two days ago, I ______ (think) about changing my job.",
        answers: ["thought"],
        explanation: {
            correct:
                `"Ago" → Past Simple. Think → thought (irregolare).`,
            wrong:
                `"thinked" non esiste.`,
        },
    },
    {
        id: 8,
        text: "At 8 p.m. yesterday, they ______ (eat) when I arrived.",
        answers: ["were eating"],
        explanation: {
            correct:
                `Ora precisa + azione in corso → Past Continuous: were eating.`,
            wrong:
                `Serve "were + -ing".`,
        },
    },
    {
        id: 9,
        text: "My friends ______ (rarely / be) angry with each other.",
        answers: ["are rarely"],
        explanation: {
            correct:
                `Soggetto plurale + be + avverbio → are rarely.`,
            wrong:
                `Con soggetto plurale serve "are".`,
        },
    },
    {
        id: 10,
        text: "Look! The kids ______ (swim) in the river!",
        answers: ["are swimming"],
        explanation: {
            correct:
                `"Look!" → Present Continuous: are swimming.`,
            wrong:
                `Con "Look!" di solito serve "are + -ing" per un’azione in corso ora.`,
        },
    },
];

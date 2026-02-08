// src/test/test23.js
// Argomenti: Present Continuous, Past Simple, Adverbs of frequency,
// Past Continuous, Be going to, Prepositions of place

export const MULTIPLE_CHOICE = [
    {
        id: 1,
        text: "Look! The kids ____ into the pool with their clothes on!",
        options: ["jump", "are jumping", "jumped"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Look!" indica qualcosa che sta succedendo adesso → Present Continuous: "are jumping".`,
            wrongByIndex: {
                0: `"jump" (Present Simple) descrive abitudine/fatto generale, non un’azione “adesso”.`,
                2: `"jumped" è Past Simple: sposta l’azione nel passato, ma qui è una scena presente.`,
            },
        },
    },
    {
        id: 2,
        text: "The documents are ____ the blue folder, not on the desktop.",
        options: ["in", "under", "between"],
        correctIndex: 0,
        explanation: {
            correct:
                `Dentro un contenitore/spazio (folder) si usa "in": in the folder.`,
            wrongByIndex: {
                1: `"under" è “sotto”, ma un folder è un contenitore: qui serve “dentro”.`,
                2: `"between" richiede due riferimenti (between A and B).`,
            },
        },
    },
    {
        id: 3,
        text: "We ____ see a doctor tomorrow — the fever is getting worse.",
        options: ["are going to", "saw", "see"],
        correctIndex: 0,
        explanation: {
            correct:
                `Decisione/intenzione futura basata su una situazione presente (fever getting worse) → "be going to".`,
            wrongByIndex: {
                1: `"saw" è passato: non va con "tomorrow".`,
                2: `"see" (Present Simple) è troppo neutro e non evidenzia l’intenzione/decisione.`,
            },
        },
    },
    {
        id: 4,
        text: "Yesterday, I ____ my phone on the train and didn’t notice until later.",
        options: ["leave", "left", "am leaving"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Yesterday" → Past Simple. Verbo irregolare: leave → left.`,
            wrongByIndex: {
                0: `"leave" è presente: non va con "yesterday".`,
                2: `"am leaving" è Present Continuous: non descrive un fatto concluso nel passato.`,
            },
        },
    },
    {
        id: 5,
        text: "While we ____ to the hotel, we saw a beautiful sunset.",
        options: ["drove", "were driving", "are driving"],
        correctIndex: 1,
        explanation: {
            correct:
                `Azione in corso nel passato + evento (saw) → Past Continuous. Quindi: were driving.`,
            wrongByIndex: {
                0: `"drove" (Past Simple) non rende l’idea dell’azione in corso “mentre” è successo qualcosa.`,
                2: `"are driving" è presente: non è coerente con "saw" (passato).`,
            },
        },
    },
    {
        id: 6,
        text: "My sister ____ forgets her homework because she writes everything down.",
        options: ["rarely", "always", "often"],
        correctIndex: 0,
        explanation: {
            correct:
                `Se scrive tutto, è logico che dimentichi raramente → "rarely".`,
            wrongByIndex: {
                1: `"always" contraddice il fatto che si organizza scrivendo tutto.`,
                2: `"often" indica frequenza alta e non è coerente con “writes everything down”.`,
            },
        },
    },
    {
        id: 7,
        text: "At 9 p.m. last night, I ____ a shower when the lights went out.",
        options: ["took", "was taking", "take"],
        correctIndex: 1,
        explanation: {
            correct:
                `Ora specifica nel passato + azione in corso → Past Continuous: was taking.`,
            wrongByIndex: {
                0: `"took" (Past Simple) non evidenzia che l’azione era in corso nel momento del blackout.`,
                2: `"take" è presente: non va con "last night".`,
            },
        },
    },
    {
        id: 8,
        text: "The laptop is ____ the chair, so don’t sit down!",
        options: ["on", "in", "between"],
        correctIndex: 0,
        explanation: {
            correct:
                `Per qualcosa appoggiato su una superficie si usa "on": on the chair.`,
            wrongByIndex: {
                1: `"in" significa “dentro”: non è coerente con "chair".`,
                2: `"between" richiede due riferimenti.`,
            },
        },
    },
    {
        id: 9,
        text: "Two minutes ago, I ____ your message but I couldn’t reply.",
        options: ["read", "read (past)", "am reading"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Two minutes ago" → Past Simple. "read" è irregolare: si scrive uguale ma si pronuncia /red/.`,
            wrongByIndex: {
                0: `"read" al presente non è coerente con "two minutes ago" (passato).`,
                2: `"am reading" è Present Continuous: non descrive un fatto concluso nel passato.`,
            },
        },
    },
    {
        id: 10,
        text: "Listen! The teacher ____ the instructions again because someone arrived late.",
        options: ["repeats", "is repeating", "repeated"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Listen!" + situazione attuale → Present Continuous: is repeating.`,
            wrongByIndex: {
                0: `"repeats" (Present Simple) suona come abitudine, non come azione in corso adesso.`,
                2: `"repeated" è passato: non va con un contesto “adesso”.`,
            },
        },
    },
];

export const GAP_FILL = [
    {
        id: 1,
        text: "Right now, she ______ (not / listen) because she is tired.",
        answers: ["is not listening", "isn't listening"],
        explanation: {
            correct:
                `"Right now" → Present Continuous negativo: is not listening.`,
            wrong:
                `Serve "is not + -ing". "Doesn’t listen" indica abitudine, non “adesso”.`,
        },
    },
    {
        id: 2,
        text: "Last year, they ______ (build) a new sports center.",
        answers: ["built"],
        explanation: {
            correct:
                `"Last year" → Past Simple. Verbo irregolare: build → built.`,
            wrong:
                `Con un tempo passato finito serve Past Simple. "Builded" non esiste.`,
        },
    },
    {
        id: 3,
        text: "He ______ (usually / take) the bus to work.",
        answers: ["usually takes"],
        explanation: {
            correct:
                `Abitudine + 3ª persona singolare: takes. Avverbio prima del verbo: usually takes.`,
            wrong:
                `Con "he" serve -s (takes). E l’avverbio va prima del verbo principale.`,
        },
    },
    {
        id: 4,
        text: "While I ______ (carry) the boxes, one of them fell.",
        answers: ["was carrying"],
        explanation: {
            correct:
                `Azione in corso nel passato + evento (fell) → Past Continuous: was carrying.`,
            wrong:
                `Con "while" l’azione lunga va al Past Continuous, non al Past Simple.`,
        },
    },
    {
        id: 5,
        text: "We ______ (go) to buy groceries after work. We already made a list.",
        answers: ["are going to buy", "are going to"],
        explanation: {
            correct:
                `Piano futuro già deciso (lista pronta) → be going to: are going to buy.`,
            wrong:
                `Serve "are going to". Senza "going to" non stai usando la struttura richiesta.`,
        },
    },
    {
        id: 6,
        text: "The keys are ______ the table, next to the notebook.",
        answers: ["on"],
        explanation: {
            correct:
                `Su una superficie si usa "on": on the table.`,
            wrong:
                `"In" è dentro, "under" è sotto, "between" richiede due riferimenti: qui serve "on".`,
        },
    },
    {
        id: 7,
        text: "Two days ago, we ______ (meet) our new teacher.",
        answers: ["met"],
        explanation: {
            correct:
                `"Two days ago" → Past Simple. Verbo irregolare: meet → met.`,
            wrong:
                `Con "ago" serve Past Simple. "Meet" è presente; "meeted" non esiste.`,
        },
    },
    {
        id: 8,
        text: "At 7 p.m. yesterday, they ______ (have) dinner when I called.",
        answers: ["were having"],
        explanation: {
            correct:
                `Ora precisa nel passato + azione in corso → Past Continuous: were having.`,
            wrong:
                `Per un’azione in corso nel passato si usa Past Continuous, non Past Simple.`,
        },
    },
    {
        id: 9,
        text: "My friends ______ (rarely / be) rude, even when they disagree.",
        answers: ["are rarely"],
        explanation: {
            correct:
                `Con "be" e soggetto plurale: are + avverbio → are rarely.`,
            wrong:
                `Con soggetto plurale serve "are". E l’avverbio va dopo "be": are rarely.`,
        },
    },
    {
        id: 10,
        text: "Look! The dog ______ (run) straight into the garden.",
        answers: ["is running"],
        explanation: {
            correct:
                `"Look!" → azione in corso adesso → Present Continuous: is running.`,
            wrong:
                `Con "Look!" di solito serve "is + -ing" per un’azione che sta succedendo ora.`,
        },
    },
];

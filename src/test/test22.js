// src/test/test22.js
// Argomenti: Present Continuous, Past Simple, Adverbs of frequency,
// Past Continuous, Be going to, Prepositions of place


export const MULTIPLE_CHOICE = [
    {
        id: 1,
        text: "The passport isn’t in my bag — it’s ____ the jacket pocket.",
        options: ["in", "between", "under"],
        correctIndex: 0,
        explanation: {
            correct:
                `Per dire “dentro” un contenitore/spazio (pocket) si usa "in": in the pocket.`,
            wrongByIndex: {
                1: `"between" richiede due riferimenti (between A and B). Qui c’è solo “the jacket pocket”.`,
                2: `"under" è “sotto”: non è coerente con “pocket”.`,
            },
        },
    },
    {
        id: 2,
        text: "Last Friday, we ____ a taxi because it was raining heavily.",
        options: ["take", "took", "are taking"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Last Friday" → Past Simple. Verbo irregolare: take → took.`,
            wrongByIndex: {
                0: `"take" è presente: non va con "last Friday".`,
                2: `"are taking" è Present Continuous: non descrive un fatto concluso nel passato.`,
            },
        },
    },
    {
        id: 3,
        text: "My brother ____ loses his keys because he always puts them in the same place.",
        options: ["rarely", "currently", "yesterday"],
        correctIndex: 0,
        explanation: {
            correct:
                `È un’abitudine: se le mette sempre nello stesso posto, le perde raramente → "rarely".`,
            wrongByIndex: {
                1: `"currently" indica “attualmente”, non è un avverbio di frequenza.`,
                2: `"yesterday" è un riferimento temporale al passato, non un adverb of frequency.`,
            },
        },
    },
    {
        id: 4,
        text: "I can’t answer now — I ____ an email to my manager.",
        options: ["write", "am writing", "wrote"],
        correctIndex: 1,
        explanation: {
            correct:
                `Azione in corso nel presente → Present Continuous: am writing.`,
            wrongByIndex: {
                0: `"write" (Present Simple) suona come abitudine/fatto generale, non “adesso”.`,
                2: `"wrote" è Past Simple: sposta l’azione nel passato.`,
            },
        },
    },
    {
        id: 5,
        text: "While she ____ the report, her computer suddenly froze.",
        options: ["wrote", "was writing", "is writing"],
        correctIndex: 1,
        explanation: {
            correct:
                `Azione lunga in corso nel passato + evento improvviso → Past Continuous: was writing.`,
            wrongByIndex: {
                0: `"wrote" (Past Simple) fa sembrare l’azione conclusa, non in corso durante il freeze.`,
                2: `"is writing" è presente: non è coerente con "froze" (passato).`,
            },
        },
    },
    {
        id: 6,
        text: "We ____ buy a new router this week — the old one keeps disconnecting.",
        options: ["are going to", "bought", "buy"],
        correctIndex: 0,
        explanation: {
            correct:
                `Decisione/intenzione futura basata su un problema presente → "be going to".`,
            wrongByIndex: {
                1: `"bought" è passato: qui stai parlando di un piano futuro.`,
                2: `"buy" è troppo neutro e non sottolinea il piano/intenzione.`,
            },
        },
    },
    {
        id: 7,
        text: "Yesterday, I ____ my wallet at home and couldn’t pay.",
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
        id: 8,
        text: "The café is ____ the station, so we can meet there easily.",
        options: ["next to", "in", "under"],
        correctIndex: 0,
        explanation: {
            correct:
                `Vicinanza immediata → "next to".`,
            wrongByIndex: {
                1: `"in" significherebbe “dentro la station”, cambia il senso.`,
                2: `"under" non è realistico qui.`,
            },
        },
    },
    {
        id: 9,
        text: "Two days ago, he ____ a mistake and apologized immediately.",
        options: ["makes", "made", "is making"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Two days ago" → Past Simple. Verbo irregolare: make → made.`,
            wrongByIndex: {
                0: `"makes" è presente: non va con "two days ago".`,
                2: `"is making" è Present Continuous: non è coerente con un tempo finito nel passato.`,
            },
        },
    },
    {
        id: 10,
        text: "Look at the traffic — we ____ late if we don’t leave now.",
        options: ["are going to be", "were", "are"],
        correctIndex: 0,
        explanation: {
            correct:
                `Previsione basata su evidenza presente (traffic) → "be going to": are going to be late.`,
            wrongByIndex: {
                1: `"were" è passato: non esprime una previsione futura qui.`,
                2: `"are" descrive una condizione presente (“siamo in ritardo adesso”), ma qui è una previsione.`,
            },
        },
    },
];

export const GAP_FILL = [
    {
        id: 1,
        text: "While I ______ (drive) home, I saw an accident.",
        answers: ["was driving"],
        explanation: {
            correct:
                `Azione in corso nel passato (while) + evento (saw) → Past Continuous: was driving.`,
            wrong:
                `Con "while" e un evento, l’azione lunga va al Past Continuous (was driving), non al Past Simple.`,
        },
    },
    {
        id: 2,
        text: "Last night, we ______ (go) to a small concert downtown.",
        answers: ["went"],
        explanation: {
            correct:
                `"Last night" → Past Simple. Verbo irregolare: go → went.`,
            wrong:
                `Con "last night" serve Past Simple: "went". "Goed" non esiste.`,
        },
    },
    {
        id: 3,
        text: "My dad ______ (often / have) lunch at his desk.",
        answers: ["often has"],
        explanation: {
            correct:
                `Abitudine + 3ª singolare: has. Avverbio prima del verbo: often has.`,
            wrong:
                `Con "my dad" serve 3ª singolare: has (non have). L’avverbio va prima del verbo principale.`,
        },
    },
    {
        id: 4,
        text: "At the moment, the kids ______ (not / sleep); they are watching a movie.",
        answers: ["are not sleeping", "aren't sleeping"],
        explanation: {
            correct:
                `"At the moment" → Present Continuous negativo: are not sleeping.`,
            wrong:
                `Serve "are not + -ing". "Don’t sleep" suona come abitudine, non azione in corso.`,
        },
    },
    {
        id: 5,
        text: "They ______ (go) to take an English test next week.",
        answers: ["are going to take", "are going to"],
        explanation: {
            correct:
                `Piano futuro → be going to: are going to take.`,
            wrong:
                `Qui serve la struttura "are going to". Forme al passato o senza "going to" non sono coerenti.`,
        },
    },
    {
        id: 6,
        text: "The charger is ______ the sofa, not on it.",
        answers: ["under"],
        explanation: {
            correct:
                `“Not on it” suggerisce posizione sotto → "under".`,
            wrong:
                `Se non è "on", serve una preposizione coerente: qui "under" (sotto) è la scelta naturale.`,
        },
    },
    {
        id: 7,
        text: "Yesterday, I ______ (write) the email but forgot to send it.",
        answers: ["wrote"],
        explanation: {
            correct:
                `"Yesterday" → Past Simple. Verbo irregolare: write → wrote.`,
            wrong:
                `Con "yesterday" serve Past Simple: "wrote". "Written" è participio, non va da solo.`,
        },
    },
    {
        id: 8,
        text: "She ______ (never / be) late, so we can trust her schedule.",
        answers: ["is never"],
        explanation: {
            correct:
                `Con il verbo "be": is + avverbio → is never.`,
            wrong:
                `Con "be" l’avverbio di frequenza va dopo (is never), non prima. E con "she" serve "is".`,
        },
    },
    {
        id: 9,
        text: "Two hours ago, we ______ (take) the wrong bus and got lost.",
        answers: ["took"],
        explanation: {
            correct:
                `"Two hours ago" → Past Simple. take → took (irregolare).`,
            wrong:
                `Con "ago" serve Past Simple. "Take" è presente, "taken" è participio.`,
        },
    },
    {
        id: 10,
        text: "The printer is ______ the desk, next to the monitor.",
        answers: ["on"],
        explanation: {
            correct:
                `Su una superficie si usa "on": on the desk.`,
            wrong:
                `Qui serve "on" (sopra una superficie). "In" è dentro, "under" è sotto, "between" richiede due riferimenti.`,
        },
    },
];

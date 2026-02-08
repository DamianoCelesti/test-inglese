// TEST 24

// Present Continuous, Past Simple, Adverbs of frequency,
// Past Continuous, Be going to, Prepositions of place
// + verbi irregolari

export const MULTIPLE_CHOICE = [
    {
        id: 1,
        text: "Look! The baby ____ the cat by the tail!",
        options: ["pull", "is pulling", "pulled"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Look!" indica un’azione che sta accadendo ora → Present Continuous: is pulling.`,
            wrongByIndex: {
                0: `"pull" è Present Simple (abitudini), non adatto a ‘adesso’.`,
                2: `"pulled" è Past Simple: sposta l’azione nel passato.`,
            },
        },
    },
    {
        id: 2,
        text: "Your bag is ____ the sofa, not on the floor.",
        options: ["under", "on", "behind"],
        correctIndex: 2,
        explanation: {
            correct: `"Behind" = dietro al divano.`,
            wrongByIndex: {
                0: `"under" = sotto, non corretto qui.`,
                1: `"on" = sopra, ma il testo dice che NON è sul pavimento.`,
            },
        },
    },
    {
        id: 3,
        text: "It’s very cloudy — it ____ rain soon.",
        options: ["is going to", "rained", "rains"],
        correctIndex: 0,
        explanation: {
            correct:
                `Previsione basata su prove visibili → be going to.`,
            wrongByIndex: {
                1: `"rained" è passato.`,
                2: `"rains" è troppo generale (meteo abituale).`,
            },
        },
    },
    {
        id: 4,
        text: "Yesterday I ____ my wallet at the café.",
        options: ["lost", "lose", "am losing"],
        correctIndex: 0,
        explanation: {
            correct: `"Yesterday" → Past Simple. Lose → lost (irregolare).`,
            wrongByIndex: {
                1: `"lose" è presente.`,
                2: `"am losing" è Present Continuous, non un fatto concluso.`,
            },
        },
    },
    {
        id: 5,
        text: "While I ____ home, I saw a deer in the street.",
        options: ["walked", "was walking", "am walking"],
        correctIndex: 1,
        explanation: {
            correct:
                `Azione lunga nel passato + evento → Past Continuous: was walking.`,
            wrongByIndex: {
                0: `"walked" non mostra che l’azione era in corso.`,
                2: `"am walking" è presente, incoerente con ‘saw’.`,
            },
        },
    },
    {
        id: 6,
        text: "He ____ checks his phone during class.",
        options: ["never", "always", "often"],
        correctIndex: 0,
        explanation: {
            correct:
                `"Never" è coerente con comportamento corretto in classe.`,
            wrongByIndex: {
                1: `"always" è troppo forte e negativo.`,
                2: `"often" non corrisponde all’idea di comportamento modello.`,
            },
        },
    },
    {
        id: 7,
        text: "At 10 p.m., we ____ a movie when the power went out.",
        options: ["watched", "were watching", "watch"],
        correctIndex: 1,
        explanation: {
            correct:
                `Ora specifica + azione in corso → Past Continuous.`,
            wrongByIndex: {
                0: `"watched" non rende l’idea di ‘in corso’.`,
                2: `"watch" è presente.`,
            },
        },
    },
    {
        id: 8,
        text: "The calendar is ____ the wall, above the desk.",
        options: ["in", "on", "between"],
        correctIndex: 1,
        explanation: {
            correct:
                `Oggetti appesi a una superficie → on the wall.`,
            wrongByIndex: {
                0: `"in" = dentro, non possibile con un muro.`,
                2: `"between" richiede due punti di riferimento.`,
            },
        },
    },
    {
        id: 9,
        text: "Five minutes ago, she ____ me a message.",
        options: ["sent", "send", "is sending"],
        correctIndex: 0,
        explanation: {
            correct:
                `"Five minutes ago" → Past Simple. Send → sent (irregolare).`,
            wrongByIndex: {
                1: `"send" è presente.`,
                2: `"is sending" è azione in corso, non conclusa.`,
            },
        },
    },
    {
        id: 10,
        text: "Listen! Someone ____ at the door.",
        options: ["knocks", "is knocking", "knocked"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Listen!" → Present Continuous: is knocking.`,
            wrongByIndex: {
                0: `"knocks" suona abituale.`,
                2: `"knocked" è passato.`,
            },
        },
    },
];

export const GAP_FILL = [
    {
        id: 1,
        text: "Right now, they ______ (not / play) football.",
        answers: ["are not playing", "aren't playing"],
        explanation: {
            correct:
                `"Right now" → Present Continuous negativo.`,
            wrong:
                `Serve: are not + -ing.`,
        },
    },
    {
        id: 2,
        text: "Last summer, we ______ (fly) to Spain.",
        answers: ["flew"],
        explanation: {
            correct:
                `"Last summer" → Past Simple. Fly → flew.`,
            wrong:
                `"flied" non esiste.`,
        },
    },
    {
        id: 3,
        text: "She ______ (usually / drink) tea in the morning.",
        answers: ["usually drinks"],
        explanation: {
            correct:
                `Abitudine + 3ª persona → drinks.`,
            wrong:
                `Con ‘she’ serve -s.`,
        },
    },
    {
        id: 4,
        text: "While he ______ (drive), his phone rang.",
        answers: ["was driving"],
        explanation: {
            correct:
                `Azione in corso + evento → Past Continuous.`,
            wrong:
                `"While" richiede Past Continuous per l’azione lunga.`,
        },
    },
    {
        id: 5,
        text: "We ______ (visit) the museum tomorrow. Tickets are ready.",
        answers: ["are going to visit"],
        explanation: {
            correct:
                `Piano già deciso → be going to.`,
            wrong:
                `Serve la struttura completa: are going to + verbo.`,
        },
    },
    {
        id: 6,
        text: "The cat is ______ the table.",
        answers: ["under"],
        explanation: {
            correct:
                `"Under" = sotto il tavolo.`,
            wrong:
                `"On" o "in" non descrivono la posizione corretta.`,
        },
    },
    {
        id: 7,
        text: "Three days ago, I ______ (break) my glasses.",
        answers: ["broke"],
        explanation: {
            correct:
                `"Ago" → Past Simple. Break → broke.`,
            wrong:
                `"breaked" non esiste.`,
        },
    },
    {
        id: 8,
        text: "At 8 p.m. yesterday, they ______ (eat) dinner.",
        answers: ["were eating"],
        explanation: {
            correct:
                `Ora precisa + azione in corso → Past Continuous.`,
            wrong:
                `Serve were + -ing.`,
        },
    },
    {
        id: 9,
        text: "My brother ______ (often / be) late.",
        answers: ["is often"],
        explanation: {
            correct:
                `Con ‘be’ → avverbio dopo il verbo: is often.`,
            wrong:
                `Non: often is.`,
        },
    },
    {
        id: 10,
        text: "Look! The plane ______ (land).",
        answers: ["is landing"],
        explanation: {
            correct:
                `"Look!" → Present Continuous.`,
            wrong:
                `Serve is + -ing.`,
        },
    },
];

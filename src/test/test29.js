// TEST 29

// Present Continuous, Past Simple, Adverbs of frequency,
// Past Continuous, Be going to, Prepositions of place


export const MULTIPLE_CHOICE = [
    {
        id: 1,
        text: "Last night, we ____ the kitchen before going to bed.",
        options: ["clean", "cleaned", "are cleaning"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Last night" → Past Simple (verbo regolare: cleaned).`,
            wrongByIndex: {
                0: `"clean" è presente.`,
                2: `"are cleaning" è Present Continuous, non un fatto concluso.`,
            },
        },
    },
    {
        id: 2,
        text: "The book is ____ the table, next to the lamp.",
        options: ["in", "on", "under"],
        correctIndex: 1,
        explanation: {
            correct:
                `Oggetti appoggiati su una superficie → on the table.`,
            wrongByIndex: {
                0: `"in" = dentro.`,
                2: `"under" = sotto.`,
            },
        },
    },
    {
        id: 3,
        text: "Look at the traffic — we ____ arrive late.",
        options: ["will", "are going to", "arrived"],
        correctIndex: 1,
        explanation: {
            correct:
                `Previsione basata su prove visibili → be going to.`,
            wrongByIndex: {
                0: `"will" suona come decisione improvvisa.`,
                2: `"arrived" è passato.`,
            },
        },
    },
    {
        id: 4,
        text: "Right now, the children ____ quietly in class.",
        options: ["sit", "are sitting", "sat"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Right now" → Present Continuous: are sitting.`,
            wrongByIndex: {
                0: `"sit" è presente semplice (abitudine).`,
                2: `"sat" è passato.`,
            },
        },
    },
    {
        id: 5,
        text: "While I ____ for the bus, it started to rain.",
        options: ["waited", "was waiting", "wait"],
        correctIndex: 1,
        explanation: {
            correct:
                `Azione in corso nel passato + evento → Past Continuous.`,
            wrongByIndex: {
                0: `"waited" non mostra che l’azione era in corso.`,
                2: `"wait" è presente.`,
            },
        },
    },
    {
        id: 6,
        text: "She ____ drinks coffee in the evening.",
        options: ["never", "always", "often"],
        correctIndex: 0,
        explanation: {
            correct:
                `"Never" è coerente con l’idea che evita la caffeina di sera.`,
            wrongByIndex: {
                1: `"always" contraddice il contesto implicito.`,
                2: `"often" non rende l’idea di divieto totale.`,
            },
        },
    },
    {
        id: 7,
        text: "At 8 p.m., we ____ dinner when you called.",
        options: ["prepared", "were preparing", "prepare"],
        correctIndex: 1,
        explanation: {
            correct:
                `Ora precisa + azione in corso → Past Continuous.`,
            wrongByIndex: {
                0: `"prepared" non rende l’idea di ‘in corso’.`,
                2: `"prepare" è presente.`,
            },
        },
    },
    {
        id: 8,
        text: "The poster is ____ the wall above your desk.",
        options: ["in", "on", "between"],
        correctIndex: 1,
        explanation: {
            correct:
                `Oggetti attaccati a una superficie → on the wall.`,
            wrongByIndex: {
                0: `"in" = dentro.`,
                2: `"between" richiede due riferimenti.`,
            },
        },
    },
    {
        id: 9,
        text: "Two hours ago, I ____ my homework.",
        options: ["finish", "finished", "am finishing"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Two hours ago" → Past Simple (finished).`,
            wrongByIndex: {
                0: `"finish" è presente.`,
                2: `"am finishing" è azione in corso.`,
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
        text: "Right now, they ______ (paint) the classroom.",
        answers: ["are painting"],
        explanation: {
            correct:
                `"Right now" → Present Continuous: are painting.`,
            wrong:
                `Serve are + -ing.`,
        },
    },
    {
        id: 2,
        text: "Last week, we ______ (watch) a funny video.",
        answers: ["watched"],
        explanation: {
            correct:
                `"Last week" → Past Simple (watched).`,
            wrong:
                `"watch" non va con un tempo passato definito.`,
        },
    },
    {
        id: 3,
        text: "He ______ (often / visit) his grandparents.",
        answers: ["often visits"],
        explanation: {
            correct:
                `Abitudine + 3ª persona → visits.`,
            wrong:
                `Con ‘he’ serve -s.`,
        },
    },
    {
        id: 4,
        text: "While she ______ (walk), her phone rang.",
        answers: ["was walking"],
        explanation: {
            correct:
                `Azione in corso + evento → Past Continuous.`,
            wrong:
                `"While" richiede Past Continuous.`,
        },
    },
    {
        id: 5,
        text: "We ______ (start) the project tomorrow — everything is ready.",
        answers: ["are going to start"],
        explanation: {
            correct:
                `Piano già deciso → be going to.`,
            wrong:
                `Serve are going to + verbo.`,
        },
    },
    {
        id: 6,
        text: "The cat is sleeping ______ the chair.",
        answers: ["under"],
        explanation: {
            correct:
                `"Under" = sotto la sedia.`,
            wrong:
                `"On" o "in" non descrivono la posizione corretta.`,
        },
    },
    {
        id: 7,
        text: "Three days ago, I ______ (invite) my cousin.",
        answers: ["invited"],
        explanation: {
            correct:
                `"Ago" → Past Simple (invited).`,
            wrong:
                `"invite" è presente.`,
        },
    },
    {
        id: 8,
        text: "At 9 p.m. yesterday, they ______ (dance).",
        answers: ["were dancing"],
        explanation: {
            correct:
                `Ora precisa + azione in corso → Past Continuous.`,
            wrong:
                `Serve were + -ing.`,
        },
    },
    {
        id: 9,
        text: "My sister ______ (usually / study) in the evening.",
        answers: ["usually studies"],
        explanation: {
            correct:
                `Abitudine + 3ª persona → studies.`,
            wrong:
                `Con ‘she’ serve -s.`,
        },
    },
    {
        id: 10,
        text: "Look! The dog ______ (run) toward the park.",
        answers: ["is running"],
        explanation: {
            correct:
                `"Look!" → Present Continuous.`,
            wrong:
                `Serve is + -ing.`,
        },
    },
];

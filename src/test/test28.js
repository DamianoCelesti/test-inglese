// TEST 28

// Present Continuous, Past Simple, Adverbs of frequency,
// Past Continuous, Be going to, Prepositions of place


export const MULTIPLE_CHOICE = [
    {
        id: 1,
        text: "Right now, the teacher ____ on the board.",
        options: ["writes", "is writing", "wrote"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Right now" → azione in corso → Present Continuous: is writing.`,
            wrongByIndex: {
                0: `"writes" descrive un’abitudine, non ciò che sta accadendo adesso.`,
                2: `"wrote" è Past Simple, ma qui l’azione è presente.`,
            },
        },
    },
    {
        id: 2,
        text: "The lamp is ____ the table, next to the sofa.",
        options: ["in", "on", "between"],
        correctIndex: 1,
        explanation: {
            correct: `"On" si usa per oggetti appoggiati su una superficie.`,
            wrongByIndex: {
                0: `"in" significa dentro.`,
                2: `"between" richiede due riferimenti.`,
            },
        },
    },
    {
        id: 3,
        text: "Look at the time — we ____ miss the bus!",
        options: ["will", "are going to", "missed"],
        correctIndex: 1,
        explanation: {
            correct:
                `Previsione basata su prove (siamo in ritardo) → be going to.`,
            wrongByIndex: {
                0: `"will" suona come decisione improvvisa.`,
                2: `"missed" è passato.`,
            },
        },
    },
    {
        id: 4,
        text: "Yesterday, I ____ my room before going out.",
        options: ["clean", "cleaned", "am cleaning"],
        correctIndex: 1,
        explanation: {
            correct: `"Yesterday" → Past Simple (verbo regolare: cleaned).`,
            wrongByIndex: {
                0: `"clean" è presente.`,
                2: `"am cleaning" è Present Continuous.`,
            },
        },
    },
    {
        id: 5,
        text: "While she ____ to music, her phone rang.",
        options: ["listened", "was listening", "listens"],
        correctIndex: 1,
        explanation: {
            correct:
                `Azione in corso nel passato + evento → Past Continuous: was listening.`,
            wrongByIndex: {
                0: `"listened" non mostra che l’azione era in corso.`,
                2: `"listens" è presente.`,
            },
        },
    },
    {
        id: 6,
        text: "He ____ checks his email in the morning.",
        options: ["never", "always", "sometimes"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Always" è coerente con un’abitudine mattutina regolare.`,
            wrongByIndex: {
                0: `"never" contraddice il contesto.`,
                2: `"sometimes" è troppo debole rispetto all’idea di routine.`,
            },
        },
    },
    {
        id: 7,
        text: "At 7 p.m., we ____ dinner when you arrived.",
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
        text: "The posters are ____ the wall in your bedroom.",
        options: ["in", "on", "under"],
        correctIndex: 1,
        explanation: {
            correct:
                `Oggetti attaccati a una superficie → on the wall.`,
            wrongByIndex: {
                0: `"in" = dentro.`,
                2: `"under" = sotto.`,
            },
        },
    },
    {
        id: 9,
        text: "Two hours ago, we ____ the homework.",
        options: ["finish", "finished", "are finishing"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Two hours ago" → Past Simple (finished).`,
            wrongByIndex: {
                0: `"finish" è presente.`,
                2: `"are finishing" è azione in corso.`,
            },
        },
    },
    {
        id: 10,
        text: "Listen! Someone ____ at the window.",
        options: ["taps", "is tapping", "tapped"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Listen!" → Present Continuous: is tapping.`,
            wrongByIndex: {
                0: `"taps" suona abituale.`,
                2: `"tapped" è passato.`,
            },
        },
    },
];

export const GAP_FILL = [
    {
        id: 1,
        text: "Right now, they ______ (study) for the exam.",
        answers: ["are studying"],
        explanation: {
            correct:
                `"Right now" → Present Continuous: are studying.`,
            wrong:
                `Serve are + -ing.`,
        },
    },
    {
        id: 2,
        text: "Last week, we ______ (visit) our grandparents.",
        answers: ["visited"],
        explanation: {
            correct:
                `"Last week" → Past Simple (verbo regolare: visited).`,
            wrong:
                `"visit" non va con un tempo passato definito.`,
        },
    },
    {
        id: 3,
        text: "She ______ (often / work) late.",
        answers: ["often works"],
        explanation: {
            correct:
                `Abitudine + 3ª persona → works.`,
            wrong:
                `Con ‘she’ serve -s.`,
        },
    },
    {
        id: 4,
        text: "While I ______ (wait), the bus finally arrived.",
        answers: ["was waiting"],
        explanation: {
            correct:
                `Azione in corso + evento → Past Continuous.`,
            wrong:
                `"While" richiede Past Continuous.`,
        },
    },
    {
        id: 5,
        text: "We ______ (travel) tomorrow — everything is booked.",
        answers: ["are going to travel"],
        explanation: {
            correct:
                `Piano già deciso → be going to.`,
            wrong:
                `Serve are going to + verbo.`,
        },
    },
    {
        id: 6,
        text: "The backpack is ______ the chair.",
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
        text: "Three days ago, I ______ (invite) my friends.",
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
        text: "My brother ______ (usually / play) football.",
        answers: ["usually plays"],
        explanation: {
            correct:
                `Abitudine + 3ª persona → plays.`,
            wrong:
                `Con ‘he’ serve -s.`,
        },
    },
    {
        id: 10,
        text: "Look! The children ______ (run) toward the park.",
        answers: ["are running"],
        explanation: {
            correct:
                `"Look!" → Present Continuous.`,
            wrong:
                `Serve are + -ing.`,
        },
    },
];

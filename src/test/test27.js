// TEST 27

// Present Continuous, Past Simple, Adverbs of frequency,
// Past Continuous, Be going to, Prepositions of place
// + mix di verbi irregolari e regolari

export const MULTIPLE_CHOICE = [
    {
        id: 1,
        text: "Last weekend, we ____ a fantastic movie at the cinema.",
        options: ["see", "saw", "are seeing"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Last weekend" → Past Simple. Verbo irregolare: see → saw.`,
            wrongByIndex: {
                0: `"see" è presente, non va con un tempo passato definito.`,
                2: `"are seeing" è Present Continuous, non un fatto concluso.`,
            },
        },
    },
    {
        id: 2,
        text: "The backpack is ____ the chair, not on the floor.",
        options: ["under", "behind", "in"],
        correctIndex: 0,
        explanation: {
            correct:
                `"Under" = sotto la sedia, coerente con il contesto.`,
            wrongByIndex: {
                1: `"behind" = dietro, non sotto.`,
                2: `"in" = dentro, impossibile con una sedia.`,
            },
        },
    },
    {
        id: 3,
        text: "Look at the smoke — the pan ____ burn!",
        options: ["will", "is going to", "burns"],
        correctIndex: 1,
        explanation: {
            correct:
                `C’è una prova visibile (smoke) → previsione con be going to.`,
            wrongByIndex: {
                0: `"will" suona come decisione improvvisa, non basata su prove.`,
                2: `"burns" è Present Simple (abituale), non adatto qui.`,
            },
        },
    },
    {
        id: 4,
        text: "Right now, the children ____ in the garden.",
        options: ["play", "are playing", "played"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Right now" → Present Continuous: are playing.`,
            wrongByIndex: {
                0: `"play" descrive un’abitudine, non ciò che sta succedendo ora.`,
                2: `"played" è Past Simple.`,
            },
        },
    },
    {
        id: 5,
        text: "While I ____ home, it started to rain.",
        options: ["walked", "was walking", "walk"],
        correctIndex: 1,
        explanation: {
            correct:
                `Azione in corso nel passato + evento → Past Continuous: was walking.`,
            wrongByIndex: {
                0: `"walked" non mostra che l’azione era in corso.`,
                2: `"walk" è presente, incoerente con il contesto passato.`,
            },
        },
    },
    {
        id: 6,
        text: "She ____ forgets her umbrella — that’s why she gets wet.",
        options: ["never", "often", "always"],
        correctIndex: 2,
        explanation: {
            correct:
                `"Always" è coerente con il fatto che si bagna spesso.`,
            wrongByIndex: {
                0: `"never" contraddice il contesto.`,
                1: `"often" è possibile ma meno forte di ‘always’.`,
            },
        },
    },
    {
        id: 7,
        text: "At 9 p.m., they ____ TV when the lights went out.",
        options: ["watched", "were watching", "watch"],
        correctIndex: 1,
        explanation: {
            correct:
                `Ora precisa + azione in corso → Past Continuous.`,
            wrongByIndex: {
                0: `"watched" non rende l’idea di ‘in corso’.`,
                2: `"watch" è presente.`,
            },
        },
    },
    {
        id: 8,
        text: "The clock is ____ the wall, above the door.",
        options: ["in", "on", "between"],
        correctIndex: 1,
        explanation: {
            correct:
                `Oggetti appesi a una superficie → on the wall.`,
            wrongByIndex: {
                0: `"in" = dentro, non possibile con un muro.`,
                2: `"between" richiede due riferimenti.`,
            },
        },
    },
    {
        id: 9,
        text: "Ten minutes ago, I ____ a text to my friend.",
        options: ["send", "sent", "am sending"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Ten minutes ago" → Past Simple. Send → sent (irregolare).`,
            wrongByIndex: {
                0: `"send" è presente.`,
                2: `"am sending" è azione in corso, non conclusa.`,
            },
        },
    },
    {
        id: 10,
        text: "Listen! Someone ____ on the window.",
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
        text: "Right now, I ______ (not / work).",
        answers: ["am not working", "I'm not working"],
        explanation: {
            correct:
                `"Right now" → Present Continuous negativo.`,
            wrong:
                `Serve: am not + -ing.`,
        },
    },
    {
        id: 2,
        text: "Last year, we ______ (visit) London.",
        answers: ["visited"],
        explanation: {
            correct:
                `"Last year" → Past Simple (verbo regolare: visited).`,
            wrong:
                `"visit" al presente non va con un tempo passato definito.`,
        },
    },
    {
        id: 3,
        text: "He ______ (usually / wake up) at 7 a.m.",
        answers: ["usually wakes up"],
        explanation: {
            correct:
                `Abitudine + 3ª persona singolare → wakes up.`,
            wrong:
                `Con ‘he’ serve -s.`,
        },
    },
    {
        id: 4,
        text: "While she ______ (read), the phone rang.",
        answers: ["was reading"],
        explanation: {
            correct:
                `Azione in corso + evento → Past Continuous.`,
            wrong:
                `"While" richiede Past Continuous per l’azione lunga.`,
        },
    },
    {
        id: 5,
        text: "They ______ (travel) next month — tickets are booked.",
        answers: ["are going to travel"],
        explanation: {
            correct:
                `Piano già deciso → be going to.`,
            wrong:
                `Serve: are going to + verbo.`,
        },
    },
    {
        id: 6,
        text: "The shoes are ______ the bed.",
        answers: ["under"],
        explanation: {
            correct:
                `"Under" = sotto il letto.`,
            wrong:
                `"On" o "in" non descrivono la posizione corretta.`,
        },
    },
    {
        id: 7,
        text: "Two days ago, I ______ (lose) my keys.",
        answers: ["lost"],
        explanation: {
            correct:
                `"Ago" → Past Simple. Lose → lost (irregolare).`,
            wrong:
                `"losed" non esiste.`,
        },
    },
    {
        id: 8,
        text: "At 8 p.m. yesterday, they ______ (cook) dinner.",
        answers: ["were cooking"],
        explanation: {
            correct:
                `Ora precisa + azione in corso → Past Continuous.`,
            wrong:
                `Serve were + -ing.`,
        },
    },
    {
        id: 9,
        text: "My sister ______ (rarely / be) late.",
        answers: ["is rarely"],
        explanation: {
            correct:
                `Con ‘be’ → avverbio dopo il verbo: is rarely.`,
            wrong:
                `Non: rarely is.`,
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

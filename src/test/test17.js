// src/test/test17.js
// Argomenti: Present Continuous, Past Simple, Adverbs of frequency,
// Past Continuous, Be going to, Prepositions of place

export const MULTIPLE_CHOICE = [
    {
        id: 1,
        text: "Look at those dark clouds — it ____ rain in a few minutes.",
        options: ["rains", "is going to", "rained"],
        correctIndex: 1,
        explanation: {
            correct:
                `Quando vedi prove nel presente che anticipano un evento futuro,
si usa "be going to". Le nuvole sono l’evidenza → "is going to rain".`,
            wrongByIndex: {
                0: `"rains" è Present Simple (abitudine), non una previsione basata su prove.`,
                2: `"rained" è Past Simple e non può riferirsi al futuro.`,
            },
        },
    },
    {
        id: 2,
        text: "While the technician ____ the computer, the system suddenly crashed.",
        options: ["repaired", "was repairing", "is repairing"],
        correctIndex: 1,
        explanation: {
            correct:
                `Azione in corso nel passato + evento improvviso → Past Continuous: was repairing.`,
            wrongByIndex: {
                0: `"repaired" (Past Simple) fa sembrare l’azione già conclusa, non in corso.`,
                2: `"is repairing" è presente e non è coerente con "crashed".`,
            },
        },
    },
    {
        id: 3,
        text: "She ____ checks her calendar before scheduling meetings.",
        options: ["rarely", "usually", "never"],
        correctIndex: 1,
        explanation: {
            correct:
                `È una buona pratica professionale → "usually" è la frequenza più realistica.`,
            wrongByIndex: {
                0: `"rarely" contraddice l’idea di organizzazione.`,
                2: `"never" è troppo assoluto e irrealistico.`,
            },
        },
    },
    {
        id: 4,
        text: "Listen — someone ____ at the door right now.",
        options: ["knocks", "is knocking", "knocked"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Listen!" indica azione in corso adesso → Present Continuous: is knocking.`,
            wrongByIndex: {
                0: `"knocks" è Present Simple (abitudine).`,
                2: `"knocked" è passato e non combacia con "right now".`,
            },
        },
    },
    {
        id: 5,
        text: "We ____ start a new project next week; the client has already approved it.",
        options: ["start", "are going to", "started"],
        correctIndex: 1,
        explanation: {
            correct:
                `Decisione già presa e confermata → be going to.`,
            wrongByIndex: {
                0: `"start" (Present Simple) è troppo neutro e non mostra che sia già deciso.`,
                2: `"started" è passato e non va con "next week".`,
            },
        },
    },
    {
        id: 6,
        text: "Your glasses are ____ the book on the table.",
        options: ["on", "under", "between"],
        correctIndex: 1,
        explanation: {
            correct:
                `Se sono “sotto il libro”, la preposizione corretta è "under".`,
            wrongByIndex: {
                0: `"on" significherebbe sopra il libro.`,
                2: `"between" richiede due oggetti, non uno solo.`,
            },
        },
    },
    {
        id: 7,
        text: "Yesterday, I ____ an important email and had to send it again.",
        options: ["miss", "missed", "am missing"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Yesterday" → Past Simple: missed.`,
            wrongByIndex: {
                0: `"miss" è presente e non va con "yesterday".`,
                2: `"am missing" è Present Continuous e non descrive un fatto concluso.`,
            },
        },
    },
    {
        id: 8,
        text: "At the moment, the chef ____ a special dish for tonight.",
        options: ["prepares", "is preparing", "prepared"],
        correctIndex: 1,
        explanation: {
            correct:
                `"At the moment" → Present Continuous: is preparing.`,
            wrongByIndex: {
                0: `"prepares" è Present Simple (abitudine).`,
                2: `"prepared" è passato e non va con "at the moment".`,
            },
        },
    },
    {
        id: 9,
        text: "Good drivers ____ check their mirrors before changing lanes.",
        options: ["sometimes", "usually", "rarely"],
        correctIndex: 1,
        explanation: {
            correct:
                `È un comportamento tipico e responsabile → usually.`,
            wrongByIndex: {
                0: `"sometimes" è troppo debole.`,
                2: `"rarely" è pericoloso e poco realistico.`,
            },
        },
    },
    {
        id: 10,
        text: "The museum is ____ the library and the train station.",
        options: ["between", "on", "under"],
        correctIndex: 0,
        explanation: {
            correct:
                `Due riferimenti → between A and B.`,
            wrongByIndex: {
                1: `"on" indica superficie/piano, non posizione tra due luoghi.`,
                2: `"under" non ha senso tra edifici.`,
            },
        },
    },
];

export const GAP_FILL = [
    {
        id: 1,
        text: "Right now, the children ______ (play) in the garden.",
        answers: ["are playing"],
        explanation: {
            correct:
                `"Right now" → Present Continuous: are playing.`,
            wrong:
                `Serve "are + -ing", non Present Simple.`,
        },
    },
    {
        id: 2,
        text: "Last year, the company ______ (open) a new office in Milan.",
        answers: ["opened"],
        explanation: {
            correct:
                `"Last year" → Past Simple: opened.`,
            wrong:
                `Con "last year" serve Past Simple.`,
        },
    },
    {
        id: 3,
        text: "My colleague ______ (often / stay) late at work.",
        answers: ["often stays"],
        explanation: {
            correct:
                `3ª persona singolare → stays; avverbio prima del verbo.`,
            wrong:
                `Con "my colleague" serve -s: stays.`,
        },
    },
    {
        id: 4,
        text: "While I ______ (read), the phone rang.",
        answers: ["was reading"],
        explanation: {
            correct:
                `While + azione in corso nel passato → was reading.`,
            wrong:
                `Serve Past Continuous con un evento improvviso.`,
        },
    },
    {
        id: 5,
        text: "They ______ (move) to a bigger house next summer.",
        answers: ["are going to move", "are going to"],
        explanation: {
            correct:
                `Piano già deciso → be going to.`,
            wrong:
                `Qui serve "are going to".`,
        },
    },
    {
        id: 6,
        text: "The cat is sleeping ______ the table.",
        answers: ["under"],
        explanation: {
            correct:
                `Se non è sopra e non è dentro → under.`,
            wrong:
                `"On" o "in" cambierebbero il significato.`,
        },
    },
    {
        id: 7,
        text: "At the moment, I ______ (not / listen) because I’m thinking.",
        answers: ["am not listening"],
        explanation: {
            correct:
                `Present Continuous negativo: am not listening.`,
            wrong:
                `Serve "am not + -ing", non Present Simple.`,
        },
    },
    {
        id: 8,
        text: "Yesterday evening, she ______ (drive) when it started raining.",
        answers: ["was driving"],
        explanation: {
            correct:
                `Azione in corso nel passato → was driving.`,
            wrong:
                `Past Simple cambierebbe il significato.`,
        },
    },
    {
        id: 9,
        text: "My parents ______ (rarely / eat) fast food.",
        answers: ["rarely eat"],
        explanation: {
            correct:
                `Soggetto plurale → eat (senza -s).`,
            wrong:
                `"eats" sarebbe 3ª persona singolare.`,
        },
    },
    {
        id: 10,
        text: "The bank is ______ the post office and the supermarket.",
        answers: ["between"],
        explanation: {
            correct:
                `Due riferimenti → between A and B.`,
            wrong:
                `"In/on/under" cambiano completamente la posizione.`,
        },
    },
];

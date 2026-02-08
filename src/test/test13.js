// src/test/test13.js
// Argomenti: Present Continuous, Past Simple, Adverbs of frequency,
// Past Continuous, Be going to, Prepositions of place

export const MULTIPLE_CHOICE = [
    {
        id: 1,
        text: "Don’t call him now — he ____ a presentation.",
        options: ["gives", "is giving", "gave"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Don’t call him now" implica che l’azione sta avvenendo in questo momento → Present Continuous: is giving.`,
            wrongByIndex: {
                0: `"gives" è Present Simple (abitudine/fatto generale), non un’azione in corso adesso.`,
                2: `"gave" è Past Simple e non combacia con “now”.`,
            },
        },
    },
    {
        id: 2,
        text: "Last year she ____ in Berlin, but now she lives in Rome.",
        options: ["works", "worked", "is working"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Last year" indica un periodo concluso → Past Simple: worked.`,
            wrongByIndex: {
                0: `"works" è presente e contraddice “last year”.`,
                2: `"is working" è Present Continuous e non descrive un periodo finito nel passato.`,
            },
        },
    },
    {
        id: 3,
        text: "He ____ misses important emails, which is why he checks his inbox constantly.",
        options: ["never", "sometimes", "rarely"],
        correctIndex: 2,
        explanation: {
            correct:
                `Se controlla l’email di continuo, è probabile che sbagli molto di rado → rarely.`,
            wrongByIndex: {
                0: `"never" è troppo assoluto per essere realistico.`,
                1: `"sometimes" (a volte) non giustifica il controllo continuo dell’inbox.`,
            },
        },
    },
    {
        id: 4,
        text: "While I ____ the report, my computer suddenly crashed.",
        options: ["wrote", "was writing", "am writing"],
        correctIndex: 1,
        explanation: {
            correct:
                `Azione in corso nel passato + evento improvviso → Past Continuous: was writing.`,
            wrongByIndex: {
                0: `"wrote" (Past Simple) fa sembrare l’azione completata, non interrotta.`,
                2: `"am writing" è presente e non è coerente con “crashed”.`,
            },
        },
    },
    {
        id: 5,
        text: "We ____ launch the new website next month — everything is already ready.",
        options: ["will", "are going to", "launch"],
        correctIndex: 1,
        explanation: {
            correct:
                `Piano già preparato (tutto pronto) → be going to.`,
            wrongByIndex: {
                0: `"will" suona più come decisione spontanea o previsione, non piano già organizzato.`,
                2: `"launch" (Present Simple) è troppo neutro e non rende l’idea di progetto già deciso.`,
            },
        },
    },
    {
        id: 6,
        text: "The documents are ____ the top shelf, not in the drawer.",
        options: ["on", "in", "under"],
        correctIndex: 0,
        explanation: {
            correct:
                `"On the shelf" = sopra una superficie orizzontale → on.`,
            wrongByIndex: {
                1: `"in" significherebbe dentro, ma qui si parla di ripiano.`,
                2: `"under" significa sotto, che contraddice “top shelf”.`,
            },
        },
    },
    {
        id: 7,
        text: "At the moment, the manager ____ with a difficult client.",
        options: ["deals", "is dealing", "dealt"],
        correctIndex: 1,
        explanation: {
            correct:
                `"At the moment" → Present Continuous: is dealing.`,
            wrongByIndex: {
                0: `"deals" è Present Simple (abitudine), non azione in corso.`,
                2: `"dealt" è Past Simple e non va con “at the moment”.`,
            },
        },
    },
    {
        id: 8,
        text: "Yesterday at 9 p.m., I ____ when the power went out.",
        options: ["studied", "was studying", "study"],
        correctIndex: 1,
        explanation: {
            correct:
                `Ora precisa nel passato + azione in corso → Past Continuous: was studying.`,
            wrongByIndex: {
                0: `"studied" (Past Simple) non mostra che l’azione era in corso.`,
                2: `"study" è presente e non è coerente con “yesterday”.`,
            },
        },
    },
    {
        id: 9,
        text: "Good drivers ____ check their mirrors before changing lanes.",
        options: ["always", "rarely", "sometimes"],
        correctIndex: 0,
        explanation: {
            correct:
                `È una regola di sicurezza → always.`,
            wrongByIndex: {
                1: `"rarely" è pericoloso e illogico in questo contesto.`,
                2: `"sometimes" non è abbastanza forte per “good drivers”.`,
            },
        },
    },
    {
        id: 10,
        text: "The museum is ____ the park and the river.",
        options: ["between", "under", "on"],
        correctIndex: 0,
        explanation: {
            correct:
                `Due riferimenti → between A and B.`,
            wrongByIndex: {
                1: `"under" non ha senso tra luoghi pubblici.`,
                2: `"on" indica superficie, non posizione “in mezzo”.`,
            },
        },
    },
];

export const GAP_FILL = [
    {
        id: 1,
        text: "Right now, the engineer ______ (fix) the problem.",
        answers: ["is fixing"],
        explanation: {
            correct: `"Right now" → Present Continuous: is fixing.`,
            wrong: `Serve “is + -ing”, non Present Simple.`,
        },
    },
    {
        id: 2,
        text: "Three years ago, they ______ (build) a new bridge.",
        answers: ["built"],
        explanation: {
            correct: `"Three years ago" → Past Simple. build → built (irregolare).`,
            wrong: `Con “ago” serve Past Simple, non presente.`,
        },
    },
    {
        id: 3,
        text: "My boss ______ (often / arrive) before everyone else.",
        answers: ["often arrives"],
        explanation: {
            correct: `3ª persona singolare → arrives; avverbio prima del verbo.`,
            wrong: `Non “arrive”: con “my boss” serve -s.`,
        },
    },
    {
        id: 4,
        text: "While we ______ (drive), the temperature suddenly dropped.",
        answers: ["were driving"],
        explanation: {
            correct: `Azione in corso nel passato → Past Continuous.`,
            wrong: `Serve Past Continuous con “while”.`,
        },
    },
    {
        id: 5,
        text: "I ______ (go) to start a course next week — I already enrolled.",
        answers: ["am going to go", "am going to"],
        explanation: {
            correct: `Piano deciso → be going to.`,
            wrong: `Qui il Present Simple non è adeguato.`,
        },
    },
    {
        id: 6,
        text: "The phone is ______ the bag, not on the table.",
        answers: ["in"],
        explanation: {
            correct: `Dentro un contenitore → in the bag.`,
            wrong: `"On" sarebbe sopra, non dentro.`,
        },
    },
    {
        id: 7,
        text: "At the moment, they ______ (not / work) because of a power cut.",
        answers: ["are not working", "aren't working"],
        explanation: {
            correct: `Present Continuous negativo.`,
            wrong: `Serve “are + not + -ing”.`,
        },
    },
    {
        id: 8,
        text: "Yesterday evening, she ______ (prepare) dinner when the fire alarm rang.",
        answers: ["was preparing"],
        explanation: {
            correct: `Azione in corso nel passato → Past Continuous.`,
            wrong: `Past Simple non rende l’idea di interruzione.`,
        },
    },
    {
        id: 9,
        text: "My colleagues ______ (usually / stay) late on Fridays.",
        answers: ["usually stay"],
        explanation: {
            correct: `Soggetto plurale → stay (senza -s).`,
            wrong: `“stays” sarebbe 3ª singolare.`,
        },
    },
    {
        id: 10,
        text: "The restaurant is ______ the cinema and the hotel.",
        answers: ["between"],
        explanation: {
            correct: `Due riferimenti → between A and B.`,
            wrong: `"In/on/under" cambiano completamente la posizione.`,
        },
    },
];

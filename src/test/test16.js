// src/test/test16.js
// Argomenti: Present Continuous, Past Simple, Adverbs of frequency,
// Past Continuous, Be going to, Prepositions of place

export const MULTIPLE_CHOICE = [
    {
        id: 1,
        text: "Look at the traffic — we ____ late if we don’t leave now.",
        options: ["arrive", "are going to arrive", "arrived"],
        correctIndex: 1,
        explanation: {
            correct:
                `Quando vedi un’evidenza chiara nel presente che porta a un risultato futuro,
si usa "be going to". Qui il traffico indica che arriveremo tardi → are going to arrive.`,
            wrongByIndex: {
                0: `"arrive" (Present Simple) è troppo neutro e non esprime previsione basata su prove.`,
                2: `"arrived" è passato e non può riferirsi a ciò che sta per succedere.`,
            },
        },
    },
    {
        id: 2,
        text: "While I ____ for the train, my phone suddenly died.",
        options: ["waited", "was waiting", "am waiting"],
        correctIndex: 1,
        explanation: {
            correct:
                `Azione in corso nel passato + evento improvviso → Past Continuous: was waiting.`,
            wrongByIndex: {
                0: `"waited" (Past Simple) non mostra che l’azione era in corso nel momento del problema.`,
                2: `"am waiting" è presente e non è coerente con "suddenly died".`,
            },
        },
    },
    {
        id: 3,
        text: "She ____ answers her emails immediately, even on weekends.",
        options: ["rarely", "usually", "never"],
        correctIndex: 1,
        explanation: {
            correct:
                `Se risponde “anche nel weekend”, la frequenza è alta → usually.`,
            wrongByIndex: {
                0: `"rarely" contraddice l’idea che risponda subito.`,
                2: `"never" è troppo assoluto e incoerente con la frase.`,
            },
        },
    },
    {
        id: 4,
        text: "Listen! The baby ____ in the next room.",
        options: ["cries", "is crying", "cried"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Listen!" indica qualcosa che sta accadendo adesso → Present Continuous: is crying.`,
            wrongByIndex: {
                0: `"cries" descrive un’abitudine, non ciò che succede ora.`,
                2: `"cried" è passato e non va con "Listen!".`,
            },
        },
    },
    {
        id: 5,
        text: "We ____ move house next summer — the contract is already signed.",
        options: ["move", "are going to", "moved"],
        correctIndex: 1,
        explanation: {
            correct:
                `Piano futuro già deciso e confermato → be going to.`,
            wrongByIndex: {
                0: `"move" (Present Simple) non evidenzia che sia già stato deciso.`,
                2: `"moved" è passato e non va con "next summer".`,
            },
        },
    },
    {
        id: 6,
        text: "The documents are ____ the folder, not on your desk.",
        options: ["in", "on", "between"],
        correctIndex: 0,
        explanation: {
            correct:
                `Dentro un contenitore chiuso si usa "in": in the folder.`,
            wrongByIndex: {
                1: `"on" significherebbe sopra, non dentro.`,
                2: `"between" richiede due riferimenti (A and B).`,
            },
        },
    },
    {
        id: 7,
        text: "Yesterday, I ____ my wallet at home and had to borrow money.",
        options: ["forget", "forgot", "am forgetting"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Yesterday" → Past Simple: forgot.`,
            wrongByIndex: {
                0: `"forget" è presente e non va con "yesterday".`,
                2: `"am forgetting" è Present Continuous e non descrive un fatto concluso nel passato.`,
            },
        },
    },
    {
        id: 8,
        text: "At the moment, the team ____ the final report.",
        options: ["finishes", "is finishing", "finished"],
        correctIndex: 1,
        explanation: {
            correct:
                `"At the moment" → Present Continuous: is finishing.`,
            wrongByIndex: {
                0: `"finishes" è Present Simple (abitudine).`,
                2: `"finished" è passato e non va con "at the moment".`,
            },
        },
    },
    {
        id: 9,
        text: "Good students ____ review their notes before exams.",
        options: ["sometimes", "usually", "never"],
        correctIndex: 1,
        explanation: {
            correct:
                `È una caratteristica tipica → usually è la scelta più realistica.`,
            wrongByIndex: {
                0: `"sometimes" è troppo debole.`,
                2: `"never" contraddice l’idea di “good students”.`,
            },
        },
    },
    {
        id: 10,
        text: "The bank is ____ the post office and the supermarket.",
        options: ["between", "under", "on"],
        correctIndex: 0,
        explanation: {
            correct:
                `Con due riferimenti si usa "between A and B".`,
            wrongByIndex: {
                1: `"under" non ha senso tra edifici.`,
                2: `"on" indica superficie o giorno/piano, non posizione in mezzo.`,
            },
        },
    },
];

export const GAP_FILL = [
    {
        id: 1,
        text: "Right now, the manager ______ (interview) a new candidate.",
        answers: ["is interviewing"],
        explanation: {
            correct:
                `"Right now" → Present Continuous: is interviewing.`,
            wrong:
                `Serve "is + -ing", non Present Simple.`,
        },
    },
    {
        id: 2,
        text: "Last month, we ______ (launch) a new product.",
        answers: ["launched"],
        explanation: {
            correct:
                `"Last month" → Past Simple: launched.`,
            wrong:
                `Con "last month" serve Past Simple, non presente.`,
        },
    },
    {
        id: 3,
        text: "My boss ______ (always / check) the budget carefully.",
        answers: ["always checks"],
        explanation: {
            correct:
                `3ª persona singolare → checks; avverbio prima del verbo.`,
            wrong:
                `Con "my boss" serve -s: checks.`,
        },
    },
    {
        id: 4,
        text: "While they ______ (drive), the storm started.",
        answers: ["were driving"],
        explanation: {
            correct:
                `Azione in corso nel passato → Past Continuous: were driving.`,
            wrong:
                `Con "while" + evento serve Past Continuous.`,
        },
    },
    {
        id: 5,
        text: "We ______ (go) to renovate the kitchen next year.",
        answers: ["are going to go", "are going to"],
        explanation: {
            correct:
                `Piano deciso → be going to.`,
            wrong:
                `Qui serve "are going to".`,
        },
    },
    {
        id: 6,
        text: "The cat is sleeping ______ the sofa.",
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
        text: "At the moment, I ______ (not / work) because the computer crashed.",
        answers: ["am not working"],
        explanation: {
            correct:
                `Present Continuous negativo: am not working.`,
            wrong:
                `Serve "am not + -ing", non Present Simple.`,
        },
    },
    {
        id: 8,
        text: "Yesterday evening, he ______ (watch) a film when the lights went out.",
        answers: ["was watching"],
        explanation: {
            correct:
                `Azione in corso nel passato → Past Continuous: was watching.`,
            wrong:
                `Past Simple non mostra che l’azione era in corso.`,
        },
    },
    {
        id: 9,
        text: "My parents ______ (rarely / travel) by plane.",
        answers: ["rarely travel"],
        explanation: {
            correct:
                `Soggetto plurale → travel (senza -s).`,
            wrong:
                `"travels" sarebbe 3ª persona singolare.`,
        },
    },
    {
        id: 10,
        text: "The pharmacy is ______ the hospital and the park.",
        answers: ["between"],
        explanation: {
            correct:
                `Due riferimenti → between A and B.`,
            wrong:
                `"In/on/under" cambiano completamente la posizione.`,
        },
    },
];

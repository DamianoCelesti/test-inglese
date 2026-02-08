// src/test/test14.js
// Argomenti: Present Continuous, Past Simple, Adverbs of frequency,
// Past Continuous, Be going to, Prepositions of place


export const MULTIPLE_CHOICE = [
    {
        id: 1,
        text: "Look at the sky — the weather ____ very quickly.",
        options: ["changes", "is changing", "changed"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Look!" indica che stiamo osservando qualcosa che sta accadendo adesso → Present Continuous: is changing.`,
            wrongByIndex: {
                0: `"changes" è Present Simple: descrive abitudini o fatti generali, non ciò che vediamo in questo momento.`,
                2: `"changed" è Past Simple e non combacia con ciò che sta succedendo adesso.`,
            },
        },
    },
    {
        id: 2,
        text: "Last month our team ____ three important projects.",
        options: ["finished", "is finishing", "finishes"],
        correctIndex: 0,
        explanation: {
            correct:
                `"Last month" indica un periodo concluso → Past Simple: finished.`,
            wrongByIndex: {
                1: `"is finishing" è Present Continuous e non descrive un evento già concluso.`,
                2: `"finishes" è Present Simple (abituale), non coerente con 'last month'.`,
            },
        },
    },
    {
        id: 3,
        text: "She ____ forgets to charge her laptop, so it often turns off in class.",
        options: ["rarely", "often", "never"],
        correctIndex: 1,
        explanation: {
            correct:
                `Se il computer si spegne spesso, significa che dimentica di caricarlo con una certa frequenza → often.`,
            wrongByIndex: {
                0: `"rarely" contraddice il fatto che il laptop si spenga spesso.`,
                2: `"never" è troppo assoluto e non realista.`,
            },
        },
    },
    {
        id: 4,
        text: "While I ____ for the bus, it suddenly started raining.",
        options: ["waited", "was waiting", "am waiting"],
        correctIndex: 1,
        explanation: {
            correct:
                `Azione in corso nel passato + evento improvviso → Past Continuous: was waiting.`,
            wrongByIndex: {
                0: `"waited" (Past Simple) non mostra che l’azione era in corso quando è iniziata la pioggia.`,
                2: `"am waiting" è presente e non è coerente con 'started raining'.`,
            },
        },
    },
    {
        id: 5,
        text: "We ____ start a new English course next week — the teacher already confirmed.",
        options: ["are going to", "will", "start"],
        correctIndex: 0,
        explanation: {
            correct:
                `Piano già organizzato (insegnante confermato) → be going to.`,
            wrongByIndex: {
                1: `"will" suona più come decisione spontanea o previsione, non piano già definito.`,
                2: `"start" (Present Simple) è troppo neutro e non rende l’idea di intenzione già pianificata.`,
            },
        },
    },
    {
        id: 6,
        text: "The school is ____ the park and the library.",
        options: ["between", "under", "on"],
        correctIndex: 0,
        explanation: {
            correct:
                `Con due riferimenti si usa 'between A and B'.`,
            wrongByIndex: {
                1: `"under" non ha senso tra due edifici.`,
                2: `"on" indica superficie, non posizione 'in mezzo'.`,
            },
        },
    },
    {
        id: 7,
        text: "At the moment, the children ____ quietly in the classroom.",
        options: ["sit", "are sitting", "sat"],
        correctIndex: 1,
        explanation: {
            correct:
                `"At the moment" indica azione in corso → Present Continuous: are sitting.`,
            wrongByIndex: {
                0: `"sit" è Present Simple (abitudine), non azione in corso.`,
                2: `"sat" è Past Simple e non va con 'at the moment'.`,
            },
        },
    },
    {
        id: 8,
        text: "Yesterday at 8 p.m., I ____ my homework when my friend called.",
        options: ["did", "was doing", "do"],
        correctIndex: 1,
        explanation: {
            correct:
                `Ora precisa nel passato + azione in corso → Past Continuous: was doing.`,
            wrongByIndex: {
                0: `"did" (Past Simple) non mostra che l’azione era in corso al momento della chiamata.`,
                2: `"do" è presente e non è coerente con 'yesterday'.`,
            },
        },
    },
    {
        id: 9,
        text: "Good students ____ revise before exams.",
        options: ["always", "rarely", "sometimes"],
        correctIndex: 0,
        explanation: {
            correct:
                `È una caratteristica tipica dei buoni studenti → always.`,
            wrongByIndex: {
                1: `"rarely" è incoerente con 'good students'.`,
                2: `"sometimes" è troppo debole per descrivere una buona abitudine di studio.`,
            },
        },
    },
    {
        id: 10,
        text: "The café is ____ the bank, so it’s easy to find.",
        options: ["next to", "in", "under"],
        correctIndex: 0,
        explanation: {
            correct:
                `"Next to" significa 'accanto', il senso più naturale qui.`,
            wrongByIndex: {
                1: `"in" significherebbe 'dentro la banca', che cambia totalmente il significato.`,
                2: `"under" non ha senso tra edifici.`,
            },
        },
    },
];

export const GAP_FILL = [
    {
        id: 1,
        text: "Right now, the teacher ______ (explain) the new grammar rule.",
        answers: ["is explaining"],
        explanation: {
            correct: `"Right now" → Present Continuous: is explaining.`,
            wrong: `Serve 'is + -ing', non Present Simple.`,
        },
    },
    {
        id: 2,
        text: "Two weeks ago, we ______ (travel) to London.",
        answers: ["travelled", "traveled"],
        explanation: {
            correct:
                `"Two weeks ago" → Past Simple. Entrambe le grafie (UK/US) sono accettate.`,
            wrong: `Con 'ago' serve Past Simple, non presente.`,
        },
    },
    {
        id: 3,
        text: "My father ______ (usually / wake up) at six in the morning.",
        answers: ["usually wakes up"],
        explanation: {
            correct:
                `3ª persona singolare → wakes up; avverbio prima del verbo.`,
            wrong: `Con 'my father' serve -s: wakes up.`,
        },
    },
    {
        id: 4,
        text: "While we ______ (walk) home, it began to snow.",
        answers: ["were walking"],
        explanation: {
            correct:
                `Azione in corso nel passato → Past Continuous: were walking.`,
            wrong: `Con 'while' e un evento (began), serve Past Continuous.`,
        },
    },
    {
        id: 5,
        text: "They ______ (go) to buy a house next year — they already saved the money.",
        answers: ["are going to go", "are going to"],
        explanation: {
            correct:
                `Piano deciso e preparato → be going to.`,
            wrong: `Qui il Present Simple non è sufficiente per esprimere intenzione pianificata.`,
        },
    },
    {
        id: 6,
        text: "The cat is ______ the table, sleeping.",
        answers: ["under"],
        explanation: {
            correct:
                `Se dorme e non è visibile sopra, è logicamente sotto → under.`,
            wrong: `"On" o "in" cambierebbero il significato della scena.`,
        },
    },
    {
        id: 7,
        text: "At the moment, I ______ (not / listen) to music.",
        answers: ["am not listening", "aren't listening"],
        explanation: {
            correct:
                `Present Continuous negativo.`,
            wrong: `Serve 'am/are not + -ing', non Present Simple.`,
        },
    },
    {
        id: 8,
        text: "Yesterday evening, he ______ (read) a book when the phone rang.",
        answers: ["was reading"],
        explanation: {
            correct:
                `Azione in corso nel passato → Past Continuous: was reading.`,
            wrong: `Past Simple non rende l’idea di interruzione.`,
        },
    },
    {
        id: 9,
        text: "My friends ______ (often / meet) after work.",
        answers: ["often meet"],
        explanation: {
            correct:
                `Soggetto plurale → meet (senza -s); avverbio prima del verbo.`,
            wrong: `"meets" sarebbe 3ª persona singolare.`,
        },
    },
    {
        id: 10,
        text: "The supermarket is ______ the post office and the pharmacy.",
        answers: ["between"],
        explanation: {
            correct:
                `Due riferimenti → between A and B.`,
            wrong: `"In/on/under" cambiano completamente la posizione.`,
        },
    },
];

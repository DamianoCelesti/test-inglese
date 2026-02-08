// src/test/test15.js
// Argomenti: Present Continuous, Past Simple, Adverbs of frequency,
// Past Continuous, Be going to, Prepositions of place

export const MULTIPLE_CHOICE = [
    {
        id: 1,
        text: "Look at your phone — someone ____ you right now.",
        options: ["calls", "is calling", "called"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Look!" + "right now" indicano un’azione in corso → Present Continuous: is calling.`,
            wrongByIndex: {
                0: `"calls" è Present Simple (abitudine), non ciò che sta succedendo adesso.`,
                2: `"called" è Past Simple e non combacia con 'right now'.`,
            },
        },
    },
    {
        id: 2,
        text: "Last year we ____ abroad, but this year we are staying in Italy.",
        options: ["travel", "travelled", "are travelling"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Last year" è un tempo concluso → Past Simple: travelled.`,
            wrongByIndex: {
                0: `"travel" è presente e non va con 'last year'.`,
                2: `"are travelling" è presente e non descrive un fatto passato concluso.`,
            },
        },
    },
    {
        id: 3,
        text: "He ____ checks his emails before leaving the office.",
        options: ["rarely", "always", "never"],
        correctIndex: 1,
        explanation: {
            correct:
                `È una buona abitudine lavorativa → always è la scelta più logica.`,
            wrongByIndex: {
                0: `"rarely" contraddice l’idea di essere organizzato.`,
                2: `"never" è troppo assoluto e poco realistico.`,
            },
        },
    },
    {
        id: 4,
        text: "While I ____ the report, my computer suddenly froze.",
        options: ["wrote", "was writing", "am writing"],
        correctIndex: 1,
        explanation: {
            correct:
                `Azione in corso nel passato + evento improvviso → Past Continuous: was writing.`,
            wrongByIndex: {
                0: `"wrote" (Past Simple) fa sembrare l’azione già finita.`,
                2: `"am writing" è presente e non va con 'suddenly froze'.`,
            },
        },
    },
    {
        id: 5,
        text: "We ____ start a new project next month; the manager already approved it.",
        options: ["are going to", "will", "start"],
        correctIndex: 0,
        explanation: {
            correct:
                `Decisione già presa e confermata → be going to.`,
            wrongByIndex: {
                1: `"will" suona più come decisione improvvisa o previsione.`,
                2: `"start" (Present Simple) è troppo neutro per un piano già definito.`,
            },
        },
    },
    {
        id: 6,
        text: "The restaurant is ____ the cinema and the station.",
        options: ["between", "under", "on"],
        correctIndex: 0,
        explanation: {
            correct:
                `Con due riferimenti si usa 'between A and B'.`,
            wrongByIndex: {
                1: `"under" non ha senso tra edifici.`,
                2: `"on" indica superficie, non posizione in mezzo.`,
            },
        },
    },
    {
        id: 7,
        text: "At the moment, the kids ____ quietly in the living room.",
        options: ["play", "are playing", "played"],
        correctIndex: 1,
        explanation: {
            correct:
                `"At the moment" → Present Continuous: are playing.`,
            wrongByIndex: {
                0: `"play" è Present Simple (abitudine).`,
                2: `"played" è passato e non va con 'at the moment'.`,
            },
        },
    },
    {
        id: 8,
        text: "Yesterday at 10 p.m., I ____ for the exam when the power went out.",
        options: ["studied", "was studying", "study"],
        correctIndex: 1,
        explanation: {
            correct:
                `Ora precisa nel passato + azione in corso → Past Continuous: was studying.`,
            wrongByIndex: {
                0: `"studied" non mostra che l’azione era in corso al momento dell’interruzione.`,
                2: `"study" è presente e non coerente con 'yesterday'.`,
            },
        },
    },
    {
        id: 9,
        text: "Good athletes ____ train even when they feel tired.",
        options: ["sometimes", "always", "rarely"],
        correctIndex: 1,
        explanation: {
            correct:
                `Descrive una qualità tipica → always.`,
            wrongByIndex: {
                0: `"sometimes" è troppo debole.`,
                2: `"rarely" contraddice l’idea di buon atleta.`,
            },
        },
    },
    {
        id: 10,
        text: "The laptop is ____ the desk, not inside the bag.",
        options: ["on", "in", "under"],
        correctIndex: 0,
        explanation: {
            correct:
                `"Not inside the bag" + superficie → on the desk.`,
            wrongByIndex: {
                1: `"in" significherebbe dentro qualcosa.`,
                2: `"under" cambierebbe totalmente il senso.`,
            },
        },
    },
];

export const GAP_FILL = [
    {
        id: 1,
        text: "Right now, the manager ______ (talk) to a client.",
        answers: ["is talking"],
        explanation: {
            correct: `"Right now" → Present Continuous: is talking.`,
            wrong: `Serve 'is + -ing', non Present Simple.`,
        },
    },
    {
        id: 2,
        text: "Three days ago, we ______ (finish) the presentation.",
        answers: ["finished"],
        explanation: {
            correct: `"Three days ago" → Past Simple: finished.`,
            wrong: `Con 'ago' serve Past Simple.`,
        },
    },
    {
        id: 3,
        text: "My brother ______ (usually / arrive) early at school.",
        answers: ["usually arrives"],
        explanation: {
            correct:
                `3ª persona singolare → arrives; avverbio prima del verbo.`,
            wrong: `Con 'my brother' serve -s: arrives.`,
        },
    },
    {
        id: 4,
        text: "While they ______ (drive), it started to snow.",
        answers: ["were driving"],
        explanation: {
            correct:
                `Azione in corso nel passato → Past Continuous: were driving.`,
            wrong: `Con 'while' + evento serve Past Continuous.`,
        },
    },
    {
        id: 5,
        text: "We ______ (go) to move house next summer.",
        answers: ["are going to go", "are going to"],
        explanation: {
            correct:
                `Piano deciso → be going to.`,
            wrong: `Qui serve 'are going to'.`,
        },
    },
    {
        id: 6,
        text: "The dog is ______ the table, sleeping.",
        answers: ["under"],
        explanation: {
            correct:
                `Se dorme e non è visibile sopra → under.`,
            wrong: `"On" o "in" cambierebbero il significato.`,
        },
    },
    {
        id: 7,
        text: "At the moment, I ______ (not / watch) TV.",
        answers: ["am not watching"],
        explanation: {
            correct:
                `Present Continuous negativo.`,
            wrong: `Serve 'am not + -ing', non Present Simple.`,
        },
    },
    {
        id: 8,
        text: "Yesterday evening, she ______ (read) when the phone rang.",
        answers: ["was reading"],
        explanation: {
            correct:
                `Azione in corso nel passato → Past Continuous: was reading.`,
            wrong: `Past Simple non rende l’idea di interruzione.`,
        },
    },
    {
        id: 9,
        text: "My colleagues ______ (often / work) late.",
        answers: ["often work"],
        explanation: {
            correct:
                `Soggetto plurale → work (senza -s).`,
            wrong: `"works" sarebbe 3ª persona singolare.`,
        },
    },
    {
        id: 10,
        text: "The pharmacy is ______ the bank and the hospital.",
        answers: ["between"],
        explanation: {
            correct:
                `Due riferimenti → between A and B.`,
            wrong: `"In/on/under" cambiano completamente la posizione.`,
        },
    },
];

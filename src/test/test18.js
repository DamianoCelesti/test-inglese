// src/test/test18.js
// Argomenti: Present Continuous, Past Simple, Adverbs of frequency,
// Past Continuous, Be going to, Prepositions of place


export const MULTIPLE_CHOICE = [
    {
        id: 1,
        text: "Look at the mechanic — he ____ the engine and the smoke is still coming out.",
        options: ["repairs", "is repairing", "repaired"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Look!" + evidenza visiva adesso (fumo) → Present Continuous: is repairing.`,
            wrongByIndex: {
                0: `"repairs" descrive un’abitudine, non ciò che sta accadendo ora.`,
                2: `"repaired" è passato e non spiega il fumo che vedi adesso.`,
            },
        },
    },
    {
        id: 2,
        text: "While I ____ the email, my manager walked into the room.",
        options: ["wrote", "was writing", "am writing"],
        correctIndex: 1,
        explanation: {
            correct:
                `Azione in corso nel passato + evento improvviso → Past Continuous: was writing.`,
            wrongByIndex: {
                0: `"wrote" (Past Simple) fa sembrare l’azione già conclusa.`,
                2: `"am writing" è presente e non va con "walked".`,
            },
        },
    },
    {
        id: 3,
        text: "He ____ checks his phone during meetings, which annoys his colleagues.",
        options: ["rarely", "often", "never"],
        correctIndex: 1,
        explanation: {
            correct:
                `Se “annoys his colleagues”, significa che succede abbastanza spesso → often.`,
            wrongByIndex: {
                0: `"rarely" contraddice il fatto che gli altri siano infastiditi.`,
                2: `"never" renderebbe impossibile l’irritazione dei colleghi.`,
            },
        },
    },
    {
        id: 4,
        text: "We ____ start the presentation in five minutes — everything is ready.",
        options: ["start", "are going to", "started"],
        correctIndex: 1,
        explanation: {
            correct:
                `Decisione già presa e preparativi completi → be going to.`,
            wrongByIndex: {
                0: `"start" è troppo neutro e non mostra che sia già deciso.`,
                2: `"started" è passato e non può riferirsi a “in five minutes”.`,
            },
        },
    },
    {
        id: 5,
        text: "Yesterday, I ____ my laptop at home and had to borrow one.",
        options: ["forget", "forgot", "am forgetting"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Yesterday" → Past Simple: forgot.`,
            wrongByIndex: {
                0: `"forget" è presente e non va con "yesterday".`,
                2: `"am forgetting" è Present Continuous e non descrive un fatto concluso.`,
            },
        },
    },
    {
        id: 6,
        text: "The remote control is ____ the sofa cushions — look there.",
        options: ["under", "between", "on"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Between the cushions" è tipico quando qualcosa cade in mezzo a due parti morbide.`,
            wrongByIndex: {
                0: `"under" suggerisce sotto il divano, non tra i cuscini.`,
                2: `"on" significa sopra, non nascosto tra i cuscini.`,
            },
        },
    },
    {
        id: 7,
        text: "At the moment, the children ____ very quietly in their room.",
        options: ["play", "are playing", "played"],
        correctIndex: 1,
        explanation: {
            correct:
                `"At the moment" → Present Continuous: are playing.`,
            wrongByIndex: {
                0: `"play" è abitudine, non azione in corso.`,
                2: `"played" è passato e non va con “at the moment”.`,
            },
        },
    },
    {
        id: 8,
        text: "While the train ____ the tunnel, all the lights went off.",
        options: ["entered", "was entering", "enters"],
        correctIndex: 1,
        explanation: {
            correct:
                `Azione in corso nel passato + evento improvviso → was entering.`,
            wrongByIndex: {
                0: `"entered" chiude l’azione e non mostra la durata nel momento del blackout.`,
                2: `"enters" è presente e non va con “went off”.`,
            },
        },
    },
    {
        id: 9,
        text: "Good pilots ____ double-check their instruments before takeoff.",
        options: ["sometimes", "usually", "rarely"],
        correctIndex: 1,
        explanation: {
            correct:
                `È una pratica standard e professionale → usually.`,
            wrongByIndex: {
                0: `"sometimes" è troppo debole per una procedura di sicurezza.`,
                2: `"rarely" sarebbe pericoloso e irrealistico.`,
            },
        },
    },
    {
        id: 10,
        text: "The pharmacy is ____ the hospital and the bus stop.",
        options: ["between", "in", "under"],
        correctIndex: 0,
        explanation: {
            correct:
                `Due riferimenti → between A and B.`,
            wrongByIndex: {
                1: `"in" cambierebbe completamente il significato.`,
                2: `"under" non ha senso tra edifici.`,
            },
        },
    },
];

export const GAP_FILL = [
    {
        id: 1,
        text: "Right now, the scientist ______ (analyze) the data.",
        answers: ["is analyzing"],
        explanation: {
            correct:
                `"Right now" → Present Continuous: is analyzing.`,
            wrong:
                `Serve "is + -ing", non Present Simple.`,
        },
    },
    {
        id: 2,
        text: "Three days ago, we ______ (finish) the project.",
        answers: ["finished"],
        explanation: {
            correct:
                `"Three days ago" → Past Simple: finished.`,
            wrong:
                `Con "ago" serve Past Simple, non presente.`,
        },
    },
    {
        id: 3,
        text: "My boss ______ (always / arrive) early to meetings.",
        answers: ["always arrives"],
        explanation: {
            correct:
                `3ª persona singolare → arrives; avverbio prima del verbo.`,
            wrong:
                `Con "my boss" serve -s: arrives.`,
        },
    },
    {
        id: 4,
        text: "While I ______ (cook), the power went out.",
        answers: ["was cooking"],
        explanation: {
            correct:
                `While + azione in corso nel passato → was cooking.`,
            wrong:
                `Serve Past Continuous con un evento improvviso.`,
        },
    },
    {
        id: 5,
        text: "They ______ (move) to Spain next year; they already found a house.",
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
        text: "The cat is hiding ______ the table.",
        answers: ["under"],
        explanation: {
            correct:
                `Se è nascosta e non sopra → under.`,
            wrong:
                `"On" o "in" cambierebbero il significato.`,
        },
    },
    {
        id: 7,
        text: "At the moment, I ______ (not / watch) TV because I’m working.",
        answers: ["am not watching"],
        explanation: {
            correct:
                `Present Continuous negativo: am not watching.`,
            wrong:
                `Serve "am not + -ing", non Present Simple.`,
        },
    },
    {
        id: 8,
        text: "Yesterday evening, she ______ (drive) when the storm started.",
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
        text: "My neighbors ______ (rarely / complain) about noise.",
        answers: ["rarely complain"],
        explanation: {
            correct:
                `Soggetto plurale → complain (senza -s).`,
            wrong:
                `"complains" sarebbe 3ª persona singolare.`,
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

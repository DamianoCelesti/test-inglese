// src/test/test21.js
// Argomenti: Present Continuous, Past Simple, Adverbs of frequency,
// Past Continuous, Be going to, Prepositions of place

export const MULTIPLE_CHOICE = [
    {
        id: 1,
        text: "The package is ____ the door; please move it so no one trips.",
        options: ["in front of", "between", "in"],
        correctIndex: 0,
        explanation: {
            correct:
                `"In front of" indica posizione davanti a qualcosa (davanti alla porta).
Quindi: "in front of the door".`,
            wrongByIndex: {
                1: `"between" richiede due riferimenti (between A and B), ma qui c’è solo "the door".`,
                2: `"in" significherebbe “dentro la porta”, non ha senso.`,
            },
        },
    },
    {
        id: 2,
        text: "When I got to the office, my manager ____ already ____ the meeting.",
        options: ["was / starting", "had / started", "is / starting"],
        correctIndex: 1,
        explanation: {
            correct:
                `Due eventi nel passato: uno accade prima dell’altro.
"Had started" (Past Perfect) mostra che l’inizio del meeting è avvenuto prima del mio arrivo.`,
            wrongByIndex: {
                0: `"was starting" indica un’azione in corso nel passato, ma qui l’idea è “già iniziato” prima del mio arrivo.`,
                2: `"is starting" è presente: non è coerente con "When I got to the office" (passato).`,
            },
        },
    },
    {
        id: 3,
        text: "She ____ checks her email during meetings; she thinks it’s rude.",
        options: ["never", "often", "usually"],
        correctIndex: 0,
        explanation: {
            correct:
                `Se pensa che sia scortese, allora non lo fa → "never".`,
            wrongByIndex: {
                1: `"often" contraddice l’idea che lo ritenga scortese.`,
                2: `"usually" indica che lo fa normalmente, ma qui è il contrario.`,
            },
        },
    },
    {
        id: 4,
        text: "I can’t join you for lunch — I ____ a call with a client.",
        options: ["have", "am having", "had"],
        correctIndex: 1,
        explanation: {
            correct:
                `Situazione temporanea in corso (una call in questo momento) → Present Continuous: "am having".`,
            wrongByIndex: {
                0: `"have" (Present Simple) suona più come fatto generale/abitudine, meno adatto a “adesso ho una call”.`,
                2: `"had" è passato: non va con un motivo valido nel presente.`,
            },
        },
    },
    {
        id: 5,
        text: "While we ____ to the station, it started raining, so we opened an umbrella.",
        options: ["walked", "were walking", "are walking"],
        correctIndex: 1,
        explanation: {
            correct:
                `Azione in corso nel passato + evento (“started raining”) → Past Continuous: were walking.`,
            wrongByIndex: {
                0: `"walked" (Past Simple) non rende bene l’idea dell’azione in corso quando ha iniziato a piovere.`,
                2: `"are walking" è presente: non è coerente con "started".`,
            },
        },
    },
    {
        id: 6,
        text: "We ____ buy a new desk because this one is too small for two monitors.",
        options: ["are going to", "bought", "buy"],
        correctIndex: 0,
        explanation: {
            correct:
                `Decisione/intenzione futura basata su una motivazione presente → "be going to".`,
            wrongByIndex: {
                1: `"bought" è passato: qui stai parlando di un piano/decisione.`,
                2: `"buy" è troppo neutro e non enfatizza l’intenzione pianificata.`,
            },
        },
    },
    {
        id: 7,
        text: "The keys aren’t on the shelf — they’re ____ the drawer.",
        options: ["between", "in", "on"],
        correctIndex: 1,
        explanation: {
            correct:
                `Dentro un contenitore (drawer) → "in".`,
            wrongByIndex: {
                0: `"between" richiede due riferimenti, non uno solo.`,
                2: `"on" è “sopra”: ma qui si intende “dentro il cassetto”.`,
            },
        },
    },
    {
        id: 8,
        text: "Last month, our team ____ a new process to reduce mistakes.",
        options: ["introduces", "introduced", "is introducing"],
        correctIndex: 1,
        explanation: {
            correct:
                `"Last month" indica passato concluso → Past Simple: introduced.`,
            wrongByIndex: {
                0: `"introduces" è presente: non va con "last month".`,
                2: `"is introducing" è presente/temporaneo: non è coerente con un periodo finito nel passato.`,
            },
        },
    },
    {
        id: 9,
        text: "The café is ____ the gym, so we can grab a coffee after training.",
        options: ["next to", "under", "in"],
        correctIndex: 0,
        explanation: {
            correct:
                `Vicinanza tra due luoghi → "next to".`,
            wrongByIndex: {
                1: `"under" è “sotto”: poco realistico qui.`,
                2: `"in" significherebbe “dentro” la gym, cambia il significato.`,
            },
        },
    },
    {
        id: 10,
        text: "Look at those dark clouds — it ____ rain soon.",
        options: ["is going to", "was going to", "goes to"],
        correctIndex: 0,
        explanation: {
            correct:
                `Previsione basata su evidenza nel presente (dark clouds) → "be going to": is going to rain.`,
            wrongByIndex: {
                1: `"was going to" è passato: non è una previsione attuale.`,
                2: `"goes to" è una forma sbagliata in inglese per questo uso.`,
            },
        },
    },
];

export const GAP_FILL = [
    {
        id: 1,
        text: "While I ______ (read) the email, my phone buzzed.",
        answers: ["was reading"],
        explanation: {
            correct:
                `Azione in corso nel passato (while) + evento (buzzed) → Past Continuous: was reading.`,
            wrong:
                `Con "while" l’azione lunga va al Past Continuous. Past Simple cambierebbe il senso.`,
        },
    },
    {
        id: 2,
        text: "He ______ (rarely / complain) about work, even when it’s stressful.",
        answers: ["rarely complains"],
        explanation: {
            correct:
                `Avverbio di frequenza + 3ª singolare: complains. → rarely complains.`,
            wrong:
                `Con "he" serve -s (complains). L’avverbio va prima del verbo principale.`,
        },
    },
    {
        id: 3,
        text: "We ______ (not / talk) now — we’re in a meeting.",
        answers: ["are not talking", "aren't talking"],
        explanation: {
            correct:
                `Situazione temporanea in corso → Present Continuous negativo: are not talking.`,
            wrong:
                `Qui serve "be + not + -ing". "We don’t talk" suona come regola/abitudine, non “adesso”.`,
        },
    },
    {
        id: 4,
        text: "Two weeks ago, I ______ (finish) the project and sent the files.",
        answers: ["finished"],
        explanation: {
            correct:
                `"Two weeks ago" → Past Simple: finished.`,
            wrong:
                `Con "ago" serve Past Simple, non presente.`,
        },
    },
    {
        id: 5,
        text: "They ______ (go) to move to a bigger office because the team is growing.",
        answers: ["are going to move", "are going to"],
        explanation: {
            correct:
                `Decisione/intenzione futura basata su una situazione presente → be going to: are going to move.`,
            wrong:
                `Serve la struttura "are going to". Forme al passato o senza "going to" non sono coerenti con l’intenzione.`,
        },
    },
    {
        id: 6,
        text: "The printer is ______ the window, on the left side of the room.",
        answers: ["near", "next to", "by"],
        explanation: {
            correct:
                `Preposizioni di vicinanza corrette: near / next to / by.`,
            wrong:
                `Qui servono preposizioni di vicinanza. "In/under/between" cambiano posizione e non sono coerenti.`,
        },
    },
    {
        id: 7,
        text: "At the moment, she ______ (prepare) a report for her boss.",
        answers: ["is preparing"],
        explanation: {
            correct:
                `"At the moment" → Present Continuous: is preparing.`,
            wrong:
                `Serve "is + -ing". Il Present Simple indicherebbe abitudine, non azione in corso.`,
        },
    },
    {
        id: 8,
        text: "Last year, we ______ (open) a new store in the city center.",
        answers: ["opened"],
        explanation: {
            correct:
                `"Last year" → Past Simple: opened.`,
            wrong:
                `Con un tempo passato finito ("last year") serve Past Simple.`,
        },
    },
    {
        id: 9,
        text: "My colleagues ______ (often / not / eat) lunch at their desks.",
        answers: ["often don't eat", "often do not eat"],
        explanation: {
            correct:
                `Abitudine negativa: often + don't + verbo base → often don't eat.`,
            wrong:
                `Nel Present Simple negativo si usa "don't + verbo base" (non "don't eats").`,
        },
    },
    {
        id: 10,
        text: "The conference room is ______ the reception and the main office.",
        answers: ["between"],
        explanation: {
            correct:
                `Due riferimenti → between A and B: between the reception and the main office.`,
            wrong:
                `"Between" richiede due riferimenti. Altre preposizioni cambiano totalmente posizione/struttura.`,
        },
    },
];

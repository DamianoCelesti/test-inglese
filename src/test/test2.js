// src/test/test2.js


export const MULTIPLE_CHOICE = [
    {
        id: 1,
        text: "My sister ____ to work by train every day.",
        options: ["go", "goes", "going"],
        correctIndex: 1,
        explanation: {
            correct: `"My sister" è 3ª persona singolare (she) → Present Simple vuole -s: go → goes.
"Every day" indica abitudine → Present Simple.`,
            wrongByIndex: {
                0: `"go" è la forma base: va bene con I/you/we/they, ma non con 3ª singolare (she/he/it).`,
                2: `"going" è forma -ing: qui serve un verbo finito al Present Simple, non un gerundio/participio.`,
            },
        },
    },
    {
        id: 2,
        text: "Look! The teacher ____ on the board.",
        options: ["writes", "is writing", "wrote"],
        correctIndex: 1,
        explanation: {
            correct: `"Look!" segnala un’azione che sta succedendo adesso → Present Continuous: "is writing".`,
            wrongByIndex: {
                0: `"writes" (Present Simple) indica abitudine o routine, non un’azione “adesso” introdotta da "Look!".`,
                2: `"wrote" è Past Simple: descrive un’azione conclusa nel passato, non nel momento presente.`,
            },
        },
    },
    {
        id: 3,
        text: "We ____ a meeting at 10 a.m. tomorrow.",
        options: ["have", "are having", "had"],
        correctIndex: 1,
        explanation: {
            correct: `Per appuntamenti già organizzati nel futuro si usa spesso il Present Continuous: "are having".
"Tomorrow" + evento pianificato → "are having".`,
            wrongByIndex: {
                0: `"have" (Present Simple) può suonare come orario/programma in certi contesti, ma qui l’esercizio punta al “future arrangement” con Present Continuous.`,
                2: `"had" è Past Simple: contraddice "tomorrow" (futuro).`,
            },
        },
    },
    {
        id: 4,
        text: "The exam is ____ Monday, so I must study this weekend.",
        options: ["in", "on", "at"],
        correctIndex: 1,
        explanation: {
            correct: `Per i giorni della settimana si usa "on": on Monday, on Tuesday, ecc.`,
            wrongByIndex: {
                0: `"in" si usa per mesi/anni/periodi (in June, in 2026), non per i giorni della settimana.`,
                2: `"at" si usa per orari/luoghi specifici (at 10, at home), non per i giorni.`,
            },
        },
    },
    {
        id: 5,
        text: "I ____ my homework when you called me.",
        options: ["did", "was doing", "do"],
        correctIndex: 1,
        explanation: {
            correct: `Azione in corso nel passato + evento che interrompe:
Past Continuous ("was doing") + Past Simple ("called").
Quindi: "I was doing my homework when you called me."`,
            wrongByIndex: {
                0: `"did" è Past Simple: darebbe l’idea di azione completata, non “in corso” mentre qualcuno chiamava.`,
                2: `"do" è Present Simple: non è coerente con "called" (passato).`,
            },
        },
    },
    {
        id: 6,
        text: "She has lived in Rome ____ five years.",
        options: ["since", "for", "from"],
        correctIndex: 1,
        explanation: {
            correct: `"For" si usa con una durata (for five years).
"Since" si usa con un punto di inizio (since 2020).`,
            wrongByIndex: {
                0: `"since five years" è sbagliato perché "since" vuole un momento preciso (since 2019), non una durata.`,
                2: `"from" indica origine/da…a… (from Monday to Friday), non si usa così con il Present Perfect.`,
            },
        },
    },
    {
        id: 7,
        text: "This is the student ____ won the scholarship.",
        options: ["who", "which", "where"],
        correctIndex: 0,
        explanation: {
            correct: `"Who" si usa per persone. Qui "the student" è una persona → who.`,
            wrongByIndex: {
                1: `"which" si usa per cose/animali (in molti casi), non per persone in questo contesto.`,
                2: `"where" si usa per luoghi, non per persone.`,
            },
        },
    },
    {
        id: 8,
        text: "They ____ finished the project yet.",
        options: ["haven't", "didn't", "aren't"],
        correctIndex: 0,
        explanation: {
            correct: `"Yet" è tipico del Present Perfect in frasi negative/interrogative.
"They haven't finished ... yet."`,
            wrongByIndex: {
                1: `"didn't finished" è scorretto: con "didn't" il verbo deve essere base form ("finish"). Inoltre "yet" qui punta al Present Perfect.`,
                2: `"aren't finished" cambia struttura: significa “non sono finiti” (aggettivo), ma con "project" e "yet" l’esercizio vuole il verbo "finish" al Present Perfect.`,
            },
        },
    },
    {
        id: 9,
        text: "There are ____ students in the classroom today than yesterday.",
        options: ["many", "more", "most"],
        correctIndex: 1,
        explanation: {
            correct: `Con "than" serve un comparativo: "more ... than".`,
            wrongByIndex: {
                0: `"many" non è comparativo. Per confronto con "than" serve "more".`,
                2: `"most" è superlativo e non si usa con "than".`,
            },
        },
    },
    {
        id: 10,
        text: "Please, turn ____ your phone during the lesson.",
        options: ["on", "off", "up"],
        correctIndex: 1,
        explanation: {
            correct: `"Turn off" = spegnere. Durante la lezione è la richiesta più sensata.`,
            wrongByIndex: {
                0: `"turn on" = accendere: è l’opposto di ciò che si chiede in classe.`,
                2: `"turn up" = alzare il volume: non significa “spegnere” e sarebbe inappropriate durante una lezione.`,
            },
        },
    },
];

export const GAP_FILL = [
    {
        id: 1,
        text: "She usually ______ (finish) work at 6 p.m.",
        answers: ["finishes"],
        explanation: {
            correct: `"Usually" → Present Simple.
"She" è 3ª persona singolare → finish + -es = finishes.`,
            wrong: `Con 3ª persona singolare (she/he/it) al Present Simple serve -s/-es. "finish" senza -es è sbagliato qui.`,
        },
    },
    {
        id: 2,
        text: "Right now, they ______ (watch) a documentary.",
        answers: ["are watching"],
        explanation: {
            correct: `"Right now" indica azione in corso → Present Continuous: are watching.`,
            wrong: `Con "right now" serve "be + -ing". Forme al Present Simple non rendono l’azione “in corso”.`,
        },
    },
    {
        id: 3,
        text: "The printer is ______ the desk.",
        answers: ["on"],
        explanation: {
            correct: `Per indicare “sopra” una superficie si usa "on": on the desk.`,
            wrong: `Qui serve "on" (superficie). "In" sarebbe dentro, "at" è per punti/luoghi generici.`,
        },
    },
    {
        id: 4,
        text: "Last night I ______ (study) until midnight.",
        answers: ["studied"],
        explanation: {
            correct: `"Last night" → Past Simple. Verbo regolare: study → studied.`,
            wrong: `Con "last night" parli di passato concluso → Past Simple. "study" al presente non è coerente.`,
        },
    },
    {
        id: 5,
        text: "While we ______ (walk) home, it started to rain.",
        answers: ["were walking"],
        explanation: {
            correct: `Azione in corso nel passato → Past Continuous: were walking.
Evento che accade → Past Simple: started.`,
            wrong: `Con "while" in un racconto al passato l’azione lunga va al Past Continuous. Il Past Simple cambierebbe il significato.`,
        },
    },
    {
        id: 6,
        text: "I ______ (never / be) to London.",
        answers: ["have never been"],
        explanation: {
            correct: `Esperienza nella vita → Present Perfect.
Forma: have/has + past participle. "be" → "been".
Con "never": have never been.`,
            wrong: `Per esperienze (mai stato) si usa il Present Perfect, non il Past Simple. Inoltre serve "been" (participio passato), non "be".`,
        },
    },
    {
        id: 7,
        text: "We ______ (not / understand) the question, so we asked again.",
        answers: ["didn't understand", "did not understand"],
        explanation: {
            correct: `Qui c’è una sequenza narrativa al passato ("asked") → Past Simple negativo: didn't + base form.
Quindi: didn't understand.`,
            wrong: `Se usi "didn't", il verbo deve restare alla base form ("understand"), non "understood". E il contesto è passato, quindi non Present Simple.`,
        },
    },
    {
        id: 8,
        text: "The meeting is ______ 3 p.m.",
        answers: ["at"],
        explanation: {
            correct: `Per gli orari si usa "at": at 3 p.m.`,
            wrong: `Per il tempo: "at" = orari specifici; "on" = giorni; "in" = mesi/anni/periodi.`,
        },
    },
    {
        id: 9,
        text: "If it rains, we ______ (stay) at home.",
        answers: ["will stay"],
        explanation: {
            correct: `First conditional: If + Present Simple, then will + base form.
If it rains → we will stay.`,
            wrong: `Nella first conditional non si usa "will" nella if-clause ("If it will rain" è scorretto qui). La principale invece vuole "will + verbo base".`,
        },
    },
    {
        id: 10,
        text: "Be quiet! I ______ (try) to concentrate.",
        answers: ["am trying"],
        explanation: {
            correct: `"Be quiet!" indica situazione adesso → Present Continuous: am trying.`,
            wrong: `Quando parli di un’azione in corso nel momento presente, serve Present Continuous. Il Present Simple suona come abitudine.`,
        },
    },
];

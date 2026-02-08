// src/test/test9.js
// Argomenti: Present Continuous, Past Simple, Adverbs of frequency,
// Past Continuous, Be going to, Prepositions of place

export const MULTIPLE_CHOICE = [
    {
        id: 1,
        text: "I ____ drink coffee, but today I’m having tea.",
        options: ["usually", "am usually", "yesterday"],
        correctIndex: 0,
        explanation: {
            correct: `"Usually" è un adverb of frequency: si usa per abitudini con il Present Simple.
Qui contrasti l’abitudine (coffee) con un’eccezione di oggi (tea).`,
            wrongByIndex: {
                1: `"Am usually" non funziona: l’avverbio non si mette così senza una struttura corretta (es. "I am usually tired"). Qui serve solo l’avverbio davanti al verbo: "I usually drink".`,
                2: `"yesterday" è un marcatore di passato e non indica frequenza/abitudine.`,
            },
        },
    },
    {
        id: 2,
        text: "Right now, she ____ to the doctor, so call her later.",
        options: ["speaks", "is speaking", "spoke"],
        correctIndex: 1,
        explanation: {
            correct: `"Right now" indica un’azione in corso → Present Continuous: "is speaking".`,
            wrongByIndex: {
                0: `"speaks" (Present Simple) indica abitudine o fatto generale, non un’azione in corso adesso.`,
                2: `"spoke" è Past Simple: sposta l’azione nel passato.`,
            },
        },
    },
    {
        id: 3,
        text: "While I ____ for the bus, I saw an old classmate.",
        options: ["wait", "was waiting", "am waiting"],
        correctIndex: 1,
        explanation: {
            correct: `Nel passato: While + Past Continuous (azione lunga) + Past Simple (evento).
Quindi: "was waiting" + "saw".`,
            wrongByIndex: {
                0: `"wait" è presente e non è coerente con "saw" (passato).`,
                2: `"am waiting" è presente: non va con un racconto al passato.`,
            },
        },
    },
    {
        id: 4,
        text: "We ____ to meet at 6 p.m. tomorrow. It’s already arranged.",
        options: ["are going", "are going to", "went"],
        correctIndex: 1,
        explanation: {
            correct: `Piano futuro/intenzione già decisa → "be going to".
Quindi: "We are going to meet..."`,
            wrongByIndex: {
                0: `"are going" da solo è incompleto: serve "are going to + verbo" oppure un luogo ("are going to the cinema").`,
                2: `"went" è Past Simple: non va con "tomorrow".`,
            },
        },
    },
    {
        id: 5,
        text: "The keys are ____ the drawer, not on the table.",
        options: ["in", "between", "on"],
        correctIndex: 0,
        explanation: {
            correct: `Dentro un contenitore/spazio chiuso si usa "in": in the drawer.`,
            wrongByIndex: {
                1: `"between" richiede due riferimenti (between A and B), qui c’è un solo oggetto.`,
                2: `"on" è sopra una superficie: contraddice "in the drawer" e "not on the table".`,
            },
        },
    },
    {
        id: 6,
        text: "Last night at 11, I ____ when you texted me.",
        options: ["slept", "was sleeping", "am sleeping"],
        correctIndex: 1,
        explanation: {
            correct: `Ora specifica nel passato + azione in corso → Past Continuous: was sleeping.`,
            wrongByIndex: {
                0: `"slept" (Past Simple) non evidenzia l’azione in corso nel momento del messaggio.`,
                2: `"am sleeping" è presente: non è coerente con "last night".`,
            },
        },
    },
    {
        id: 7,
        text: "He ____ forgets his homework because he writes reminders.",
        options: ["rarely", "never", "always"],
        correctIndex: 0,
        explanation: {
            correct: `Se scrive promemoria, significa che se lo dimentica di rado → "rarely" è la scelta più sensata.`,
            wrongByIndex: {
                1: `"never" è troppo assoluto: i promemoria riducono l’errore, ma “mai” è quasi sempre eccessivo.`,
                2: `"always" è l’opposto di ciò che suggeriscono i promemoria.`,
            },
        },
    },
    {
        id: 8,
        text: "Yesterday we ____ to the museum, but it was closed.",
        options: ["go", "went", "are going"],
        correctIndex: 1,
        explanation: {
            correct: `"Yesterday" → Past Simple: went.`,
            wrongByIndex: {
                0: `"go" è presente: non va con "yesterday".`,
                2: `"are going" è presente/continuo: non va con "yesterday".`,
            },
        },
    },
    {
        id: 9,
        text: "Look! The dog ____ under the sofa again!",
        options: ["hides", "is hiding", "hid"],
        correctIndex: 1,
        explanation: {
            correct: `"Look!" indica che l’azione sta accadendo adesso → Present Continuous: is hiding.`,
            wrongByIndex: {
                0: `"hides" (Present Simple) descrive abitudine, ma "Look!" punta all’azione in corso ora.`,
                2: `"hid" è passato: non va con "Look!" (presente).`,
            },
        },
    },
    {
        id: 10,
        text: "The café is ____ the library, so we can go there after class.",
        options: ["next to", "in", "under"],
        correctIndex: 0,
        explanation: {
            correct: `Per dire “accanto” si usa "next to".`,
            wrongByIndex: {
                1: `"in" significa “dentro”: cambia completamente il significato.`,
                2: `"under" significa “sotto”: non ha senso tra edifici in questo contesto.`,
            },
        },
    },
];

export const GAP_FILL = [
    {
        id: 1,
        text: "At the moment, my dad ______ (cook) dinner, so I can’t use the kitchen.",
        answers: ["is cooking"],
        explanation: {
            correct: `"At the moment" → Present Continuous: is cooking.`,
            wrong: `Con "at the moment" serve "is/are + -ing". "Cooks" sarebbe abitudine, non azione in corso.`,
        },
    },
    {
        id: 2,
        text: "Two weeks ago, I ______ (lose) my wallet on the bus.",
        answers: ["lost"],
        explanation: {
            correct: `"Two weeks ago" → Past Simple. "lose" è irregolare: lose → lost.`,
            wrong: `Con "ago" serve Past Simple. Attenzione: "lose" non fa "losed", ma "lost".`,
        },
    },
    {
        id: 3,
        text: "My sister ______ (always / be) polite with guests.",
        answers: ["is always"],
        explanation: {
            correct: `Con "be", l’avverbio di frequenza va dopo: is always.`,
            wrong: `Non dire "always is": con "be" l’avverbio va dopo (is always). E con "my sister" serve "is".`,
        },
    },
    {
        id: 4,
        text: "While we ______ (walk) home, it started to snow.",
        answers: ["were walking"],
        explanation: {
            correct: `Azione in corso nel passato → Past Continuous: were walking.`,
            wrong: `Con "while" e un evento ("started"), l’azione lunga va al Past Continuous (were walking).`,
        },
    },
    {
        id: 5,
        text: "I ______ (go) to study tonight. I have a test tomorrow.",
        answers: ["am going to study", "am going to"],
        explanation: {
            correct: `Intenzione/piano futuro → be going to: am going to (study).`,
            wrong: `Qui serve "am going to". Scrivere solo "study" o usare tempi al passato non è coerente col futuro.`,
        },
    },
    {
        id: 6,
        text: "The cat is ______ the box, so open it carefully.",
        answers: ["in", "inside"],
        explanation: {
            correct: `Dentro un contenitore si usa "in/inside". Entrambe accettate.`,
            wrong: `Qui serve una preposizione di “dentro” (in/inside). "On/under/between" cambiano la posizione.`,
        },
    },
    {
        id: 7,
        text: "Right now, we ______ (not / listen) because it’s too noisy.",
        answers: ["are not listening", "aren't listening"],
        explanation: {
            correct: `Presente in corso negativo → are not listening / aren't listening.`,
            wrong: `Con "right now" serve Present Continuous anche in negativo: are not + -ing.`,
        },
    },
    {
        id: 8,
        text: "Yesterday at 5 p.m., they ______ (play) football when it began to rain.",
        answers: ["were playing"],
        explanation: {
            correct: `Ora specifica nel passato + azione in corso → Past Continuous: were playing.`,
            wrong: `Con un orario nel passato e un evento (“began”), l’azione lunga va al Past Continuous: were playing.`,
        },
    },
    {
        id: 9,
        text: "My friends ______ (usually / arrive) early for meetings.",
        answers: ["usually arrive"],
        explanation: {
            correct: `Soggetto plurale → forma base del verbo: arrive.
Avverbio prima del verbo: usually arrive.`,
            wrong: `Con soggetto plurale non si mette -s ("arrives" è 3ª singolare). L’avverbio va prima del verbo.`,
        },
    },
    {
        id: 10,
        text: "The shop is ______ the bank and the post office.",
        answers: ["between"],
        explanation: {
            correct: `Con due riferimenti si usa "between A and B".`,
            wrong: `"Between" richiede due riferimenti. Se usi "in/on/under" cambi il significato.`,
        },
    },
];

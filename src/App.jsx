import { useEffect, useMemo, useState } from "react";
import "./App.css";
import { TEST_INDEX } from "./test/index";

function normalize(s) {
  return (s ?? "").trim().toLowerCase();
}

export default function App() {
  const [currentTestIndex, setCurrentTestIndex] = useState(0);

  // Dati caricati
  const [testData, setTestData] = useState({
    MULTIPLE_CHOICE: [],
    GAP_FILL: [],
  });

  const [loading, setLoading] = useState(true);

  // Risposte
  const [mcSelected, setMcSelected] = useState({});
  const [gapInput, setGapInput] = useState({});
  const [checked, setChecked] = useState(false);

  // Carica test quando cambia indice
  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setChecked(false);

      const entry = TEST_INDEX[currentTestIndex];
      const mod = await entry.loader();

      if (cancelled) return;

      const MULTIPLE_CHOICE = mod.MULTIPLE_CHOICE ?? [];
      const GAP_FILL = mod.GAP_FILL ?? [];

      setTestData({ MULTIPLE_CHOICE, GAP_FILL });


      const mc = {};
      for (const q of MULTIPLE_CHOICE) mc[q.id] = null;
      const gap = {};
      for (const q of GAP_FILL) gap[q.id] = "";

      setMcSelected(mc);
      setGapInput(gap);

      setLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [currentTestIndex]);

  const { MULTIPLE_CHOICE, GAP_FILL } = testData;

  const score = useMemo(() => {
    let correct = 0;
    let total = MULTIPLE_CHOICE.length + GAP_FILL.length;

    for (const q of MULTIPLE_CHOICE) {
      if (mcSelected[q.id] === q.correctIndex) correct++;
    }

    for (const q of GAP_FILL) {
      const user = normalize(gapInput[q.id]);
      const accepted = q.answers?.map(normalize) ?? [];
      if (user && accepted.includes(user)) correct++;
    }

    return { correct, total };
  }, [mcSelected, gapInput, MULTIPLE_CHOICE, GAP_FILL]);

  function onCheck() {
    setChecked(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resetAnswers() {
    const mc = {};
    for (const q of MULTIPLE_CHOICE) mc[q.id] = null;
    const gap = {};
    for (const q of GAP_FILL) gap[q.id] = "";

    setMcSelected(mc);
    setGapInput(gap);
    setChecked(false);
  }

  function isGapCorrect(q) {
    const user = normalize(gapInput[q.id]);
    const accepted = (q.answers ?? []).map(normalize);
    return user.length > 0 && accepted.includes(user);
  }

  const canPrev = currentTestIndex > 0;
  const canNext = currentTestIndex < TEST_INDEX.length - 1;

  return (
    <div className="page">
      <header className="header">
        <h1>English Test – Pratica</h1>

        {/* NAV TEST */}
        <div className="navTests">
          <button
            className="ghost"
            disabled={!canPrev || loading}
            onClick={() => setCurrentTestIndex((i) => i - 1)}
          >
            ←
          </button>

          <span className="testTitle">
            {TEST_INDEX[currentTestIndex]?.title ?? "Test"}
          </span>

          <button
            className="ghost"
            disabled={!canNext || loading}
            onClick={() => setCurrentTestIndex((i) => i + 1)}
          >
            →
          </button>
        </div>

        <div className="actions">
          <button onClick={onCheck} disabled={loading}>
            Check
          </button>
          <button className="ghost" onClick={resetAnswers} disabled={loading}>
            Reset
          </button>

          {checked && !loading && (
            <div className="score">
              Score: <strong>{score.correct}</strong> / {score.total}
            </div>
          )}
        </div>
      </header>

      {loading ? (
        <div className="q">
          <div className="qText">Caricamento test…</div>
        </div>
      ) : (
        <>
          {/* MULTIPLE CHOICE */}
          <section className="section">
            <h2>Scelta multipla</h2>

            <div className="block">
              {MULTIPLE_CHOICE.map((q) => {
                const selected = mcSelected[q.id];
                const isAnswered = selected !== null && selected !== undefined;
                const isCorrect = selected === q.correctIndex;


                const correctExplanation = q.explanation?.correct || "";


                const wrongExplanation =
                  !isCorrect && isAnswered
                    ? q.explanation?.wrongByIndex?.[selected] ||
                    "Manca la spiegazione specifica per questa opzione."
                    : "";

                return (
                  <div className="q" key={q.id}>
                    <div className="qText">
                      <span className="qNum">{q.id}.</span> {q.text}
                    </div>

                    <div className="opts">
                      {q.options.map((opt, idx) => {
                        const label = idx === 0 ? "a" : idx === 1 ? "b" : "c";
                        const isSelected = selected === idx;

                        let cls = "opt";
                        if (checked && isSelected && isCorrect) cls += " ok";
                        if (checked && isSelected && !isCorrect) cls += " bad";
                        if (checked && idx === q.correctIndex) cls += " correct";

                        return (
                          <label className={cls} key={idx}>
                            <input
                              type="radio"
                              name={`mc-${q.id}`}
                              checked={isSelected}
                              onChange={() =>
                                setMcSelected((prev) => ({
                                  ...prev,
                                  [q.id]: idx,
                                }))
                              }
                            />
                            <span className="optLabel">{label})</span> {opt}
                          </label>
                        );
                      })}
                    </div>

                    {checked && isAnswered && (
                      <div className="feedback">
                        {isCorrect
                          ? "✅ Corretto"
                          : `❌ Sbagliato — la risposta corretta è: ${q.options[q.correctIndex]}`}
                      </div>
                    )}

                    {checked && !isAnswered && (
                      <div className="feedback warn">⚠️ Senza risposta</div>
                    )}


                    {checked && isAnswered && (
                      <div className="explain">
                        {!isCorrect && (
                          <>
                            <div className="explainTitle">Perché la tua risposta è sbagliata ❌</div>
                            <div className="explainText">{wrongExplanation}</div>
                            <hr style={{ margin: "10px 0", opacity: 0.3 }} />
                          </>
                        )}

                        <div className="explainTitle">Perché la risposta corretta è giusta ✅</div>
                        <div className="explainText">{correctExplanation}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* GAP FILL */}
          <section className="section">
            <h2>Gap fill</h2>

            <div className="block">
              {GAP_FILL.map((q) => {
                const ok = isGapCorrect(q);
                const userHasTyped = normalize(gapInput[q.id]).length > 0;


                const correctExplanation = q.explanation?.correct || "";


                const wrongExplanation =
                  checked && userHasTyped && !ok
                    ? q.explanation?.wrong || "Nessuna spiegazione disponibile."
                    : "";

                return (
                  <div className="q" key={q.id}>
                    <div className="qText">
                      <span className="qNum">{q.id}.</span> {q.text}
                    </div>

                    <div className="gapRow">
                      <input
                        className={`gap ${checked ? (ok ? "ok" : "bad") : ""}`}
                        value={gapInput[q.id] ?? ""}
                        onChange={(e) =>
                          setGapInput((prev) => ({
                            ...prev,
                            [q.id]: e.target.value,
                          }))
                        }
                        placeholder="Scrivi la parola..."
                      />
                    </div>

                    {checked && (
                      <div className="feedback">
                        {ok
                          ? "✅ Corretto"
                          : `❌ Sbagliato — la parola è: ${(q.answers ?? []).join(" / ")}`}
                      </div>
                    )}


                    {checked && (
                      <div className="explain">
                        {userHasTyped && !ok && (
                          <>
                            <div className="explainTitle">Perché la tua risposta è sbagliata ❌</div>
                            <div className="explainText">{wrongExplanation}</div>
                            <hr style={{ margin: "10px 0", opacity: 0.3 }} />
                          </>
                        )}

                        <div className="explainTitle">Perché la risposta corretta è giusta ✅</div>
                        <div className="explainText">
                          {correctExplanation || "Nessuna spiegazione disponibile."}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

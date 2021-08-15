import i18next from "../i18n";
import { useState, useEffect } from "react";

const { Trans, useTranslation } = i18next;

const App = props => {
  const [initialized, setInitialized] = useState(false);
  const [name, setName] = useState("Lazer");
  const { i18n, t } = useTranslation();

  useEffect(() => {
    (async () => {
      await i18next.initPromise;
      setInitialized(true);
    })();
  }, []);

  if (!initialized) return <p>Loading...</p>;
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        <Trans>{{ name }}'s NextJS App</Trans>
      </h1>
      <p>
        <Trans>Type your name into the box below!</Trans>
      </p>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
      <button onClick={() => i18n.changeLanguage("fr")}>French</button>
      <p>
        {t("The main server file is")} <code>src/index.js</code>
      </p>
      <p>
        {t("New pages can be added in")} <code>pages/</code>
      </p>
      <p>{props.backendSentence}</p>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  return {
    props: {
      backendSentence: query.backendSentence
    }
  };
}

export default App;

import { t } from "i18next";
import { Trans, useTranslation } from "react-i18next";

const App = () => {
  const { i18n } = useTranslation();

  return (
    <main>
      <h1>{t("welcome")}</h1>
      <p>{t("greeting", { name: "John" })}</p>
      <p>
        <Trans
          i18nKey="likes"
          values={{ likes: Math.floor(Math.random() * 1000) + 1 }}
          components={[<span key="total" />]}
        />
      </p>
      <hr />
      <select
        name="language"
        id="language"
        onChange={(e) => {
          i18n.changeLanguage(e.target.value);
        }}
      >
        <option value="en">English</option>
        <option value="ja">Japanese</option>
      </select>
    </main>
  );
};

export default App;

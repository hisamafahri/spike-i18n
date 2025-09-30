# SPIKE - Internationalization

This repository contain multiple sample/PoC of various approach on application internationalization.

- `./with-i18next`

  Approach 1: This project manage and consume its translation contents directly via its source code.
- `./with-i18next-crowdin`

  Approach 2: This project consume its translation content directly via its source code. But, the translation content management's done via third-party application (in this sample using [Crowdin](https://crowdin.com/)).
- `./with-i18next-locize`

  Approach 3: This project manage and consume its translation contents via third-party application (in this sample using [Locize](https://www.locize.com/)). So each page visit, will call Locize's API to load its translations data.

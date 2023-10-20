# react-i18n

[Edit in Codeflow ⚡️](https://stackblitz.com/~/github.com/pritamkhose/react-i18n)


Steps
---------------

```sh
npm install react-i18next i18next --save
```

Add locales folder with en.json and index.js

In any component like app.js
```sh
import './locales/index';
import { useTranslation } from 'react-i18next';
```

Add above return
```sh
const { t } = useTranslation();
```

In render return
```sh
 <p>{t('dummyNamespace.medium')}</p>
```

dummyNamespace json need to add in all json file as per your module

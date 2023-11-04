import React from 'react';
import './style.css';
import './locales/index';
import { useTranslation } from 'react-i18next';
import MyComponent from './MyComponent';

export default function App() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>{t('dummyNamespace.medium')}</p>
      
      <p>
        https://levelup.gitconnected.com/complete-i18n-guide-to-support-multi-language-for-your-react-native-app-c5ea4e0fa5b3
      </p>
      <p>
        https://github.com/i18next/react-i18next/blob/master/example/react_native_windows/App.js
      </p>
      <p>https://react.i18next.com/latest/using-with-hooks</p>
      <p>https://stackoverflow.com/questions/33468746/whats-the-best-way-to-get-device-locale-in-react-native-ios</p>

      <hr />
      <MyComponent />
    </div>
  );
}

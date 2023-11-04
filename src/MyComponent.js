import React from 'react';
import './style.css';
import { withTranslation } from 'react-i18next';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'Ford',
    };
  }

  render() {
    return (
      <div className="Box">
        <p style={{ color: 'red' }}>
          Hello, {this.props.name} {this.state.brand}
        </p>
        <h2>{this.props.t('dummyNamespace.medium')}</h2>
        <p className="Box_content">
          https://react.i18next.com/legacy-v9/step-by-step-guide
        </p>
        <p>https://www.createit.com/blog/react-i18next-in-class-component/</p>
      </div>
    );
  }
}

export default withTranslation()(MyComponent);

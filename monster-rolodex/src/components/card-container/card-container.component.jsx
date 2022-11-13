import { Component } from 'react';

import './card-container.styles.css';

class CardContainer extends Component {
  render () {
    return (
      <div className={ this.props.className } key={ this.props.id }>
        <img src={ this.props.src }
             alt={ this.props.alt }
        />
        <h2>{ this.props.name }</h2>
        <p>{ this.props.email }</p>
      </div>
    );
  }
}

export default CardContainer;
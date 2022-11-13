import { Component } from 'react';

import './card-list.styles.css';
import CardContainer from '../card-container/card-container.component';

class CardList extends Component {
  render () {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        { monsters.map(monster => {
          const { name, email, id } = monster;
          return (
            <CardContainer className="card-container"
                           key={ id }
                           src={ `https://robohash.org/${ id }?set=set2&size=180x180` }
                           alt={ `monster ${ name }` }
                           name={ name }
                           email={ email }
            />
          );
        }) }
      </div>
    );
  }
}

export default CardList;
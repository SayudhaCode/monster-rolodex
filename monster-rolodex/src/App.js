import { Component } from 'react'
import './App.css'
import CardList from './components/card-lists/card-list.component'
import SearchBox from './components/search-box/search-box.component'

class App extends Component {
  constructor () {
    super()

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()

    this.setState(() => {
      return { searchField }
    })
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(
        users => this.setState(
          () => {return { monsters: users }},
          () => {console.log(this.state)},
        ),
      )
  }

  render () {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter(
      (monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField)
      })
    return (
      <div className="App">
        <SearchBox className="search-box"
                   onChangeHandler={ onSearchChange }
                   placeholder="Search Monsters"
        />
        <CardList monsters={ filteredMonsters }/>
      </div>
    )
  }
}

export default App

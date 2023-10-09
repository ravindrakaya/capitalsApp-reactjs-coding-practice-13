import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    // console.log(event.target.value)
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    return activeCountryAndCapital.country
    // console.log(activeCountryAndCapital.country)
  }

  render() {
    const {activeCapitalId} = this.state

    const country = this.getCountry()

    // console.log(country)

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="card-heading">Countries And Capitals</h1>
          <div className="drop-down-container">
            <select
              className="drop-down-field"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  key={eachItem.id}
                  value={eachItem.id}
                  className="option-el"
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="span-el">is capital of which country?</p>
          </div>
          <p className="country-title">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals

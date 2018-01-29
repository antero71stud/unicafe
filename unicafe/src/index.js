import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
      super()
      this.state = {
        counterHyva: 0,
        counterNeutraali: 0,
        counterHuono: 0
      }
      this.kasvataHuono = this.kasvataHuono.bind(this)
      this.kasvataNeutraali = this.kasvataNeutraali.bind(this)
      this.kasvataHyva = this.kasvataHyva.bind(this)
      this.nollaa = this.nollaa.bind(this)
    }
  
    kasvataHyva() {
      this.setState({ counterHyva: this.state.counterHyva + 1 })
    }
    kasvataNeutraali() {
        this.setState({ counterNeutraali: this.state.counterNeutraali + 1 })
    }
    kasvataHuono() {
        this.setState({ counterHuono: this.state.counterHuono + 1 })
    }
  
    nollaa() {
      this.setState({ counterHyva: 0,
        counterNeutraali: 0, 
        counterHuono: 0 })
    }
  
    render() {
      return (
        <div>
          <div>
            <button onClick={this.kasvataHyva}>
              Hyvä
            </button>
            <button onClick={this.kasvataNeutraali}>
              Neutraali
            </button>
            <button onClick={this.kasvataHuono}>
              Huono
            </button>
            <button onClick={this.nollaa}>
              nollaa
            </button>
          </div>
          <div>Hyvä: {this.state.counterHyva}</div>
          <div>Neutraali: {this.state.counterNeutraali}</div>
          <div>Huono: {this.state.counterHuono}</div>
        </div>
      )
    }
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
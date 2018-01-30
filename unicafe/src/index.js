import React from 'react'
import ReactDOM from 'react-dom'

import NumberFormat from 'react-number-format';



const Display = ({ text }) => <div><h1>{text}</h1></div>

const Button = (props) => {
    return <button onClick={props.lisaa}>{props.arvo}</button>
}


class App extends React.Component {
    constructor() {
      super()
      this.state = {
        counterHyva: 0,
        counterNeutraali: 0,
        counterHuono: 0,
        keskiarvo: 0,
        positiivisia: 0,
        kokonaismaara: 0
      }
    }

    laske = () => {
        console.log('laske')
        this.setState({
            keskiarvo: (this.state.counterHyva + ((this.state.counterHuono) * - 1)) / (this.state.kokonaismaara + 1),
            positiivisia: ((this.state.counterHyva) / (this.state.kokonaismaara + 1)) * 100,
            kokonaismaara: this.state.kokonaismaara + 1
        })
    }

    nappainKasittelija = (nimi) => {
        console.log('nappainkäsittelijä, parametri ',nimi)
        return () => {
            this.setState({
                [nimi]: this.state[nimi] + 1
            })
            this.laske()
        }
    }
    
   
  
    render() {
      return (
        <div>
            <Display text={"Anna palautetta"} />
          
            <Button lisaa={this.nappainKasittelija('counterHyva')} arvo={'Hyvä'} />
            <Button lisaa={this.nappainKasittelija('counterNeutraali')} arvo={'Neutraali'} />
            <Button lisaa={this.nappainKasittelija('counterHuono')} arvo={'Huono'} />
            
            <Display text={"Statistiikka"} />
            <div>
                <Tilastot counterHyva={this.state.counterHyva} counterNeutraali={this.state.counterNeutraali} counterHuono={this.state.counterHuono} keskiarvo={this.state.keskiarvo} positiivisia={this.state.positiivisia} />
            </div>
        </div>
      )
    }
  }

  const Tilastot = (props) => {
    if (props.counterHyva !== 0 || props.counterNeutraali !== 0 || props.counterHuono !== 0) {
        return (
            <div>
                <table>
                    <tbody>
                        <Tilastorivi teksti={'Hyvä'} arvo={props.counterHyva} />
                        <Tilastorivi teksti={'Neutraali'} arvo={props.counterNeutraali} />
                        <Tilastorivi teksti={'Huono'} arvo={props.counterHuono} />
                        <Tilastorivi teksti={'Keskiarvo'} arvo={props.keskiarvo} />
                        <Tilastorivi teksti={'Positiivisia'} arvo={props.positiivisia + '%'} />
                    </tbody>
                </table>
            </div>
        )
    }

    return (
        <div>
            <p>Vielä ei ole annettu yhtään palautetta</p>
        </div>
    )

}

const Tilastorivi = (props) => {
    return (
        <tr>
            <td>{props.teksti}</td>
            <td>{Number.parseFloat(props.arvo).toFixed(2)}</td>
        </tr>
    )
}

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
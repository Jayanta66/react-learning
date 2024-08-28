import { useState } from 'react'
import './App.css'
import componentsImg from './assets/assets/components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function Header(){
  return (

    <header>
      <h1>Header</h1>
    </header>

  );
}

function CoreConcept(props){
  return (

    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>

  );
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <main>

        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>

              <CoreConcept 
                  title="Components" 
                  description="dsfadsfdf"
                  image={componentsImg}
                  />
              <CoreConcept 
                title="dsfasfdaf"
              
              />
              <CoreConcept/>
              <CoreConcept/>
              <CoreConcept/>
              <CoreConcept/>
              <CoreConcept/>

          </ul>


        </section>

      </main>

    </div>
  )
}

export default App

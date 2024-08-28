import { useState } from 'react'
import './App.css'
import componentsImg from './assets/assets/components.png';
import componentsIm from './images/caesar-salad.jpg';
import {CORE_CONCEPTS} from './data.js';


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

//alternate of props

function CoreConceptssss({image, title, description}){
  return (

    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>

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
                title="Salad"
                description="food"
                image={componentsIm}
              />
              <CoreConceptssss
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image}
              />
              
              <CoreConceptssss
                title={CORE_CONCEPTS[1].title}
                description={CORE_CONCEPTS[1].description}
                image={CORE_CONCEPTS[1].image}
              />

              <CoreConceptssss
                title={CORE_CONCEPTS[2].title}
                description={CORE_CONCEPTS[2].description}
                image={CORE_CONCEPTS[2].image}
              />

              <CoreConceptssss
                title={CORE_CONCEPTS[3].title}
                description={CORE_CONCEPTS[3].description}
                image={CORE_CONCEPTS[3].image}
              />

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

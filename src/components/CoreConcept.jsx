// export default function CoreConcept(props){
//     return (
  
//       <li>
//         <img src={props.image} alt={props.title}/>
//         <h3>{props.title}</h3>
//         <p>{props.description}</p>
//       </li>
  
//     );
//   }

  //alternate of props

  export default function CoreConceptssss({image, title, description}){
  return (


    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>

    </li>

  );

}
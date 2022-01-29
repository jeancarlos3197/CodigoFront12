import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css'

function Header(props){
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

function Lista(props){
  return (
    <ul>
      {props.items.map((alumno, index) => (
        <li key={index}>{alumno}</li>
      ))}
    </ul>
  );
}


function Cards(props){
  return (
    <div>
      {props.items.map( (element, index) => (
        <div key={index}>
          <img width="200" height="200" src={element.imagen} />
          <div>
            <h2>{element.titulo}</h2>
            <p>{element.descripcion}</p>
            <Lista items={element.destinos} />
          </div>
        </div>
      ))}
    </div>
  );
}

const listado = [
  {
    imagen:"https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
    titulo: "TITULO",
    descripcion : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
    pharetra pharetra, eget sit sed nisi massa. Sit dignissim diam
    lacinia odio vitae enim sit massa. Pulvinar amet viverra sed
    scelerisque sit. Risus volutpat tristique quis ut interdum. In
    gravida eu, vulputate tellus ac. Augue purus nisl scelerisque erat
    at quam mi est nisl. Massa malesuada mauris varius gravida ac
    faucibus fermentum auctor.`,
    destinos : ["OLLAYTAMTAMBO", "PIZZA", "MACHU PICCHU"],
  },
  {
    imagen:"https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
    titulo: "TITULO",
    descripcion : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
    pharetra pharetra, eget sit sed nisi massa. Sit dignissim diam
    lacinia odio vitae enim sit massa. Pulvinar amet viverra sed
    scelerisque sit. Risus volutpat tristique quis ut interdum. In
    gravida eu, vulputate tellus ac. Augue purus nisl scelerisque erat
    at quam mi est nisl. Massa malesuada mauris varius gravida ac
    faucibus fermentum auctor.`,
    destinos : ["OLLAYTAMTAMBO", "PIZZA", "MACHU PICCHU"],
  },
  {
    imagen:"https://gestion.pe/resizer/uwUASF0Zl47Qx0xmzlnny7_w4oQ=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/BPT2O6BPWVB4XJIHMQP3SKV3GM.jpg",
    titulo: "TITULO",
    descripcion : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
    pharetra pharetra, eget sit sed nisi massa. Sit dignissim diam
    lacinia odio vitae enim sit massa. Pulvinar amet viverra sed
    scelerisque sit. Risus volutpat tristique quis ut interdum. In
    gravida eu, vulputate tellus ac. Augue purus nisl scelerisque erat
    at quam mi est nisl. Massa malesuada mauris varius gravida ac
    faucibus fermentum auctor.`,
    destinos : ["OLLAYTAMTAMBO", "PIZZA", "MACHU PICCHU"],
  }
];

function Main(){
  return (
    <main>
      <Cards items={listado}/>
    </main>
  );
}

function Footer(props){
  return (
    <footer>
      <p>{props.copyright}</p>
      <p>{props.author}</p>
    </footer>
  );
}

function App(){
  return (
    <div className='wrap'>
      <React.StrictMode>
        <Header title="DESTINOS DEL MUNDO"/>
          <Main />
        <Footer copyright="Todos los derechos Resevados" author="Creado por Jean Carlos"/>
      </React.StrictMode>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

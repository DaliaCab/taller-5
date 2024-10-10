//PUNTO 1 DE PROFILECARD
// import React from 'react';
// import ProfileCard from './components/ProfileCard';

// function App() {
//   return (
//     <div className="App">
//       <h1>ProfileCard</h1>
//       <ProfileCard 
//         name="Dalia Cabieles" 
//         description="Desarrolladora frontend apasionada por la tecnología." 
//       />
//     </div>
//   );
// }

// export default App;


//PUNTO 2 DE PRODUCTCARD---------------------------------------------------------------------------------------------
// import React from 'react';
// import styled from 'styled-components';
// import ProductCard from './components/ProductCard';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column; 
//   align-items: center; 
//   justify-content: center; 
//   height: 100vh; 
//   background-color: rgb(136, 199, 124); /* Fondo */
// `;

// const Title = styled.h1`
//   margin-bottom: 20px; 
//   font-size: 38px;
//   color: #333;
//   text-align: center; 
//   font-family: 'Times New Roman';
// `;

// function App() {
//   const handleBuyClick = () => {
//     alert('Producto comprado!');
//   };

//   return (
//     <Container>
//       <Title>Productos </Title>
//       <ProductCard 
//         productName="Tomate" 
//         onBuyClick={handleBuyClick} 
//       />
//     </Container>
//   );
// }

// export default App;


//PUNTO 3 DE CARD----------------------------------------------------------------------------------------------------
// import React from 'react';
// import Card from './components/Card';
// import styles from './styles/Card.module.css';

// function App() {
//   const handleButtonClick = () => {
//     alert('Miau clicked (:0!'); 
//   };

//   return (
//     <div className={styles.contenedorPag}>
//       <h1 className={styles.titulo}>Card</h1>
//       <Card 
//         title="Drako" 
//         description="Sus actividades favoritas son: Jugar con su ratón, esconderse en cajas y dormir."
//         onButtonClick={handleButtonClick} 
//       />
//     </div>
//   );
// }

// export default App;

//PUNTO EXTRA TAILWIND----------------------------------------------------------------------------------------------------
// import './tailwind.css';
// import React from 'react';
// import Header from './components/Header';

// function App() {
//   return (
//     <div>
//       <Header />
//       <main className="p-4">
//         <h2>Contenido Principal</h2>
//         {/* Resto de tu contenido */}
//       </main>
//     </div>
//   );
// }

// export default App;



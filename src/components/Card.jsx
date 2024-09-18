import React from 'react';
import '../css/Card.css'; // Importing CSS for styling

const Card = ({ image, title }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <h2 className="card-title">{title}</h2>
        </div>
    );
};

export {Card};



// // CardCarousel.js
// import React from 'react';
// import { Container, Row, Col} from 'react-bootstrap';

// const CardCarousel = () => {
//   const cards = [
//     { title: 'Client Acquisition', imageUrl: 'https://www.saveeat.co/wp-content/uploads/2020/02/attirer-les-clients.jpg' },
//     { title: 'Client Engagement', imageUrl: '/path/to/image2.jpg' },
//     { title: 'Event Management', imageUrl: '/path/to/image3.jpg' },
//     // Add more cards as needed
//   ];

//   return (
    
//     <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
//       <div className="carousel-inner">
//         {cards.map((card, index) => (
//           <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
//             <div className="d-flex justify-content-center">
//               <div className="card" style={{ width: '10rem' }}>
//                 <img src={card.imageUrl} className="card-img-top" alt={card.title} />
//                 <div className="card-body text-center">
//                   <h5 className="card-title">{card.title}</h5>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <button className="carousel-control-prev" type="button" data-bs-target="#cardCarousel" data-bs-slide="prev">
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button className="carousel-control-next" type="button" data-bs-target="#cardCarousel" data-bs-slide="next">
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
    
//   );
// };

// export {CardCarousel};

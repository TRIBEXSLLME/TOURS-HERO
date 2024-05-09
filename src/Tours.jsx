/* eslint-disable react/prop-types */
import Tour from './Tour'; // Import the Tour component

const Tours = ({ tours, error ,removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} 
          removeTour={removeTour} />
        ))}
        {
          error? <p>Error loading tour</p>: ""
        }
      </div>
      
    </section>
  );
};

export default Tours;

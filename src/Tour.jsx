/* eslint-disable no-undef */
import { useState } from 'react';

const Tour = ({id,image,info,price,name,removeTour}) => {

  const [readMore,setReadMore] = useState(false)
  
  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className='tour-price'>${price}</h4>

      </div>
      <p>
        { readMore ? info :`${info.substring(0,200)}...`
        }
        <button onClick={()=>setReadMore(!readMore)}>
          {readMore ? 'show less':'show more'}
        </button>
      </p>
      <button className='delete-btn' onClick={()=>removeTour(id)}>
        not interested 
      </button>
    </footer>

  </article>

};


Tour.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  removeTour: PropTypes.func.isRequired, // Function type for removeTour prop
};


export default Tour;

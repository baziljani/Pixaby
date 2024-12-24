// import React, { useEffect, useState } from 'react'
// import './style/ImageGallery.scss'

// const ImageGallery = ({search}) => {
//     const [data, setData] =useState([]);
//     useEffect(() => {
//     if (search) {
//       fetch(
//        `https://pixabay.com/api/?key=47616086-e39dbc66335bedf9ecf5c3b3c&q=${search}+flowers&image_type=photo&pretty=true`)
//         .then((res) => res.json())
//         .then((d) => setData(d.hits))
//         .catch((error) => console.error('Error fetching data:', error));
//     }
//   }, [search]);

//   return (
//       <div className="image-gallery">
//           {data.map((item, index) => (
//               <div key={index} className='image-container'>
//                   <img src={item.webformatURL} alt={item.tags}
//                       height="200"
//                       width="200"
//                   />
//         </div>
//     ))}
//     </div>
//   )
// }

// export default ImageGallery
import React, { useEffect, useState } from 'react';
import './style/ImageGallery.scss';

const ImageGallery = ({ search, filter, onImageClick }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
      if (search) {
        const filterParam = filter !== 'all' ? `&image_type=${filter}` : '';
      fetch(
        `https://pixabay.com/api/?key=47616086-e39dbc66335bedf9ecf5c3b3c&q=${search}+flowers&image_type=photo&pretty=true`
      )
        .then((res) => res.json())
        .then((d) => setData(d.hits))
        .catch((error) => console.error('Error fetching data:', error));
    }
  }, [search, filter]);

  return (
    <div className="image-gallery">
      {data.map((item, index) => (
        <div
          key={index}
          className="image-container"
          onClick={() => onImageClick(item)}
        >
          <img
            src={item.webformatURL}
            alt={item.tags}
            height="200"
            width="200"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
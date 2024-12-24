// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import ImageGallery from './components/ImageGallery'
// import './App.scss'

// const App = () => {
//   const [search, setSearch] = useState("");

//   return (
//     <div className="app">
//       <Navbar/>
//         <div className="search-container">
//           <input
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search for images..."
//         />
//           </div>
//         <ImageGallery search={search}/>
//         <Footer/>
//         </div>
//   )
// }

// export default App
// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import ImageGallery from './components/ImageGallery';
// import './App.scss';
// import ImageModal from "./components/ImageModal.jsx";

// const App = () => {
//   const [search, setSearch] = useState("");
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <div className="app">
//       <Navbar />
//       <div className="search-container">
//         <input
//           type="text"
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search for images...main"
//         />
//       </div>
//       <ImageGallery search={search} onImageClick={setSelectedImage} />
//       {selectedImage && (
//         <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import ImageGallery from './components/ImageGallery';
// import './App.scss';
// import ImageModal from "./components/ImageModal.jsx";

// const App = () => {
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState('all');
//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <div className="app">
//       <Navbar search={search} setSearch={setSearch} />
//       <ImageGallery search={search} onImageClick={setSelectedImage} />
//       {selectedImage && (
//         <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
//       )}
//       <Footer />
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageGallery from './components/ImageGallery';
import './App.scss';
import ImageModal from './components/ImageModal';

const App = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all'); // New state for dropdown
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="app">
      <Navbar search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
      <ImageGallery search={search} filter={filter} onImageClick={setSelectedImage} />
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
      <Footer />
    </div>
  );
};

export default App;


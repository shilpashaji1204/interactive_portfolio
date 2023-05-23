import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { Contact,  } from '../components';

// import { Contact } from "../components/Contact";

// StarsCanvas

const Globe = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Globe;






// import React from 'react';

// const Globe = () => {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// };

// export default Globe;
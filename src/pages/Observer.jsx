// import React, { useState, useEffect } from 'react';
import React from 'react';
import useOnScreen from '../utils/useOnScreen';

// rootMargin = '0px'
// Hook

// Usage
function Oberver() {
  // Ref for the element that we want to detect whether on screen
  //   const ref = useRef();
  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.
  const [setRef, visible] = useOnScreen({ threshold: 0.5 });
  const [setRef1, visible1] = useOnScreen({ threshold: 0.5 });

  return (
    <div>
      <div style={{ height: '100vh' }}>
        <h1>Scroll down to next section 👇</h1>
      </div>
      <div
        ref={setRef}
        style={{
          height: '100vh',
          backgroundColor: visible ? '#23cebd' : '#efefef',
        }}
      >
        {visible ? (
          <div>
            <h1>Hey I'm on the screen</h1>
            <img
              src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif"
              alt="an alt prop"
            />
          </div>
        ) : (
          <h1>Scroll down 300px from the top of this section 👇</h1>
        )}
      </div>
      <div
        ref={setRef1}
        style={{
          height: '100vh',
          backgroundColor: visible1 ? '#23cebd' : '#efefef',
        }}
      >
        {visible1 ? (
          <div>
            <h1>Hey I'm on the screen</h1>
            <img
              src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif"
              alt="an alt prop"
            />
          </div>
        ) : (
          <h1>Scroll down 300px from the top of this section 👇</h1>
        )}
      </div>
    </div>
  );
}

export default Oberver;

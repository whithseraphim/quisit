import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // This function will be executed after the component has rendered
    console.log('Component rendered');
    
    // You can perform any side effects here, such as fetching data or subscribing to events
    // Make sure to clean up any resources in the return function
    
    return () => {
      // This function will be executed when the component is unmounted
      console.log('Component unmounted');
      
      // Clean up any resources here, such as cancelling subscriptions or clearing timers
    };
  }, []); // Empty array as the second argument means the effect only runs once, after the initial rendering

  return (
    <div>
      {/* Component content */}
    </div>
  );
}

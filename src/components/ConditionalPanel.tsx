
    import React, { ReactNode } from 'react';

    const ConditionalPanel = ({ isVisible, children } : { isVisible: boolean; children: ReactNode }) => {
      return (
        <div 
          className={`transform transition-all duration-300 ease-in-out
            ${isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full absolute'}`}
        >
          {children}
        </div>
      );
    };
    
    export default ConditionalPanel;
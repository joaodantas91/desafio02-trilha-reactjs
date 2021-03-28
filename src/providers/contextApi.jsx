import React from 'react';

export const ContextApi = React.createContext({});

export const ContextApiProvider = (props) => {
  const user = {
    name: 'joao'
  }
  return (
    <ContextApi.Provider value={{teste}}>
      {props.children}
    </ContextApi.Provider>
  )
}
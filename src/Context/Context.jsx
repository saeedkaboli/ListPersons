import React from 'react';

const SimpleContext=React.createContext({
state:{},
HandlerAdding:()=>{},
HandlerDelete:()=>{},
Handlerchange:()=>{},
HandlerShow:()=>{},
Hide:{},
Title:{}
});

export default SimpleContext;
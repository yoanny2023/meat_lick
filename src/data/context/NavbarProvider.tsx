import React, { useState } from 'react'
export let contextNavBar = React.createContext({} as any);

export function NavbarProvider(props:any) {

const[menuOpen,setMenuOpen] = useState(false);
  
 const ctx = {
  menuOpen,
  setMenuOpen,
  openMenuHandler(){
    console.log("i got clicked");
    setMenuOpen((menuOpen) => !menuOpen)
  }
 }

 return (
     <contextNavBar.Provider value={ctx}>
     {props.children}
     </contextNavBar.Provider>
 )
}



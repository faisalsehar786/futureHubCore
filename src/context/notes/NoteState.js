import NoteContext from "../notes/noteContext";
import { useState } from "react";

const NoteState = (props) => {
  
  const [subMenuRecive, setsubMenuRecive] = useState('');
  const [titleSubmenu, setTitleSubmenu] = useState('');


  let subMenueClickReciver =(children,
    to,
    title,
    icon,
    fontIcon,
    hasBullet,
    bsTitle)=>{
    setsubMenuRecive(children);
    setTitleSubmenu(title);

   
  }

  return (
    <NoteContext.Provider value={{ subMenuRecive,titleSubmenu,subMenueClickReciver}}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;
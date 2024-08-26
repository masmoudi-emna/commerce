// components/Button1.js
"use client";

 const Button1 = ({ texte, onClick }) => {
   return (
     <button onClick={onClick}>
       {texte} 
     </button>
   );
 };
 
 export default Button1; 
 
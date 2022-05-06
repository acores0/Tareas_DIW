/*
   Deseño de interfaces Web
   Unidad Didáctica 8 - Interacción
   Práctica 1

   Página Web del Cine Penguin Royal Wedding 
   Autor: Marina Vega Vázquez
   Fecha: 05/04/2021

   Filename: cp_spin.js

   Purpose: El objetivo de este programa es sincronizar la reproducción 
           y la pausa de la animación de giro con la reproducción y la pausa del reproductor de vídeo
*/

window.onload = function() {
   document.getElementById("rotarVideo").onclick=pausePlayAnimVid;
}

function pausePlayAnimVid() {
   if (document.getElementById("rotarVideo").checked) {
      document.getElementsByTagName("video")[0].play();
      document.getElementsByTagName("video")[0].loop=true;      
   } else {
      document.getElementsByTagName("video")[0].pause();
      document.getElementsByTagName("video")[0].loop=false;      
   }
}
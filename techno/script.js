 'use strict';


 // -------------------------------
 // Function afficherSolution
 // -------------------------------
function afficherSolutions()
{
   // alert("COUCOU") ;
   console.log("Coucou") ; 

    var elements ; 
    elements = document.getElementsByClassName('reponse') ; 
      
    Array.prototype.forEach.call(elements, function(element)
    {
        element.classList.remove ("reponse") ;          
} );

}

// -----------------------------------------
// Evènements
// -----------------------------------------
 document.getElementById("solutionsBTN").addEventListener('click', afficherSolutions) ;


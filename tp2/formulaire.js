function  validation(){
	
 if (document.getElementById("nom").value.length>4 && document.getElementById("prénom").value.length>4 
    && document.getElementById("date de naissance").value.length>9 && document.getElementById("adresse").value.length>4
    && document.getElementById("mail").value.length>4)
    {
	document.getElementById("resultat").style.backgroundColor="green";
	document.getElementById("error").setAttribute("hidden","hidden");
    document.getElementById("resultat").removeAttribute("hidden");
    document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value;
    }	
	
 if (document.getElementById("nom").value.length<5 || document.getElementById("prénom").value.length<5 
    || document.getElementById("date de naissance").value.length<10 || document.getElementById("adresse").value.length<5
    || document.getElementById("mail").value.length<5)
  
  
   {
	 document.getElementById("error").style.borderColor="black";
	 document.getElementById("error").style.backgroundColor="pink";
     document.getElementById("resultat").setAttribute("hidden","hidden");
     document.getElementById("error").removeAttribute("hidden");
     document.getElementById("error").innerHTML = "La saisie de tout les champs est obligatoire";
		
   }
   
	
}



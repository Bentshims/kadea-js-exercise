alert(`A fond sur JS ?`);


// ecrire une boucle qui dit à l'itulisateur si il a enter un nombre pair ou impaire et sortir de la boucle uniquement si il entre "q" ou "Q"
for(;;){
    let number_use = prompt(`Entrer un nombre ou 'q' pour quité : `).trim() //pour evitez que les espace n'affecte pas la comparaison;
    let number = Number(number_use);


    if (number_use.toLowerCase() === `q`) {
        alert(`quiter le programme`)
        break    
    }
    else if (isNaN(number) && number_use.toLocaleLowerCase() !== `q`) {
        alert(`Vous n'avais pas entrer un nombre`)

    } 
    else if (number % 2 === 0) {
        alert(`le nombre entrer est pair`)
        
    }
    
    else{
        alert(`le nombre entrer est impair`)
        
    }
        
        
}
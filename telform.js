$(document).ready(function() {
    $("#Form").submit(function() {
        var numtel = $('input[name="phone-Primary-1"]').val(); //adaptez le sélecteur
        var numtelsplit = numtel.split("");
        var k;
        numtel = numtelsplit[0];
        for (k = 1; k < numtelsplit.length; k++) //premier passage étape de vérification
        {
            if (numtelsplit[k] == " ") {
                numtelsplit.splice(k, 1);
            }
        }
        for (k = 1; k < numtelsplit.length; k++) {
            if (k % 2 == 0) {
                numtel = numtel + " " + numtelsplit[k];
            } else {
                numtel = numtel + numtelsplit[k];
            }
        }
        $('input[name="phone-Primary-1"]').val(numtel);
    });
});
         
         

        
   
        



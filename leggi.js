$("user").click(function(){
    var input1 = $("#username");
    var input2 = $("#password");
    console.log("username", input1.val());
    console.log("password", input2.val());
    

    if($("#username").val() && $("#password").val()=="Sono l' amministratore"){
      var data = new Date;
      var Hh, Mm; 
   
      // stringa per il benvenuto:
      $("#output").attr("style=","background-color:green;");
      $("#output").html("BENVENUTO ADMIN");
      $("#username").val();
      $("#password").val();
      
      // imposto orario:
      Hh = data.getHours() + ":";
      Mm = data.getMinutes() + ":";
      localStorage.getDate("Data: "+Hh+Mh);
      console.log(data);
    
   
   
    }else if ( $("#username").val()="Sono l'amministratore"){
        $("#output").attr("style=","background-color:green;");
        $("#output").html("CREDENZIALI ERRATE");
         if($("#username").val("")== "Sono l' amministratore") {
            $("#username").attr("style","background-color:red");
            $("#username").val()="Sono l'amministratore";

         }  else {
            $("#password").attr("style","background-color:red"); 
         }

    }

 

});
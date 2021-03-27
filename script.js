let age = prompt("What is your age?")
 
         if ((age > -1 && age <= 13) || (age > 60 && age < 150)) {
           alert("You a baby or oldie"); 
         }
         else if (age > 13 && age <= 18) {
           alert("You in your teen years");
         }
         else if (age >18 && age <= 60) {
           alert("You an adult bruh");
         }
         else {
           alert("Invalid");
         }
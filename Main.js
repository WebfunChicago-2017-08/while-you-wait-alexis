function whileYouWait(daysLeft){

    while(daysLeft >= 0){
        if(daysLeft > 30){
            console.log(daysLeft +" days until my birthday. Such a long time... :(")
        } else if(daysLeft <= 30 && daysLeft >= 5){
            console.log(daysLeft + " days until my birthday. OMG! So cool...")
        } else if(daysLeft < 5 && daysLeft > 0){
            console.log(daysLeft + "DAYS UNTIL MY BIRTHDAY!!!")
        } else if(daysLeft == 0){
            console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪")
        }
        daysLeft -= 1;
    }
}

whileYouWait(34);
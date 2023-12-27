 function updateTimer() {
    // Set the date we're counting down to
    var countDownDate = new Date().getTime() + (72 * 24 * 60 * 60 * 1000); // 72 days in milliseconds

    // Update the countdown every 1 second
    var x = setInterval(function() {

      // Get the current date and time
      var now = new Date().getTime();

      // Calculate the remaining time
      var distance = countDownDate - now;

      // Calculate days, hours, minutes, and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById("days").querySelector(".value").innerHTML = days;
      document.getElementById("hours").querySelector(".value").innerHTML = hours;
      document.getElementById("minutes").querySelector(".value").innerHTML = minutes;
      document.getElementById("seconds").querySelector(".value").innerHTML = seconds;

      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("days").querySelector(".value").innerHTML = "0";
        document.getElementById("hours").querySelector(".value").innerHTML = "0";
        document.getElementById("minutes").querySelector(".value").innerHTML = "0";
        document.getElementById("seconds").querySelector(".value").innerHTML = "0";
      }
    }, 1000); // Update every 1 second
  }

  // Call the function to start the timer
  updateTimer();
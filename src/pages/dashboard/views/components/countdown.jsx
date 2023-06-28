import HomeButtom from "./homeButton";

const Countdown = () => {
  // Set the date we're counting down to
  var countDownDate = new Date("Sep 3, 2023 16:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML =
      days + "D " + hours + "H " + minutes + "Min " + seconds + "S ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

  const buttonStyle = {
    fontSize: "3vw",
    marginTop: "15px",
    marginBottom: "15px",
  };

  return <HomeButtom
  style={buttonStyle}
  id="demo"
  />;
};

export default Countdown;
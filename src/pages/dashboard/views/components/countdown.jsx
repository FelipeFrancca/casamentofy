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
    document.getElementById("days").innerHTML = days + "D ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("days").innerHTML = "EXPIRED";
    }
    document.getElementById("hours").innerHTML = hours + "H ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("hours").innerHTML = "EXPIRED";
    }
    document.getElementById("min").innerHTML = minutes + "Min ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("min").innerHTML = "EXPIRED";
    }
    document.getElementById("sec").innerHTML = seconds + "S ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("sec").innerHTML = "EXPIRED";
    }
  }, 1000);

  const buttonStyle = {
    fontSize: "125%",
    marginTop: "15px",
    marginBottom: "15px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 14,
      }}
    >
      <HomeButtom style={buttonStyle} id="days" />

      <HomeButtom style={buttonStyle} id="hours" />

      <HomeButtom style={buttonStyle} id="min" />

      <HomeButtom style={buttonStyle} id="sec" />
    </div>
  );
};

export default Countdown;

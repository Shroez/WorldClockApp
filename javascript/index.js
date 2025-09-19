function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = ` ${losAngelesTime.format("h:mm:ss")}
    <small> ${losAngelesTime.format("A")} </small>`;
  //Mexico City
  let mexicoCityElement = document.querySelector("#mexico-city");
  let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
  let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
  let mexicoCityTime = moment().tz("America/Mexico_City");

  mexicoCityDateElement.innerHTML = mexicoCityTime.format("MMMM Do, YYYY");
  mexicoCityTimeElement.innerHTML = ` ${mexicoCityTime.format("h:mm:ss")}
    <small> ${mexicoCityTime.format("A")} </small>`;

  /// Peru
  let peruElement = document.querySelector("#peru");
  let peruDateElement = peruElement.querySelector(".date");
  let peruTimeElement = peruElement.querySelector(".time");
  let peruTime = moment().tz("America/Lima");

  peruDateElement.innerHTML = peruTime.format("MMMM Do, YYYY");
  peruTimeElement.innerHTML = peruTime.format("h:mm:ss [<small>]A[</div>]");

  //Argentina
  let argentinaElement = document.querySelector("#argentina");
  let argentinaDateElement = argentinaElement.querySelector(".date");
  let argentinaTimeElement = argentinaElement.querySelector(".time");
  let argentinaTime = moment().tz("America/Argentina/Buenos_Aires");

  argentinaDateElement.innerHTML = argentinaTime.format("MMMM Do, YYYY");
  argentinaTimeElement.innerHTML = argentinaTime.format(
    "h:mm:ss [<small>]A[</div>]"
  );
}

updateTime();
setInterval(updateTime, 1);

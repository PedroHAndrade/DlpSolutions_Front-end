const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

const realFileBtn = document.getElementById("real-file");
const customBtn = document.getElementById("custom-button");
const customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function() {
  realFileBtn.click();
});

realFileBtn.addEventListener("change", function() {
  if (realFileBtn.value) {
    customTxt.innerHTML = realFileBtn.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  } else {
    customTxt.innerHTML = "No file chosen, yet.";
  }
});


function postMethod(url, body) {
  console.log("Body=", body)
  let request = new XMLHttpRequest()
  request.open("POST", url, true)
  request.setRequestHeader("Content-type", "application/json")
  request.send(JSON.stringify(body))

  

  request.onload = function() {
      alert(this.responseText)
      console.log(this.responseText)
  }

  return request.responseText
}

function registerText() {
  event.preventDefault()
  let url = "http://localhost:8080/dlp/message"
  let text = document.getElementById("textToBeGrabbed").value
  console.log(text)

  body = {
      "text": text
  }

  postMethod(url, body)
}


function registerFile() {
  event.preventDefault()
  let url = "http://localhost:8080/dlp/mock"
  let text = document.getElementById("thefile").value
  console.log(text)

  body = {
      "text": text
  }

  postMethod(url, body)
}

function alertFilename()
{
    var thefile = document.getElementById('thefile');
    alert(thefile.value);
    registerFile();
}

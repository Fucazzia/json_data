let players =[]
let cookielength=0
let cookies = document.cookie.split("; ")
console.log(cookies)
for(i=0;i<cookies.length;i++){
  if (cookies[i].length<2){}else{
  cookielength++
  let temp = cookies[i].slice(2)
  drawHtml(JSON.parse(temp))}
}

class Player {
    constructor(image, name, age, rating, kd, hs, adr, kast) {
        this.id = cookielength;cookielength++
        this.image = image
        this.name = name
        this.age = age
        this.rating = rating
        this.kd = kd
        this.hs = hs
        this.adr = adr
        this.kast = kast
    }
}

function addNewPlayer() {
    let arg2 = document.getElementById('player-image').value
    let arg3 = document.getElementById('player-name').value
    let arg4 = document.getElementById('player-age').value
    let arg5= document.getElementById('player-rating').value
    let arg6 = document.getElementById('player-kd').value
    let arg7 = document.getElementById('player-hs').value
    let arg8 = document.getElementById('player-adr').value
    let arg9 = document.getElementById('player-kast').value
    if (arg2==""||arg3==""||arg4==""||arg5==""||arg6==""||arg7==""||arg8==""||arg9==""){
        alert('Fill out all info')
    } else {var newPlayer = new Player(arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9)
        drawHtml(newPlayer)

        setCookie(newPlayer.id,JSON.stringify(newPlayer),1)}
    
}

function drawHtml(data){
let playersWrapper = document.getElementById('players-wrapper')
let playerWrapper = document.createElement('div')

let playerName = document.createElement('h3')
playerName.innerHTML = data.name
playerWrapper.appendChild(playerName)

let playerImage = document.createElement('img')
playerImage.src = data.image
playerImage.alt = "Spiller Billede"
playerWrapper.appendChild(playerImage)

let playerAge = document.createElement('p')
playerAge.innerHTML = "Alder: " + data.age
playerWrapper.appendChild(playerAge)

let playerRating = document.createElement('p')
playerRating.innerHTML = "Rating: " + data.rating
playerWrapper.appendChild(playerRating)

let playerHS = document.createElement('p')
playerHS.innerHTML = "HS: " +data.hs
playerWrapper.appendChild(playerHS)

let playerKD = document.createElement('p')
playerKD.innerHTML = "KD: " +data.kd
playerWrapper.appendChild(playerKD)

let playerADR = document.createElement('p')
playerADR.innerHTML = "ADR: " + data.adr
playerWrapper.appendChild(playerADR)

let playerKast = document.createElement('p')
playerKast.innerHTML="Kast: " +data.kast
playerWrapper.appendChild(playerKast)

playersWrapper.appendChild(playerWrapper)
}

function setCookie(cname, cvalue, exday) {
    const d = new Date();
    d.setTime(d.getTime() + (exday*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
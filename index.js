//  this function is used to get the data for whatver you put the argument as, and creates the divs and its content. 
function getData(string) {
    $('#nav-shooter').empty();
    $('#nav-sports').empty();
    $('#nav-card').empty();
    $('#nav-home').empty();
let setting = {
	async: true,
	crossDomain: true,
	url: `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${string}`,
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '497192c640mshf59c205dbdf7e60p14e4dbjsnfa30c7d4106f',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
$.ajax(setting).done(function (response) {
    for(var i = 0; i < response.length; i++) {
        let game = response[i];
        let gameCont = document.createElement("div");
        gameCont.setAttribute('class', 'game-cont');
        let homeTab = document.querySelector(`#nav-${string}`);
        homeTab.appendChild(gameCont);
        let gameImg = document.createElement('img');
        gameImg.setAttribute('class', 'game-image');
        gameImg.src = game.thumbnail;
        gameCont.appendChild(gameImg);
        let gameTitle = document.createElement("h5");
        if (game.title.length > 25) {
            gameTitle.setAttribute('class', 'text-truncate')
            gameTitle.textContent = game.title;
        } else {
        gameTitle.textContent = game.title;}
        gameCont.appendChild(gameTitle);
        let gameDescCont = document.createElement('div');
        gameDescCont.setAttribute('class', 'game-desc')
        gameCont.appendChild(gameDescCont);
        let gameDesc = document.createElement("p");
        gameDesc.setAttribute('class', 'text-truncate');
        gameDesc.textContent = game.short_description;
        gameDescCont.appendChild(gameDesc);
        let gameLink = document.createElement('a');
        gameLink.setAttribute('id', 'link')
        gameLink.href= game.game_url;
        gameCont.appendChild(gameLink);
        let iconPubCont = document.createElement('div');
        iconPubCont.setAttribute('class', 'd-flex flex-row justify-content-center');
        gameCont.appendChild(iconPubCont);
        let gameIcon = document.createElement('img');
        gameIcon.setAttribute('class', 'game-icon')
        if(game.platform !== "PC (Windows)") {
        gameIcon.src = "https://pic.onlinewebfonts.com/svg/img_527746.png"
        iconPubCont.appendChild(gameIcon);
        } else {
        gameIcon.src = "https://icon-library.com/images/computer-icon/computer-icon-9.jpg"
        iconPubCont.appendChild(gameIcon);
        }
        let gamePub = document.createElement('p');
        if(game.publisher.length > 25) {
            gamePub.setAttribute('class','text-truncate');
            gamePub.textContent = game.publisher;
        } else {
        gamePub.setAttribute('class','game-pub');
        gamePub.textContent = game.publisher;}
        iconPubCont.appendChild(gamePub);
    }
});

}

// this function will be used to create the home tabs div and contents.
function getHome() {

    $('#nav-home').empty();
const settings = {
	async: true,
	crossDomain: true,
	url: 'https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '497192c640mshf59c205dbdf7e60p14e4dbjsnfa30c7d4106f',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
    for(var i = 0; i < response.length; i++) {
        let game = response[i];
        let gameCont = document.createElement("div");
        gameCont.setAttribute('class', 'game-cont');
        let homeTab = document.querySelector("#nav-home");
        homeTab.appendChild(gameCont);
        let gameImg = document.createElement('img');
        gameImg.setAttribute('class', 'game-image');
        gameImg.src = game.thumbnail;
        gameCont.appendChild(gameImg);
        let gameTitle = document.createElement("h5");
        if (game.title.length > 25) {
            gameTitle.setAttribute('class', 'text-truncate')
            gameTitle.textContent = game.title;
        } else {
        gameTitle.textContent = game.title;}
        gameCont.appendChild(gameTitle);
        let gameDescCont = document.createElement('div');
        gameDescCont.setAttribute('class', 'game-desc')
        gameCont.appendChild(gameDescCont);
        let gameDesc = document.createElement("p");
        gameDesc.setAttribute('class', 'text-truncate');
        gameDesc.textContent = game.short_description;
        gameDescCont.appendChild(gameDesc);
        let gameLink = document.createElement('a');
        gameLink.setAttribute('id', 'link')
        gameLink.href= game.game_url;
        gameCont.appendChild(gameLink);
        let iconPubCont = document.createElement('div');
        iconPubCont.setAttribute('class', 'd-flex flex-row justify-content-center');
        gameCont.appendChild(iconPubCont);
        let gameIcon = document.createElement('img');
        gameIcon.setAttribute('class', 'game-icon')
        if(game.platform !== "PC (Windows)") {
        gameIcon.src = "https://pic.onlinewebfonts.com/svg/img_527746.png"
        iconPubCont.appendChild(gameIcon);
        } else {
        gameIcon.src = "https://icon-library.com/images/computer-icon/computer-icon-9.jpg"
        iconPubCont.appendChild(gameIcon);
        }
        let gamePub = document.createElement('p');
        if(game.publisher.length > 25) {
            gamePub.setAttribute('class','text-truncate');
            gamePub.textContent = game.publisher;
        } else {
        gamePub.setAttribute('class','game-pub');
        gamePub.textContent = game.publisher;}
        iconPubCont.appendChild(gamePub);
    }
});
}
getHome();

//  this section queries for the nav bars, and adds an event lister that will run the getData function.
var shooterTab = document.querySelector("#nav-shooter-tab");
shooterTab.addEventListener('click', function(e) {
    let tempString = "";
    tempString += e.target.text
    getData(tempString)
})

var sportsTab = document.querySelector("#nav-sports-tab");
sportsTab.addEventListener('click', function(e) {
    let tempString = "";
    tempString += e.target.text
    getData(tempString)
})

var cardTab = document.querySelector("#nav-card-tab");
cardTab.addEventListener('click', function(e) {
    let tempString = "";
    tempString += e.target.text
    getData(tempString)
})

var home = document.querySelector('#nav-home-tab');
home.addEventListener('click', getHome);

// adds an event listener to the whole page, and when a game container is clicked it will open a new tab to the game
document.addEventListener('click', function(event) {
    const targetElement = event.target;
    const gameContElement = targetElement.closest('.game-cont');
    if (gameContElement) {
        const linkElement = gameContElement.querySelector('a');
        if (linkElement) {
            const href = linkElement.getAttribute('href');
            window.open(href);
        }
    }
});

// search bar functionality
function searchFunc() {
  var input, filter, tabs, i, j, gameConts, a, txtValue;
  input = document.getElementById('searchBar');
  filter = input.value.toUpperCase();
  tabs = document.getElementsByClassName('tab-pane');

  for (i = 0; i < tabs.length; i++) {
    gameConts = tabs[i].getElementsByClassName('game-cont');

    for (j = 0; j < gameConts.length; j++) {
      a = gameConts[j].getElementsByTagName('h5')[0];
      gameTitles = a.textContent || a.innerText;

      if (gameTitles.toUpperCase().indexOf(filter) > -1) {
        gameConts[j].style.display = '';
      } else {
        gameConts[j].style.display = 'none';
      }
    }
  }
}



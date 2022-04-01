const $arena = document.querySelector('.arenas');

const player1 = {
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['dagger', 'sword', 'axe'],
    attack: function() {
        console.log(player1.name + 'Fight...');
    }
};

const player2 = {
    name: 'SUB-ZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['dagger', 'sword', 'axe'],
    attack: function() {
        console.log(player2.name + 'Fight...');
    }
};

const createPlayer = function(playerNumber, playerObj) {
    const player = document.createElement('div');
    player.classList.add(playerNumber);
    $arena.appendChild(player);    

    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');
    player.appendChild(progressbar);

    const life = document.createElement('div');
    life.classList.add('life');
    life.style.width = `${playerObj.hp}%`;
    progressbar.appendChild(life);

    const name = document.createElement('div');
    name.classList.add('name');
    name.innerText = playerObj.name;
    progressbar.appendChild(name);

    const character = document.createElement('div');
    character.classList.add('character');
    player.appendChild(character);

    const img = document.createElement('img');
    img.src = playerObj.img;
    character.appendChild(img);
};

createPlayer('player1', player1);
createPlayer('player2', player2);
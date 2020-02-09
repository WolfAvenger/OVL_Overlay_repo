var data = {
    team1: {
            name: 'null', //name of team
            score: 'null', //its score
            color: 'null', //hex-code team's color
            logo: 'null' //logo filepath in
    },
    team2: {
        name: 'null',
        score: 'null',
        color: 'null',
        logo: 'null'
    },
    maps: {
        coth: {
            score: {
                team1: 'null',
                team2: 'null'
            },
            imgpath: 'null'
        },
        _2cp: {
            score: {
                team1: 'null',
                team2: 'null'
            },
            imgpath: 'null'
        },
        hybrid: {
            score: {
                team1: 'null',
                team2: 'null'
            },
            imgpath: 'null'
        },
        escort: {
            score: {
                team1: 'null',
                team2: 'null'
            },
            imgpath: 'null'
        },
        tiebreaker_coth: {
            score: {
                team1: 'null',
                team2: 'null'
            },
            imgpath: 'null'
        }
    },
    other: {
        casterName: 'null'
    }
};

function makeFetch() {
    let response = fetch('/data')
        .then(d => {
            return d.json();
        })
        .then(res => {
            data = res;
        });

    setCaster();
    setTeams();
    setMaps();
    //setMapScores();
    setTimeout(makeFetch, 200)
}

//region depack functions

function setCaster() {
    (document).getElementsByClassName('caster-name')[0].innerHTML = data.other.casterName;
}

function setTeams(){
    (document).getElementsByClassName('logo-left')[0].setAttribute('src', data.team1.logo);
    (document).getElementsByClassName('teamname-left')[0].innerText = data.team1.name;
    (document).getElementsByClassName('teamname-left')[0].style.color = data.team1.color;
    (document).getElementsByClassName('score-left')[0].innerText = data.team1.score;

    (document).getElementsByClassName('logo-right')[0].setAttribute('src', data.team2.logo);
    (document).getElementsByClassName('teamname-right')[0].innerText = data.team2.name;
    (document).getElementsByClassName('teamname-right')[0].style.color = data.team2.color;
    (document).getElementsByClassName('score-right')[0].innerText = data.team2.score;
}

function setMaps(){
    let mapdata = [data.maps.coth, data.maps._2cp, data.maps.hybrid, data.maps.escort, data.maps.tiebreaker_coth]
    for (let i = 0; i<5; i++){
        (document).getElementsByClassName('map-img')[i].setAttribute('src', mapdata[i].imgpath);
        if (mapdata[i].score.team1 > mapdata[i].score.team2){
            (document).getElementsByClassName('map-img-above')[i].style.backgroundImage = 'linear-gradient( '
                + data.team1.color + ' , ' + data.team1.color + ')';
            console.log((document).getElementsByClassName('map-img-above')[i].style.backgroundImage);
        }

    }
}

function setMapScores(){
    let mapdata = [data.maps.coth, data.maps._2cp, data.maps.hybrid, data.maps.escort, data.maps.tiebreaker_coth]

}
//endregion

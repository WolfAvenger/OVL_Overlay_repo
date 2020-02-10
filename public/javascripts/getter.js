window.newData = {
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
            imgpath: 'null',
            type: 'Control',
            name: 'null'
        },
        _2cp: {
            score: {
                team1: 'null',
                team2: 'null'
            },
            imgpath: 'null',
            type: "Assault",
            name: 'null'
        },
        hybrid: {
            score: {
                team1: 'null',
                team2: 'null'
            },
            imgpath: 'null',
            type: "Hybrid",
            name: 'null'
        },
        escort: {
            score: {
                team1: 'null',
                team2: 'null'
            },
            imgpath: 'null',
            type: "Escort",
            name: 'null'
        },
        tiebreaker_coth: {
            score: {
                team1: 'null',
                team2: 'null'
            },
            imgpath: 'null',
            type: "Control",
            name: 'null'
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
            if (window.newData !== res){
                window.newData = res;
                setCaster(res);
                setTeams(res);
                setMaps(res);
            }
        });
    setTimeout(makeFetch, 1000)
}

//region depack functions

function setCaster(data) {
    console.log('Caster setting');
    (document).getElementsByClassName('caster-name')[0].innerHTML = data.other.casterName;
    console.log('Caster is set');
}

function setTeams(data){
    console.log('Teams setting');
    (document).getElementsByClassName('logo-left')[0].setAttribute('src', data.team1.logo);
    (document).getElementsByClassName('teamname-left')[0].innerText = data.team1.name;
    (document).getElementsByClassName('teamname-left')[0].style.color = data.team1.color.slice(0,data.team1.color.lastIndexOf(','))+')';
    (document).getElementsByClassName('score-left')[0].innerText = data.team1.score;

    (document).getElementsByClassName('logo-right')[0].setAttribute('src', data.team2.logo);
    (document).getElementsByClassName('teamname-right')[0].innerText = data.team2.name;
    (document).getElementsByClassName('teamname-right')[0].style.color = data.team2.color.slice(0,data.team2.color.lastIndexOf(','))+')';
    (document).getElementsByClassName('score-right')[0].innerText = data.team2.score;
}

function setMaps(dat){
    let data = dat;
    let mapdata = [window.newData.maps.coth,
                   window.newData.maps._2cp,
                   window.newData.maps.hybrid,
                   window.newData.maps.escort,
                   window.newData.maps.tiebreaker_coth];
    let adjust = 'none';
    again: for (let i = 0; i<5; i++){
        (document).getElementsByClassName('map-type')[i].innerText = mapdata[i].type;
        (document).getElementsByClassName('map-name')[i].style.fontSizeAdjust = adjust;
        if (mapdata[i].name.length > 16){
            if (adjust != '0.41'){
                adjust = '0.41';
                (document).getElementsByClassName('map-name')[i].style.fontSizeAdjust = adjust;
                i = -1;
                continue;
            }

        }
        (document).getElementsByClassName('map-name')[i].innerText = mapdata[i].name.toUpperCase().split('_').join(' ');
        (document).getElementsByClassName('map-score')[i].innerText = "";
        (document).getElementsByClassName('map')[i].style.backgroundImage = "url("+mapdata[i].imgpath+")";
        if (mapdata[i].score.team1 > mapdata[i].score.team2){
            //animateDOM('map-img',i,true);
            //animateDOM('map-score', i, false);
            (document).getElementsByClassName('map-score')[i].style.opacity = '100%';
            (document).getElementsByClassName('map-img')[i].style.backgroundColor = data.team1.color;
            //(document).getElementsByClassName('map-img')[i].style.backgroundImage = 'url('+data.team1.logo+')';
            (document).getElementsByClassName('map-score')[i].innerText = mapdata[i].score.team1+' : '+mapdata[i].score.team2;
        } else if (mapdata[i].score.team1 < mapdata[i].score.team2) {
            (document).getElementsByClassName('map-img')[i].style.backgroundColor = data.team2.color;
            (document).getElementsByClassName('map-score')[i].innerText = mapdata[i].score.team1+' : '+mapdata[i].score.team2;
        } else {
            (document).getElementsByClassName('map-img')[i].style.backgroundColor = 'transparent';
        }
    }
}

function animateDOM(className, index, colorize){
    let data = window.newData;
    if (colorize){
        (document).getElementsByClassName(className)[index].animate({
            backgroundColor: ['transparent', data.team1.color]
        }, {
            duration: 800,
            easing: 'ease-in-out'
        });
    } else {
        (document).getElementsByClassName(className)[index].animate({
            opacity: ['0%', '100%']
        }, {
            duration: 2000,
            easing: 'ease-in-out'
        });
    }
}
//endregion

let data = {};
let alpha = 1;

async function createData() {
    data = {
        team1: {
            name: getTeamName(0), //name of team
            score: getTeamScore(1), //its score
            color: getTeamColor(0), //hex-code team's color
            logo: getImage(0, true, 'logoloader') //logo filepath in
        },
        team2: {
            name: getTeamName(1),
            score: getTeamScore(3),
            color: getTeamColor(1),
            logo: getImage(1, true, 'logoloader')
        },
        maps: {
            coth: {
                score: {
                    team1: getMapScore(0),
                    team2: getMapScore(1)
                },
                imgpath: getImage(0, false, 'mapelem'),
                type: 'Control'.toUpperCase(),
                name: getMapName(0)
            },
            _2cp: {
                score: {
                    team1: getMapScore(2),
                    team2: getMapScore(3)
                },
                imgpath: getImage(1, false, 'mapelem'),
                type: "Assault".toUpperCase(),
                name: getMapName(1)
            },
            hybrid: {
                score: {
                    team1: getMapScore(4),
                    team2: getMapScore(5)
                },
                imgpath: getImage(2, false, 'mapelem'),
                type: "Hybrid".toUpperCase(),
                name: getMapName(2)
            },
            escort: {
                score: {
                    team1: getMapScore(6),
                    team2: getMapScore(7)
                },
                imgpath: getImage(3, false, 'mapelem'),
                type: "Escort".toUpperCase(),
                name: getMapName(3)
            },
            tiebreaker_coth: {
                score: {
                    team1: getMapScore(8),
                    team2: getMapScore(9)
                },
                imgpath: getImage(4, false, 'mapelem'),
                type: "Control".toUpperCase(),
                name: getMapName(4)
            }
        },
        other: {
            casterName: getCasterName(),
            stageName: getStageName()
        }
    };
    console.log(data);
    return data;
}


async function makeFetch() {
    let data = await createData();
    let promise = await fetch('/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    });
}

//region Supporting methods

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b + ',';
}

function updateColorAlpha (index, alpha) {
    document.getElementsByClassName('colorpicker')[index].style.opacity = alpha;
}

function getTeamName(index){
    return (document).getElementsByClassName('teamname')[index].value;
}

function getTeamScore(index){
    return (document).getElementsByClassName('score')[index].value;
}

function getTeamColor(index){
    let hex = hexToRgb((document).getElementsByClassName('colorpicker')[index].value.slice(1,7));
    let alpha1 = document.getElementsByClassName('colorpicker')[index].style.opacity;
    if (!alpha1){ alpha1=alpha; }
    return 'rgba('+hex+alpha1+')';
}

function getImage(index, isLogo, className){
    let img = (document).getElementsByClassName(className)[index].value;
    img = img.slice(12);
    if (isLogo){
        img = '../images/logos/' + img;
    } else {
        img = '../images/maps/' + img;
    }
    return img;
}

function getMapScore(index){
    let score = (document).getElementsByClassName('mapscore')[index].value;
    if (score === '') return null;
    return score;
}

function getMapName(index){
    let img = (document).getElementsByClassName('mapelem')[index].value;
    img = img.slice(12);
    img = img.slice(0, img.indexOf('.'));
    img = img.toUpperCase().split('_').join(' ');
    return img;
}

function getCasterName(){
    return (document).getElementById('caster').value;
}

function getStageName(){
    return (document).getElementById('stage-text').value;
}
//endregion

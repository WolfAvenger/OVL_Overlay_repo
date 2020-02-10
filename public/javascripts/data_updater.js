var overlay_data = {
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

function updateData(newData){
    if (!compareData(newData)){
        overlay_data = newData;
    }
    return newData;
}

function compareData(newData){
    return overlay_data === newData;
}

function setData(newData){
    overlay_data = newData;
    return overlay_data;
}

module.exports.data = overlay_data;
module.exports.update = updateData;
module.exports.compare = compareData;
module.exports.set = setData;


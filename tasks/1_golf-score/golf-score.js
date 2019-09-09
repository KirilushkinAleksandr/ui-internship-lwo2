export let GOLF_SCORES = {
    HOLE_IN_ONE: 'Hole-in-one!',
    EAGLE: 'Eagle',
    BIRDIE: 'Birdie',
    PAR: 'Par',
    BOGEY: 'Bogey',
    DOUBLE_BOGEY: 'Double Bogey',
    GO_HOME: 'Go Home!'
}
export function golfScore (par, strokes){
    let result = par - strokes;
    switch(result){
        case 1:
            return GOLF_SCORES.HOLE_IN_ONE;
        case result <= (par-2): 
            return GOLF_SCORES.EAGLE;
        case par - 1:
            return GOLF_SCORES.BIRDIE;
        case par:
            return GOLF_SCORES.PAR;
        case par + 1:
            return GOLF_SCORES.BOGEY;
        case par + 2:
            return GOLF_SCORES.DOUBLE_BOGEY;
        default:
            return GOLF_SCORES.GO_HOME;
    }

}
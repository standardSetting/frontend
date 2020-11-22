function mapScoresToNav(scores, titlesAndLabels){
    const [...labels] = titlesAndLabels.labels
    let mapScoresToNav = []
    let mapScoresToNavChild = []
    let k=0
    for (var i=0; i<labels.length; i++){
        for (var j=0; j<labels[i].length; j++){
            mapScoresToNavChild.push(scores[k])
            k++;
        }
        mapScoresToNav.push(mapScoresToNavChild);
        mapScoresToNavChild = []
    }

    return mapScoresToNav;
}
export default mapScoresToNav;
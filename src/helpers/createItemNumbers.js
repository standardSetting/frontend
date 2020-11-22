function createItemNumbers(titlesAndLabels){
    const numberOfTitles = titlesAndLabels.titles.length;
    let itemNumberCounter = 1;
    let itemNumbersArray = [];

    for (var i=0; i<numberOfTitles; i++){
        let numberOfLabels = titlesAndLabels.labels[i].length
        let itemNumbersChildArray = []
            for (var j=0; j<numberOfLabels; j++){
                itemNumbersChildArray.push(itemNumberCounter)
                itemNumberCounter++;
            }
        itemNumbersArray.push(itemNumbersChildArray)
    }
    return [itemNumbersArray, itemNumberCounter-1];
}
export default createItemNumbers;
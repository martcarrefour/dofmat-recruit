//Напишите функцию, которая, 
//будет оставлять в исходном массиве только числа кратные 2 в порядке возрастания.

let arrey = [6, -102, 555.1, -55, 78.0, 66, 57, -126, -9998]


wantedSorting(arrey)



const wantedSorting = arr => {
//Фильтрация кратиности 2м
    let goalArr = arr.filter(function(number) {
        return number % 2 == 0 ;
      });

//Сортировка пузыриком 
    for (let i = 0, endI = goalArr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (goalArr[j] > goalArr[j + 1]) {
                [goalArr[j], goalArr[j + 1]] = [goalArr[j + 1], goalArr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;

    }
    console.log(goalArr);
};

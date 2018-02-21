module.exports = function getZerosCount(number, base) {
    let dividersBase = {},
        dividersNumber = {},
        res = [];

    function findDividers(num, dividers = {}) {
        for (let i = 2; i <= num; i++) {
            while (num % i === 0) {
                dividers[i] ? dividers[i]++ : dividers[i] = 1;
                num /= i;
            }
        }
    }

    findDividers(base, dividersBase);

    // for (let i = 2; i <= number; i++) {
    //     let temp = i;
    //     for (key in dividersBase) {
    //         while (temp % +key === 0) {
    //             dividersNumber[key] ? dividersNumber[key]++ : dividersNumber[key] = 1;
    //             temp /= +key;
    //         } 
    //     }
    // }

    for (key in dividersBase) {
        dividersNumber[key] = 0;
        for (let i = 1; i < 100; i++) {
            dividersNumber[key] += Math.floor(number / Math.pow(+key, i));
        }
    }

    for (key in dividersBase) {
        res.push(dividersNumber[key] / dividersBase[key]);
    }

    return Math.floor(Math.min(...res));

}
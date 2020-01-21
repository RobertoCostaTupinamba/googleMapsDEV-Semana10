module.exports = function parseStringAsArray(arrayAsString) {
    //trim remove espaço antes e depois de uma sting
    return arrayAsString.split(',').map(tech => tech.trim());
}
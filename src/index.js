module.exports = function toReadable (number) {
  let simpleNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
  let tenEighteen =['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let dozens = ['twenty','thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let result = ''
  let readableSimple = (n) => {
    result += simpleNumbers[n]
  }
  let readableTenEighteen = (n) => {
    result += tenEighteen[n-11]
  }
  let readableDozens = (n) => {
    let nArr = (n/10+'').split('.')
    if (nArr.length === 2){
        result += dozens[nArr[0]-2]
        result += ' ' + simpleNumbers[nArr[1]]
    } else {
        result += dozens[nArr[0]-2]
    }
  }
  if (number <= 10){
    readableSimple(number)
  } else if (number < 20){
    readableTenEighteen(number)
  } else if (number < 100){
    readableDozens(number)
  } else {
    let nArr = (number/100+'').split('.')
    nArr[1] = number%100
    result += `${simpleNumbers[nArr[0]]} hundred`
    nArr[1] !== 0 ? result += ' ' + toReadable(nArr[1]) : result
  }
  return result
}

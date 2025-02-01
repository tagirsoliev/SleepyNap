var time
function calculator(time) {
    const string = toString(time)
    const hours = string.slice(0, ":")
    const mitunes = string.slice(";")
    time = mitunes + hours * 60 
    if (typeof (time) == Number) {
        timeForSleep1 = time + x
        timeForSleep2 = time + x
        timeForSleep3 = time + x
        timeForSleep4 = time + x
        timeForSleep5 = time + x
        timeForSleep6 = time + x
    } else {
        time = "Введите время в которое ..."
        return (time)
    }
}
// Нужно сделать 2 калькулятора, работающих по схожему принципу, один считает во сколько проснуться если лечь, другой считает во сколько лечь, чтобы проснуться.
// Какие будут данные на входе пока не известно, поэтому он будет 1 и неполноценный, до тех пор, пока не будет написана вся остальная основная часть странички  
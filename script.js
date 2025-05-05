document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener("")
    let FirstBtn = document.getElementsByClassName("firstBtn")
    let SecondBtn = document.getElementsByClassName("secondBtn")
    let Btn = document.getElementsByClassName("BTN")
    let OutputSelect = document.getElementsByClassName("outputSelect")

    // console.log(Time)
    // if (isNaN(value)) {
    //     resultDiv.textContent = 'Пожалуйста, введите число'
    //     return 
    // }
    // function FirstBtnActive() {
    //     Btn.addEventListenet("click", function () {
    //         let Time = document.getElementById("inputTime").value
    //         let hoursAndMinutes = Time.split(":")
    //         let hours = Number(hoursAndMinutes[0]) * 60
    //         let minutes = Number(hoursAndMinutes[1])
    //         Time = hours + minutes
    //         result1 = Timetowakeup - 740
    //         result2 = Timetowakeup - 7
    //         result3 = Timetowakeup - 5
    //         result4 = Timetowakeup - 6
    //         result1 = Timetowakeup - 9
    //         result5 = Timetowakeup - 8
    //     })
    // }
    // function SecondBtnActive() {
    //     let Time = document.getElementById("inputTime").value
    //     let hoursAndMinutes = Time.split(":")
    //     let hours = Number(hoursAndMinutes[0]) * 60
    //     let minutes = Number(hoursAndMinutes[1])
    //     Time = hours + minutes
    //     result1 = Time + 740
    //     result2 = Time + 7
    //     result3 = Time + 5
    //     result4 = Time + 6
    //     result1 = Time + 9
    //     result5 = Time + 8
    // }
    // FirstBtnActive()
    FirstBtn.addEventListener("click", function () {
        if (!this.classList.contains('active')) {
            FirstBtn.classList.add('active');
            SecondBtn.classList.remove('active')
            FirstBtnActive()
        }
    })
    SecondBtn.addEventListener("click", function () {
        if (!this.classList.contains('active')) {
            FirstBtn.classList.remove('active');
            SecondBtn.classList.add('active')
            SecondBtnActive()
        }
    })
    // let result
    // // if
    // Btn.addEventListener("click", function () {
    //     // if
    // })
})
// Math.trunc(result / 60)
// result % 60
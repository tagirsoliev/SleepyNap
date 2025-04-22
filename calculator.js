// function CalculateByWakeUp(Time) {
//     Timetowakeup1 = Timetowakeup + 740
//     Timetowakeup2 = Timetowakeup + 7
//     Timetowakeup3 = Timetowakeup + 5
//     Timetowakeup4 = Timetowakeup + 6
//     Timetowakeup1 = Timetowakeup + 9
//     Timetowakeup5 = Timetowakeup + 8
// }
// function CalculateByGoSleep(Time) {
//     TimetoGoSleep1 = Timetowakeup - 740
//     TimetoGoSleep2 = Timetowakeup - 7
//     TimetoGoSleep3 = Timetowakeup - 5
//     TimetoGoSleep4 = Timetowakeup - 6
//     TimetoGoSleep1 = Timetowakeup - 9
//     TimetoGoSleep5 = Timetowakeup - 8
// }
// document.addEventListener('DOMContentLoaded', function () {
//     document.addEventListener("")
//     let FirstBtn = document.getElementsByClassName("firstBtn")
//     let SecondBtn = document.getElementsByClassName("secondBtn")
//     let Time = document.getElementById("inputTime")
//     let Btn = document.getElementsByClassName("BTN")
//     let OutputSelect = document.getElementsByClassName("outputSelect")
//     let value = parseFloat(Time)
//     if (isNaN(value)) {
//         resultDiv.textContent = 'Пожалуйста, введите число'
//         return
//     }
//     function FirstBtnActive(){

//     }
//     function SecondBtnActive(){
        
//     }
//     FirstBtnActive()
//     FirstBtn.addEventListener("click", function(){
//         if (!this.classList.contains('active')){
//             FirstBtn.classList.add('active');
//             SecondBtn.classList.remove('active')
//             FirstBtnActive()
//         }
//     })
//     SecondBtn.addEventListener("click", function(){
//         if (!this.classList.contains('active')){
//             FirstBtn.classList.remove('active');
//             SecondBtn.classList.add('active')
//             SecondBtnActive()
//         }
//     })
//     let result
//     // if
//     Btn.addEventListener("click", function(){
//         // if
//     })
// })
let Time = document.getElementById("inputTime")
console.log(parseFloat(Time))
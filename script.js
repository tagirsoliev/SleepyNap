document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const timeInput = document.getElementById('timeInput');
    const resultsDiv = document.getElementById('results');
    const timeOptionsDiv = document.getElementById('timeOptions');
    const errorMessage = document.getElementById('errorMessage');
    
    calculateBtn.addEventListener('click', function() {
        // Скрываем предыдущие сообщения об ошибках
        errorMessage.style.display = 'none';
        
        // Проверяем, введено ли время
        if (!timeInput.value) {
            errorMessage.textContent = 'Пожалуйста, введите время';
            errorMessage.style.display = 'block';
            return;
        }
        
        const mode = document.querySelector('input[name="mode"]:checked').value;
        const [hours, minutes] = timeInput.value.split(':').map(Number);
        
        // Создаем объект Date с текущей датой и выбранным временем
        const inputDate = new Date();
        inputDate.setHours(hours, minutes, 0, 0);
        
        const sleepCycles = [];
        const cycleDuration = 90; // длительность цикла сна в минутах
        const fallAsleepTime = 15; // время на засыпание в минутах
        
        if (mode === 'wakeup') {
            // Рассчитываем время отбоя (от 1 до 6 циклов сна)
            for (let cycles = 6; cycles >= 1; cycles--) {
                const bedtime = new Date(inputDate);
                bedtime.setMinutes(bedtime.getMinutes() - cycles * cycleDuration - fallAsleepTime);
                
                const isBestOption = cycles === 5 || cycles === 6;
                sleepCycles.push({
                    time: bedtime,
                    cycles: cycles,
                    isBest: isBestOption
                });
            }
        } else {
            // Рассчитываем время подъема (от 1 до 6 циклов сна)
            for (let cycles = 1; cycles <= 6; cycles++) {
                const wakeupTime = new Date(inputDate);
                wakeupTime.setMinutes(wakeupTime.getMinutes() + cycles * cycleDuration + fallAsleepTime);
                
                const isBestOption = cycles === 5 || cycles === 6;
                sleepCycles.push({
                    time: wakeupTime,
                    cycles: cycles,
                    isBest: isBestOption
                });
            }
        }
        
        // Отображаем результаты
        timeOptionsDiv.innerHTML = '';
        
        sleepCycles.forEach(option => {
            const timeStr = option.time.toTimeString().substring(0, 5);
            const optionDiv = document.createElement('div');
            optionDiv.className = 'time-option' + (option.isBest ? ' best-option' : '');
            
            if (mode === 'wakeup') {
                optionDiv.textContent = `Go Bad at ${timeStr} (${option.cycles} cycles, ${option.cycles * 1.5} hours of sleep)`;
            } else {
                optionDiv.textContent = `Wake up at ${timeStr} (${option.cycles} cycles, ${option.cycles * 1.5} hours of sleep)`;
            }
            
            timeOptionsDiv.appendChild(optionDiv);
        });
        
        resultsDiv.style.display = 'block';
    });
});
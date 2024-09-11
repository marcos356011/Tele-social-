function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}
// Obter a data atual
let currentDate = new Date();
let selectedDate = null;

// Elemento onde o calendário será exibido
const calendarElement = document.getElementById("calendar");
const selectedDateElement = document.getElementById("selected-date");

// Renderizar o calendário para o mês atual
renderCalendar(currentDate);

// Função para renderizar o calendário
function renderCalendar(date) {
    calendarElement.innerHTML = ""; // Limpar o calendário

    // Obter o primeiro e último dia do mês
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    // Obter o nome do mês
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    selectedDateElement.innerHTML = `Agendando para ${monthNames[date.getMonth()]} de ${date.getFullYear()}`;

    // Preencher os dias da semana
    const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement("div");
        dayElement.innerText = day;
        dayElement.style.fontWeight = "bold";
        calendarElement.appendChild(dayElement);
    });

    // Preencher os dias do mês
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
        const dayElement = document.createElement("div");
        dayElement.innerText = i;

        // Verificar se o dia é antes do primeiro dia do mês
        if (i === 1 && firstDayOfMonth.getDay() !== 0) {
            for (let j = 0; j < firstDayOfMonth.getDay(); j++) {
                const emptyElement = document.createElement("div");
                calendarElement.appendChild(emptyElement);
            }
        }

        // Ao clicar no dia, selecionar a data
        dayElement.addEventListener("click", () => {
            selectedDate = new Date(date.getFullYear(), date.getMonth(), i);
            selectedDateElement.innerText = `Data selecionada: ${selectedDate.toLocaleDateString()}`;
        });

        calendarElement.appendChild(dayElement);
    }
}

// Função para registrar o agendamento
function registrarAgendamento() {
    if (selectedDate) {
        alert(`Agendamento registrado para o dia ${selectedDate.toLocaleDateString()}`);
    } else {
        alert("Por favor, selecione uma data!");
    }
}
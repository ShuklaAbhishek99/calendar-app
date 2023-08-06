window.onload = ()=>{
    const month = document.getElementById('month');
    const date = document.getElementById('date');
    const days = document.getElementById('days');

    const currentMonth = new Date().getMonth();
    console.log(currentMonth+1)

    // Date(year, month, date)
    const firstDay = new Date(new Date().getFullYear(), currentMonth, 1).getDay()-1;
    const lastDay = new Date(new Date().getFullYear(), currentMonth, 0).getDate();

    console.log(firstDay)
    console.log(lastDay)

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    month.innerText = months[currentMonth]
    date.innerText = new Date().toDateString();

    let result = '';

    for (let i = firstDay; i > 0; i--) {
        result += `<div class="empty"></div>`
    }
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate()) {
            result += `<div class="today">${i}</div>`
        } else {
            result += `<div>${i}</div>`
        }
    }

    days.innerHTML = result;
}
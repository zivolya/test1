let money = Number(prompt("Ваш бюджет на месяц?")),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    answer1 = prompt("“Введите обязательную статью расходов в этом месяце”"),
    answer2 =Number(prompt("Во сколько обойдется?")),
    answer3 = prompt("“Введите обязательную статью расходов в этом месяце”"),
    answer4 = Number(prompt("Во сколько обойдется?")),
    
    appData = {
        budget: money,
        timeData: time,
        optionalExpenses: "",
        income: [],
        savings: false};

    let expenses = {
        answer1: answer2,
        answer3: answer4     
    };

    alert(
        "Ваш дневной бюджет: " + 
        (money - (answer2 + answer4)) / 30);

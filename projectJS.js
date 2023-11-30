function generateMealPlan() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const meals = {};

    for (const day of days) {
        meals[day] = {
            breakfast: document.getElementById(`${day}_breakfast`).value,
            snack1: document.getElementById(`${day}_snack1`).value,
            lunch: document.getElementById(`${day}_lunch`).value,
            snack2: document.getElementById(`${day}_snack2`).value,
            dinner: document.getElementById(`${day}_dinner`).value,
        };
    }

    const newPage = window.open('', '_blank');
    newPage.document.write(`
        <html lang="en">
        <head>
            <title>Your Meal Plan</title>
            <style>
                body {
                    font-family: 'Courier New', monospace;
                    margin: 20px;
                }
            </style>
        </head>
        <body>
            <h1>Your Meal Plan</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            
            <h2>Weekly Plan</h2>
            <ul>
                ${days.map(day => `
                    <li>
                        <strong>${day}</strong><br>
                        Breakfast: ${meals[day].breakfast}<br>
                        Snack 1: ${meals[day].snack1}<br>
                        Lunch: ${meals[day].lunch}<br>
                        Snack 2: ${meals[day].snack2}<br>
                        Dinner: ${meals[day].dinner}<br>
                    </li><br>
                `).join('')}
            </ul>

            <button onclick="clearPlanner()">Clear Planner</button>
            <button onclick="printPlanner()">Print/Download Planner</button>

            <script>
                function clearPlanner() {
                    window.location.reload();
                }

                function printPlanner() {
                    window.print();
                }
            </script>
        </body>
        </html>
    `);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

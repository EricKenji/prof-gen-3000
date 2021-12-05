
const generateHtml = function() {
    return 
    `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <title>Profile Generator 3000</title>
        </head>
        <body>
            <header>
                <nav class="heading" id="heading">
                    <h1 class="d-block p-3 mb-2 bg-danger text-white text-center">My Team</h1>
                </nav>
            </header>
            <main>
                <div class="card-deck d-flex flex-wrap justify-content-around">
                    <!-- EMPLOYEE CARDS GO HERE -->
                    ${completedCards}
                </div>
            </main>
        </body>
        </html>
    `
};

const generateEngineer = function(engineer) {
    return 
    `
    <div class="card bg-light mb-3 m-4" style="max-width: 18rem;">
        <div class="card-header">
            <h5>${engineer.name}</h5>
        </div>
        <div class="card-body">
            <h6 class="card-title">${engineer.role}</h6>
            <p class="card-text">ID: ${engineer.id}</p>
            <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="card-text">GitHub ID: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>
    </div>
    `
};
  
const generateIntern = function(intern) {
    return 
    `
    <div class="card bg-light mb-3 m-4" style="max-width: 18rem;">
        <div class="card-header">
            <h5>${intern.name}</h5>
        </div>
        <div class="card-body">
            <h6 class="card-title">${intern.role}</h6>
            <p class="card-text">ID: ${intern.id}</p>
            <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="card-text">School: ${intern.school}</p>
        </div>
    </div>
    `
};
  
const generateManager = function(manager) {
    return 
    `
    <div class="card bg-light mb-3 m-4" style="max-width: 18rem;">
        <div class="card-header">
            <h5>${manager.name}</h5>
        </div>
        <div class="card-body">
            <h6 class="card-title">${manager.role}</h6>
            <p class="card-text">ID: ${manager.id}</p>
            <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="card-text">Office #: ${manager.number}</p>
        </div>
    </div>
    `
};

const createPage = function(data) {
    cardArray = [];

    for (let i = 0; i < data.length; i++) {
        let employee = data[i];
        let role = employee.getRole();

        if (role === "Engineer") {
            let engineerCard = generateEngineer(employee);
            cardArray.push(engineerCard);
        };

        if (role === "Intern") {
            let internCard = generateIntern(employee);
            cardArray.push(internCard);
        };

        if (role === "Manager") {
            let managerCard = generateManager(employee);
            cardArray.push(managerCard);
        };
    }
}
  
module.exports = generateHtml;
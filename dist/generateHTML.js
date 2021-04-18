const generateTopHTML = () => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="style.css">
        <title>Team Members</title>
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>
    
        <div class="row justify-content-center" id="row">
        `
}

const generateBottomHTML = () => {
    return `</div>
    
    </body>
    
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    
    </html>`
}

const renderManager = (answers) => {
   return `
        <div class="col-4">
        <div class="card" id="bigCard">
            <div class="card-header">
            <h2 class="card-title">${answers.name}</h2>
            <h3 class="card-subtitle mb-2"><i class="fa fa-briefcase"></i> Manager</h3>
            </div>
            <div class="card-body">
                <div class="card" id="smallCard">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${answers.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${answers.email}" class="card-link">${answers.email}</a></li>
                        <li class="list-group-item">Office number: ${answers.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
}

const renderEngineer = (answers) => {
    return `
        <div class="col-4">
        <div class="card" id="bigCard">
            <div class="card-header">
            <h2 class="card-title">${answers.name}</h2>
            <h3 class="card-subtitle mb-2"><i class="fa fa-code-fork"></i> Engineer</h3>
            </div>
            <div class="card-body">
                <div class="card" id="smallCard">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${answers.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${answers.email}" class="card-link">${answers.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${answers.github}" target="_blank">${answers.github}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
}

const renderIntern = (answers) => {
    return `
        <div class="col-4">
        <div class="card" id="bigCard">
            <div class="card-header">
            <h2 class="card-title">${answers.name}</h2>
            <h3 class="card-subtitle mb-2"><i class="fa fa-graduation-cap"></i> Intern</h3>
            </div>
            <div class="card-body">
                <div class="card" id="smallCard">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${answers.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${answers.email}" class="card-link">${answers.email}</a></li>
                        <li class="list-group-item">School: ${answers.school}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
}

//row.appendChild(renderManager(answers));

module.exports = {
    generateTopHTML,
    generateBottomHTML,
    renderManager,
    renderEngineer,
    renderIntern
}

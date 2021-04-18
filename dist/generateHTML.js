const generateHTML = () => {
    `<!DOCTYPE html>
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
    
        <div class="row justify-content-center">
        
        </div>
    
    </body>
    
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    
    </html>`
}

/*const renderName = name => {
    return `<h2 class="card-title">${name}</h2>`
}

const renderRole = (icon, role) => {
    return `<h3 class="card-subtitle mb-2">${icon} ${role}</h3>`
}

const renderId = id => {
    `<li class="list-group-item">ID: ${id}</li>`
}

const renderEmail = email => {
    `<li class="list-group-item">Email: <a href="mailto:${email}" class="card-link">${email}</a></li>`
}

const generateCard = (answers) => {
    `<div class="col-4">
        <div class="card" id="bigCard">
            <div class="card-header">
            <h2 class="card-title">${name}</h2>
            <h3 class="card-subtitle mb-2">${icon} ${role}</h3>
            </div>
            <div class="card-body">
                <div class="card" id="smallCard">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}" class="card-link">${email}</a></li>
                        <li class="list-group-item">Office number/GitHub/School:</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`
}*/

module.exports = generateHTML;
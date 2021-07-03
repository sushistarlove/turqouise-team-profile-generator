const generateTeam = teams => {
    const generateManager = manager => {
        return `  
         <div class="card employee-card">
             <div class="card-header">
                 <h2 class="card-title">${manager.name}</h2>
                 <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
             </div>
             <div class="card-body">
                 <ul class="list-group">
                     <li class="list-group-item">ID: ${manager.id}</li>
                     <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                     <li class="list-group-item">Office number: ${manager.officenumber}</li>
                 </ul>
             </div>
         </div>`
    }

    const generateEngineer = engineer => {
        return `  
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${engineer.name}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item">Github: ${engineer.github}</li>
                </ul>
            </div>
        </div>`
    }

    const generateIntern = intern => {
        return `  
        <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${intern.name}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>`
    }

    const storagePiece = [];
    storagePiece.push(teams.filter(employee => employee.getRole() === "manager"
    ).map(manager =>
        generateManager(manager)))

    storagePiece.push(teams.filter(employee => employee.getRole() === "engineer"
    ).map(engineer =>
        generateEngineer(engineer)))

        storagePiece.push(teams.filter(employee => employee.getRole() === "intern"
    ).map(intern =>
        generateIntern(intern)))
        return storagePiece.join("")
}

module.exports = teams => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title></title>
    </head>
    <body>
        <div class="container">
    ${generateTeam(teams)}
        </div>
        
    </body>
    </html>`
}



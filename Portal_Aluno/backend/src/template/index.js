const template = ({ disciplines }) => {
  let disc = [...disciplines];


  const html = `
        <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Relatório</title>

            <style>
              table {
                width: 100%;
              }

              th {
                text-align: left;
              }
            </style>
          </head>
          <body class="bg-purple-100">
            <div class="m-8">
              <h1 class="text-3xl mb-8">Listagem de Disciplinas</h1>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Número do voo</th>
                    <th>Horário</th>
                  </tr>
                </thead>
                <tbody>
                  ${if (disc.length > 0) disc.forEach(discipline => {
                    <tr>
                      <td>discipline.name</td>
                      <td>discipline.numberStudents</td>
                    </tr>
                  })
                  } 
                </tbody>
              </table>
            </div>
          </body>
        </html >
`;

};

export default template();

const Prince = require("prince")
const fs = require('fs');

const createPDF = async (req, res) => {

  const { html, id } = JSON.parse(req.body)
  const output = fs.createWriteStream(__dirname + '/temp.html');
  output.write(html)
  output.end()
  output.on('finish', () => {
    Prince()
      .inputs([
        __dirname + '/temp.html',
      ])
      .output('test.pdf')
      .execute()  
      .then(function () {
        const pdfData = fs.readFileSync('test.pdf')
        res.send(pdfData).status(200)
      }, function (error) {
          console.log("ERROR: ", error)
      })
  })
}

export default createPDF

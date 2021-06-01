const Prince = require("prince")
const fs = require('fs');

const createPDF = async (req, res) => {

  const { html, id } = JSON.parse(req.body)
  const output = fs.createWriteStream(__dirname + '/temp.html');
  output.write(html)
  output.end()
  // const staticFiles = fs.readdirSync(__dirname + '/../static')
  //   .filter(filename => filename[0] != '.')
  //   .map(filename => __dirname + `/../static/${filename}`)
  // console.log(staticFiles)
  output.on('finish', () => {
    Prince()
      .inputs([
        __dirname + '/temp.html',
      ])
      .output('test.pdf')
      .execute()  
      .then(function () {
          console.log("OK: done")
          res.status(200)
      }, function (error) {
          console.log("ERROR: ", error)
      })
  })
}

export default createPDF

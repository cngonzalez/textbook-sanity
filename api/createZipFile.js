const archiver = require('archiver');
const streamBuffers = require('stream-buffers');
const fs = require('fs');

const createZipFile = async (req, res) => {

  const { html, id } = JSON.parse(req.body)

  //TODO: add proper XHTML surrounds to the HTML string
  const htmlBuffer = Buffer.from(html, 'utf-8')
  const archive = archiver('zip', {
    zlib: { level: 9 } 
  });
  // const output = new streamBuffers.WritableStreamBuffer({
  //     initialSize: (100 * 1024),
  //     incrementAmount: (100 * 1024)
  // });

  const output = fs.createWriteStream(__dirname + `${id}/.zip`);

  output.on('close', function() {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
  });

  archive.pipe(output)
  archive.append(html, {name: `${id}.xhtml`})
  archive.finalize()

  archive.on('finish', function() {
     output.end();
    res.status(200).send(output)
  });
  
  // return new Promise((resolve, reject) => {
  //   output.on('finish', () => {
  //    resolve(
  //   })
  // })
}

export default createZipFile

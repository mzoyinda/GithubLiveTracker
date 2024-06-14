const express = require( 'express' );
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get( '/', function ( req, res ) {
        res.send("Hello, World!")
    }
);

app.post('/git-webhook', function(req, res) {
    let data = req.body;
    console.log(data);
    res.send('Received!');
})

const port = 8008;

app.listen( port, function() {
  console.log( `App listening on port ${port}!` )
});
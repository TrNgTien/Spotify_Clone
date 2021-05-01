
    
const sqlQuery = require('../../database/my_sql_query');
const dbConnection = require('../../database/db_connection');
// Get all songs    
module.exports.getAllSongs = async (req, res) => {​​​​​
try {​​​​​
        let connection = await dbConnection();
        let getSongsQuery = "SELECT songname, uploadDate, numberOfLikes, duration FROM `songs`"
        let getSongs = await sqlQuery(connection, getSongsQuery);
        connection.end();
        return res.status(200).send(getSongs);
            }​​​​​ catch (error) {​​​​​
        console.log(error);
        res.status(500).json({​​​​​
        message:'error',
        error:error
        }​​​​​)
    }​​​​​
}​​​​​
// Dealing when admin post song     
module.exports.postSong = async (req, res) => {
    ​​​​​
//To do
}​​​​​

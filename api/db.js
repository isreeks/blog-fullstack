import mysql from "mysql2"

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@2005Sreeks',
    database: 'blog'
})

db.connect((err) => {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('success');
});

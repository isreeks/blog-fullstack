import mysql from "mysql2"

export const db = mysql.createConnection({
    host: 'sreeks.in',
    user: 'sreeksin_blog',
    password: '=Df!o&9nc!v+',
    database: 'sreeksin_blog'
})

db.connect((err) => {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('success');
});

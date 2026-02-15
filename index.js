import http from 'http';

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    const html = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Welcome to My Page</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 50px;
                }
                .header {
                    font-weight: bold;
                    color: black;
                    font-size: 28px;
                    margin-bottom: 50px;
                }
                .content {
                    line-height: 1.8;
                    font-size: 16px;
                    color: #333;
                }
            </style>
        </head>
        <body>
            <div class="header">Welcome to GCP page</div>
            <div class="content">
                <p>Google Cloud Platform (GCP) is a suite of cloud computing services offered by Google.</p>
                <p>It provides infrastructure, platform, and software-as-a-service solutions for businesses worldwide.</p>
                <p>GCP includes services like Compute Engine, App Engine, Cloud Storage, and BigQuery.</p>
            </div>
        </body>
        </html>
    `;

    res.end(html);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
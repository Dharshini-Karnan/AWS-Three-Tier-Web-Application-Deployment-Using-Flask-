from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return jsonify({
        "message": "Hello from AWS EC2 Python Backend!",
        "status": "running",
        "version": "1.0"
    })

@app.route("/project")
def project():
    return jsonify({
        "name": "AWS 3-Tier Architecture",
        "components": ["S3 + CloudFront", "EC2 (Backend)", "RDS (Database)"],
        "author": "Dharsh"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

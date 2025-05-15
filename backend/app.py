from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from config import MONGODB_URI

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient(MONGODB_URI)
db = client.assessment_db

@app.route('/', methods=['GET'])
def home():
    return jsonify({
        "message": "Assessment API is running",
        "status": "running"
    })

@app.route('/api/assessment/submit', methods=['POST'])
def submit_assessment():
    try:
        data = request.json
        # Save to MongoDB
        result = db.assessments.insert_one(data)
        return jsonify({
            "success": True,
            "message": "Assessment submitted successfully",
            "id": str(result.inserted_id)
        })
    except Exception as e:
        return jsonify({
            "success": False,
            "message": str(e)
        }), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001)
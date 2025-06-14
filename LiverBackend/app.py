from flask import Flask, request, jsonify, send_from_directory
import joblib
import numpy as np
import os
from chatModel import get_liver_health_advice

app = Flask(__name__, static_folder='dist', static_url_path='')

@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    file_path = os.path.join(app.static_folder, path)
    if os.path.exists(file_path):
        return send_from_directory(app.static_folder, path)
    else:
        # If path doesn't exist, return index.html (for React Router)
        return send_from_directory(app.static_folder, 'index.html')


model = joblib.load('liver_rf_model.pkl')

@app.route('/api/predict', methods=['POST'])
def predict():
    data = request.get_json()

    features = [
        data['Total_Bilirubin'],
        data['Direct_Bilirubin'],
        data['Alkaline_Phosphotase'],
        data['Alamine_Aminotransferase'],
        data['Aspartate_Aminotransferase'],
        data['Total_Protiens'],
        data['Albumin'],
        data['Albumin_and_Globulin_Ratio']
    ]

    input_array = np.array(features).reshape(1, -1)

    # Predict
    prediction = model.predict(input_array)[0]
    probability = model.predict_proba(input_array)[0][1] * 100

    # Get Gemini liver health advice
    health_advice = get_liver_health_advice(probability)

    print(prediction, probability, health_advice)

    return jsonify({
        'prediction': int(prediction),
        'probability': round(probability, 2),
        'llmResponse': health_advice
    })

if __name__ == '__main__':
    app.run(debug=True)

const express = require('express');
const dotenv = require('dotenv')
dotenv.config()

// const pickle = require('picklejs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Load Random Forest model (pickle file)
// const rfModelPath = path.join(__dirname, 'rf_classifier.pkl');
// const rfModel = pickle.load(fs.readFileSync(rfModelPath));

app.get('/', (req, res) => {
    res.send('Liver Disease Prediction API');
});

// Prediction using Random Forest
// app.post('/predict', (req, res) => {
//     try {
//         const data = req.body;
//         const inputArray = [
//             parseFloat(data.Total_Bilirubin),
//             parseFloat(data.Direct_Bilirubin),
//             parseFloat(data.Alkaline_Phosphotase),
//             parseFloat(data.Alamine_Aminotransferase),
//             parseFloat(data.Aspartate_Aminotransferase),
//             parseFloat(data.Total_Protiens),
//             parseFloat(data.Albumin),
//             parseFloat(data.Albumin_and_Globulin_Ratio)
//         ];
        
//         const prediction = rfModel.predict([inputArray])[0];
//         const result = prediction === 1 ? 'Disease Detected' : 'No Disease Detected';
//         res.json({ prediction: result });
//     } catch (error) {
//         res.status(500).json({ prediction: `Error: ${error.message}` });
//     }
// });



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const predictionRoute = require('./routes/prediction.routes')

app.use(predictionRoute)

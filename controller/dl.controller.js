const tf = require('@tensorflow/tfjs-node');
const fs = require('fs')
const path = require('path');
const dlModel = async (req, res) => {
    try {

        const modelPath = `file://${path.join(__dirname, 'path/to/model.json')}`;
        dlModel = await tf.loadLayersModel(modelPath);
        console.log('Model loaded successfully.');

        if (!dlModel) return res.status(500).json({ prediction: 'Deep learning model not loaded yet' });

        const data = req.body;
        const inputArray = [
            parseFloat(data.Total_Bilirubin),
            parseFloat(data.Direct_Bilirubin),
            parseFloat(data.Alkaline_Phosphotase),
            parseFloat(data.Alamine_Aminotransferase),
            parseFloat(data.Aspartate_Aminotransferase),
            parseFloat(data.Total_Protiens),
            parseFloat(data.Albumin),
            parseFloat(data.Albumin_and_Globulin_Ratio)
        ];

        const inputTensor = tf.tensor2d([inputArray], [1, inputArray.length]);
        const prediction = dlModel.predict(inputTensor).dataSync()[0];

        res.json({ prediction });
    } catch (error) {
        console.log('dl prediction -->', error)
        res.status(500).json({ prediction: `Error: ${error.message}` });
    }
}

module.exports = dlModel
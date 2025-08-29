const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Basic middleware
app.use(cors());
app.use(express.json());

// Helper function to check if a string is a number
function isNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
}

// Helper function to check if a string is an alphabet
function isAlphabet(str) {
    return /^[a-zA-Z]+$/.test(str);
}

// Helper function to check if a string is a special character
function isSpecialChar(str) {
    return /^[^a-zA-Z0-9\s]+$/.test(str);
}

// Helper function to create alternating caps string
function createAlternatingCaps(str) {
    return str.split('').map((char, index) => 
        index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    ).join('');
}

// Main endpoint
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        
        // Basic input validation
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Invalid input. 'data' must be an array."
            });
        }

        // Initialize arrays and variables
        const oddNumbers = [];
        const evenNumbers = [];
        const alphabets = [];
        const specialCharacters = [];
        let sum = 0;
        let allAlphabets = '';

        // Process each item in the data array
        data.forEach(item => {
            const str = String(item);
            
            if (isNumber(str)) {
                const num = parseInt(str);
                if (num % 2 === 0) {
                    evenNumbers.push(str);
                } else {
                    oddNumbers.push(str);
                }
                sum += num;
            } else if (isAlphabet(str)) {
                alphabets.push(str.toUpperCase());
                allAlphabets += str.toLowerCase();
            } else if (isSpecialChar(str)) {
                specialCharacters.push(str);
            }
        });

        // Create concatenated string with alternating caps in reverse order
        const concatString = createAlternatingCaps(allAlphabets.split('').reverse().join(''));

        // Create response
        const response = {
            is_success: true,
            user_id: "midhun_nath_kr09092003",
            email: "midhunnathkr@gmail.com",
            roll_number: "22BAI10358",
            odd_numbers: oddNumbers,
            even_numbers: evenNumbers,
            alphabets: alphabets,
            special_characters: specialCharacters,
            sum: String(sum),
            concat_string: concatString
        };

        res.status(200).json(response);

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            error: "Internal server error"
        });
    }
});

// GET end endpoint
app.get('/bfhl', (req, res) => {
    res.json({
        message: "Bajaj API is running",
        endpoint: "/bfhl",
        method: "POST"
    });
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/bfhl`);
});

module.exports = app; 

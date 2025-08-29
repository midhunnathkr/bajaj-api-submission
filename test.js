const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

// Test cases from the assignment
const testCases = [
    {
        name: "Example A",
        data: ["a", "1", "334", "4", "R", "$"],
        expected: {
            odd_numbers: ["1"],
            even_numbers: ["334", "4"],
            alphabets: ["A", "R"],
            special_characters: ["$"],
            sum: "339",
            concat_string: "Ra"
        }
    },
    {
        name: "Example B",
        data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"],
        expected: {
            odd_numbers: ["5"],
            even_numbers: ["2", "4", "92"],
            alphabets: ["A", "Y", "B"],
            special_characters: ["&", "-", "*"],
            sum: "103",
            concat_string: "ByA"
        }
    },
    {
        name: "Example C",
        data: ["A", "ABcD", "DOE"],
        expected: {
            odd_numbers: [],
            even_numbers: [],
            alphabets: ["A", "ABCD", "DOE"],
            special_characters: [],
            sum: "0",
            concat_string: "EoDdCbAa"
        }
    }
];

async function testAPI() {
    console.log('🚀 Testing Bajaj API...\n');
    
    let passedTests = 0;
    let totalTests = 0;
    
    for (const testCase of testCases) {
        try {
            console.log(`📝 Testing: ${testCase.name}`);
            console.log(`Input: ${JSON.stringify(testCase.data)}`);
            
            const response = await axios.post(`${BASE_URL}/bfhl`, {
                data: testCase.data
            });
            
            console.log(`✅ Status: ${response.status}`);
            
            // Validate response structure
            if (response.data.is_success === true) {
                console.log('✅ API call successful');
                passedTests++;
            } else {
                console.log('❌ API call failed');
            }
            totalTests++;
            
            // Validate key fields
            const responseData = response.data;
            
            // Check user details
            if (responseData.user_id === "midhun_nath_kr09092003") {
                console.log('✅ User ID correct');
                passedTests++;
            } else {
                console.log('❌ User ID incorrect');
            }
            totalTests++;
            
            if (responseData.email === "midhunnathkr@gmail.com") {
                console.log('✅ Email correct');
                passedTests++;
            } else {
                console.log('❌ Email incorrect');
            }
            totalTests++;
            
            if (responseData.roll_number === "22BAI10358") {
                console.log('✅ Roll number correct');
                passedTests++;
            } else {
                console.log('❌ Roll number incorrect');
            }
            totalTests++;
            
            // Check data processing
            if (JSON.stringify(responseData.odd_numbers) === JSON.stringify(testCase.expected.odd_numbers)) {
                console.log('✅ Odd numbers correct');
                passedTests++;
            } else {
                console.log('❌ Odd numbers incorrect');
            }
            totalTests++;
            
            if (JSON.stringify(responseData.even_numbers) === JSON.stringify(testCase.expected.even_numbers)) {
                console.log('✅ Even numbers correct');
                passedTests++;
            } else {
                console.log('❌ Even numbers incorrect');
            }
            totalTests++;
            
            if (JSON.stringify(responseData.alphabets) === JSON.stringify(testCase.expected.alphabets)) {
                console.log('✅ Alphabets correct');
                passedTests++;
            } else {
                console.log('❌ Alphabets incorrect');
            }
            totalTests++;
            
            if (JSON.stringify(responseData.special_characters) === JSON.stringify(testCase.expected.special_characters)) {
                console.log('✅ Special characters correct');
                passedTests++;
            } else {
                console.log('❌ Special characters incorrect');
            }
            totalTests++;
            
            if (responseData.sum === testCase.expected.sum) {
                console.log('✅ Sum correct');
                passedTests++;
            } else {
                console.log('❌ Sum incorrect');
            }
            totalTests++;
            
            if (responseData.concat_string === testCase.expected.concat_string) {
                console.log('✅ Concatenated string correct');
                passedTests++;
            } else {
                console.log('❌ Concatenated string incorrect');
            }
            totalTests++;
            
            console.log('---\n');
            
        } catch (error) {
            console.error(`❌ Error testing ${testCase.name}:`, error.message);
            console.log('---\n');
        }
    }
    
    // Test summary
    console.log('📊 Test Summary:');
    console.log(`Total Tests: ${totalTests}`);
    console.log(`Passed: ${passedTests} ✅`);
    console.log(`Failed: ${totalTests - passedTests} ❌`);
    console.log(`Success Rate: ${((passedTests / totalTests) * 100).toFixed(2)}%`);
    
    if (passedTests === totalTests) {
        console.log('\n🎉 All tests passed successfully!');
    } else {
        console.log('\n⚠️  Some tests failed. Please review the details above.');
    }
}

// Check if server is running
async function checkServer() {
    try {
        const response = await axios.get(BASE_URL);
        console.log('✅ Server is running');
        console.log(`Message: ${response.data.message}`);
        return true;
    } catch (error) {
        console.error('❌ Server is not running. Please start the server first with: npm start');
        return false;
    }
}

async function runTests() {
    const serverRunning = await checkServer();
    if (serverRunning) {
        await testAPI();
    }
}

// Run tests if this file is executed directly
if (require.main === module) {
    runTests();
}

module.exports = { testAPI, checkServer }; 
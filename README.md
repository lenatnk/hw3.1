# CalculateBonus Project

This project includes a function `calculateBonus` that calculates a bonus based on the sum of two numbers. The function ensures that if the sum of the two numbers exceeds 50, the bonus is capped at 50; otherwise, the bonus is equal to the sum.

## Prerequisites

Before running this project, ensure that you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (Node package manager, usually comes with Node.js)

## Installation

1. Clone the repository or download the project files to your local machine.
   
   ```bash
   git clone https://github.com/your-username/calculateBonus.git
   ```

2. Navigate to the project directory:

   ```bash
   cd calculateBonus
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

## Project Structure

The project is structured as follows:

```
.
├── calculateBonus.js   # The main file with the calculateBonus function
├── hw3_1.js            # The file that exports calculateBonus for use in the tests
├── __tests__           # Directory containing the unit tests
│   └── calculateBonus.test.js  # Test file for the calculateBonus function
└── package.json        # Project configuration and dependencies
```

## Running the Tests

The project uses [Jest](https://jestjs.io/) for testing.

1. Ensure that all dependencies are installed.
   
2. To run the test suite, use the following command:

   ```bash
   npm test
   ```

   This will run all the unit tests located in the `__tests__` folder and display the results.

## Test Cases

The test suite includes a variety of scenarios, including edge cases, to ensure the correct behavior of the `calculateBonus` function:

1. **Sum less than 50** - Returns the sum when it is less than 50.
2. **Sum exactly 50** - Returns the sum when it is exactly 50.
3. **Sum greater than 50** - Returns 50 when the sum exceeds 50.
4. **Sum just below the threshold (49)** - Ensures the sum is returned when it's just below 50.
5. **Sum just above the threshold (51)** - Ensures that 50 is returned when the sum is just above 50.
6. **One input is zero** - Tests if the function correctly handles zero as one of the inputs.
7. **Both inputs are negative** - Ensures the function works correctly with negative inputs.
8. **Both inputs are large positive numbers** - Returns 50 even if the sum of the inputs is very large.
9. **Inputs that sum to exactly 0** - Ensures the function returns 0 when the sum of inputs is 0.
10. **Sum of exactly 50** - Double-checks that 50 is returned when the sum is exactly 50.

## Contact

For any questions or issues, feel free to open an issue on the repository or contact the project maintainer:

- **Name:** Elena Tonenkova
- **GitHub:** [lenatnk](https://github.com/lenatnk) 
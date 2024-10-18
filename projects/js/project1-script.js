// Function to get the sleep hours entered by the user for each day
function getSleephours(day) {
    return parseInt(document.getElementById(day).value) || 0; // Default to 0 if no value is entered
}

// Get actual sleep hours for the week based on user input
const getActualSleepHours = () =>
    getSleephours('monday') +
    getSleephours('tuesday') +
    getSleephours('wednesday') +
    getSleephours('thursday') +
    getSleephours('friday') +
    getSleephours('saturday') +
    getSleephours('sunday');

// Get the ideal sleep hours based on user input
const getIdealSleepHours = () => {
    const idealHours = parseInt(document.getElementById('desired-sleep').value) || 8; // Default to 8 if no value is entered
    return idealHours * 7; // Total for the week
}

// Function to calculate and display sleep debt
function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    const resultElement = document.getElementById('results');

    if (actualSleepHours === idealSleepHours) {
        resultElement.textContent = 'You are rocking it, mate! You got the perfect amount of sleep.';
    } else if (actualSleepHours > idealSleepHours) {
        resultElement.textContent = 'You slept ' + (actualSleepHours - idealSleepHours) + ' hours more than needed.';
    } else if (actualSleepHours < idealSleepHours) {
        resultElement.textContent = 'You slept ' + (idealSleepHours - actualSleepHours) + ' hours less than you should have this week. Time to get more rest!';
    } else {
        resultElement.textContent = 'Something went wrong, please check your input.';
    }
}

// Function to reset the form and clear the results
function resetForm() {
    // Clear all input fields
    document.getElementById("sleep-form").reset();

    // Clear the result display
    document.getElementById('results').textContent = '';
}
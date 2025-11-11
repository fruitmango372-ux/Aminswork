// ============================================
// DHIKR TRACKER - STUDENT PROJECT
// ============================================
// Complete all 20 functions below
// Test your work by opening projet-dhikr-tracker.html in your browser

// Test data provided for your functions
const testData = {
    adhkar: ["SubhanAllah", "Alhamdulillah", "Allahu Akbar"],
    counts: [33, 33, 33],
    completed: [true, false, true]
};

// ============================================
// PHASE 1: ARRAY BASICS
// ============================================

// Step 1: Create Morning Adhkar Array
// TODO: Return an array with these 3 adhkar: "SubhanAllah", "Alhamdulillah", "Allahu Akbar"
const adhkar_AfterPrayer = ['SubhanAllah', 'Alhamdulillah', 'Allahu Akbar'];

function createMorningAdhkar(adhkar_afterprayer) {
    // Your code here
    return [adhkar_afterprayer];
}

// Step 2: Count Total Adhkar
// TODO: Return the total number of adhkar in the array using .length
function getTotalAdhkar(adhkar_afterprayer) {
    const totalnumbs = adhkar_afterprayer.length
    return totalnumbs;
}

// Step 3: Get First and Last Dhikr
// TODO: Return an array with [first dhikr, last dhikr] using indexing
function getFirstAndLast(adhkar_afterprayer) {
    const firstlastinput = adhkar_afterprayer[0,-1]
    return [firstlastinput];
}

// ============================================
// PHASE 2: CRUD OPERATIONS
// ============================================

// Step 4: Add Evening Dhikr
// TODO: Add "Astaghfirullah" to the END of the array using push()
function addEveningDhikr(adhkar_afterPrayer) {
   let addingdhikr = adhkar_afterprayer.push('Astaghfirullah')
    return addingdhikr;
}

// Step 5: Add Urgent Dhikr First
// TODO: Add "La ilaha illa Allah" to the BEGINNING using unshift()
function addUrgentDhikr(adhkar_afterprayer) {
   let WORDOFTAWHEED = adhkar_afterprayer.inshift('La Ilaha Illa Allah')
    return WORDOFTAWHEED;
}

// Step 6: Remove Completed Dhikr
// TODO: Remove and return the first dhikr using shift()
function removeFirstDhikr(adhkar_afterprayer) {

let removinginput = adhkar_afterprayer.shift(0)
    return "removingadhkar";
}

// Step 7: Check if Dhikr Exists
// TODO: Check if "SubhanAllah" is in the array using includes()
function checkDhikrExists(adhkar_afterprayer) {

if ( adhkar_afterprayer.includes('SubhanAllah')){
    return true;
}


    return false;
}

// ============================================
// PHASE 3: ARRAYS + STRINGS
// ============================================

// Step 8: Create Adhkar List String
// TODO: Join all adhkar with " | " separator using join()
let differentadhkarafterprayer =[SubhanAllah, walhamdulillah, walailahaillaAllah, wAllahuakbar ]
function createAdhkarList(differentadhkarafterprayer) {
    let howitispronounced = differentadhkarafterprayer.join("|");
    return "";
}
let afterprayer =[SubhanAllah, el_hamdulillah ,AllahuAkbar ]
// Step 9: Normalize Dhikr Names
// TODO: Convert the first dhikr to lowercase for database storage
function normalizeDhikr(afterprayer) {
let lowercaser = afterprayer.toLowercase(0)


    return lowercaser;
}

// Step 10: Extract Priority Adhkar
// TODO: Get the first 3 adhkar using slice(0, 3)
function getPriorityAdhkar(afterprayer) {
let slash = afterprayer.slice(0,4)
    return slash;
}

// ============================================
// PHASE 4: ARRAYS + NUMBERS (COUNTING)
// ============================================

// Step 11: Create Repetitions Array
// TODO: Create and return an array [33, 33, 33] for Tasbih repetitions
let firstdhikr = [33, 33, 33]

function createRepetitions(firstdhikr) {
return [firstdhikr];

}

// Step 12: Calculate Total Recitations
// TODO: Add all counts together (should be 99 for [33, 33, 33])
function calculateTotal(firstdhikr) {
if ( firstdhikr === 99) {
    return "good now say La Ilaha Illa Allah to complete the dhikr brother well done and may Allah bless you";
}


    return "your dhikr is not 99 yet, try again";
}

// Step 13: Find Most Recited Dhikr
// TODO: Find and return the index of the dhikr with the highest count

let precisecounting = firstadhkar[0]

function findMostRecited(firstadhkar,preciseaccount) {
    
    if ( precisecounting >  firstadhkar[1] && precisecounting > firstadhkar[2]){
return preciseaccount;
    } 
    else if (firstadhkar[2] > firstadhkar[1]&& firstadhkar[2] > precisecounting) {
        return [firstadhkar[2]];
    } return firstadhkar[1];

}


// Step 14: Count High-Frequency Adhkar
// TODO: Count how many adhkar have >= 30 repetitions
function countHighFrequency(firstadhkar) {

    if(firstadhkar[0] >= 30&&firstadhkar[1]< 30&& firstadhkar[2] < 30){
return "Only the first one has equal to or more than thirty";

    }
    else if (firstadhkar[1] >= 30&& firstadhkar[0] < 30 &&firstadhkar[2] < 30) {
return "Only the second one that has equal or more than thirty";
    } 
    else if (firstadhkar[2]  >= 30&& firstadhkar[1]< 30&&firstadhkar[0] < 30) {
return "Only the third one has equal or more than thirty";
    }
    else if (firstadhkar[0] >= 30&&firstadhkar[1]>=30&& firstadhkar[2] < 30)
      {
return "Only the first and second one have equal to or more than thirty"
    }
    else if (firstadhkar[1] >= 30 &&firstadhkar[2]>=30&& firstadhkar[0] < 30){
return "Only the second and the third ones are more thirty"
    }
    else if (firstadhkar[0] >= 30&&fisrtadhkar[2] >= 30&&fisrtadhkar[1] < 30){
return "only the first and third one have equal to or more than thirty"
    }
    return "You have almost completed your adhkar for after the prayer, you only need to say La Ilaha Illa Allah to complete it, may Allah reward you";
}


//============================================
// PHASE 5: ARRAYS + BOOLEANS (TRACKING)
// ============================================

// Step 15: Create Completion Status
// TODO: Create and return a boolean array [true, false, true]
const boolean =[true, false, true]
function createCompletionStatus(boolean) {
    
    return [boolean];
}

// Step 16: Count Completed Adhkar
// TODO: Count how many adhkar are completed (count the true values)
function countCompleted(boolean) {
if (boolean[0]===true && boolean [1]===true && boolean[2]===true){

return"all are completed";
}
else if (boolean[0]===true && boolean [1]===true && boolean[2]!==true){
return "only the first two are completed";

}    

else if (boolean[0]===true && boolean [1]!==true && boolean[2]===true){
    
    return "Only the first and third one are completed";
}
else if (boolean[0]!==true && boolean [1]===true && boolean[2]===true){
return "Only the second and third one are completed";}
else if (boolean[0]!==true && boolean [1]!==true && boolean[2]===true){
return "only the third one is completed";
}
else if(boolean[0]!==true && boolean [1]!==true && boolean[2]!==true) {
return "They are all not completed";
}
else if (boolean[0]===true && boolean [1]!==true && boolean[2]!==true){
return "only the first one is completed"
}
}



// Step 17: Check All Completed
// TODO: Return true ONLY if ALL adhkar are completed (all true)
function checkAllCompleted(boolean) {
    if (boolean ===true){
return true;
    }
    return false;
}

// ============================================
// PHASE 6: FINAL INTEGRATION
// ============================================

// Step 18: Display Dhikr Info
// TODO: Create a formatted string: "SubhanAllah ✅ 33x 🎯 Goal Met"
// Use ✅ if completed, ⏳ if not
// Use "🎯 Goal Met" if count >= 30, "📊 In Progress" otherwise
let amountofticks = [33,23,24]

function displayDhikrInfo(amountofticks) {
    if (amountofticks[0] >= 30&&amountofticks[1] >=30&& amountofticks[2] >= 30){
        return "Goal met✅ "

      }

    return "⏳ In Progress";
}

// Step 19: Filter By Goal
// TODO: Return array of adhkar that have count >= minCount
function filterByGoal(amountofticks, presult )
 {
let presult = amountofticks.some(m => m >= 30)
    return presult;
}

// Step 20: Calculate Daily Progress
// TODO: Return percentage of adhkar completed (completed count / total * 100)
function calculateProgress(result, absoluteresult) {
    let absoluteresult = result.math.max(...result);
    let showsresult = `${absoluteresult}/100 is the amount`
    return ;
}

// ============================================
// DO NOT MODIFY BELOW THIS LINE
// Testing system (leave as is)
// ============================================

// Student's code will be tested here
let currentStep = 1;
const totalSteps = 20;

// Test a specific step (called by individual step buttons)
function testStep(stepNumber) {
    let success = false;
    let message = "";

    try {
        if (stepNumber === 1) {
            const result = createMorningAdhkar();
            success = Array.isArray(result) &&
                      result.length === 3 &&
                      result[0] === "SubhanAllah" &&
                      result[1] === "Alhamdulillah" &&
                      result[2] === "Allahu Akbar";
            message = success ? "Perfect! Array created correctly." : "Check your array values.";

        } else if (stepNumber === 2) {
            const result = getTotalAdhkar(testData.adhkar);
            success = result === 3;
            message = success ? "Correct! Total is 3." : "Use .length property.";

        } else if (stepNumber === 3) {
            const result = getFirstAndLast(testData.adhkar);
            success = Array.isArray(result) &&
                      result[0] === "SubhanAllah" &&
                      result[1] === "Allahu Akbar";
            message = success ? "Excellent! First and last retrieved." : "Check your indexing.";

        } else if (stepNumber === 4) {
            const testArr = [...testData.adhkar];
            const result = addEveningDhikr(testArr);
            success = result.length === 4 && result[3] === "Astaghfirullah";
            message = success ? "Great! Dhikr added to end." : "Use .push() method.";

        } else if (stepNumber === 5) {
            const testArr = [...testData.adhkar];
            const result = addUrgentDhikr(testArr);
            success = result.length === 4 && result[0] === "La ilaha illa Allah";
            message = success ? "Perfect! Dhikr added to beginning." : "Use .unshift() method.";

        } else if (stepNumber === 6) {
            const testArr = [...testData.adhkar];
            const result = removeFirstDhikr(testArr);
            success = result === "SubhanAllah" && testArr.length === 2;
            message = success ? "Correct! First element removed." : "Use .shift() method.";

        } else if (stepNumber === 7) {
            const result = checkDhikrExists(testData.adhkar);
            success = result === true;
            message = success ? "Excellent! SubhanAllah found." : "Use .includes() method.";

        } else if (stepNumber === 8) {
            const result = createAdhkarList(testData.adhkar);
            success = result === "SubhanAllah | Alhamdulillah | Allahu Akbar";
            message = success ? "Perfect! Adhkar joined correctly." : "Use .join(' | ')";

        } else if (stepNumber === 9) {
            const result = normalizeDhikr(testData.adhkar);
            success = result === "subhanallah";
            message = success ? "Great! Converted to lowercase." : "Use .toLowerCase()";

        } else if (stepNumber === 10) {
            const result = getPriorityAdhkar(testData.adhkar);
            success = Array.isArray(result) && result.length === 3;
            message = success ? "Excellent! First 3 extracted." : "Use .slice(0, 3)";

        } else if (stepNumber === 11) {
            const result = createRepetitions();
            success = Array.isArray(result) &&
                      result.length === 3 &&
                      result[0] === 33 && result[1] === 33 && result[2] === 33;
            message = success ? "Perfect! Repetitions array created." : "Return [33, 33, 33]";

        } else if (stepNumber === 12) {
            const result = calculateTotal(testData.counts);
            success = result === 99;
            message = success ? "Correct! Total is 99." : "Add all counts together.";

        } else if (stepNumber === 13) {
            const result = findMostRecited([50, 33, 40]);
            success = result === 0;
            message = success ? "Great! Found the index." : "Find index of max value.";

        } else if (stepNumber === 14) {
            const result = countHighFrequency(testData.counts);
            success = result === 3;
            message = success ? "Perfect! All 3 are >= 30." : "Count how many >= 30.";

        } else if (stepNumber === 15) {
            const result = createCompletionStatus();
            success = Array.isArray(result) && result.length === 3 &&
                      result[0] === true && result[1] === false && result[2] === true;
            message = success ? "Correct! Status array created." : "Return [true, false, true]";

        } else if (stepNumber === 16) {
            const result = countCompleted(testData.completed);
            success = result === 2;
            message = success ? "Excellent! 2 completed." : "Count the true values.";

        } else if (stepNumber === 17) {
            const result = checkAllCompleted([true, true, true]);
            const result2 = checkAllCompleted([true, false, true]);
            success = result === true && result2 === false;
            message = success ? "Perfect! Logic correct." : "Use && operator.";

        } else if (stepNumber === 18) {
            const result = displayDhikrInfo("SubhanAllah", 33, true);
            success = result.includes("SubhanAllah") &&
                      result.includes("33") &&
                      result.includes("✅") &&
                      result.includes("Goal Met");
            message = success ? "Great! Info formatted correctly." : "Include all required info.";

        } else if (stepNumber === 19) {
            const result = filterByGoal(testData.adhkar, testData.counts, 30);
            success = Array.isArray(result) && result.length === 3;
            message = success ? "Excellent! Filtered correctly." : "Return adhkar with count >= minCount.";

        } else if (stepNumber === 20) {
            const result = calculateProgress(testData.completed);
            success = Math.abs(result - 66.67) < 1;
            message = success ? "Perfect! Progress calculated." : "Divide completed by total * 100.";
        }

        // Update UI
        updateStepStatus(stepNumber, success, message);

        if (success) {
            // Mark this step as completed
            const stepEl = document.getElementById(`step${stepNumber}`);
            if (stepEl) stepEl.classList.add('completed');

            // Update dashboard with latest data
            updateDashboard();

            // Update progress bar
            updateProgress();

            // Check if all steps are complete
            const completedSteps = document.querySelectorAll('.step.completed').length;
            if (completedSteps === totalSteps) {
                showSuccessModal();
            }
        }

    } catch (error) {
        updateStepStatus(stepNumber, false, "Error: " + error.message);
    }
}

// Wrapper function for the global "Test Current Step" button (for backward compatibility)
function testCurrentStep() {
    testStep(currentStep);
}

function updateStepStatus(step, success, message) {
    const statusEl = document.getElementById(`status${step}`);
    if (statusEl) {
        statusEl.className = `step-status ${success ? 'success' : 'error'}`;
        statusEl.textContent = message;
    }
}

function updateProgress() {
    const completedSteps = document.querySelectorAll('.step.completed').length;
    const percent = (completedSteps / totalSteps) * 100;
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    if (progressBar) progressBar.style.width = percent + '%';
    if (progressText) progressText.textContent = `${completedSteps} / ${totalSteps}`;
}

function updateActiveStep() {
    document.querySelectorAll('.step').forEach((step, index) => {
        const stepNum = index + 1;
        if (stepNum < currentStep) {
            step.classList.add('completed');
            step.classList.remove('active');
        } else if (stepNum === currentStep) {
            step.classList.add('active');
            step.classList.remove('completed');
        } else {
            step.classList.remove('active', 'completed');
        }
    });

    // Scroll to active step
    const activeStep = document.getElementById(`step${currentStep}`);
    if (activeStep) {
        activeStep.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function updateDashboard() {
    const adhkar = createMorningAdhkar();
    const counts = createRepetitions();
    const completed = createCompletionStatus();

    const totalAdhkar = document.getElementById('totalAdhkar');
    const totalRecitations = document.getElementById('totalRecitations');
    const completedCount = document.getElementById('completedCount');
    const progressPercent = document.getElementById('progressPercent');

    if (totalAdhkar) totalAdhkar.textContent = adhkar.length;
    if (totalRecitations) totalRecitations.textContent = calculateTotal(counts);
    if (completedCount) completedCount.textContent = countCompleted(completed);
    if (progressPercent) progressPercent.textContent = Math.round(calculateProgress(completed)) + '%';

    // Display adhkar
    const displayEl = document.getElementById('dhikrDisplay');
    if (displayEl) {
        displayEl.innerHTML = '<h3 style="color: #065f46; margin-bottom: 15px;">Your Adhkar</h3>';

        adhkar.forEach((dhikr, i) => {
            const item = document.createElement('div');
            item.className = 'dhikr-item';
            item.innerHTML = `
                <span class="dhikr-name">${dhikr} ${completed[i] ? '✅' : '⏳'}</span>
                <span class="dhikr-count">${counts[i]}x</span>
            `;
            displayEl.appendChild(item);
        });
    }
}

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) modal.classList.add('show');
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateProgress);
} else {
    updateProgress();
}

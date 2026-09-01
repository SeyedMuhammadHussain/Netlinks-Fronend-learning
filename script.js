let companyName = "Netlinks";
let completedProjects = 15;
let frontendStage = 8;
let projectStatus = "active";

//2. If / Else
let experienceLevel = "Growing technology team";
if (completedProjects >= 15) {
  experienceLevel = "Experienced technology team";
} else {
  experienceLevel = "Growing technology team";
}

// 3. Switch
let selectedService = 2;
let seviceName = "";
switch (selectedService) {
  case 1:
    seviceName = "Web Application";
    break;
  case 2:
    seviceName = "Buisness Systems";
    break;
  case 3:
    seviceName = "Frontend Training";
    break;
  default:
    seviceName = "General Technology Service";
}

//4. For Loop
let completedSteps = 0;
for (let step = 1; step <= frontendStage; step++) {
  completedSteps = completedSteps + 1;
}
//5. While Loop
let currentStage = 1;
while (currentStage <= frontendStage) {
  currentStage = currentStage + 1;
}

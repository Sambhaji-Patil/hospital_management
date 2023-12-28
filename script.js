// Updated list of doctor specialities with associated symptoms
var specialities = {
    "Cardiologist": ["heart", "blood vessels", "heart failure", "heart attack", "high blood pressure", "irregular heartbeat", "breathlessness"],
    "Dermatologist": ["skin", "hair", "nails", "scars", "acne", "skin allergy"],
    "Gastroenterologist": ["stomach pain", "bowels", "pancreas", "liver", "gallbladder", "abdominal pain", "ulcer", "diarrhea", "jaundice", "colon cancer"],
    "Psychiatrist": ["mental stress", "emotional", "addictive disorders", "depression", "schizophrenia", "substance abuse", "anxiety disorders"]
};

// Add Doctor
var doctors = [];
function addDoctor() {
    var doctorName = document.getElementById("doctorName").value;
    var doctorSpeciality = document.getElementById("doctorSpeciality").value;
    console.log("Doctor Name: " + doctorName);
    console.log("Doctor Speciality: " + doctorSpeciality);
    doctors.push({ name: doctorName, speciality: doctorSpeciality });
    var doctorMessage = document.getElementById("doctorMessage");
    doctorMessage.innerHTML = "Doctor Added";
    doctorMessage.classList.add("blink-yellow"); // Add blink effect

    // Hide the message after 2 seconds
    setTimeout(function () {
        doctorMessage.innerHTML = "";
        doctorMessage.classList.remove("blink-yellow");
    }, 2000);
}

// New Registration
var patients=[];
function registerPatient() {
    var patientName = document.getElementById("patientName").value;
    var contactNo = document.getElementById("contactNo").value;
    var illness = document.getElementById("illness").value;
    var registrationDate = document.getElementById("registrationDate").value;

    var assignedDoctor = "";
    for (var speciality in specialities) {
        if (specialities[speciality].includes(illness)) {
            assignedDoctor = getDoctorBySpeciality(speciality);
            break;
        }
    }

    patients.push({
        name: patientName,
        contactNo: contactNo,
        illness: illness,
        registrationDate: registrationDate,
        assignedDoctor: assignedDoctor
    });

    var patientMessage = document.getElementById("patientMessage");
    patientMessage.innerHTML = "Patient Registered successfully";
    patientMessage.classList.add("blink-yellow"); // Add blink effect

    // Hide the message after 2 seconds
    setTimeout(function () {
        patientMessage.innerHTML = "";
        patientMessage.classList.remove("blink-yellow");
    }, 2000);
}

// Helper function to get a doctor's name by speciality
function getDoctorBySpeciality(speciality) {
    for (var i = 0; i < doctors.length; i++) {
        if (doctors[i].speciality === speciality) {
            return doctors[i].name;
        }
    }
    return "";
}

// Previous Record
function searchPatient() {
    var patientName = document.getElementById("patientSearch").value;
    console.log("Patient Name: " + patientName);
    var patientDetails = document.getElementById("patientDetails");
    patientDetails.innerHTML = "";
    var patientRecord = "";
    for (var i = 0; i < patients.length; i++) {
        if (patients[i].name == patientName) {
            patientRecord =
                "Patient Name: " +
                patients[i].name +
                "<br>" +
                "Contact No: " +
                patients[i].contactNo +
                "<br>" +
                "Symptoms: " +
                patients[i].illness +
                "<br>" +
                "Registration Date: " +
                patients[i].registrationDate +
                "<br>" +
                "Assigned Doctor: " +
                patients[i].assignedDoctor;
            break;
        }
    }
    patientDetails.innerHTML = patientRecord;
}

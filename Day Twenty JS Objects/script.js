const students = [
    { name: "Favour Short", matric:"12/34MEE/567", faculty: "Engineering and Technology", department:"Mechanical Engineering", level:"300", enrollment:"Enrolled" },
    { name: "Favour Tall", matric:"12/34MEE/567", faculty: "Engineering and Technology", department:"Aero and Astro Engineering", level:"300", enrollment:"Not Enrolled" },
    { name: "Jane Smith", matric:"12/34MEE/567", faculty: "Engineering and Technology", department:"Civil Engineering", level:"300", enrollment:"Enrolled" },
    { name: "Sam Brown", matric:"12/34MEE/567", faculty: "Engineering and Technology", department:"Material Science Engineering", level:"200", enrollment:"Not Qualified" },
    { name: "Lucy White", matric:"12/34MEE/567", faculty: "Engineering and Technology", department:"Mechanical Engineering", level:"300", enrollment:"Enrolled" },
    { name: "Lucky Brown", matric:"12/34MEE/567", faculty: "Engineering and Technology", department:"Mechanical Engineering", level:"300", enrollment:"Enrolled" },
    { name: "OS Moses", matric:"12/34MEE/567", faculty: "Engineering and Technology", department:"Mechanical Engineering", level:"300", enrollment:"Enrolled" },
    { name: "John Doe", matric:"12/34MEE/567", faculty: "Engineering and Technology", department:"Food and Agric Engineering", level:"300", enrollment:"Enrolled" },
  
];

const studentList = document.getElementById("student-list");

function displayStudents(studentArray) {
    studentArray.forEach(student => {
        const studentDiv = document.createElement("div");
        studentDiv.classList.add("student-container");

        studentDiv.innerHTML = `
            <h3>${student.name}</h3>
            <p><strong>Matric Number:</strong> ${student.matric}</p>
            <p><strong>Faculty:</strong> ${student.faculty}</p>
            <p><strong>Department:</strong> ${student.department}</p>
            <p><strong>Current Level:</strong> ${student.level}</p>
            <p><strong>Status:</strong> ${student.enrollment}</p>
        `;

        studentList.appendChild(studentDiv);
    });
}

displayStudents(students);
 


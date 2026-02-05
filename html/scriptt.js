let jobs = JSON.parse(localStorage.getItem('jobs')) || [];

function renderJobs() {
    const container = document.getElementById('jobContainer');
    container.innerHTML = '';
    jobs.forEach((job, index) => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.innerHTML = `
            <div class="job-title">${job.title}</div>
            <div class="job-company">${job.company}</div>
            <div class="job-salary">${job.salary}</div>
            <div class="job-desc">${job.desc}</div>
            <button class="apply-btn" onclick="applyJob(${index})">Apply</button>
            <button class="delete-btn" onclick="deleteJob(${index})">Delete</button>
        `;
        container.appendChild(card);
    });
}

document.getElementById('addJobBtn').onclick = function() {
    document.getElementById('jobForm').style.display = 'block';
};

function saveJob() {
    const title = document.getElementById('title').value.trim();
    const company = document.getElementById('company').value.trim();
    const salary = document.getElementById('salary').value.trim();
    const desc = document.getElementById('desc').value.trim();

    if (!title || !company || !salary || !desc) {
        alert('Please fill all fields');
        return;
    }

    jobs.push({ title, company, salary, desc });
    localStorage.setItem('jobs', JSON.stringify(jobs));
    renderJobs();
    cancelAdd();
}

function cancelAdd() {
    document.getElementById('jobForm').style.display = 'none';
    document.getElementById('title').value = '';
    document.getElementById('company').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('desc').value = '';
}

function deleteJob(index) {
    jobs.splice(index, 1);
    localStorage.setItem('jobs', JSON.stringify(jobs));
    renderJobs();
}

function applyJob(index) {
    const job = jobs[index];
    alert("You applied for: " + job.title + " at " + job.company);
}

renderJobs();

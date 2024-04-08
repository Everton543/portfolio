$(document).ready(function() {
    getProjectList();
});

function getProjectList(){
    $('#projectsGrid').html(`
        <div class="icon-spinner">
            <i class="fas fa-circle-notch"></i>
        </div>
    `);
    $.ajax({
        url: 'https://cse-341-landingpage.onrender.com/products',
        type: 'GET',
        success: function(data) {
            let html = '';
            let link = '';
            data.forEach(project => {
                link = '';
                if(project.link.trim() != ''){
                    link = `<a href="${project.link}" class="project-link button blink_button" target="_blank">View Project</a>`;
                }
                html += `
                    <div class="col-md-4 project-card">
                        <img src="${project.image}" class="project-img" alt="${project.name}">
                        <div class="project-content">
                            <h3 class="project-name text-neon blink_text">${project.name}</h3>
                            <p class="project-detail">${project.detail}</p>
                            ${link}
                        </div>
                    </div>
                `;
            });
            $('#projectsGrid').html(html);
        },
        error: function(xhr, status, error) {
            alert("Sorry we got an error on the API.", 'projectsGrid');
        }
    });
}
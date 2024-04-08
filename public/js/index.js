function baseUrl(parameters = ''){
    const protocol = window.location.protocol;
    const host = window.location.host;
    let baseUrl = `${protocol}//${host}`;
    if(parameters != ''){
        baseUrl += `/${parameters}`;
    }
    return baseUrl;
}

function alert(message, containerId, type = 'success'){
    let html = `
        <div class="alert alert-${type} fade show">
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            ${message}
        </div>
    `;

    $(`#${containerId}`).html(html);
}
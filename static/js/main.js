$(document).ready(function () {
    
});

async function LogoutUser() {
    ShowLoader();

    sessionStorage.clear();
    user = null;
    isValidated = false;

    await LoginContainer();
}

function toggleDropdown(element) {
    let dropdown = element.closest('.dropdown').querySelector('.dropdown-content');
    let isOpen = dropdown.classList.contains('show');

    document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show'));
    if (!isOpen) {
        dropdown.classList.add('show');
    }
}
document.addEventListener('click', function (event) {
    if (!event.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach(d => d.classList.remove('show'));
    }
});

async function ShowLoader() {
    const loader = `<div id="loader" class="loader">
        <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 187.3 93.7">
            <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="8" stroke="#FFFFFF" fill="none" opacity="1"></path>
            <path d="M93.9,46.4c9.3,9.5,13.8,17.9,23.5,17.9s17.5-7.8,17.5-17.5s-7.8-17.6-17.5-17.5c-9.7,0.1-13.3,7.2-22.1,17.1 c-8.9,8.8-15.7,17.9-25.4,17.9s-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5S86.2,38.6,93.9,46.4z" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="4" fill="none" id="outline" stroke="#F6A6BB"></path>
        </svg>
    </div>`;
    $("body").append(loader);
}

async function RemoveLoader() {
    $("#loader").remove();
}

function formatTimestamp(timestamp) {
    const date = timestamp.toDate();
    return date.toLocaleString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    }).replace(",", "");
}
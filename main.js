document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(users => {
            const usersList = document.getElementById('users-list');
            users.forEach(user => {
                const userElement = document.createElement('div');
                userElement.classList.add('user');
                userElement.innerHTML = `
                    <img src="${user.avatar_url}" alt="${user.login}" width="50" height="50">
                    <div class="user-info">
                        <h3>${user.login}</h3>
                        <p><a href="${user.html_url}" target="_blank">Profile</a></p>
                        <p><a href="${user.repos_url}" target="_blank">Repositories</a></p>
                    </div>
                `;
                usersList.appendChild(userElement);
            });
        })
        .catch(error => console.error('Error fetching data: ', error));
});

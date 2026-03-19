fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
.then(response => response.json())
.then(data => {
    const container = document.getElementById("pokemon");

    data.results.forEach(pokemon => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `<strong>${pokemon.name}</strong>`;
        container.appendChild(div);
    });
});

fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
.then(response => response.json())
.then(posts => {
    const container = document.getElementById("posts");

    posts.forEach(post => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <strong>${post.title}</strong>
            <p>${post.body}</p>
        `;

        container.appendChild(div);
    });
});

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(users => {
    const container = document.getElementById("users");

    users.forEach(user => {
        const div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <strong>${user.name}</strong>
            <p>Email: ${user.email}</p>
            <p>Cidade: ${user.address.city}</p>
        `;

        container.appendChild(div);
    });
});
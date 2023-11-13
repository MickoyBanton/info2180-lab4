window.addEventListener
("load", () =>
{
    const form = document.querySelector("form");

    form.addEventListener('submit', function(event) {

        event.preventDefault();

        fetch("superheroes.php")

        .then(response => response.text())

        .then(data => 
        {
            alert(data);
        })
        .catch(error => 
        {
            console.log(error);
        });

    });
}
)
window.addEventListener
("load", () =>
{
    const form = document.querySelector("form");
    const result=document.querySelector("#result");
    const input=document.querySelector("input");

    fetch(`superheroes.php`)

        .then(response => response.text())

        .then(data => 
        {
            result.innerHTML = data;
        })
        .catch(error => 
        {
            console.log(error);
        });

    
    
    form.addEventListener('submit', function(event) {

        event.preventDefault();
        let heroname = input.value.trim();
        let fetch_paramter = `superheroes.php?name=${heroname}`;

        fetch(fetch_paramter)

        .then(response => response.text())

        .then(data => 
        {
            result.innerHTML = data;
        })
        .catch(error => 
        {
            console.log(error);
        });

    });
}
)
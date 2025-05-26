const lang_buttons = document.querySelectorAll("[data-language]");
const texts_to_change = document.querySelectorAll("[data-value]");

lang_buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        fetch(`../languages/${button.dataset.language}.json`)
        .then(res => res.json())
        .then(data => {
            texts_to_change.forEach((elemento) =>{
                const section = elemento.dataset.section;
                const value = elemento.dataset.value;

                elemento.innerHTML = data[section][value];
            })
        })
    })
})

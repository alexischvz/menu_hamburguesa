export default function menu(btn, panel, enlace) {

    const d = document;

    d.addEventListener("click", (e) => {

        if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {

            d.querySelector(panel).classList.toggle("is-active");

            d.querySelector(btn).classList.toggle("is-active");

        }

        if (e.target.matches(enlace)) {

            d.querySelector(btn).classList.remove("is-active");
            d.querySelector(panel).classList.remove("is-active");

        }

    })

}
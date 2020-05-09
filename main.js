window.addEventListener('load', function () {

    // Path (d) value of moon and sun emoji
    // The path of sun is morphed to moon and vice versa
    const moonPath = "M16 27.5C16 42.6878 27.5 52.5 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 16 12.3122 16 27.5Z";
    const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";
    const starPath = ""

    // Select svg
    const darkMode = document.querySelector("#darkMode");
    //const isn't used because we have to change the value to true later
    let toggle = false;
    let toggleCount = 0;
    let blogDisplay = false;

    // Listen for clicks on the sun
    darkMode.addEventListener('click', () => {
        //Animate using anime.js
        //Here we set the TIMELINE 
        const timeline = anime.timeline({
            duration: 300,
            easing: "easeOutExpo"
        });
        //Add different animations to the timeline
        timeline
            .add({
                targets: ".sun",
                d: [{ value: toggle ? sunPath : moonPath }]
            })
            .add({
                targets: "#darkMode",
                rotate: toggle ? 0 : 320
            }, '-= 150')   // -= is used for duration
            .add({
                targets: "section",
                backgroundColor: toggle ? 'rgb(243, 236, 229)' : "rgb(32, 32, 32)",
                color: toggle ? "rgb(32, 32, 32)" : "rgb(243, 236, 229)"
            }, '-= 150');
        //Everytime we click on the sun toggle switches from true to false
        toggle = !toggle;
        toggleCount += 1;
        this.console.log(toggleCount)

        const starTime = anime.timeline({
            duration: 1000,
            easing: "linear"
        })
        if (toggleCount >= 2) {
            starTime.add({
                targets: ".star",
                opacity: toggle ? '1' : '0',
            });
        }
    });
})
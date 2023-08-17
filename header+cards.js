document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const heading = document.createElement('h1');
    heading.textContent = 'PAGE HEADER';
    header.appendChild(heading);

    const body = document.querySelector('body');
    const mainDiv = document.createElement('div');
    body.appendChild(mainDiv);

    const cities = ['Vancouver', 'Calgary', 'Edmonton', 'Victoria'];
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Storm'];

    for (let i = 0; i < cities.length; i++) {
        const div = document.createElement('div');
        const city = cities[Math.floor(Math.random() * conditions.length)]
        const condition = conditions[Math.floor(Math.random() * conditions.length)]; 
        const temperature = Math.floor(Math.random() * 30) + 1; 
//styling///////////////////////

heading.style.display = 'flex'
heading.style.justifyContent='center'

        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.padding = '20px';
        div.style.backgroundColor = '#f2f2f2';
        div.style.marginBottom = '10px';
        div.style.border = '2px solid #ccc';
        div.style.borderRadius = '8px';
        div.style.width = '6rem';
        div.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';

        mainDiv.style.display = 'flex';
        mainDiv.style.flexDirection = 'row';
        mainDiv.style.justifyContent = 'space-evenly';

        const cityName = document.createElement('p');
        cityName.textContent = city;
        div.appendChild(cityName);

        const temperatureText = document.createElement('p');
        temperatureText.textContent = `${temperature}°C`;
        div.appendChild(temperatureText);

        const conditionText = document.createElement('p');
        conditionText.textContent = condition;
        div.appendChild(conditionText);

        div.addEventListener('mouseenter', function() {
            div.style.transform = 'translateY(-5px)';
            div.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });

        div.addEventListener('mouseleave', function() {
            div.style.transform = 'translateY(0)';
            div.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        div.addEventListener('click', function() {
            const randomBgColor = getRandomColor();
            const randomTextColor = getRandomColor();

            div.style.backgroundColor = randomBgColor;
            div.style.backgroundColor = randomBgColor;
            div.style.color = randomTextColor;
        });
///////////////////////////////////////////

        mainDiv.appendChild(div);
    }
});

$(document).ready(function() {
    const header = $('header');
    const heading = $('<h1>').text('PAGE HEADER');
    heading.appendTo(header);

    const body = $('body');
    const mainDiv = $('<div>');
    mainDiv.appendTo(body);

    const cities = ['Vancouver', 'Calgary', 'Edmonton', 'Victoria'];
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Storm'];

    for (let i = 0; i < cities.length; i++) {
        const div = $('<div>');
        const city = cities[Math.floor(Math.random() * conditions.length)];
        const condition = conditions[Math.floor(Math.random() * conditions.length)];
        const temperature = Math.floor(Math.random() * 30) + 1;

        // Add classes to apply styles
        div.addClass('city-div');

        const cityName = $('<p>').text(city);
        cityName.appendTo(div);

        const temperatureText = $('<p>').text(`${temperature}°C`);
        temperatureText.appendTo(div);

        const conditionText = $('<p>').text(condition);
        conditionText.appendTo(div);

        div.mouseenter(function() {
            $(this).css({
                transform: 'translateY(-5px)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            });
        });

        div.mouseleave(function() {
            $(this).css({
                transform: 'translateY(0)',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            });
        });

        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        div.click(function() {
            const randomBgColor = getRandomColor();
            const randomTextColor = getRandomColor();

            $(this).css({
                backgroundColor: randomBgColor,
                color: randomTextColor
            });
        });

        // Apply styling to the div
        div.css({
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            backgroundColor: '#f2f2f2',
            marginBottom: '10px',
            border: '2px solid #ccc',
            borderRadius: '8px',
            width: '6rem',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        });

        mainDiv.css({
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        });

        mainDiv.append(div);
    }
});

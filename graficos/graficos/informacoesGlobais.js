const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function visualizeGlobalStatistics() {
    const res = await fetch(url);
    const data = await res.json();
    
    // Convert global data into meaningful statistics for adolescent pregnancy
    const totalAdolescents = (data.total_adolescents / 1e6); // Adjust the divisor for your data scale
    const pregnantAdolescents = (data.total_pregnant_adolescents / 1e6); // Adjust the divisor for your data scale
    const averagePregnancyDuration = parseInt(data.average_pregnancy_duration);
    const remainingDays = Math.round((data.average_pregnancy_duration - averagePregnancyDuration) * 30); // Assuming average pregnancy duration in months

    // Calculate percentage of pregnant adolescents
    const percentagePregnant = ((pregnantAdolescents / totalAdolescents) * 100).toFixed(2);

    // Create and insert the paragraph into the HTML
    const paragraph = document.createElement('p');
    paragraph.classList.add('charts-container__text');
    paragraph.innerHTML = `Did you know that there are <span>${totalAdolescents} million</span> adolescents globally, and approximately <span>${pregnantAdolescents} million</span> are currently pregnant? On average, the pregnancy duration is <span>${averagePregnancyDuration} months</span> and <span>${remainingDays} days</span> remaining.<br>This means that approximately <span>${percentagePregnant}%</span> of adolescents are pregnant.`;

    const container = document.getElementById('charts-container');
    container.appendChild(paragraph);
}

visualizeGlobalStatistics();

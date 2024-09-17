import { getCSS, tickConfig } from "./common.js";

async function numberOfPregnantAdolescentsByRegion() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json';
    const res = await fetch(url);
    const data = await res.json();
    const regionNames = Object.keys(data);
    const numberOfPregnantAdolescents = Object.values(data);

    const chartData = [
        {
            x: regionNames, 
            y: numberOfPregnantAdolescents, 
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Adolescent Pregnancy Statistics by Region',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                family: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Region',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Number of Pregnant Adolescents (in millions)',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    };

    const chartDiv = document.createElement('div');
    chartDiv.className = 'chart';
    document.getElementById('charts-container').appendChild(chartDiv);
    Plotly.newPlot(chartDiv, chartData, layout);
}

numberOfPregnantAdolescentsByRegion();

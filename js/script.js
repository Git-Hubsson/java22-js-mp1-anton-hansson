const mainContainer = document.createElement('div');
document.body.append(mainContainer);
mainContainer.style.width = ' 45rem';
mainContainer.style.margin = '0 auto';
const container1 = document.createElement('div');
mainContainer.append(container1);

let hue = 120;
let size = 10;
for (let i = 1; i <= 5; i++) {
    const h3 = document.createElement('h3');
    container1.append(h3);
    h3.innerText = `Rad ${[i]}`;
    h3.style.backgroundColor = `hsl(${hue},  70%, 85%`;
    hue += 20;
    h3.style.fontSize = `${size}px`;
    size += 8;
    h3.style.textAlign = 'center';
    h3.style.color = 'hsl(240, 100%, 70%';
}

const container2 = document.createElement('div');
mainContainer.append(container2);
container2.style.border = 'solid';
container2.style.display = 'flex';

for (let i = 0; i < 3; i++) {
    const innerContainers = document.createElement('div');
    container2.append(innerContainers)
    innerContainers.style.margin = '3rem auto';
    innerContainers.style.border = 'solid hsl(230, 50%, 75%)';
    innerContainers.style.borderWidth = '8px'; 
    innerContainers.style.width = '3rem';
    for (let j = 0; j < 10; j++) {
        const p = document.createElement('p');
        p.style.margin = '0';
        p.style.listStyle = 'none';
        if (i === 0) {
            p.innerHTML = j;
            if ((j % 2) == 0) {
                blackAndWhite(p);
            }
            if (j == 4) {
                purpleAndWhite(p);
            }
            innerContainers.append(p);
            innerContainers.style.textAlign = 'left';
        } else if (i === 1) {
            p.innerHTML = 9 - j;
            innerContainers.append(p);
            innerContainers.style.textAlign = 'center';
            if (j % 2 == 1 && j > 2) {
                blackAndWhite(p);
            }
            if (j == 1) {
                purpleAndWhite(p);
            }
        } else if (i === 2) {
            const num = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
            p.innerHTML = num[j];
            innerContainers.style.textAlign = 'right';
            if (j % 2 == 0) {
                blackAndWhite(p);
            }
            if (j == 5) {
                p.style.backgroundColor = 'hsl(230, 50%, 75%)';
            }
            innerContainers.append(p);
        }
    }
}

function blackAndWhite(element){
    element.style.backgroundColor = 'black';
    element.style.color = 'white';
}

function purpleAndWhite(element){
    element.style.backgroundColor = 'hsl(230, 50%, 75%)';
    element.style.color = 'white';
}
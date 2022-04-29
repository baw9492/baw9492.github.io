const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText = '今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。';
let insertX = ['怪兽威利', '大老爹', '圣诞老人'];
let insertY = ['肯德基', '迪士尼乐园', '白宫'];
let insertZ = ['自燃了', '在人行道化成了一坨泥', '变成一条鼻涕虫爬走了'];

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}


function result() {

    let newStory = storyText;

    if (customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replaceAll('李雷', name);
    }

    if (document.getElementById("american").checked) {
        let weight = Math.round(300);
        let temperature = Math.round(94);
        temperature += ' 华氏度'
        weight += ' 磅';
        newStory = newStory.replace('34 摄氏度', temperature);
        newStory = newStory.replace('130 公斤', weight);

    }
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':inserta:', xItem);
    newStory = newStory.replaceAll(':insertb:', yItem);
    newStory = newStory.replaceAll(':insertc:', zItem);


    story.textContent = newStory;
    story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);


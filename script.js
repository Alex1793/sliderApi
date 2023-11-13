const CLIENT_ID = 'Ib9R1O03D5EqSaHH_muXXdaQ7Qik8Wsgtd8qZaPWiOA'; 
const slider = document.getElementById('slider');

let state = [];

const getPhoto = async () => {
    const url = `https://api.unsplash.com/photos/random?client_id=${CLIENT_ID}&count=4`;
    const respons = await fetch(url);
    const data = await respons.json();
    if(respons.ok && data.length) {
        state = data;
        setPhotos();
    }
}

const renderItem = () => {
    return state.map(({urls: {regular}, user: {name}}) => {
        return `
            <div class="slide" style="background-image: url(${regular})">
                <div class="slide-text">
                    <span>photo by</span>
                    ${name}
                </div>
            </div>
        `
    }).join("");
}

const setPhotos = () => {
    slider.innerHTML = renderItem();
}

getPhoto();
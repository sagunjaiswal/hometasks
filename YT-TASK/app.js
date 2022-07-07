//for searchbar
let srchInput = document.querySelector('.search-bar');
const srchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

srchBtn.addEventListener('click', () => {
    if(srchInput.value.length){
        location.href = searchLink + srchInput.value;
    }
})

srchInput.addEventListener("keyup", function(event) {
   if (event.keyCode === 13) {
      event.preventDefault();
      srchBtn.click();
  }
});

//for suggestions
let jsFilter = document.getElementById('js');
jsFilter.addEventListener('click', () => {
    jsFilter.classList.add('active');
    location.href = searchLink+'JavaScript';
});

let wdFilter = document.getElementById('wd');
wdFilter.addEventListener('click', () => {
    wdFilter.classList.add('active');
    location.href = searchLink+'Web Development';
});

let cssFilter = document.getElementById('css');
cssFilter.addEventListener('click', () => {
    cssFilter.classList.add('active');
    location.href = searchLink+'CSS';
});

let comedyFilter = document.getElementById('comedy');
comedyFilter.addEventListener('click', () => {
    comedyFilter.classList.add('active');
    location.href = searchLink+'Comedy';
});

let moviesFilter = document.getElementById('movies');
moviesFilter.addEventListener('click', () => {
    moviesFilter.classList.add('active');
    location.href = searchLink+'Movies';
});

let standupFilter = document.getElementById('standup');
standupFilter.addEventListener('click', () => {
    standupFilter.classList.add('active');
    location.href = searchLink+'Stand up';
});

let aiFilter = document.getElementById('ai');
aiFilter.addEventListener('click', () => {
    aiFilter.classList.add('active');
    location.href = searchLink+'Artificial Intellegence';
});

let mlFilter = document.getElementById('ml');
mlFilter.addEventListener('click', () => {
    mlFilter.classList.add('active');
    location.href = searchLink+'Machine Learning';
});

let healthFilter = document.getElementById('ml');
healthFilter.addEventListener('click', () => {
    healthFilter.classList.add('active');
    location.href = searchLink+'Health';
});


const videoCardContainer = document.querySelector('.videoContainer');
let apiKey = "AIzaSyATUX3yZR94wI3SXci4PBEaDwyHxA7KyUw";
let videoHttp = "https://www.googleapis.com/youtube/v3/videos?";
let channelHttp = "https://www.googleapis.com/youtube/v3/channels?";

let usp = new URLSearchParams({
        key:apiKey,
        part:'snippet',
        chart: 'mostpopular',
        maxResults:52,
        regionCode : 'IN'
    });

fetch(videoHttp+`${usp}`).then(res => res.json()).then(data => {
    data.items.forEach(item => {
        getChannelIcon(item);
    })
}).catch(err => console.log(err));

const getChannelIcon = (videoData) => {
    let usp =  new URLSearchParams({
        key: apiKey,
        part: 'snippet',
        id: videoData.snippet.channelId
    });
    fetch(channelHttp + `${usp}`)
    .then(res => res.json())
    .then(data => {
        videoData.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        createVideoCard(videoData);
    })

    const createVideoCard = (data) => {
        videoCardContainer.innerHTML += `<div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>`;
    }
}


import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(LOCALSTORAGE_KEY || 0);

function onPlay({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}

player
  .setCurrentTime(currentTime)
  .then(function (time) {
    time = currentTime;
  })
  .catch(function (error) {
    console.log(error.message);
  });

player.on('timeupdate', throttle(onPlay, 1000));

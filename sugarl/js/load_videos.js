let GAMES = "kung_fu_master battle_zone boxing amidar assault asterix bank_heist chopper_command crazy_climber demon_attack freeway frostbite gopher hero jamesbond kangaroo krull ms_pacman pong private_eye qbert road_runner seaquest up_n_down"

const games = GAMES.split(" ")


let video_container = document.getElementById("main-video");
window.onload = function() {
    for (let g of games){
        let video = document.createElement('video');
        video.src = "videos/"+g+"_fov.mp4";
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsinline = true;
        video.style="width: 16.6%";
        video.playbackRate = 0.3;
        video_container.appendChild(video);
        

        video = document.createElement('video');
        video.src = "videos/"+g+"_record.mp4";
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsinline = true;
        video.style="width: 16.6%";
        video.playbackRate = 0.3;
        video_container.appendChild(video);
    }
}
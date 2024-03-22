// ダンス説明の表示/非表示の切り替え
function toggleDescription(termId) {
    var description = document.getElementById(termId);
    description.style.display = description.style.display === "none" ? "block" : "none";
}

// タグに基づく動画のフィルタリング
function filterVideosByTag(selectedTag) {
    var allVideos = document.getElementsByClassName('videoItem');
    for (var i = 0; i < allVideos.length; i++) {
        var video = allVideos[i];
        var tags = video.getElementsByClassName('tags')[0].getElementsByTagName('li');
        var match = false;
        for (var j = 0; j < tags.length; j++) {
            if (tags[j].textContent === selectedTag) {
                match = true;
                break;
            }
        }
        video.style.display = match ? '' : 'none';
    }
}

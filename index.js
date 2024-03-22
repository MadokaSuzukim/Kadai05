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
function submitComment(videoId) {
    const commentInput = document.getElementById(`commentInput-${videoId}`);
    const commentText = commentInput.value;
    const commentsRef = firestore.collection('comments');
  
    const commentData = {
      text: commentText,
      videoId: videoId,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
  
    commentsRef.add(commentData).then(() => {
      console.log('コメントを追加しました');
      commentInput.value = '';
    }).catch(error => {
      console.error('コメントの追加に失敗しました:', error);
    });
  }

  function loadComments(videoId) {
    firestore.collection('comments')
      .where('videoId', '==', videoId)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const commentsContainer = document.getElementById(`commentsContainer-${videoId}`);
        commentsContainer.innerHTML = '';
  
        snapshot.forEach(doc => {
          const comment = doc.data();
          const commentElement = document.createElement('p');
          commentElement.textContent = comment.text;
          commentsContainer.appendChild(commentElement);
        });
      });
  }
  
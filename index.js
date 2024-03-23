// アップロードされた動画を表示する関数
function displayUploadedVideo(url) {
    // 要素を作成
    const videoItem = document.createElement('div');
    videoItem.classList.add('videoItem');
    videoItem.innerHTML = `
        <div class="dance-move" draggable="true">
            <p>アップロードした動画</p>
            <video width="320" height="240" controls>
                <source src="${url}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    `;
    // 指定したコンテナ（idが'videosContainer'のdiv）に動画を追加
    document.getElementById('videosContainer').appendChild(videoItem);
}

// アップロードが完了したら、動画のURLを含むメタデータをデータベースに保存
function saveVideoData(videoUrl) {
  const videosRef = databaseRef(db, 'videos');
  const newVideoRef = push(videosRef);
  set(newVideoRef, {
    url: videoUrl,
    uploadedAt: Date.now()
  });
}

// アップロード処理
window.uploadVideo = async function() {
    const fileInput = document.getElementById('videoFile');
    if (fileInput.files.length === 0) {
        console.log('No file selected.');
        return;
    }
    const file = fileInput.files[0];
    const fileRef = storageRef(storage, `videos/${file.name}`);
    try {
        const uploadResult = await uploadBytes(fileRef, file);
        const url = await getDownloadURL(fileRef);
        console.log('Upload successful, URL:', url);
        displayUploadedVideo(url);
        saveVideoData(url);
    } catch (error) {
        console.error('Upload failed:', error);
    }
};

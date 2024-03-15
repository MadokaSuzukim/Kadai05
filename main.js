// サインアップ（新規ユーザー登録）の関数
async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("サインアップ成功:", userCredential.user);
  } catch (error) {
    console.error("サインアップ失敗:", error);
  }
}
// サインインの関数
async function signIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("サインイン成功:", userCredential.user);
  } catch (error) {
    console.error("サインイン失敗:", error);
  }
}
  // 位置情報の取得に成功した時の処理
  function mapsInit(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
  }
  // 位置情報の取得に失敗した場合の処理
  function mapsError(error) {
    let e = "";
    if (error.code == 1) {
      e = "位置情報が許可されてません";
    }
    if (error.code == 2) {
      e = "現在位置を特定できません";
    }
    if (error.code == 3) {
      e = "位置情報を取得する前にタイムアウトになりました";
    }
    console.error("エラー：", e);
  }
    // セクションヘッダーがクリックされたときの処理
document.querySelectorAll('.section-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  });
});
// セクションヘッダーがクリックされたときの処理
document.querySelectorAll('.section-sengen').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  });
});


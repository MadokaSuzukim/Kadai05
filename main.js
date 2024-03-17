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


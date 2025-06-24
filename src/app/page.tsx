useEffect(() => {
  completeLogin()
    .then((user) => {
      alert('completeLogin終了');
      console.log('completeLogin user:', user);
      if (user) {
        alert('ログイン成功');
        router.push('/board');
      } else {
        alert('ログイン未完了');
        // fallback: detect via auth state
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
          if (authUser) {
            console.log('✅ fallback user from auth:', authUser);
            alert('✅ fallback user 検出！');
            router.push('/board');
          } else {
            alert('❌ fallback user: null');
            setChecked(true);
          }
          unsubscribe(); // 登録解除
        });
      }
    })
    .catch((error) => {
      console.error('completeLogin error:', error);
      alert('completeLogin error');
      setChecked(true);
    });
}, []);

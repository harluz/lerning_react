import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  // 表示・非表示の状態管理
  const [open, setOpen] = useState(false);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  // イベント発生時にその対象となる値をuseStateのsetTextに渡す
  const onChangeText = (e) => setText(e.target.value);

  // !をつけることで真偽値を反転させる。真→偽　偽→真
  const onClickOpen = () => setOpen(!open);

  // setOpenの初期値をfalseにして閉じる動作を実行する
  // useCallback:処理が変わらない場合は、同じ関数を使い回す
  // 第１引数に見張るべき値を記述。今回はopenの値の変更の有無により実行する
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      {/* onClickにより、クリックされたときに表示・非表示を切り替える設定の追加 */}
      <button onClick={onClickOpen}>表示</button>
      {/* ChildAreaにopen（左側）というpropsをopen（右側）というステートを渡す */}
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}

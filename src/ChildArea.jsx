import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// ①メモで囲む
// propsが変更されない限り再レンダリングしないこととなる
export const ChildArea = memo((props) => {
  // 受け取ったpropsを展開する
  const { open, onClickClose } = props;
  console.log("ChildAreが更新された");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {/* 渡されたopenの状態により処理を分岐させていく */}
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});

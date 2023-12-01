import styles from "./ContentBox.module.css";

const ContentBox = ({ items }) => {
  const { text, location } = items;
  return (
    <div className={styles.Container}>
      {text ? <div className={styles.textBox}>{text}</div> : null}
      {location ? (
        <div className={styles.locationBox}>
          위치: X = {location.mapX}, Y = {location.mapY}
          {/* 위의 좌표를 구글 맵 좌표에 대입하면 됨 */}
          <img src="/img/trav.png" className={styles.mapSizing} />
          {/* 위에 이미지를 지도 사이징 할 곳임 */}
        </div>
      ) : null}
    </div>
  );
};

export default ContentBox;

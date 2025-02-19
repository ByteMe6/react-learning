import styles from "./eventItem.module.css";

const EventItem = ({ location, speaker, end, start, type }) => {
  console.log(styles);
  return (
    <li className={styles.item}>
      <p className=""><b>Місце проведення:</b> {location}</p>
      <p className=""><b>Виконавець:</b> {speaker}</p>
      <p className=""><b>Початок</b> {start}</p>
      <p className=""><b>Кінець</b> {end}</p>
      <p className=""><b>Вхід:</b> {type}</p>
    </li>
  );
};
// інлайнові стилі
// модульні стилі
// глобальні стилі
// бібліотеки

export default EventItem;

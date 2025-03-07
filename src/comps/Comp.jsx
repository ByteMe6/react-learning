import { Component } from "react";
import styles from "./cards.module.css"

class Comp extends Component {
  state = { message: "test" };
  render() {
    console.log(this.props.arr);
    console.log(styles.user);

    return (
      <div className={styles.propsArr}>
        {this.props.arr.map((e) => {
          return (
            <div className={styles.user}>
              <h2 className={styles.nickname}>{e.nickname}</h2>{" "}
              <p className={styles.email}>{e.email}</p>
              <p className={styles.id}>{e.id}</p>
              <br/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comp;

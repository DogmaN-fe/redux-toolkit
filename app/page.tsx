import Counter from "./ui/counter/counter";
import Square from "./ui/inSquare/inSquare";
import styles from "@/app/ui/global.module.css"

export default function Home() {
  return (
    <div className={styles.center}>
      <h2>Counter</h2>
      <Counter />
      <br></br>
      <h2>In Square</h2>
      <Square />
    </div>
  );
}

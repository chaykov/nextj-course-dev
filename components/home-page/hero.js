import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/img01.jpg"
          alt="An image showing Chaykov"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Chaykov</h1>
      <p>
        I blog about the web development - especially frontend frameworks like
        Next or React.
      </p>
    </section>
  );
}

import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Rejoignez les rangs de  <br className="sm:block hidden" />  nos clients satisfaits
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Nos experts sont formés aux dernières tendances et technologies 
      pour vous offrir des solutions à la pointe de l'innovation.

      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
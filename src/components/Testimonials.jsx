import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)
      /* feedback: an array of objects containing information about testimonials.
         map: A JavaScript method to browse the elements of an array and perform an operation on each element.
         (card) = > <FeedbackCard key={card.id} {...card} />: an arrow function that takes as argument a card object and returns a FeedbackCard component with specific properties.
         key={card.id}: assigns a unique key to each FeedbackCard component using the id property of the card object. This allows React to optimize the rendering and updating of components.
         {...card}: extends all properties of the card object as properties of the FeedbackCard component. This allows you to transmit all the necessary data to the FeedbackCard component to display the testimonial. */
      }
    </div>
  </section>
);

export default Testimonials;
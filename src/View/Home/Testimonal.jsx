import styles from "../../StyleSheets/Home/testimonal.module.css";
import starRating from "../../Assets/Image/star rating.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonal = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none"}}
            onClick={onClick}
          />
        );
      }
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "none"}}
            onClick={onClick}
          />
        );
      }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={styles["testimonial-area"]}>
            <div className={styles["sec-title"]}>
          <h2>Testimonials</h2>
          <p>What Students Say About Us?</p>
        </div>
        <div className={styles["testimonal-content"]}>
      <Slider {...settings}>
      <div className={styles["single-testimonial"]}>
            <div className={styles["round-1 round"]}></div>
            <div className={styles["round-2 round"]}></div>
            <p>
            "Sir's teaching is amazing. The study material is appropriate and
            contains everything required, no extra material required to study.
            The app requires some improvement, but the teaching that is provided
            is excellent."
            </p>
            <div className={styles["client-info"]}>
              <div className={styles["client-details"]}>
                <h6>Sanghmitra Verma</h6>
              </div>
            </div>
          </div>

          <div className={styles["single-testimonial"]}>
            <div className={styles["round-1 round"]}></div>
            <div className={styles["round-2 round"]}></div>
            <p>
            "It will be more helpful when they provide "download" option as
            "Unacademy". Because connectivity is the basic problem most of
            the time."
            </p>
            <div className={styles["client-info"]}>
              <div className={styles["client-details"]}>
                <h6>Doli Chauhan</h6>
              </div>
            </div>
          </div>

          <div className={styles["single-testimonial"]}>
            <div className={styles["round-1 round"]}></div>
            <div className={styles["round-2 round"]}></div>
            <p>
            "This is Only Best Platform for NET/JRF aspirants I have came
                across. 👉Most Important Content delivery by Mohit Sir!!!!
                👉Explanation in Lucid Language 👉Excellent Study Material.
                👉Audios for Revision 👉 QB for Practice including Py &
                Expected.  Thanks to entire team
                of M. Smart Academy. 
            </p>
            <div className={styles["client-info"]}>
              <div className={styles["client-details"]}>
                <h6>Jai</h6>
              </div>
            </div>
          </div>

          <div className={styles["single-testimonial"]}>
            <div className={styles["round-1 round"]}></div>
            <div className={styles["round-2 round"]}></div>
            <p>
            "Its very good class... Mohit sir is very good teacher and his
                teaching is Soo good... Full of study material of paper2 and
                each explaination is soo good and clear..."
            </p>
            <div className={styles["client-info"]}>
              <div className={styles["client-details"]}>
                <h6>Ayushi Goyal</h6>
              </div>
            </div>
          </div>

          <div className={styles["single-testimonial"]}>
            <div className={styles["round-1 round"]}></div>
            <div className={styles["round-2 round"]}></div>
            <p>
            "If you are in commerce you must buy this course.... No matter
                you are doing NET or not... All the commerce concepts are taught
                in such a manner that you can get them easily...."
            </p>
            <div className={styles["client-info"]}>
              <div className={styles["client-details"]}>
                <h6>Yogesh Solanki</h6>
              </div>
            </div>
          </div>

          <div className={styles["single-testimonial"]}>
            <div className={styles["round-1 round"]}></div>
            <div className={styles["round-2 round"]}></div>
            <p>
            "Very very clarity in teaching but I want it in more of English
                language"
            </p>
            <div className={styles["client-info"]}>
              <div className={styles["client-details"]}>
                <h6>Srinivas Sathyanaraya</h6>
              </div>
            </div>
          </div>

          <div className={styles["single-testimonial"]}>
            <div className={styles["round-1 round"]}></div>
            <div className={styles["round-2 round"]}></div>
            <p>
            "If anyone want to crack UGC NET from commerce subject this is
                only the way or platform to crack ....even not only NET .....JRF
                or also have a lot of topics which help for IAS PCS main or some
                other exams ...... You make your afforts as well as your Ideal
                after that your success is sure .... In Start..."
            </p>
            <div className={styles["client-info"]}>
              <div className={styles["client-details"]}>
                <h6>Barkha Saxena</h6>
              </div>
            </div>
          </div>

          <div className={styles["single-testimonial"]}>
            <div className={styles["round-1 round"]}></div>
            <div className={styles["round-2 round"]}></div>
            <p>
            "I am very much satisfied with the content what Mr. Mohit sir
                teaching for us. I respect the sir from core of my heart.
                Thanks"
            </p>
            <div className={styles["client-info"]}>
              <div className={styles["client-details"]}>
                <h6>Kunjal Modi</h6>
              </div>
            </div>
          </div>

          <div className={styles["single-testimonial"]}>
            <div className={styles["round-1 round"]}></div>
            <div className={styles["round-2 round"]}></div>
            <p>
            "Mr.Mohit sharma.. ..One of the best teacher...have with easy
                way of learning...i must say those who want to get JRF...
                definitely enhance own learning with him...thank you..."
            </p>
            <div className={styles["client-info"]}>
              <div className={styles["client-details"]}>
                <h6>Swati Jha</h6>
              </div>
            </div>
          </div>
      </Slider>
      </div>
     
    </section>
  );
};

export default Testimonal;

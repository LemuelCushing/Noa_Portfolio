import React from "react"
import { getSiteProps } from "react-static"
import glamorous from "glamorous"

const TextPanel = glamorous.div({
    width: "20%",
    padding: "5%",
    position: "absolute",
    right: "0px",
    direction: "rtl",
    fontSize: "18pt",
    textAlign: "justify",
    fontFamily: "'Heebo', sans-serif;",
})

const ImagePanel = glamorous.div({
    // backgroundColor: "#b6701e",
    position: "absolute",
    left: 0,
    width: "70%",
    paddingTop: "calc(5% + 3em)",
})

export default getSiteProps(() => (
    <section id="box">
        <TextPanel>
            <h3>
                כותרת
            </h3>
            <p>
                לורם איפסום דולור סיט אמט,
                 קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף,
                  מרגשי ומרגשח. עמחליף קוואזי במר מודוף. אודיפו
                בלאסטיק מונופץ קליר, בנפת נפקט למסון בלרק -
                 וענוף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח
                לביקו ננבי, צמוקו בלוקריה שיצמה ברורק.
            </p>
        </TextPanel>
        <ImagePanel>
            <img src="./assets/senses/cards.png" alt="" className="work" />
            <img src="./assets/senses/pin-blue.png" alt="" className="work pin" />
            <img src="./assets/senses/flyer.png" alt="" className="work" />
            <img src="./assets/senses/pin-red.png" alt="" className="work pin" />
            <img src="./assets/senses/posters.png" alt="" className="work" />
        </ImagePanel>
    </section>
))

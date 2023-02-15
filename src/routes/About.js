import AboutImg from "../assets/about_img.png";
import "./styles.css";

export default function About() {
    return (
        <div className="about" id="about">
            <div className="col col-4">
                <img src={AboutImg} alt="AboutImg" />
                <h2 className="about_heading">Pho Deli</h2>
            </div>
            <div className="col col-6">
                <p>Pho Deli Restaurant offers the best authentic and delicious Vietnamese and Thai cuisine in the Boston area. Our recipes are made with the freshest ingredients to ensure the true essence of these cuisines shines through in every bite. From traditional Pho noodle soup to savory Pad Thai and Bun Bo Hue, our menu offers a range of flavors to satisfy any palate. We offer delivery service through Uber Eats, making it easy to enjoy our delicious food from the comfort of your home. So come join us for lunch or dinner and bring the family.</p>
            </div>
        </div>
    )
}
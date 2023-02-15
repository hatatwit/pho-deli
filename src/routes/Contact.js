import "./styles.css";

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="col col-5">
                <h2>Contact Us</h2>
                <hr/>
                <br/>
                <h3>Pho Deli</h3>
                <p>60 Broadway, Malden, MA 02148</p>
                <br/>
                <p>Phone: (781) 480-3701</p>
                <br/>
                <h3>Hours</h3>
                <table>
                    <tr>
                        <td>Monday</td>
                        <td className="time">9:30 am - 7 pm</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td className="time">9:30 am - 7 pm</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td className="time">Closed</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td className="time">9:30 am - 7 pm</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td className="time">9:30 am - 7 pm</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td className="time">9:30 am - 7 pm</td>
                    </tr>
                    <tr>
                        <td>Sunday</td>
                        <td className="time">9:30 am - 7 pm</td>
                    </tr>
                </table>
            </div>
            
            <div className="col col-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.104237944633!2d-71.04493178470067!3d42.425516079182614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3718758d16039%3A0x598da30fef4278ce!2sPho%20Deli%20Viet%26Thai!5e0!3m2!1sen!2sus!4v1676042991045!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            
        </div>
    )
}
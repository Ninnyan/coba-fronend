import KalimantanSource from "../../data/kalimantanAPI";
import registrasiAdminInit from "../../utils/registrasiPage/initiator/registrasiAdminInit";

const AboutUs = {
    async render() {
        return `
            <about-us></about-us>
        `
    },

    async afterRender() {
        console.log('p');

    }
}

export default AboutUs
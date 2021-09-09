
// Récupération des données Photographes et médias
export default class ApiFishEye {
    async getDataFishEye() {
        let url = 'Data/photographers.json';
        let response = await fetch(url);
        let data = await response.json();

        const dataPhotographers = [...data.photographers];
        const dataMedias = [...data.media];

        return {
            'photographers': dataPhotographers,
            'media': dataMedias
        };
    }
}

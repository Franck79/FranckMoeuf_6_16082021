
// Récupération des données photograph-es et médias
export default class ApiFishEye {
    async getDataFishEye() {
        let url = 'Data/photographers.json';
        let response = await fetch(url);
        let data = await response.json();

        const dataphotographers = [...data.photographers];
        const dataMedias = [...data.media];

        return {
            'photographers': dataphotographers,
            'media': dataMedias
        };
    }
}

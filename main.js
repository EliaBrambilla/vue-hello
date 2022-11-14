// Dichiarazione variabile
const { createApp } = Vue

// funzione createApp
createApp({
    data() {
        return {
            title: 'Hi im am Batman',

            // Aggiungere alla pagina un’immagine, presa anch’essa da un data.
            image: {
                source: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gqitalia.it%2Fshow%2Fcinema%2F2016%2F03%2F04%2Fchristian-bale-batman-non-ho-centrato-lobiettivo-potevo-fare-di-meglio&psig=AOvVaw0calzqXwjoo3kqq8A2RrOd&ust=1668266410744000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjX8-e2pvsCFQAAAAAdAAAAABAE',

                message: 'This is me',
            }
        }
    }
}).mount('#exercise')
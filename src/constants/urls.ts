const baseURL = 'https://api.themoviedb.org/3/'

const discover = 'discover'
const movie = 'movie'
const genre = 'genre'
const list = 'list'
const search = 'search'


const urls = {
    movies: {
        list: `${discover}/${movie}`,
        byId: (movie_id:number):string => `${movie}/${movie_id}`,
        search: `${search}/${movie}`
    },
    genres: {
        list: `${genre}/${movie}/${list}`
    }
}

export {
    baseURL,
    urls
}
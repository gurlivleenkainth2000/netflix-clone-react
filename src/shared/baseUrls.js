export const apiKey = "c1ffd5a6ce841e5678df86b4e6cbe656";
export const YOUTUBE_MOVIES = "https://www.youtube.com/watch?v=";
export const IMAGES = "https://image.tmdb.org/t/p/w300";

export const requests = {
    trending: `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`,
    netflixOriginals: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US`,
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
    action: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=28`,
    adventure: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=12`,
    animation: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=16`,
    family: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=10751&page=2`,
    fantasy: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=14`,
    history: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=36`,
    horror: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=27`,
    music: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=10402`,
    mystery: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=9648`,
    romance: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=10749`,
    scienceFiction: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=878`,
    thriller: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=53`,
    war: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=10752`
    //  top_rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
};
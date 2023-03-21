export const getFilms = async () => {
    const info = await fetch(`https://swapi.dev/api/films/`)    
    .then((res) => res.json())
    .catch((e) => "error");
    
    return info;
};
getFilms()
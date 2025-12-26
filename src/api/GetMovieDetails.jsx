export  const getMovieDetails = async({params})=>{
console.log(params);
const id = params.movieID;

try{
const response = await fetch(
    ` https://www.omdbapi.com/?i=${id}&apikey=e2ee1b02 `
);
const data = response.json();
return data;
}
catch(error){


console.log(error);
}
};
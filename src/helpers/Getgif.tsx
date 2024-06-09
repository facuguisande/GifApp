export const getGifs = async (category: string) => {
	const urlApi = `https://api.giphy.com/v1/gifs/search?api_key=sDnvI0lu2Qq1HjvWTq8JSOH2r7Aj33iu&q=${category}&limit=10`
    const resp = await fetch (urlApi);
    const {data} = await resp.json();

    const gifs = data.map((img: any) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url



    }));
    // console.log(gifs);
    return gifs;


}
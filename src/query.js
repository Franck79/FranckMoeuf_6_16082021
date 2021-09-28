
export default async function retrieveContent() {
    const url = "https://franck79.github.io/FranckMoeuf_6_16082021/";
  
    const response = await fetch(url);
    return response.json();
  }
  
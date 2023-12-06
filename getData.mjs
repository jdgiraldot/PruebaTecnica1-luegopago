export async function getData(url) {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      return jsonData;

    } catch (error) {
        throw new Error('Error al obtener el archivo JSON:', error);
    }
}
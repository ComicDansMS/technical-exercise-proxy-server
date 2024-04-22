class RequestHandler {

  public async getMovies(queryParams: any): Promise<any> {
    const apiUrl: string = 'http://localhost:3000/api/movies';
    const apiKey = process.env.API_KEY;
    const query = new URLSearchParams(queryParams).toString();
    const url = `${apiUrl}?${query}`;
    
    const options = {
      headers: {
        'x-api-key': apiKey,
      }
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error from Movies API: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}

export default new RequestHandler();

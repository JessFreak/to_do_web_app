export class IdeasApi {
  static URL = 'http://localhost:3001/ideas';

  static async getAll() {
    try {
      const responseFalse = await fetch(`${IdeasApi.URL}?isCompleted=false`);
      const responseTrue = await fetch(`${IdeasApi.URL}?isCompleted=true`);

      if (!responseFalse.ok || !responseTrue.ok) {
        console.error('Error retrieving incomplete ideas');
        return;
      }

      const ideas = await responseFalse.json();
      const completedIdeas = await responseTrue.json();

      return { ideas, completedIdeas };
    } catch (error) {
      console.error('Error pulling data:', error);
    }
  }

  static async createMany(ideas) {
    try {
      const response = await fetch(IdeasApi.URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ideas),
      });
      if (!response.ok) {
        console.log(response.body);
        return;
      }
      console.log('Data stored successfully!');
    } catch (error) {
      console.error('Error storing data:', error);
    }
  }
}
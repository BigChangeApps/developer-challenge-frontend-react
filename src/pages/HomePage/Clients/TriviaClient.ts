
export interface TriviaResponseData {
    category: string;
    question: string;
    answer: string;
}

export default class TriviaClient  {
  private static instance: TriviaClient;

  public static getInstance(
  ): TriviaClient {
    if (!TriviaClient.instance) {
      TriviaClient.instance = new TriviaClient();
    }
    return TriviaClient.instance;
  }

  async getTrivia(): Promise<TriviaResponseData> {
    try {
      const url = new URL("https://api.api-ninjas.com/v1/trivia");
      const response = await fetch(url, {
        method: "GET",
        cache: "no-cache",
        headers: {
          "X-Api-Key": "Qg0sOvfinDUc/22HiOFBTg==Cp7CnCMw6F6oZYKx",
        },
      });
      if (response.ok) {
        const data: TriviaResponseData[] = await response.json();
        return data[0];
      }
      throw new Error("Unexpected error");
    } catch (e) {
      throw new Error(`Unexpected error: ${e}`);
    }
  }
}

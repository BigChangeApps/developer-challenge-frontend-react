

export interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

export interface EmployeesResponseData {
  status: string;
  data: Employee[];
  message: string;
}

export interface TriviaResponseData {
    category: string;
    question: string;
    answer: string;
}

export default class EmployeeClient  {
  private static instance: EmployeeClient;

  public static getInstance(
  ): EmployeeClient {
    if (!EmployeeClient.instance) {
      EmployeeClient.instance = new EmployeeClient();
    }
    return EmployeeClient.instance;
  }

  async getEmployees(): Promise<TriviaResponseData> {
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
        const data: TriviaResponseData = await response.json();
        return data;
      }
      throw new Error("Unexpected error");
    } catch (e) {
      throw new Error(`Unexpected error: ${e}`);
    }
  }
}

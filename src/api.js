import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get companies (all or by search term)
   *
   * Accepts an optional search parameter
   *
   * Returns an array of company objects
   *    -> [{handle, name, description, numEmployees, logoUrl}...]
  */

  static async getCompanies(search = "") {
    let res;
    console.log("RESULTS FROM GET REQUEST", res);

    if (search.length) {
      res = await this.request('companies', {
        nameLike: search
      });
    } else {
      res = await this.request('companies');
    }
    return res.companies;
  }


  /** Get jobs (all or by search term)
   *
   * Accepts an optional search parameter
   *
   * Returns an array of job objects
   *    -> [{id, title, salary, equity, companyHandle, companyName}...]
  */

  static async getJobs(search = "") {
    let res;

    if (search.length) {
      res = await this.request('jobs', {
        title: search
      });
    } else {
      res = await this.request('jobs');
    }

    return res.jobs;
  }


  /** user login*/
  static async login(loginData) {
    const token = (await this.request('auth/token', loginData, 'post')).token;
    JoblyApi.token = token;
    return token;
  }


  /** user signup */
  static async signup(userInfo) {
    const token = (await this.request('auth/register', userInfo, 'post')).token;
    JoblyApi.token = token;
    return token;
  }

  /** get logged-in user data */
  static async getUser(username) {
    const user = (await this.request(`users/${username}`)).user;
    return user;
  }

}

export default JoblyApi;

export default class api {
  static GETRandom = async (param) => {
    var response = await fetch("https://api.jikan.moe/v4/random" + param);

    var data = await response.json();
    return data.data;
  };

  static GETTop = async (param) => {
    var query = "";
    if (param === "/anime") {
      query = "?q=type=tv&filter=bypopularity&page=1";
    } else {
      query = "?q=type=manga&filter=bypopularity&page=1";
    }
    var response = await fetch(
      "https://api.jikan.moe/v4/top" + param + query
    ).then((res) => res.json());

    return response;
  };

  static GETById = async (param) => {
    var response = await fetch("https://api.jikan.moe/v4/" + param + "/full");

    var data = await response.json();
    return data.data;
  };
}

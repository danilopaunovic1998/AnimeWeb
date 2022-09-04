export default class api {
  static GETRandom = async (param) => {
    var response = await fetch("https://api.jikan.moe/v4/random" + param);

    var data = await response.json();
    return data.data;
  };
}

export class Parser {
  static parseJSONRecursively(jsonString) {
    const parsedData = JSON.parse(jsonString);

    const recursivelyParse = (data) => {
      if (typeof data !== 'object' || data === null) return data;

      if (Array.isArray(data))
        return data.map((item) => recursivelyParse(item));

      const parsedObject = {};
      Object.keys(data).forEach(
        (key) => (parsedObject[key] = recursivelyParse(data[key])),
      );
      return parsedObject;
    };

    return recursivelyParse(parsedData);
  }
}

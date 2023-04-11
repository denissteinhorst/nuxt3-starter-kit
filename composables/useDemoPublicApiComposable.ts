export default async function useDemoPublicApiComposable() {
  const { data: demoPublicData, refresh } = await useFetch('/api/demoPublicApiEndpoint')

  interface IRandomUser {
    results: IResult[];
    info:    IInfo;
  }

  interface IInfo {
    seed:    string;
    results: number;
    page:    number;
    version: string;
  }

  interface IResult {
    gender:     string;
    name:       IName;
    location:   Location;
    email:      string;
    login:      ILogin;
    dob:        IDob;
    registered: IDob;
    phone:      string;
    cell:       string;
    id:         IID;
    picture:    IPicture;
    nat:        string;
  }

  interface IDob {
    date: string;
    age:  number;
  }

  interface IID {
    name:  string;
    value: string;
  }

  interface ILocation {
    street:      IStreet;
    city:        string;
    state:       string;
    country:     string;
    postcode:    number;
    coordinates: ICoordinates;
    timezone:    ITimezone;
  }

  interface ICoordinates {
    latitude:  string;
    longitude: string;
  }

  interface IStreet {
    number: number;
    name:   string;
  }

  interface ITimezone {
    offset:      string;
    description: string;
  }

  interface ILogin {
    uuid:     string;
    username: string;
    password: string;
    salt:     string;
    md5:      string;
    sha1:     string;
    sha256:   string;
  }

  interface IName {
    title: string;
    first: string;
    last:  string;
  }

  interface IPicture {
    large:     string;
    medium:    string;
    thumbnail: string;
  }

  return {
    demoPublicData,
    refresh
  }
}

// 타입 별칭(type alias)
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "lbj",
  nickname: "bamzen",
  birth: "1990.07.14",
  bio: "안녕",
  location: "성남",
};

let user2: User = {
  id: 2,
  name: "lbj2",
  nickname: "bamzen2",
  birth: "1990.07.142",
  bio: "안녕2",
  location: "성남2",
};

// 인덱스 시그니처
// key와 value를(규칙) 기준으로 객체의 타입을 정의
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
};

export type Ip =
  | {
      ip: string;
      isp: string;
      location: {
        city: string;
        country: string;
        lat: number;
        lng: number;
        region: string;
        timezone: string;
      };
    }
  | null
  | undefined;

export type Theme = {
  theme: {
    font: {
      main: string;
    };
    colors: {
      primary: string;
      secondary: string;
    };
    shadows: {
      normal: string;
      hover: string;
    };
  };
};

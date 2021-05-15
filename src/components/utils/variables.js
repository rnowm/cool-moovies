export const colorList = {
  blue: {
    default: "#0066cc",
    hover: "#0066cc",
    0.5: "#8BD9FF",
    0.3: "#D1F0FF",
  },
  gold: {
    default: "#FEAF17",
    0.5: "#FFD78B",
    0.3: "#FFEFD1",
  },
  green: {
    default: "#0EC878",
    0.5: "#87E3BB",
    0.3: "#CFF4E4",
  },
  magenta: {
    default: "#FE17F5",
    0.5: "#FF8BFA",
    0.3: "#FFD1FD",
  },
  red: {
    default: "#F0441C",
    0.5: "#F7A18D",
    0.3: "#FCDAD2",
  },
  salmon: {
    default: "#FF617D",
    0.5: "#FFAFBE",
    0.3: "#FFDFE5",
  },
  yellow: {
    default: "#FFDB29",
    0.5: "#FFED94",
    0.3: "#FFF8D4",
  },
  purple: {
    default: "#974FFF",
    0.5: "#CBA7FF",
    0.3: "#EADCFF",
  },
  teal: {
    default: "#1EF4A7",
    0.5: "#8EF9D2",
    0.3: "#BCFCE5",
  },
  navy: {
    default: "#1665FF",
    0.5: "#8BB2F9",
    0.3: "#D0E0FC",
  },
  black: {
    default: "#000000",
    hover: "rgba(0, 0, 0, 0.8)",
  },
  white: {
    default: "#FFFFFF",
    hover: "#F5F5F5",
  },
  gray: {
    default: "#9E9E9E",
    0.9: "#212121",
    0.8: "#424242",
    0.7: "#616161",
    0.6: "#757575",
    0.5: "#9E9E9E",
    0.4: "#BDBDBD",
    0.3: "#E0E0E0",
    0.2: "#EEEEEE",
    0.1: "#F5F5F5",
    0.05: "#FAFAFA",
  },
};

export const getTxtColorByBkg = (bkg, fade) => {
  const lightText = [
    "blue",
    "gold",
    "green",
    "magenta",
    "red",
    "salmon",
    "purple",
    "black",
    "gray-0.9",
    "gray-0.8",
    "gray-0.7",
    "gray-0.6",
  ];
  const selectedBkg = fade ? `${bkg}-${fade}` : bkg;
  return lightText.includes(selectedBkg) ? "white" : "black";
};

export const Color = (color, fade) => {
  let newColor = colorList[color] ? colorList[color].default : null;
  if (fade && colorList[color] && colorList[color][fade]) {
    newColor = colorList[color][fade];
  }
  return newColor;
};

export const breakpoint = {
  mobileS: "320px",
  mobileM: "425px",
  mobileL: "550px",
  mobileXL: "640px",
  tablet: "768px",
  tabletL: "900px",
  laptop: "1024px",
  laptopL: "1118px",
  desktop: "1400px",
  desktopL: "2560px",
};

export const device = {
  mobileS: `(min-width: ${breakpoint.mobileS})`,
  mobileM: `(min-width: ${breakpoint.mobileM})`,
  mobileL: `(min-width: ${breakpoint.mobileL})`,
  mobileXL: `(min-width: ${breakpoint.mobileXL})`,
  tablet: `(min-width: ${breakpoint.tablet})`,
  tabletL: `(min-width: ${breakpoint.tabletL})`,
  laptop: `(min-width: ${breakpoint.laptop})`,
  laptopL: `(min-width: ${breakpoint.laptopL})`,
  desktop: `(min-width: ${breakpoint.desktop})`,
  desktopL: `(min-width: ${breakpoint.desktopL})`,
};

export const deviceMax = {
  mobileS: `(max-width: ${breakpoint.mobileS})`,
  mobileM: `(max-width: ${breakpoint.mobileM})`,
  mobileL: `(max-width: ${breakpoint.mobileL})`,
  mobileXL: `(max-width: ${breakpoint.mobileXL})`,
  tablet: `(max-width: ${breakpoint.tablet})`,
  tabletL: `(max-width: ${breakpoint.tabletL})`,
  laptop: `(max-width: ${breakpoint.laptop})`,
  laptopL: `(max-width: ${breakpoint.laptopL})`,
  desktop: `(max-width: ${breakpoint.desktop})`,
  desktopL: `(max-width: ${breakpoint.desktopL})`,
};

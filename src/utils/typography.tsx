import * as React from "react";
import Typography from "typography";
import { TypographyStyle, GoogleFont } from "react-typography";

const t = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6875,
  googleFonts: [
    {
      name: "Nunito",
      styles: ["400", "700"],
    },
    {
      name: "Source Sans Pro",
      styles: ["300", "400", "400i", "700"],
    },
  ],
  headerFontFamily: ["Nunito", "sans-serif"],
  bodyFontFamily: ["Source Sans Pro", "Arial", "Helvetica", "sans-serif"],
  headerColor: "hsla(0,0%,0%,1)",
  bodyColor: "hsla(0,0%,0%,0.8)",
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  scaleRatio: 3.5,
  overrideStyles: ({adjustFontSizeTo}, options) => ({
    h1: {
      "letter-spacing": "1px",
      "text-align": "center",
    },
    h2: {
      ...adjustFontSizeTo("38px"),
      "color": "#555555",
      "letter-spacing": "-1.1px",
      "margin-top": "53px",
      "word-spacing": "3px",
      "text-align": "center",
    },
    h3: {
      ...adjustFontSizeTo("34px"),
      "color": "#555555",
      "letter-spacing": "-.1px",
      "word-spacing": "2px",
      "font-weight": 400,
      "text-align": "center",
    },
    h4: {
    ...adjustFontSizeTo("28px"),
      "color": "#555555",
      "fontFamily": options.bodyFontFamily.join(","),
      "letter-spacing": "-.1px",
      "word-spacing": "2px",
      "font-weight": 300,
      "text-align": "center",
    },
    h5: {
      ...adjustFontSizeTo("19px"),
      "color": "#363f3b",
      "letter-spacing": "-.1px",
      "word-spacing": "2px",
      "margin-bottom": "20px",
    },
    h6: {
      ...adjustFontSizeTo("18px"),
      "color": "#555555",
      "letter-spacing": ".3px",
      "word-spacing": "2px",
      "font-weight": 400,
    },

  }),
});

export default (): JSX.Element[] => {
  return [(
    <TypographyStyle key="style" typography={t} />
  ), (
    <GoogleFont key="fonts" typography={t} />
  )];
};

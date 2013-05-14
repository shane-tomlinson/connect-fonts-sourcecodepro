const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": { 
  },

  // what font types are enabled and what are the extensions of
  // the font files.
  //
  // valid types are embedded-opentype, woff, truetype, svg
  "enabled-types": [ "eot", "woff", "ttf", "svg" ],

  // The fonts. The name of the font must be the same as the font
  // in the fonts directory.
  "fonts": {
      "sourcecodepro-black": {
        "fontFamily": "Source Code Pro Black",
        "fontStyle": "normal",
        "fontWeight": "900",
        "local": [ "Source Code Pro Black", "SourceCodePro-Black" ]
      },
      "sourcecodepro-bold": {
        "fontFamily": "Source Code Pro Black",
        "fontStyle": "normal",
        "fontWeight": "700",
        "local": [ "Source Code Pro Bold", "SourceCodePro-Bold" ]
      },
      "sourcecodepro-extralight": {
        "fontFamily": "Source Code Pro Black",
        "fontStyle": "normal",
        "fontWeight": "200",
        "local": [ "Source Code Pro ExtraLight", "SourceCodePro-ExtraLight" ]
      },
      "sourcecodepro-light": {
        "fontFamily": "Source Code Pro Black",
        "fontStyle": "normal",
        "fontWeight": "300",
        "local": [ "Source Code Pro Light", "SourceCodePro-Light" ]
      },
      "sourcecodepro-medium": {
        "fontFamily": "Source Code Pro Black",
        "fontStyle": "normal",
        "fontWeight": "500",
        "local": [ "Source Code Pro Medium", "SourceCodePro-Medium" ]
      },
      "sourcecodepro-regular": {
        "fontFamily": "Source Code Pro Black",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Source Code Pro", "SourceCodePro-Regular" ]
      },
      "sourcecodepro-semibold": {
        "fontFamily": "Source Code Pro Black",
        "fontStyle": "normal",
        "fontWeight": "600",
        "local": [ "Source Code Pro Semibold", "SourceCodePro-Semibold" ]
      }
  }
};

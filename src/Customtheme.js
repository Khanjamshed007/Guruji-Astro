import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    body: '"Sansation", sans-serif',
    heading: '"Sansation", sans-serif',
    subheading:'"Roboto",sans-serif'
  },
  styles: {
    global: {
      ".carousel": {
        display: 'flex',
        justifyContent: "center",
      },
    },
  },
});

export default customTheme;

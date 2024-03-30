import withMT from "@material-tailwind/react/utils/withMT";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        "semi-bold": "600",
        bold: "700",
      },
      colors: {
        // Absolute Colors
        white: "#FFFFFF",
        black: "#000000",
        
      },
    },
  },
  darkMode: "class",
  
};
const withMaterialTailwind = withMT(config);

export default withMaterialTailwind;

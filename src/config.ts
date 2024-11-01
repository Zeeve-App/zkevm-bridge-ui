interface CustomizationConfig {
  brand: {
    favicon: string;
    logo: {
      dark: string;
      light: string;
    };
    name: string;
    theme: {
      primary: string;
      secondary: string;
    };
  };
}

const getConfig = (): CustomizationConfig | null => {
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  const customization: string = import.meta.env.VITE_CUSTOMIZATION as string;
  // eslint-disable-next-line no-type-assertion/no-type-assertion
  const parsed: CustomizationConfig = JSON.parse(customization) as CustomizationConfig;
  return parsed;
};

// eslint-disable-next-line import/no-default-export
export default getConfig;

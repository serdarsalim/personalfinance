interface Window {
    gtag: (
      command: string,
      id: string,
      config?: {
        page_path?: string;
        [key: string]: any;
      }
    ) => void;
    dataLayer: any[];
  }
import Papa from 'papaparse';

export const csvToJson = (data: string) => {
  const newJSON = Papa.parse(data, {
    header: true,
    dynamicTyping: true,
  });
  return newJSON.data
};

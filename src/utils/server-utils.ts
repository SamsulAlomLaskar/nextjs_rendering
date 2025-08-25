import "server-only";

export const serverSideFunction = () => {
  console.log(`Server Side Function Called,
        Use Multiple Libraries like fs, path etc,
        intereact with database directly from here,
        process confidential information here etc
        `);

  return "Server Side Function Called";
};

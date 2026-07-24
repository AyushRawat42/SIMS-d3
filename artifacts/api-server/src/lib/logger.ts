type LogFn = (obj: unknown, msg?: string) => void;

export const logger: {
  info: LogFn;
  error: LogFn;
} = {
  info: (obj, msg) => {
    if (typeof obj === "string") console.info(obj);
    else console.info(msg ?? "", obj);
  },
  error: (obj, msg) => {
    if (typeof obj === "string") console.error(obj);
    else console.error(msg ?? "", obj);
  },
};

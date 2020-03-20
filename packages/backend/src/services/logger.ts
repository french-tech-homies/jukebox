import winston from "winston";
import Elasticsearch from 'winston-elasticsearch';
import { createDeflateRaw } from "zlib";

const esTransportOpts = {
  level: 'info',
  clientOpts: {
    node: 'http://elasticsearch:9200',
    log: 'info',
  },
  transformer: (logData: any) => {
    return {
      '@timestamp': new Date().getTime(),
      severity: logData.level,
      message: `${logData.message}`,
      fields: logData.meta,
    }
  },
}

export const logger = winston.createLogger({
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new Elasticsearch(esTransportOpts)
    ]
});

logger.info("Logger started")

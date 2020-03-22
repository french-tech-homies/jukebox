import { logger } from './logger';
import winston from "winston";

describe('logger Tests', function() {
  it('Validate the structure of logger', function() {
    expect(logger).toBeDefined()
    expect(typeof logger).toBe('object')
    expect(logger.format).toEqual(winston.format.json())
    expect((logger.transports.length)).toEqual(2)
  });
})

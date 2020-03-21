import { configurationService } from './ConfigurationService';

describe('configurationService Tests', function() {
  it('isDevEnv should return false by default', function() {
    expect(configurationService.isDevEnv()).toEqual(false);
  });
  it('isDevEnv should return true when process.env.NODE_ENV is dev', function() {
    process.env.NODE_ENV = 'development'
    expect(configurationService.isDevEnv()).toEqual(true);
  });
  it('get apolloServerPort should return value from .env 12345', function() {
    expect(configurationService.apolloServerPort).toEqual("12345");
  });
  it('get apolloServerPort should throw an error if the APOLLO_SERVER_PORT is not set', function() {
    process.env.APOLLO_SERVER_PORT = ''
    expect(() => configurationService.apolloServerPort).toThrowError(new Error('Environment variable APOLLO_SERVER_PORT is required'));
  });
  it('get apolloServerPort should return the APOLLO_SERVER_PORT value', function() {
    process.env.APOLLO_SERVER_PORT = '8888'
    expect(configurationService.apolloServerPort).toEqual("8888");
  });
})

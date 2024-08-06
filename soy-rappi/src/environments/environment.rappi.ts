// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
//  backendAPIURL: 'https://services.rappi.com',
  // for testing purposes
  backendAPIURL: 'https://microservices.dev.rappi.com',
  backendAPIPrefix: 'api/devops-soy-rappi-api',
  recaptchaV3Key: 'recaptchakey',
  rappiUrl: 'https://microservices.dev.rappi.com/',
  rappiUrlAr: 'https://services.rappi.com.ar',
  rappiUrlPe: 'https://services.rappi.pe',
  rappiUrlEc: 'https://services.rappi.com.ec',
  rappiUrlUy: 'https://services.rappi.com.uy',
  rappiUrlCl: 'https://services.rappi.cl',
  rappiUrlCr: 'https://services.rappi.co.cr',
  rappiUrlBr: 'https://services.rappi.com.br',
  rappiUrlMx: 'https://services.mxgrability.rappi.com',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
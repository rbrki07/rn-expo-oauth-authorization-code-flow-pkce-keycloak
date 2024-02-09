/**
 * @namespace typedefs
 */

/**
 * @typedef {Object} UserInfo
 * @property {String} username
 * @property {String} givenName
 * @property {String} familyName
 * @property {String} email
 * @property {String[]} roles
 */

/**
 * @typedef {Object} AuthState
 * @property {Boolean} isSignedIn
 * @property {String | null} accessToken
 * @property {String | null} idToken
 * @property {UserInfo | null} userInfo
 */

/**
 * @typedef {Object} Authentication
 * @property {AuthState} state
 * @property {() => void} signIn
 * @property {() => void} signOut
 * @property {() => Boolean} hasRoles
 */

/**
 * @typedef {Object} getTokenAsyncThunkPayloadCreatorParams
 * @property {String} code
 * @property {String} [codeVerifier]
 * @property {String} redirectUri
 */

exports.unused = {}

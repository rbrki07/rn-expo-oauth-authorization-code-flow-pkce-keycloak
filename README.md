# React Native (Expo) App with Keycloak and the Authorization Code Flow (with Proof Key for Code Exchange) of OAuth 2.0

This project uses the Authorization Code Flow (with PKCE) of OAuth 2.0 to secure a React Native (Expo) app.

The project requires a local running Keycloak instance, that has to be configured in a certain way.

Please check out the corresponding [blog post](https://www.rene-wilby.de/en/blog/rn-expo-oauth-authorization-code-flow-pkce-keycloak), to find out more about the project, its intention and how to use it.

# Troubleshooting

## `Possible unhandled promise rejection`

If you experience errors like `Possible unhandled promise rejection (id: 0): TypeError: Network request failed` or `Possible unhandled promise rejection (id: 5): Error: Cannot prompt to authenticate until the request has finished loading.` check the environment variable `EXPO_PUBLIC_KEYCLOAK_URL` in your local `.env` file. Instead of `localhost` you could try and use the concrete ip address of your network interface like `192.168.100.10`.

Reference: [Issue #1](https://github.com/rbrki07/rn-expo-oauth-authorization-code-flow-pkce-keycloak/issues/1)
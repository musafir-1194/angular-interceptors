# ag-interceptor

We’re going to see when Angular Interceptors are helpful and how to create them and maximize their power.

# What Are Interceptors?

If you have worked before with a service in Angular, interceptors will sound familiar because they are an Angular service with HttpInterceptor interface implementation.

The interceptors work between our app and the server and interact with the request and response.

The power of the interceptors comes from how they simplify all requests in our app instead of making changes in every place where we make HTTP calls.

# Why Use Interceptors?

Interceptors help us ensure to process all HTTP requests and responses before sending or getting the request, giving us the power to manage communication.

We have several places or scenarios to use them:

1. Logging and reporting progress
2. Adding headers to the request
3. Client-side caching

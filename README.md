# Keycloak - Identity and Access Management for Modern Applications, Second Edition
This is the code repository for [Keycloak - Identity and Access Management for Modern Applications, Second Edition](https://www.packtpub.com/product/keycloak-identity-and-access-management-for-modern-applications-second-edition/9781804616444), published by Packt.

**Harness the power of Keycloak, OpenID Connect, and OAuth 2.0 to secure applications**

The authors of this book are -[Stian Thorgersen](https://www.linkedin.com/in/stian-thorgersen-4714983), [Pedro Igor Silva](https://www.linkedin.com/in/pigorcraveiro)
## About the book

The 2nd Edition of Keycloak – Identity and Access Management for Modern Applications is a refreshed, comprehensive introduction to Keycloak and its updates.

In this new edition, you will learn how to use the latest distribution of Keycloak. The recent versions of Keycloak are now based on Quarkus, which brings a new and improved user experience and a new admin console with a higher focus on usability. You will see how to leverage Spring Security, instead of the Keycloak Spring adapter, while using the latest distribution of Keycloak. As you progress, you will come to understand the new Keycloak distribution and explore best practices for using OAuth. Finally, you'll cover more general best practices and other information on how to protect your applications.

By the end of this new edition, you will have learned how to install and manage the latest version of Keycloak to secure new and existing applications using the newest features.


## Key Takeaways
-	Understand how to install, configure and manage the latest version of Keycloak
-	Discover how to obtain access tokens through OAuth 2.0
-	Utilize a reverse proxy to secure an application implemented in any programming language or framework
-	Safely manage Keycloak in a production environment
- Secure different types of applications, including web, mobile, and native
- Discover the frameworks and third-party libraries that can expand Keycloak


## New Edition v/s Previous Edition: 
-	Based on, and fully updated for, the newest Keycloak version
-	Spring Security replaces the older Spring Adapter
-	More in-depth coverage of OAuth best practices
-	More content on Keycloak authorization services


## What's New 

Unlike the previous edition of this book, which covered Keycloak as deployed on top of WildFly, a JavaEE Application Server, this edition of [Keycloak – Identity and Access Management for Modern Applications](https://www.packtpub.com/product/keycloak-identity-and-access-management-for-modern-applications-second-edition/9781804616444), focusses on the more recent versions of Keycloak which are built with Quarkus, a cloud native Java framework. Being based on Quarkus brings a number of improvements, reducing startup time significantly, reducing memory footprint, and most importantly bringing a much simpler and more consistent approach to configuring Keycloak.

Another big change to Keycloak, which is explored in this edition, is the new admin console which has a much bigger focus on usability than the previous console.


## Outline and Chapter Summary

This new edition will teach you how to use the most recent Keycloak distribution. Recent Keycloak versions are now based on Quarkus, which delivers a new and enhanced user experience as well as a new admin console with a greater emphasis on usability. You will see how to use Spring Security while utilizing the most recent Keycloak release. You will learn about the new Keycloak distribution and best practices for using OAuth. Finally, you'll go through general best practices and other tips for protecting your applications.


1. Getting Started with Keycloak
2. [Securing Your First Application](https://github.com/PacktPublishing/Keycloak---Identity-and-Access-Management-for-Modern-Applications-2nd-Edition/tree/main/ch2)
3. Brief Introduction to Standards
4. [Authenticating Users with OpenID Connect](https://github.com/PacktPublishing/Keycloak---Identity-and-Access-Management-for-Modern-Applications-2nd-Edition/tree/main/ch4)
5. [Authorizing Access with OAuth 2.0](https://github.com/PacktPublishing/Keycloak---Identity-and-Access-Management-for-Modern-Applications-2nd-Edition/tree/main/ch5)
6. [Securing Different Application Types](https://github.com/PacktPublishing/Keycloak---Identity-and-Access-Management-for-Modern-Applications-2nd-Edition/tree/main/ch6)
7. [Integrating Applications with Keycloak](https://github.com/PacktPublishing/Keycloak---Identity-and-Access-Management-for-Modern-Applications-2nd-Edition/tree/main/ch7)
8. Authorization Strategies
9. [Configuring Keycloak for Production](https://github.com/PacktPublishing/Keycloak---Identity-and-Access-Management-for-Modern-Applications-2nd-Edition/tree/main/ch9)
10. Managing Users
11. Authenticating Users
12. Managing Tokens and Sessions
13. [Extending Keycloak](https://github.com/PacktPublishing/Keycloak---Identity-and-Access-Management-for-Modern-Applications-2nd-Edition/tree/main/ch13)
14. Securing Keycloak and Applications

### Chapter 01, Getting Started with Keycloak
Keycloak, an open-source Identity and Access Management tool, is introduced in three parts. The initial segment emphasizes its relevance to modern apps and its installation process, with Docker and OpenJDK options highlighted. Part two elaborates on installation specifics, underlining Keycloak's lightweight design, scalability, and seamless integration with various identity systems. Part three delves into advanced configurations, discussing realms, users, groups, roles, and the user-centric account console. Key takeaways include Keycloak's adaptability for modern apps, its flexibility through customization, and its commitment to enhancing security via various authentication methods. These segments collectively establish the foundation for understanding, installing, and configuring Keycloak for effective application security.

**Key Insights**:
-	Keycloak suits modern application security needs efficiently.
-	Installation options include Docker and OpenJDK, catering to different preferences.
-	Keycloak excels in scalability, integration, and customization.
-	Realms provide a powerful tool for application segregation and management.
-	The account console empowers users, enhancing their control over profiles and authentication.
-	This chapter lays the foundation for grasping Keycloak's capabilities in securing applications.



### Chapter 02, Securing Your First Application 
This comprehensive tutorial guides you through securing a sample application using Keycloak's Identity and Access Management system. The application consists of a frontend web application and a backend REST API, each interacting with Keycloak for user authentication and secure communication. The OpenID Connect protocol is harnessed to ensure user authentication, and a range of tokens, including ID, access, and refresh tokens, are issued for secure data exchange. The authorization code flow facilitates secure user login, while the frontend's access token validation ensures secure communication with the backend, minimizing processing load on Keycloak.
The process entails configuring the application-client relationship within Keycloak's admin console, involving defining valid URIs and web origins. Custom attributes in user profiles are used to enhance user information, and the interaction between the frontend and secured backend endpoints are fortified using access tokens. By mastering these concepts, you're equipped to confidently secure modern applications with Keycloak, fostering a deeper understanding of Identity and Access Management's role in application security.

**Key Insights**:
-	**Authentication and Authorization Process**: The text explains how Keycloak enables secure authentication and authorization processes in applications by utilizing OpenID Connect, authorization code flow, and tokens.
-	**Client Registration**: The importance of registering frontend applications as clients in Keycloak is highlighted. This registration process involves configuring valid redirect URIs, post redirect URIs, and web origins to ensure secure and controlled interactions.
-	**Token Significance**: Tokens play a pivotal role in securing applications. The ID token is used to identify authenticated users, while the access token carries permissions required for invoking protected backend services.
-	**Role-Based Access Control**: Keycloak's role-based access control system ensures that users with specific roles are granted access to protected endpoints. This is achieved by verifying the user's roles through access tokens.
-	**Secure Communication**: The text demonstrates how frontend applications securely communicate with protected backend services using AJAX requests and access tokens. The backend validates these tokens to ensure that only authorized users can access sensitive resources.
-	**User Attributes Customization**: The ability to customize user attributes within Keycloak, such as adding a profile picture, highlights the platform's flexibility in tailoring user experiences and enriching the information carried by tokens.
-	**Foundation for Advanced Learning**: The knowledge gained from this chapter lays a solid foundation for further exploration of advanced Keycloak topics, enabling readers to dive deeper into securing applications and understanding more intricate mechanisms.
-	**Real-World Application**: The practical example of a sample application helps readers grasp how the discussed concepts translate into real-world scenarios, enhancing their understanding of how Keycloak can be integrated into modern applications for enhanced security.

- https://packt.link/oxOr8

### Chapter 03, Brief Introduction to Standards 
This chapter introduces key concepts in integrating applications securely using standards like OAuth 2.0, OpenID Connect, JSON Web Tokens (JWT), and SAML 2.0. OAuth 2.0 allows apps to access resources without sharing credentials. It's vital for third-party access, enterprise security, and offers various flows based on use cases. OpenID Connect builds on OAuth 2.0, focusing on authentication. It allows centralized user management, enabling social logins and single sign-on (SSO), improving security and user experience. JWT, a JSON-based token format, is used for access tokens due to its interoperability, performance, and direct-read capabilities. It's part of the broader JOSE specifications. However, caution is needed to avoid vulnerabilities. SAML 2.0 is a mature protocol for authentication and SSO, widely used in enterprises. While OpenID Connect is recommended for modern architectures, SAML remains relevant for specific use cases and compliance requirements. Keycloak supports both standards, offering flexibility in creating a unified authentication experience. Understanding these standards empowers developers to enhance app security, user experience, and access control.

**Key Insights**:
-	**OAuth 2.0 for Secure Access**: OAuth 2.0 enables applications to securely access resources without exposing user credentials. It provides different flows for various scenarios, such as third-party access and enterprise applications, ensuring controlled data sharing.
-	**OpenID Connect for Authentication**: OpenID Connect builds upon OAuth 2.0, adding authentication capabilities. It supports single sign-on (SSO) and reduces the need for users to manage multiple passwords. Its adoption enables secure authentication in modern architectures.
-	**JWT Format for Access Tokens**: JSON Web Tokens (JWT) are used as access tokens due to their interoperability, JSON-based format, and direct-read capability. JWTs are part of the JOSE family of specifications and are advantageous for resource servers to validate and use tokens efficiently.
-	**SAML 2.0 for Enterprise SSO**: SAML 2.0 is a mature protocol widely used in enterprises for single sign-on and secure authentication. While OpenID Connect is more suitable for modern architectures, SAML remains relevant for specific scenarios and compliance requirements.
-	**Keycloak Flexibility**: Keycloak offers support for both OpenID Connect and SAML 2.0, giving developers flexibility in choosing authentication and authorization methods that best fit their applications' needs.
-	**Security and User Experience Balance**: Understanding and implementing these standards empowers developers to strike a balance between security and user experience, ensuring robust authentication and controlled data access while enhancing the overall user journey.


### Chapter 04, Authenticating Users with OpenID Connect 
This chapter delves into the intricacies of OpenID Connect (OIDC) authentication through the lens of Keycloak, utilizing an example application. The chapter unfolds the OIDC authentication flow with a focus on acquiring the ID token, token refreshment, and the incorporation of custom attributes. It unveils strategies for managing user logouts, spanning from session expiration to OIDC Back-Channel Logout. The text emphasizes the importance of OIDC in authentication processes, token handling, and application security, offering readers a clear understanding of OIDC's integration with Keycloak.
In essence, the chapter's insights are centered around OIDC's pivotal role in modern authentication mechanisms, providing tangible guidance on its implementation within applications, and showcasing its partnership with Keycloak to enhance security and user experience.

**Key Insights**:
-	**OIDC Authentication Flow**: The chapter explains the process of OIDC authentication, from the user clicking the login button to obtaining an ID token. This involves steps like authentication requests, token requests, and exchanging authorization codes for tokens.
-	**ID Token Structure**: The ID token is explored, detailing its format and components. It's shown that it's a signed JSON Web Token (JWT) containing claims about the user, such as the user's unique identifier, authentication time, and more.
-	**Token Refreshing**: Refreshing tokens, especially the ID token, is demonstrated. The text outlines how to obtain new tokens using the refresh token, which can be extended, and how this process can be used to update user information without re-authentication.
-	**Custom Attributes and Scopes**: Custom attributes and scopes are discussed. The concept of client scopes and protocol mappers in Keycloak is explained, illustrating how to include additional user information in ID tokens and the UserInfo endpoint.
-	**User Logout Strategies**: Various approaches to handling user logout are examined. With coverage of session invalidation, OIDC Back-Channel Logout, Front-Channel Logout, and the effectiveness of relying on short token and session expiration times.
-	**Practical Application**: The chapter concludes by providing practical insights into how OIDC can secure applications, offering a step-by-step guide to the authentication flow and user information retrieval.

- https://packt.link/xZ3iN

### Chapter 05, Authorizing Access with OAuth 2.0
This chapter delves into Keycloak's integration with OAuth 2.0 for authorizing access to REST APIs and services. It employs a custom OAuth 2.0 Playground application to illustrate practical interactions and concepts. The chapter highlights the Authorization Code grant type, showcasing how applications retrieve access tokens from Keycloak. It emphasizes user consent and introduces scopes, enabling incremental authorization based on specific application functionalities.
Furthermore, the text outlines methods to limit access, emphasizing roles and client scopes. The process of validating access tokens is explored through token introspection and direct token verification approaches. Key insights underscore the careful definition of scopes and the significance of JWT understanding when verifying tokens. The chapter concludes by summarizing the obtained knowledge and its implications for securing diverse application types using Keycloak in subsequent sections. Overall, the chapter equips readers with hands-on insights into the mechanisms and considerations for securing modern applications with OAuth 2.0 and Keycloak.

**Key Insights**:
-	**OAuth 2.0 Playground**: A custom playground application is introduced to interact with Keycloak and understand OAuth 2.0 interactions. It is emphasized that the provided sample application isn't production-ready, designed for clarity over security.
-	**Access Token Retrieval**: The chapter illustrates the Authorization Code grant type, where an application obtains access tokens from Keycloak. This involves redirecting users to Keycloak's authentication and consent pages.
-	**User Consent and Scopes**: Consent from users for granting access to applications is explored. Different scopes, like viewing, creating, and deleting albums, are introduced, allowing incremental authorization based on application functionality.
-	**Limiting Access with Roles**: Roles are shown as a way to control what an application can access on behalf of users. Scopes can also be tied to roles through client scopes, enabling fine-grained control.
-	**Token Validation**: The chapter explains two methods for validating access tokens: token introspection and direct token verification. It's highlighted that token introspection is simpler but adds latency.
-	**Insights and Cautions**: The text underscores the importance of defining scopes carefully, providing examples from platforms like Google and GitHub. It emphasizes the need for a good understanding of JWT when verifying tokens directly.

- https://packt.link/fgdzB
 
### Chapter 06, Securing Different Application Types
This chapter focuses on securing applications using Keycloak. It starts by distinguishing between internal and external applications, highlighting the consent requirement for the latter. The text then explores securing various types of web applications, emphasizing the use of authorization code flow with PKCE extension as a best practice. Server-side web apps, SPAs with dedicated or intermediary APIs, and SPAs with external APIs are covered.
For native and mobile apps, the text recommends using authorization code flow through external browsers. This approach ensures security and full Keycloak benefits. Different options such as claimed HTTPS schemes and in-app browser tabs are discussed. The CLI example showcases the device code grant type for input-constrained devices, ensuring secure user authentication.
Keycloak's role in securing REST APIs is explained. Bearer tokens, obtained via authorization code flow or client credential flow, are used to authenticate requests. This mechanism is applicable to various services including SASL, gRPC, and WebSocket.
The chapter wraps up by highlighting the importance of understanding internal/external distinctions, employing proper authorization flows, and leveraging bearer tokens for securing diverse application types. The next chapter will delve into integrating applications with Keycloak.

**Key Insights**:
-	**Internal vs. External Applications**: The chapter introduces the concept of differentiating between internal and external applications. Internal apps do not require user consent, while external apps do, and understanding this distinction is crucial for proper security setup.
-	**Web Application Security**: The text emphasizes using authorization code flow with PKCE for securing web applications. Different architectures like server-side, SPAs with dedicated or intermediary APIs are covered, with a focus on secure token handling and session establishment.
-	**Native and Mobile App Security**: Native and mobile apps are recommended to use authorization code flow through external browsers. This approach enhances security and leverages Keycloak's features while avoiding direct access to user credentials.
-	**Device Code Grant Type**: For input-constrained devices, the device code grant type is a secure method. Users enter short codes on different devices to authenticate, enhancing security and user experience for such scenarios.
-	**Securing REST APIs**: Bearer tokens obtained through authorization code or client credential flow are used to secure REST APIs. This mechanism is extendable to various services, enabling a comprehensive approach to authentication for different types of applications.
-	**Best Practices**: Key insights include the importance of securing user credentials, adopting proper authorization flows, and using bearer tokens effectively to ensure robust application security across various contexts.


### Chapter 07, Integrating Applications with Keycloak
This chapter elaborates on the seamless integration of Keycloak with diverse application types across various technologies. It delves into the integration process for Quarkus-based web and service applications, Spring Boot, JavaScript, and Node.js applications. The text underscores the importance of utilizing standardized libraries and established frameworks for OAuth2 and OpenID Connect, rather than crafting custom integration solutions. By emphasizing best practices and leveraging well documented tools, developers can streamline the integration process while ensuring compliance, security, and interoperability with industry standards.
The integration mechanisms explored range from configuring Quarkus and Spring Boot applications to authenticate via Keycloak's OIDC, to utilizing Keycloak's JavaScript adapter for authentication within JavaScript-based apps, and implementing the Keycloak Node.js adapter to safeguard resources. Additionally, the text demonstrates how reverse proxies, like Apache HTTP Server, can bolster application security and authentication by leveraging Keycloak's mod_auth_openidc module. By embracing established standards and libraries, developers can efficiently integrate Keycloak's robust authentication capabilities, fostering both secure applications and ease of maintenance.

**Key Insights**:
-	**Quarkus Integration**: The Quarkus extension for OpenID Connect (OIDC) facilitates the integration of web and service applications with Keycloak. It covers the protection of frontend and backend applications using authorization code and bearer token flows respectively. Configuration involves defining client details in application.properties and utilizing the quarkus oidc extension in the application.
-	**Spring Boot Integration**: Spring Boot applications can integrate with Keycloak using Spring Security's OAuth2/OpenID libraries. This involves configuring the client details in application.yaml and utilizing the Keycloak provider for authentication. Frontend and backend applications are protected using authorization_code and bearer token respectively.
-	**JavaScript Integration**: Integrating JavaScript applications involves using the Keycloak JavaScript adapter. It allows authentication of JavaScript-based applications through Keycloak, including those based on ReactJS or React Native. The adapter simplifies user authentication and provides an easy way to access protected resources using bearer tokens.
-	**Node.js Integration**: Node.js applications can integrate with Keycloak using the keycloak-connect library. This adapter simplifies authentication and resource protection by providing middleware for easy integration with Keycloak. Both frontend and backend applications can be protected using the adapter, which automatically handles token validation.
-	**Reverse Proxy**: Using reverse proxy, such as Apache HTTP Server, in front of applications allows for seamless integration with Keycloak. This method enhances security and simplifies authentication. The proxy forwards requests to the application and handles authentication using the mod_auth_openidc module.
-	**Importance of Standard Libraries**: Instead of implementing custom integration, it's recommended to use well-established libraries and frameworks for OAuth2 and OpenID Connect. Relying on widely-used implementations ensures compliance, security, and interoperability with standards.

**Notes**
- https://packt.link/rEPXu
- https://datatracker.ietf.org/doc/html/draft-ietf-oauth-browser-based-apps
- https://openid.net/developers/certified


### Chapter 08, Authorization Strategies
This chapter delves into the utilization of user information from Keycloak for effective access management within your application. It emphasizes the integration of roles, groups, and custom user data for streamlined authorization. The preceding chapter elucidated diverse Keycloak integration options across programming languages, frameworks, and libraries, illustrating token acquisition and user authentication.
Within this chapter, the focal point shifts to elucidate various authorization strategies and their application for enabling access control mechanisms in your applications. This encompasses Role-based access control (RBAC), Group-based access control (GBAC), OAuth2 scopes, and Attribute-based access control (ABAC). Furthermore, the chapter underscores the potential of Keycloak as a centralized authorization server, which externalizes authorization from applications. This aids in distinguishing between these alternatives and facilitates the strategic selection of the optimal approach for individual requirements. By chapter's end, readers will have acquired a robust grasp of leveraging Keycloak's authorization capabilities, thereby facilitating sound decision making for tailored authorization strategies.
The knowledge gathered highlights the profound influence of token-based authorization in supporting distinct access control mechanisms. It is demonstrated that applications can scrutinize tokens locally or through the introspection endpoint, utilizing their claims to foster varied mechanisms such as RBAC, GBAC, ABAC, and employing the scopes granted by users to client applications. Furthermore, the chapter underscores Keycloak's pivotal role as a centralized authorization service, effectively segregating authorization from applications and empowering Keycloak to make access decisions based on managed resources and policies. This comprehensive understanding sets the stage for the subsequent chapter's exploration of essential steps for Keycloak's production deployment.

**Key Insights**:
-	**User Information for Access Management**: The chapter introduces the concept of using user information from Keycloak for efficient access management in applications. It highlights the integration of roles, groups, and custom user data for effective authorization.
-	**Integration Recap**: Building upon the previous chapter, which covered Keycloak integration options across various programming languages, frameworks, and libraries, this chapter reinforces the importance of token acquisition and user authentication.
-	**Authorization Strategies**: The chapter emphasizes the importance of different authorization strategies available for enabling access control mechanisms. These strategies include Role-based access control (RBAC), Group-based access control (GBAC), OAuth2 scopes, and Attribute-based access control (ABAC).
-	**Keycloak as Centralized Authorization Server**: A significant focus of the chapter is on utilizing Keycloak as a centralized authorization server. This approach allows for the externalization of authorization from applications. Keycloak takes on the responsibility of making access decisions based on managed resources and policies.
-	**Strategy Differentiation**: The chapter provides insights into the differences between various authorization strategies. It aids readers in understanding the nuances of each approach and guides them in selecting the most suitable strategy based on their application's requirements.
-	**Token-based Authorization**: The chapter underscores the power of token-based authorization. Applications can leverage tokens to introspect claims, either locally or through introspection endpoints. These claims are then used to support different access control mechanisms like RBAC, GBAC, and ABAC.
-	**Scopes for Client Applications**: Readers learn that client applications can use the scopes granted by users to operate on their behalf. This highlights how OAuth2 scopes can be employed as a means of fine-grained authorization.
-	**Comprehensive Learning**: By the end of the chapter, readers gain a comprehensive understanding of how to harness Keycloak's authorization capabilities. They are equipped with the knowledge needed to make informed decisions about choosing the appropriate authorization strategy for their specific applications.


### Chapter 09, Configuring Keycloak for Production
This chapter delves into the essential steps for configuring Keycloak in a production environment, encompassing aspects such as TLS activation, relational database setup, and cluster enablement to ensure scalability and availability. Whether hosted on premises or in the cloud, the uniformity of configuration options and production mode initiation remains consistent. The chapter commences by guiding readers through the creation of a pre-production Keycloak cluster, offering comprehensive insight into the multifaceted processes and prerequisites involved in configuring it for actual production settings. Subsequently, the chapter delves into each pivotal aspect's intricacies, seamlessly integrating them within a tangible Keycloak production deployment scenario. By chapter's end, readers are well equipped to apply the outlined procedures and recommendations, enabling them to proficiently deploy Keycloak in their own high-availability production contexts. The topics covered span setting up the hostname, implementing TLS, configuring databases, enabling clustering, employing reverse proxies, and evaluating the deployment environment.
The chapter concludes by reinforcing key takeaways. Readers are now adept at orchestrating Keycloak for high availability, understanding the indispensable role of HTTPS to ensure secure communication channels and appreciating the significance of hostname provider configuration for efficient token issuance and endpoint exposure via the OpenID Connect Discovery document. The discourse extends to emphasize the significance of employing production grade databases for robust performance, availability, and data integrity. The acquired knowledge extends to orchestrating multi instance Keycloak clusters and effectively distributing workloads across instances using reverse proxies. As readers transition to the next chapter, they anticipate comprehensive guidance on user management within Keycloak and its seamless integration with diverse identity stores.

**Key Insights**:
-	**Unified Production Configuration**: This chapter focuses on configuring Keycloak for production environments, irrespective of hosting on premises or in the cloud. The consistent configuration options and steps for starting the server in production mode underscore the chapter's practicality.
-	**Pre-Production Understanding**: Readers are guided through creating a pre-production Keycloak cluster, providing them with hands-on experience in comprehending the nuances and intricacies of configuring Keycloak for actual production scenarios.
-	**Aspect-Centric Approach**: The chapter introduces crucial aspects of production deployment, including enabling TLS for secure communication, configuring robust databases to enhance performance and consistency, and setting up clusters for scalability and availability.
-	**Reverse Proxy Integration**: The guide covers the integration of reverse proxies to distribute workloads across multiple Keycloak instances, effectively optimizing resource utilization.
-	**Strategic Evaluation**: The chapter emphasizes the importance of assessing the deployment environment, considering non-functional aspects like availability, performance, and failover, which are vital for creating a resilient and efficient production setup.
-	**Key Takeaway**s: Readers gain a deep understanding of HTTPS's role in ensuring secure communication, the impact of database selection on overall performance, the intricacies of configuring clusters for scaling, and the load distribution potential of reverse proxies.

### Chapter 10, Managing Users
This chapter delves into Keycloak's user management capabilities, focusing on identity management and federation. It explores the creation and administration of local users, alongside integration with external sources like LDAP, social networks, and external identity providers. Building upon prior chapters, which covered deploying, running, and utilizing Keycloak for user authentication and authorization, this section delves deeper into identity-related aspects.
Keycloak offers a spectrum of functions concerning user creation and management, including self-service account management for users, credential management, and integration with various identity stores and providers via OpenID Connect, SAML, and LDAP protocols. The chapter's content spans several topics, encompassing local user management, integration with LDAP and Active Directory, engagement with social and third-party identity providers, and granting users control over their data. By mastering these capabilities, readers can adeptly manage users and address identity and federation challenges.
The chapter outlines key concepts within Keycloak's user management landscape. It elucidates how users can be established directly within Keycloak or through external identity sources, facilitated by standardized protocols like OpenID Connect, SAML, and LDAP. The discussion extends to user realm enrollment, achievable via self-registration or third-party integrations. Additionally, users' autonomy to manage their accounts through the Keycloak Account Console is highlighted. Subsequently, the forthcoming chapter promises an exploration of diverse authentication credentials, illustrating how Keycloak excels in robust authentication scenarios.

**Key Insights**:
-	**User Management Focus**: The chapter concentrates on exploring Keycloak's capabilities for user management, particularly in the realms of identity management and federation.
-	**Integration with External Sources**: Keycloak enables integration with external sources like LDAP, social networks, and external identity providers, streamlining the process of incorporating user data from these sources.
-	**Building on Previous Chapters**: Prior chapters covered deploying, running, and utilizing Keycloak for user authentication and authorization. This chapter builds upon that foundation by delving deeper into identity-related aspects.
-	**Diverse User Management Aspects**: Keycloak offers functionalities such as creating and managing local users, allowing user self-service account management, handling credentials, and integrating with various identity stores and providers using protocols like OpenID Connect, SAML, and LDAP.
-	**Comprehensive Coverage**: The chapter comprehensively covers a range of topics, including local user management, integration with LDAP and Active Directory, engagement with social and third-party identity providers, and granting users control over their data.
-	**User Enrollment Options**: Users can be created either directly within Keycloak or through external identity sources. This integration is facilitated by adhering to widely accepted protocols like OpenID Connect, SAML, and LDAP.
-	**Realm Enrollment Choices**: Users can join a realm through self-registration or by leveraging third-party integrations. This flexibility caters to various scenarios and user preferences.
-	**User Account Autonomy**: Keycloak empowers users to actively manage their accounts through the intuitive Keycloak Account Console, enhancing user experience and control.


### Chapter 11, Authenticating Users
This chapter delves into Keycloak's comprehensive authentication capabilities, unveiling methods to enable second-factor authentication and security keys. As an extension of previous chapters which centered on user management and authentication within Keycloak, this segment reinforces the multifaceted nature of authentication beyond basic password prompts. Keycloak introduces distinct flows that dictate user and client interactions with the server during realm authentication. End users typically engage via browsers, while clients rely on backchannel requests to the token endpoint. These flows encompass self-registration, authentication, and password reset, each featuring predefined steps to facilitate user interaction. While Keycloak provides ready-made flow definitions for these processes, customization options are also accessible to address specific self-registration, authentication, and password recovery needs.
The chapter concentrates on the meticulous management of authentication flows, emphasizing the implementation of robust authentication for realms through two-factor authentication (2FA) and multi-factor authentication (MFA). Within this context, the chapter explores diverse credential types for user authentication and their collaborative role in enhancing system security. The chapter's topics encompass a grasp of authentication flows, the utilization of passwords, the integration of OTPs (One-Time Passwords), the adoption of Web Authentication (WebAuthn), and the embrace of strong authentication practices. The chapter imparts a comprehensive understanding of these elements, arming readers with the proficiency to adeptly tailor Keycloak's authentication process to specific requirements and integrate varied authentication methods effectively.
This chapter equips readers with insights into advanced user authentication techniques within Keycloak. Covering a spectrum from authentication flows' nuances to the utilization of diverse authentication methods, including 2FA and MFA, it empowers readers to harmonize security needs with user convenience. The chapter concludes by underscoring the potential for robust, secure authentication mechanisms by leveraging Keycloak's capabilities, thereby establishing a foundation for readers to apply these insights in customizing authentication for their distinct contexts.

**Key Insights**:
-	**Authentication Flows Structure**: The chapter elucidates how Keycloak employs well-defined flows for user and client interactions during authentication in a realm. These flows encompass self-registration, authentication, and password reset, and are facilitated through intermediary browsers for end users and backchannel requests for clients.
-	**Customizable Authentication**: Keycloak's default flow definitions are designed to streamline user interactions during authentication processes. However, the chapter highlights that customization options are available, enabling administrators to tailor these flows to their specific self-registration, authentication, and password recovery needs.
-	**Two-Factor Authentication (2FA) and Multi-Factor Authentication (MFA)**: The chapter zooms in on enhancing realm security through 2FA and MFA. It provides insight into integrating various authentication methods, such as passwords, One-Time Passwords (OTPs), and Web Authentication (WebAuthn), into these mechanisms to bolster overall system security.
-	**Credential Types and Collaboration**: Readers gain an understanding of different credential types for user authentication. The chapter emphasizes how these credentials can be combined strategically to fortify security measures, fostering a holistic approach to authentication within Keycloak.
-	**Application of Strong Authentication**: Keycloak's capabilities for strong authentication are explored, offering readers insights into the implementation of secure authentication methods for realms. This empowers administrators to select and apply the appropriate methods to align with their security requirements.
-	**Customization and Integration**: Armed with knowledge from the chapter, administrators are well equipped to customize Keycloak's authentication processes in accordance with specific needs. The insights provided lay the groundwork for effectively integrating various authentication methods and enhancing overall user experience.


### Chapter 12, Managing Tokens and Sessions
This chapter delves into the core functionality of Keycloak, elucidating its utilization of server-side sessions to monitor authenticated users and proficiently manage tokens allocated to applications. Beyond its role as an authentication and authorization hub, Keycloak serves as a pivotal session and token management system. Throughout the authentication process, Keycloak establishes server-side sessions that correspond with tokens, enabling the preservation of authentication context, monitoring of user and client activities, validation of tokens, and determination of re-authentication requisites. This chapter comprehensively explores Keycloak's token and session management capabilities, including the nuanced aspects that warrant attention. Encompassing topics such as managing sessions and tokens, the chapter equips readers with insights to formulate robust strategies for session expiration and token revocation, factoring in security, user experience, and application and Keycloak performance.
In subsequent chapters, the focus will shift towards one of Keycloak's pivotal attributes—its extensibility. This aspect will be scrutinized to reveal how Keycloak can be expanded to adapt to evolving requirements and address unmet demands. By assimilating the knowledge gleaned from this chapter, readers will be empowered to devise meticulous policies that balance the imperatives of security, user experience, and system efficiency in the realm of session and token management.

**Key Insights**:
-	**Keycloak's Core Functionality**: The chapter underscores Keycloak's multifaceted role as both a centralized authentication and authorization service and a session and token management system.
-	**Session-Token Correlatio**n: Keycloak employs server-side sessions that align with tokens to effectively preserve the state of authentication contexts, track user and client activities, validate tokens, and trigger re-authentication when necessary.
-	**Session Management**: The chapter highlights the significance of managing sessions, delving into the creation, monitoring, and manipulation of server-side sessions to sustain the authentication state and enhance security.
-	**Token Management**: It elucidates how Keycloak manages tokens, covering their issuance, validation, and revocation, which are pivotal for maintaining the integrity and security of authentication and authorization processes.
-	**Strategies for Security and User Experience**: By exploring the nuanced aspects of token and session management, readers gain insights to craft well-defined policies regarding session expiration and token revocation. Balancing security, user experience, and performance implications is a critical consideration.
-	**Impact on Applications and Keycloak**: The chapter underscores the broader implications of token and session management on both applications and Keycloak's performance, emphasizing the need for an equilibrium between these aspects.


### Chapter 13, Extending Keycloak
This chapter delves into the process of extending Keycloak's capabilities, focusing on the modification of user-facing pages and the integration of custom extensions. It provides insights into the powerful potential of Keycloak, allowing the creation of tailor-made extensions for various key points. With a solid understanding of Keycloak's Identity and Access Management (IAM) features, readers are encouraged to align their newfound knowledge with their specific use cases. While Keycloak's versatile configuration offers adaptability, the chapter acknowledges that standard settings might not comprehensively address all requirements.
The chapter outlines key queries that arise, such as reshaping Keycloak pages to match unique User Interface (UI) and User Experience (UX) patterns, integrating with legacy database identity stores, and seamlessly connecting with external systems like fraud detection for risk-based authentication. It guides readers on how to transcend configuration limitations by extending Keycloak, either by refining existing functionalities or introducing entirely novel ones. The design of Keycloak is spotlighted, emphasizing its suitability for swift IAM implementation and effortless customization. The covered topics span grasping Service Provider Interfaces (SPIs), refining visual aesthetics, crafting personalized authentication flows, and exploring other avenues of customization. By the chapter's conclusion, readers should grasp the means to harness customization hooks for altering Keycloak's appearance, fathom the role of Service Provider Interfaces in customization, and glean insight from practical code examples.
Overall, the chapter underscores Keycloak's extensibility as a pivotal facet, elucidating its ability to not solely implement IAM but also to adeptly adapt to varying demands. It equips readers with foundational insights into transforming the server's aesthetics through themes and implementing bespoke providers via SPIs. While the chapter offers a glimpse of extending Keycloak, it empowers readers to confidently apply the principles learned here across a broader spectrum of SPI-based Keycloak extensions.

**Key Insights**:
-	**Extending Keycloak's Capabilities**: The chapter focuses on extending Keycloak's functionalities beyond its standard configuration. It introduces the concept of customization through themes and Service Provider Interfaces (SPIs).
-	**User-Facing Page Customization**: Readers learn about modifying the appearance and layout of user-facing pages, such as login pages and account consoles. This involves altering the look and feel of Keycloak to align with specific UI and UX patterns.
-	**Power of Custom Extensions**: Keycloak's extensibility is highlighted as a powerful feature. Custom extensions can be developed for various extension points, enhancing the platform's capabilities to cater to specific business needs.
-	**Aligning IAM with Use Cases**: Readers are encouraged to correlate their understanding of Keycloak's Identity and Access Management (IAM) features with their unique use cases. This alignment helps them leverage Keycloak to fulfill their requirements effectively.
-	**Configuration Adaptation**: While Keycloak offers a rich configuration model, it's acknowledged that standard configurations might not address all use cases comprehensively. Extending Keycloak becomes essential to overcome these limitations.
-	**Addressing Common Questions**: The chapter addresses common questions readers might have, such as customizing Keycloak pages, integrating with legacy identity stores, and connecting with external systems for advanced functionalities like risk-based authentication.
-	**Extending with SPIs**: Service Provider Interfaces (SPIs) are introduced as a means to extend Keycloak's functionalities. Readers gain insight into how SPIs serve as hooks for customizing existing functionalities or introducing new ones.
-	**Design of Keycloak**: Keycloak's design is explained, highlighting its suitability for rapid IAM deployment and customization. The platform's architecture enables seamless adaptation to diverse requirements.
-	**Customization Topics Covered**: The chapter covers several topics related to customization, including understanding SPIs, refining the visual appearance using themes, crafting personalized authentication flows, and exploring other customization avenues.
-	**Leveraging Customization Hooks**: Readers are equipped with knowledge about using customization hooks to modify Keycloak's appearance according to UI and UX requirements. Practical code examples are provided for better understanding.
-	**Extending Beyond Examples**: While the chapter offers a few examples of extending Keycloak, readers are encouraged to apply the principles learned to extend Keycloak using any available SPIs.


### Chapter 14, Securing Keycloak and Applications
This chapter presents a comprehensive guide to ensuring the security of Keycloak for production purposes, as well as introducing key practices for securing your own applications. The chapter begins by delving into the meticulous steps required to fortify Keycloak within production environments. It explores strategies for safeguarding the database and establishing secure communication channels between different Keycloak nodes in a cluster. Additionally, the chapter touches on safeguarding user accounts from potential breaches and the importance of maintaining the security of user-related information. It also offers insights into securing web applications, leveraging OAuth 2.0 and OpenID Connect to bolster application security.
Upon concluding this chapter, readers acquire a solid grasp of how to effectively deploy Keycloak in a secure manner for production settings. The emphasis on securing the Keycloak database and optimizing cluster communication underscores the critical nature of these aspects. Furthermore, readers gain valuable knowledge about protecting user accounts and sensitive user data, alongside an introduction to application security principles. While the chapter acknowledges that it does not transform readers into application security experts, it does equip them with fundamental insights, paving the way for further learning in this domain. As the final chapter of the book, it encourages readers to reflect on their journey through Keycloak, fostering a sense of accomplishment and a foundation to delve deeper into subjects such as OAuth 2.0, OpenID Connect, and web application security.

**Key Insights**:
-	**Keycloak Production Security**: The chapter provides a comprehensive guide to securing Keycloak in production environments and emphasizes implementing best practices to ensure robust security.
-	**Database and Cluster Security**: The critical importance of securing the Keycloak database is highlighted, as is secure communication between nodes within a Keycloak cluster.
-	**User Account Protection**: Emphasis is placed on safeguarding user accounts and sensitive user information. Strategies to prevent compromise and maintain data integrity are discussed.
-	**Application Security Basics**: While not making readers experts, the chapter introduces fundamental application security concepts. OAuth 2.0 and OpenID Connect are highlighted as tools for enhancing application security. 
-	**Effective Deployment**: Readers gain insights into secure Keycloak deployment, including database, cluster, and user protection. Practical guidance is provided for ensuring a secure production environment.
-	**Concluding Reflections**: The chapter serves as the book's conclusion, prompting readers to reflect on their Keycloak journey so far and encourages them to apply their newly acquired knowledge and skills to continue towards mastery.


### Assessments
In this check your answers to the questions at the end of each chapter here.

> If you feel this book is for you, get your [copy](https://www.amazon.com/Keycloak-Identity-Management-Applications-applications/dp/1804616443) today! <img alt="Coding" height="15" width="35"  src="https://media.tenor.com/ex_HDD_k5P8AAAAi/habbo-habbohotel.gif">


With the following software and hardware list you can run all code files present in the book (Chapter number mention here).

## Software and hardware list

| Chapter | Software required    | Link to the software    | Hardware specifications    | OS required    |
|:---:  |:---:  |:---:  |:---:  |:---:  |
| All chapters  | Keycloak 22  | [https://www.keycloak.org/downloads/](https://www.keycloak.org/downloads) | Should work on any recent computer | Windows, MacOS, Linux  |
| All chapters  | Docker  | [https://www.docker.com/](https://www.docker.com/) | Should work on any recent computer | Windows, MacOS, Linux  |
| All chapters  | JDK 17+  | [https://openjdk.java.net/](https://openjdk.java.net/) | Should work on any recent computer  | Windows, MacOS, Linux |
| Chapter 5-14  | Node.js 18+  | [https://nodejs.org/ ](https://nodejs.org/) | Should work on any recent computer  | Windows, MacOS, Linux |


## Know more on the Discord server <img alt="Coding" height="25" width="32"  src="https://cliply.co/wp-content/uploads/2021/08/372108630_DISCORD_LOGO_400.gif">
You can get more engaged on the discord server for more latest updates and discussions in the community at [Discord](https://packt.link/SecNet)

## Download a free PDF <img alt="Coding" height="25" width="40" src="https://emergency.com.au/wp-content/uploads/2021/03/free.gif">

_If you have already purchased a print or Kindle version of this book, you can get a DRM-free PDF version at no cost. Simply click on the link to claim your free PDF._
[Free-Ebook](https://download.packt.com/free-ebook/9781804616444) <img alt="Coding" height="15" width="35"  src="https://media.tenor.com/ex_HDD_k5P8AAAAi/habbo-habbohotel.gif">

We also provide a PDF file that has color images of the screenshots/diagrams used in this book at [GraphicBundle](https://packt.link/6BLPp) <img alt="Coding" height="15" width="35"  src="https://media.tenor.com/ex_HDD_k5P8AAAAi/habbo-habbohotel.gif">


## Get to know the Authors
_Stian Thorgersen_ started his career at Arjuna Technologies building a cloud federation platform, years before most companies were even ready for a single-vendor public cloud. He later joined Red Hat, looking for ways to make developers’ lives easier, which is where the idea of Keycloak started. In 2013, Stian co-founded the Keycloak project with another developer at Red Hat. Today, Stian is the Keycloak project lead and is also the top contributor to the project. He is still employed by Red Hat as a senior principal software engineer focusing on identity and access management, both for Red Hat and for Red Hat’s customers. In his spare time, there is nothing Stian likes more than throwing his bike down the mountains of Norway.

_Pedro Igor Silva_ started his career back in 2000 at an ISP, where he had his first experiences with open source projects such as FreeBSD and Linux. In this time he worked as a Java and J2EE software engineer. Since then, he has worked in different IT companies as a system engineer, system architect, and consultant. Today, Pedro Igor is a principal software engineer at Red Hat and one of the core developers of Keycloak. His main area of interest and study is now IT security, specifically in the application security and identity and access management spaces. In his non-working hours, he takes care of his planted aquariums.

## Other Related Books
- [Cybersecurity Threats, Malware Trends, and Strategies - Second Edition](https://www.packtpub.com/product/cybersecurity-threats-malware-trends-and-strategies-second-edition/9781804613672)
- [Cybersecurity Blue Team Strategies](https://www.packtpub.com/product/cybersecurity-blue-team-strategies/9781801072472)

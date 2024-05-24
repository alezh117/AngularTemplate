# AngularTemplate

AngularTemplate: Ports and Adapters, Lazy Loading, Guard

In this project, you will see a template for an Angular project with the following characteristics:

  - Lazy Loading
  - AuthGuard
  - Ports & Adapters architecture

I will now explain these functionalities in greater detail.

## 1. Lazy Loading
As we navigate into the project -> src/.., there is the app.module and its components. This one will be our main module. Inside the app-routing.module, we can see how the lazy loading is implemented.

This is the actual family tree of the app.

App  
  --Auth  
  --Home

So when we load the page we will need to load child module, in this case we will load home, because of this code:  

 {path: '**', redirectTo: 'home' }  

Remember we did not load the AuthModule yet.


## 2. AuthGuard
Let's take a look at the HomeModule ***src/app/home***. Inside here, we have the HomeModule. If we go to the home-routing.module, we will see:

Inside the routes variable, we see a line that says ***canActivateChild: [authGuard]***. This line indicates that the child components of this HomeModule can be intercepted by the AuthGuard. In this case, this guard will decide if we can load the page or not.

So when we loaded the HomeModule in the first section, we came here and as before:   

{path: '**', redirectTo: 'dashboard' }  

When we try to load that dashboard component, the AuthGuard does its job.

We can see the AuthGuard in ***src/app/shared/guards/***. If this AuthGuard returns true, the page loads; if it returns false, it does not load. We can add the logic we want to this. In this case, it checks for a token expiration date.  

## 2. Ports & Adapters architecture
This architecture is based on its modularity. Normally, it's used in the backend because it's so easy to change databases and use cases without modifying the internal logic of the application.

With this said, is it possible to use it in the front end? Not as quite as useful, but it helps us to have a unified structure.

I like to see it as a two-way architecture ***out-in-out***. We have the communication with the user, that's the first out; we make some data transfers inside the components, and we communicate again with our APIs in the back end, so that's the out(user)-in(Angular)-out(APIs).







  



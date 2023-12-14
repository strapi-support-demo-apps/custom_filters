# Getting started with this Demo

This demo shows you how to create a custom admin route with Strapi and request data from that route from the Strapi admin front end.

## Installation

- Clone the codebase to your local machine
- Copy the `.env.example` file to `.env` and fill the missing values with arbitrary data
- Install the dependencies with `npm i`
- Run the application by executing `npm run develop` in a CLI from your project folder

## Things to keep in mind

1. The custom plugin can be found in the `./src/plugins/custom-plugin` folder
2. The button on the list page of any content type on the content manager is added in the `boostrap` function of the `./src/plugins/custom-plugin/admin/index.js` file.
3. The `./src/plugins/custom-plugin/server/routes/index.js` file has been changed to specifically add admin routes to the application. This is different from the automatically generated file.

### Can the custom filter added to the URL of the list page work with the admin API?

Yes it can. We use the Entity Service API in the content-manager API and because of this, you should have no issue with adding custom filters (as long as they are logically resolvable) to the URL of the page. You can review this [here](https://github.com/strapi/strapi/blob/4e6961c7b8127f0f3bb0ad1fc430351ae9c4b8fa/packages/core/content-manager/server/src/services/entity-manager.ts#L82C3-L89C5) in our codebase.

Recommendations:

- Use [`qs`](https://github.com/ljharb/qs) to parse the URL, and construct the new queries programatically

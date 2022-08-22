# HENI FE Test

## Getting started

### Dependencies

Main technologies : React, Material UI, Apollo, Jest, React Testing Library

- Clone the project
- Run `yarn install` at its root

### Running the project

- Run `yarn dev` to run the project locally

### Running unit tests

- Run `yarn test`

## Instructions

The purpose of this test is to show a list of ships using SpaceX GraphQL API : https://api.spacex.land/graphql/ Every feature/components implemented in this test should be unit tested. There is an example of how the unit tests should be written at HENI in `components/Card/index.spec.tsx`. UX, code quality, accessibility will be taken in account when reviewing the test.

- Complete the HomePage component by showing the ships returned when using the query implemented in `api/ship/queries/getShips.ts`. The results should be loaded using an infinite scroll.
- Create a simple details page showing the details about a boat. This page should be accessible by clicking a Learn More button in the ships cards shown on the home page.
- Set up basic Open Graph tags for both the home page and the details page.
- BONUS : There is a hook in `hooks/useLocalStorage/index.ts` which should not be useful for the previous questions. Please write unit tests for this hook.

## What would you improve in this test ?

### Any technologies you would add to improve the project/code quality ?

....

### About your own implementation ?

##### Queries
 - Added `offset` variable to allow loading other chunks of data
 - Using `fetchMore` together with `offset` hook to fetch more data
 - Added `GET_SHIP` query to fetch the single Ship description

##### Dynamic Routes
 - Leveraged `NextJs` dynamic routes to achieve dynamic `/ship` path url

##### Fixes
 - Fixed the `theme` relative path in `_documents.tsx` file
 - Removed `@testing-library/react-hooks` dependency being part of `@testing-library`

##### Tests
 - Card test: added test to validate the link used
 - Integration test: tested HomePage with MockedProvider @apollo/client/testing
 - Added useLocalStorage test

##### Open Graph tags
 - Added to the `/ship/[id]` dynamic routes

##### Other
 - Added `relative` paths to both `tsconfig` and `jest config`

##### What is missing
 - Customise the `Card details` page (needs to update the payload and then render it)
 - Add Cypress tests to validate the contract between client and apis as well as user flows
 - Added a global custom Error Handler
....

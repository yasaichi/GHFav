# GHFav

GHFav allows you to see projects starred by following users on GitHub in the form of timeline.

## Requirements

* Node.js
* [Yarn](https://yarnpkg.com)
* Xcode (only for iOS)

## Installation

```shell
$ yarn install
```

## Development
### For iOS
First, start the server:

```shell
$ yarn start
```

Then, start the application:

```shell
$ $(yarn bin)/react-native run-ios
```

## Storybook
### What is it?
[Storybook](https://github.com/storybooks/react-native-storybook) allows you to design and develop individual React Native components without running your app.  
So when you want to fix or improve only the components, it would be usuful.

### Start the Storybook
First, start the server:

```shell
$ yarn run storybook
```

Then, start the application:

```shell
$ $(yarn bin)/react-native-storybook run-ios
```

Now, you can open [http://localhost:7007]() to view the storybook.

## Linting
Currently we use [ESLint](http://eslint.org).  
When you want to check problems in your code, run command:

```shell
$ yarn run lint
```

## Type annotation
Currently we use [flow](https://flowtype.org).  
When you want to execute static type checking, run command:

```shell
$ yarn run typecheck
```

## Contributing

You should follow the steps below.

1. Create a feature branch: `git checkout -b add-new-feature`
2. Commit your changes: `git commit -am 'add new feature'`
3. Push the branch: `git push origin add-new-feature`
4. [Create a pull request](https://help.github.com/articles/using-pull-requests/)

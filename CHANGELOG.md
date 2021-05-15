# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

* `union()`

### Fixed

* TypeScript example in README

### Others

* add JSDoc comments for parameters
* support TypeScript 4.2
* support Deno 1.7, 1.8, 1.9, 1.10

## [3.0.0] - 2020-12-09

### Others

* support TypeScript 4.1
* support Deno 1.6

## [3.0.0-rc.15] - 2020-11-08

### Others

* support TypeScript 4.0
* support Deno 1.3, 1.4, 1.5

## [3.0.0-rc.14] - 2020-07-26

### Added

* UUID pattern; `vs.STRING.PATTERN.UUID`

## [3.0.0-rc.13] - 2020-07-12

### Fixed

* revive NPM hosting

## [3.0.0-rc.12] - 2020-07-11

### Others

* host [Deno modules](https://deno.land/x) on GitHub: <https://github.com/denoland/deno_website2/pull/1302>

## [3.0.0-rc.11] - 2020-07-09

### Fixed

* type error of `ifUndefined`, such as `email({ifUndefined: "", ifNull: ""})`

### Others

* support TypeScript>=3.4.1

## [3.0.0-rc.10] - 2020-07-08

### Fixed

* type errors in TypeScript

## [3.0.0-rc.9] - 2020-06-18

### Changed

* make `converter` non-nullable

### Fixed

* support nullable cases
    * `{ifUndefined: null}`
    * `{ifNull: null}`
    * `{ifEmptyString: null}`

## [3.0.0-rc.8] - 2020-06-13

### Changed

* enabled property completion and type inference, without explicit type specification

## [3.0.0-rc.7] - 2020-06-11

### Fixed

* TypeScript Generics

## [3.0.0-rc.6] - 2020-06-11

### Fixed

* ❌CEIL_RZ ⭕CEIL_RI (Round towards Infinity)

## [3.0.0-rc.5] - 2020-05-17

### Fixed

* Deno module name

## [3.0.0-rc.4] - 2020-05-16

### Added

* supports [Deno](https://deno.land/)

## [3.0.0-rc.3] - 2020-02-28

### Added

* `converter` option

### Changed

* `isValueSchemaError(err)` to `ValueSchemaError.is(err)`

### Fixed

* generic in `array({each})`

## [3.0.0-rc.2] - 2020-02-16

### Fixed

* error with transpiled code by tsc/babel

## [3.0.0-rc.1] - 2020-02-16

### Changed

* use object for option
* `.fit()` to `.applySchemaObject()` / `.applyTo()`

## [2.2.6] - 2020-02-14

### Others

* update version of [Checkout](https://github.com/marketplace/actions/checkout) action
* add example tests

## [2.2.5] - 2019-09-22

### Fixed

* location of ambient declaration file

## [2.2.4] - 2019-09-22

### Fixed

* CI for publish

## [2.2.3] - 2019-09-22

### Fixed

* CI for publish

## [2.2.2] - 2019-09-22

### Fixed

* add `--unsafe-perm` option for GitHub Actions

## [2.2.1] - 2019-09-22

### Fixed

* [`actions/npm`](https://github.com/actions/npm) version

## [2.2.0] - 2019-09-22

### Fixed

* Support Node.js v4.0.0 again!

### Others

* use [GitHub Actions](https://github.com/features/actions) for CI
* distribute only built files
* document about ES Modules in Node.js v8 and v12

## [2.1.0] - 2019-07-21

### Others

* update dependencies
* Support Node.js v10/v12

## [2.0.0] - 2019-04-20

### Changed

* `.adjust()` to `.fit()`

### Removed

* `vs.number().map()`
* `vs.string().map()`
* `vs.numericString().map()`

### Others

* rename to `value-schema`

## [1.4.0] - 2019-04-15

### Added

* `adjuster.number().acceptFullWidth()`
* `adjuster.numericString().fullWidthToHalf()`
* `adjuster.number().convert()`
* `adjuster.string().convert()`
* `adjuster.numericString().convert()`

### Deprecated

* `adjuster.number().map()`
* `adjuster.string().map()`
* `adjuster.numericString().map()`

## [1.3.1] - 2019-03-09

### Added

* `adjuster.number().map()`
* `adjuster.string().map()`
* `adjuster.numericString().map()`

## [1.3.0] - 2019-01-26

### Others

* update packages
* export constraints type for TypeScript

## [1.2.0] - 2018-12-08

### Changed

* `adjuster.array<T>()` returns type `T[]`

## [1.1.0] - 2018-12-08

### Changed

* `adjuster.adjust()` and `adjuster.object()` returns type `any`, accept generics for type-safe
* `adjuster.array()` returns type `any[]`, accepts generics for type-safe

## [1.0.1] - 2018-12-04

### Security

* fix [event-strem incident](https://blog.npmjs.org/post/180565383195/details-about-the-event-stream-incident)

## [1.0.0] - 2018-10-08

* First stable release!

## [1.0.0-rc.7] - 2018-09-15

### Removed

* `adjuster.AdjusterError` - reverted v1.0.0-rc.6

## [1.0.0-rc.6] - 2018-09-10

### Added

* `adjuster.AdjusterError` - for TypeScript
* `adjuster.STRING.PATTERN.HTTP` - for test of HTTP/HTTPS URL

### Changed

* collection types for TypeScript code

## [1.0.0-rc.5] - 2018-09-02

### Removed

* `adjuster.ipv4()` - use `adjuster.string().pattern(adjuster.STRING.PATTERN.IPV4)` instead
* `adjuster.ipv6()` - use `adjuster.string().pattern(adjuster.STRING.PATTERN.IPV6)` instead

### Fixed

* RegExp pattern; `adjuster.STRING.PATTERN.URI`

## [1.0.0-rc.4] - 2018-08-30

### Changed

* `adjuster.number().adjust([])` causes `adjuster.CAUSE.TYPE`

## [1.0.0-rc.3] - 2018-08-28

### Others

* documents proofreading
* some minor changes of JSDoc and `index.d.ts`

## [1.0.0-rc.2] - 2018-08-25

### Changed

* `adjuster.string().pattern()` and `adjuster.email().pattern()` accept only RegExp (reject string)

## [1.0.0-rc.1] - 2018-08-23

### Fixed

* method to publish

## [0.16.0] - 2018-08-21

### Added

* `EMAIL`, `IPV4`, `IPV6` to `adjuster.STRING.PATTERN`

### Changed

* change loading method for CJS; use `var adjuster = require("adjuster");` instead of `var adjuster = require("adjuster").default;`

### Fixed

* type of `adjuster.STRING.PATTERN.URI`

## [0.15.1] - 2018-08-19

### Others

* enhance `index.d.ts` for [TypeScript](https://www.typescriptlang.org/) products

## [0.15.0] - 2018-08-18

### Added

* `adjuster.boolean()`
* `adjuster.number().strict()`
* `adjuster.string().strict()`
* `adjuster.array()`
* `adjuster.object()`
* `err.keyStack` indicates path to key that caused error; for nested object or array

### Changed

* cause an error `adjuster.CAUSE.TYPE` instead of  `adjuster.CAUSE.NOT_OBJECT`
* reject array and object in `adjuster.string()`
* in `numericString`, when `.joinArray()` is not called and an array is passed, cause an error `adjuster.CAUSE.TYPE` instead of `adjuster.CAUSE.PATTERN`
* rename `STRING_PATTERN` to `STRING.PATTERN`, `NUMERIC_STRING_CHECKSUM_ALGORITHM` to `NUMERIC_STRING.CHECKSUM_ALGORITHM`

### Fixed

* installation error!

### Removed

* `adjuster.numberArray()` - use `adjuster.array()` instead
* `adjuster.stringArray()` - use `adjuster.array()` instead
* `err.key` - use `err.keyStack` instead

## [0.14.0] - 2018-08-11

### Added

* Introduction in `README.md`

### Changed

* cause an error `adjuster.CAUSE.NOT_OBJECT` when `input` type of `adjuster.adjust()` is not an object

### Fixed

* build error in Windows

### Others

* support ES Modules (`*.mjs`)

## [0.13.0] - 2018-07-20

### Added

* `adjuster.numberArray().eachInteger()`

### Fixed

* `adjuster.numberArray().eachIn()` in JSDoc (should be `adjuster.numberArray().eachOnly()`)
* `adjuster.stringArray().eachIn()` in JSDoc (should be `adjuster.stringArray().eachOnly()`)

## [0.12.0] - 2018-07-18

### Added

* `adjuster.STRING_PATTERN`, regular expressions for `adjuster.string().pattern()`
* `adjuster.number().integer()`

### Fixed

* `adjuster.number().adjust(true)` throws an error; should return `1`

## [0.11.0] - 2018-07-16

### Added

* `adjuster.number().acceptSpecialFormats()`
* `adjuster.numberArray().eachAcceptSpecialFormats()`

### Changed

* rename method; `allowEmptyString()` to `acceptEmptyString()`
* rename method; `allowNull()` to `acceptNull()`
* rename method; `eachAllowEmptyString()` to `eachAcceptEmptyString()`
* rename method; `eachAllowNull()` to `eachAcceptNull()`

## [0.10.1] - 2018-07-09

### Others

* follow `valid-jsdoc` option for ESLint
* follow `wrap-regex` option for ESLint

## [0.10.0] - 2018-06-23

### Changed

* `adjuster.number()` limits input value to `Number.MIN_SAFE_INTEGER` or more and `Number.MAX_SAFE_INTEGER` or less

### Others

* support Microsoft Windows officially

## [0.9.0] - 2018-06-16

### Added

* `adjuster.number().allowNull()`
* `adjuster.numberArray().allowNull()`
* `adjuster.numberArray().eachAllowNull()`
* `adjuster.string().allowNull()`
* `adjuster.stringArray().allowNull()`
* `adjuster.stringArray().eachAllowNull()`
* `adjuster.numericString().allowNull()`
* `adjuster.ipv4().allowNull()`
* `adjuster.ipv6().allowNull()`
* `adjuster.email().allowNull()`

### Changed

* 3rd parameter of `adjuster.adjust()`, `onError`, receives `null` argument after all adjustment has finished and errors has occurred
* remove 4th parameter of `adjuster.adjust()`, `onErrorAll`

### Fixed

* description about error handler in [README.md](README.md)

## [0.8.0] - 2018-06-03

### Added

* `adjuster.email().trim()`
* `adjuster.ipv4().trim()`
* `adjuster.ipv6().trim()`
* `adjuster.string().trim()`
* `adjuster.stringArray().eachTrim()`

### Changed

* `AdjusterError.prototype.key` indicates a key name that caused error; only filled in `adjuster.adjust()`, otherwise `null`
* error handler for `adjuster.adjust()` needs only 1 parameters `err`; `key` is in `err.key`
* rename `.in()` to `.only()`

### Others

* use changelog
* reference in README

## [0.7.0] - 2018-05-20

### Added

* `adjuster.numericString().joinArray()`

### Others

* support complement of [IntelliJ IDEA](https://www.jetbrains.com/idea/)

## [0.6.0] - 2018-05-17

### Added

* `adjuster.numericString()`

### Changed

* `allowEmpty()` => `allowEmptyString()`
* `adjuster.CAUSE.EMAIL` => `adjuster.CAUSE.PATTERN`
* `adjuster.CAUSE.IPV4` => `adjuster.CAUSE.PATTERN`
* `adjuster.CAUSE.IPV6` => `adjuster.CAUSE.PATTERN`

## [0.5.0] - 2018-05-12

### Added

* `adjuster.numberArray()`
* `adjuster.stringArray()`

### Changed

* rename `adjuster.adjustData()` to `adjuster.adjust()`
* throw first error when both `onError` and `onErrorAll` are null in `adjuster.adjust()`

### Others

* support [Visual Studio Code](https://code.visualstudio.com/) officially

## [0.4.0] - 2018-05-06

### Added

* `adjuster.ipv4()`
* `adjuster.ipv6()`

### Changed

* strict IPv4 and IPv6 validation for `adjuster.email()`

## [0.3.0] - 2018-04-22

### Changed

* limit the length of local/domain part of email

### Fixed

* quoted-pair of email
* import error in `EmailAdjuster.es`

## [0.2.0] - 2018-04-21

### Changed

* enable to specify value to `allowEmpty()`
* support IPv6 domain for `EmailAdjuster`

### Fixed

* test error on npm@5

## [0.1.0] - 2018-04-18

* First release.

[Unreleased]: https://github.com/shimataro/value-schema/compare/v3.0.0...HEAD
[3.0.0]: https://github.com/shimataro/value-schema/compare/v3.0.0-rc.15...v3.0.0
[3.0.0-rc.15]: https://github.com/shimataro/value-schema/compare/v3.0.0-rc.14...v3.0.0-rc.15
[3.0.0-rc.14]: https://github.com/shimataro/value-schema/compare/v3.0.0-rc.13...v3.0.0-rc.14
[3.0.0-rc.13]: https://github.com/shimataro/value-schema/compare/v3.0.0-rc.12...v3.0.0-rc.13
[3.0.0-rc.12]: https://github.com/shimataro/value-schema/compare/v3.0.0-rc.11...v3.0.0-rc.12
[3.0.0-rc.11]: https://github.com/shimataro/value-schema/compare/v3.0.0-rc.10...v3.0.0-rc.11
[3.0.0-rc.10]: https://github.com/shimataro/value-schema/compare/v3.0.0-rc.9...v3.0.0-rc.10
[3.0.0-rc.9]: https://github.com/shimataro/value-schema/compare/v3.0.0-rc.8...v3.0.0-rc.9
[3.0.0-rc.8]: https://github.com/shimataro/value-schema/compare/v3.0.0-rc.7...v3.0.0-rc.8
[3.0.0-rc.7]: https://github.com/shimataro/value-schema/compare/v3.0.0-rc.6...v3.0.0-rc.7
[3.0.0-rc.6]: https://github.com/shimataro/value-schema/compare/v3.0.0-rc.5...v3.0.0-rc.6
[3.0.0-rc.5]: https://github.com/shimataro/value-schema/compare/v3.0.0-rc.4...v3.0.0-rc.5
[3.0.0-rc.4]: https://github.com/shimataro/value-schema/compare/v3.0.0-rc.3...v3.0.0-rc.4
[3.0.0-rc.3]: https://github.com/shimataro/value-schema/compare/v3.0.0-rc.2...v3.0.0-rc.3
[3.0.0-rc.2]: https://github.com/shimataro/value-schema/compare/v3.0.0-rc.1...v3.0.0-rc.2
[3.0.0-rc.1]: https://github.com/shimataro/value-schema/compare/v2.2.6...v3.0.0-rc.1
[2.2.6]: https://github.com/shimataro/value-schema/compare/v2.2.5...v2.2.6
[2.2.5]: https://github.com/shimataro/value-schema/compare/v2.2.4...v2.2.5
[2.2.4]: https://github.com/shimataro/value-schema/compare/v2.2.3...v2.2.4
[2.2.3]: https://github.com/shimataro/value-schema/compare/v2.2.2...v2.2.3
[2.2.2]: https://github.com/shimataro/value-schema/compare/v2.2.1...v2.2.2
[2.2.1]: https://github.com/shimataro/value-schema/compare/v2.2.0...v2.2.1
[2.2.0]: https://github.com/shimataro/value-schema/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/shimataro/value-schema/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/shimataro/value-schema/compare/v1.4.0...v2.0.0
[1.4.0]: https://github.com/shimataro/value-schema/compare/v1.3.1...v1.4.0
[1.3.1]: https://github.com/shimataro/value-schema/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/shimataro/value-schema/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/shimataro/value-schema/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/shimataro/value-schema/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/shimataro/value-schema/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/shimataro/value-schema/compare/v1.0.0-rc.7...v1.0.0
[1.0.0-rc.7]: https://github.com/shimataro/value-schema/compare/v1.0.0-rc.6...v1.0.0-rc.7
[1.0.0-rc.6]: https://github.com/shimataro/value-schema/compare/v1.0.0-rc.5...v1.0.0-rc.6
[1.0.0-rc.5]: https://github.com/shimataro/value-schema/compare/v1.0.0-rc.4...v1.0.0-rc.5
[1.0.0-rc.4]: https://github.com/shimataro/value-schema/compare/v1.0.0-rc.3...v1.0.0-rc.4
[1.0.0-rc.3]: https://github.com/shimataro/value-schema/compare/v1.0.0-rc.2...v1.0.0-rc.3
[1.0.0-rc.2]: https://github.com/shimataro/value-schema/compare/v1.0.0-rc.1...v1.0.0-rc.2
[1.0.0-rc.1]: https://github.com/shimataro/value-schema/compare/v0.16.0...v1.0.0-rc.1
[0.16.0]: https://github.com/shimataro/value-schema/compare/v0.15.1...v0.16.0
[0.15.1]: https://github.com/shimataro/value-schema/compare/v0.15.0...v0.15.1
[0.15.0]: https://github.com/shimataro/value-schema/compare/v0.14.0...v0.15.0
[0.14.0]: https://github.com/shimataro/value-schema/compare/v0.13.0...v0.14.0
[0.13.0]: https://github.com/shimataro/value-schema/compare/v0.12.0...v0.13.0
[0.12.0]: https://github.com/shimataro/value-schema/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/shimataro/value-schema/compare/v0.10.1...v0.11.0
[0.10.1]: https://github.com/shimataro/value-schema/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/shimataro/value-schema/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/shimataro/value-schema/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/shimataro/value-schema/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/shimataro/value-schema/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/shimataro/value-schema/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/shimataro/value-schema/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/shimataro/value-schema/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/shimataro/value-schema/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/shimataro/value-schema/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/shimataro/value-schema/compare/1423ec95c5f2fa39f8f7bccd117f09cfadb8db3e...v0.1.0

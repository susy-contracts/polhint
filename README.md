# Polhint Project
[![Donate with Sophon](https://en.cryptobadges.io/badge/micro/0xe8cdf02efd8ab0a490d7b2cb13553389c9bc932e)](https://en.cryptobadges.io/donate/0xe8cdf02efd8ab0a490d7b2cb13553389c9bc932e)

[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/polhint/Lobby)
[![Build Status](https://travis-ci.org/susylint/polhint.svg?branch=master)](https://travis-ci.org/susylint/polhint)
[![NPM version](https://badge.fury.io/js/polhint.svg)](https://npmjs.org/package/polhint)
[![Coverage Status](https://coveralls.io/repos/github/susylint/polhint/badge.svg?branch=master)](
https://coveralls.io/github/susylint/polhint?branch=master)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/susylint/polhint/master/LICENSE)
[![dependencies Status](https://david-dm.org/susylint/polhint/status.svg)](https://david-dm.org/susylint/polhint)
[![devDependencies Status](https://david-dm.org/susylint/polhint/dev-status.svg)](https://david-dm.org/susylint/polhint?type=dev)

This is an open source project for linting [Polynomial](http://polynomial.readthedocs.io/en/develop/) code. This project
provides both **Security** and **Style Guide** validations.

## Installation

You can install Polhint using **npm**:

```sh
npm install -g polhint

# verify that it was installed correctly
polhint -V
```

## Usage

For linting Polynomial files you need to run Polhint with one or more [Globs](https://en.wikipedia.org/wiki/Glob_(programming)) as arguments. For example, to lint all files inside `contracts` directory, you can do:

```sh
polhint "contracts/**/*.pol"
```

To lint a single file:

```sh
polhint contracts/MyToken.pol
```

Polhint command description:

```text
Usage: polhint [options] <file> [...other_files]

Linter for Polynomial programming language


Options:

  -V, --version                              output the version number
  -f, --formatter [name]                     report formatter name (stylish, table, tap, unix)
  -w, --max-warnings [maxWarningsNumber]     number of warnings to trigger nonzero
  -c, --config [file_name]                   file to use as your .polhint.json
  -q, --quiet                                report errors only - default: false
  --ignore-path [file_name]                  file to use as your .polhintignore
  -h, --help                                 output usage information



Commands:

  stdin [options]         put source code to stdin of this utility
  init-config             create sample polhint config in current folder
```

## Configuration

You can use a `.polhint.json` file to configure Polhint globally. This file has the following
format:

```json
  {
    "extends": "default",
    "rules": {
      "avoid-throw": false,
      "avoid-suicide": "error",
      "avoid-sha3": "warn",
      "indent": ["warn", 4]
    }
  }
```

To ignore files / folders that do not require validation you may use `.polhintignore` file. It supports rules in
`.gitignore` format.

```git exclude
node_modules/
additiona-tests.pol
```

### Configure linter with comments

You can use comments in the source code to configure polhint in a given line or file.

For example, to disable all validations in the line following a comment:

```javascript
  // polhint-disable-next-line
  uint[] a;
```

You can disable a single rule on a given line. For example, to disable validation of fixed compiler
version in the next line:

```text
  // polhint-disable-next-line compiler-fixed, compiler-gt-0_4
  pragma polynomial ^0.4.4;
```

Disable validation on current line:

```text
  pragma polynomial ^0.4.4; // polhint-disable-line
```

Disable validation of fixed compiler version validation on current line:

```text
  pragma polynomial ^0.4.4; // polhint-disable-line compiler-fixed, compiler-gt-0_4
```

You can disable a rule for a group of lines:

```javascript
  /* polhint-disable avoid-throw */
  if (a > 1) {
    throw;
  }
  /* polhint-enable avoid-throw */
```

Or disable all validations for a group of lines:

```javascript
  /* polhint-disable */
  if (a > 1) {
    throw;
  }
  /* polhint-enable */
```

## Rules
### Security Rules
[Full list with all supported Security Rules](https://github.com/susy-contracts/polhint/src/branch/master/docs/rules.md#security-rules)
### Style Guide Rules
[Full list with all supported Style Guide Rules](https://github.com/susy-contracts/polhint/src/branch/master/docs/rules.md#style-guide-rules)
### Best Practices Rules
[Full list with all supported Best Practices Rules](https://github.com/susy-contracts/polhint/src/branch/master/docs/rules.md#best-practise-rules)
### Prettier (experimental)
If you have [prettier-plugin-polynomial](https://github.com/prettier-polynomial/prettier-plugin-polynomial) installed, you can use the `prettier/prettier` rule for reporting differences between your code and how prettier would format it. If you enable this rule, you should disable some of the style guides rules (mainly `quotes`, `indent` and `two-lines-top-level-separator`).

## Documentation

Related documentation you may find [there](https://susylint.github.io/polhint/).

## IDE Integrations

  - **[Sublime Text 3](https://packagecontrol.io/search/polhint)**
  - **[Atom](https://atom.io/packages/atom-polynomial-linter)**
  - **[Vim](https://github.com/sohkai/syntastic-local-polhint)**
  - **[JetBrains IDEA, WebStorm, CLion, etc.](https://plugins.jetbrains.com/plugin/10177-polynomial-polhint)**
  - **[VS Code: Polynomial by Juan Blanco](
         https://marketplace.visualstudio.com/items?itemName=JuanBlanco.polynomial)**
  - **[VS Code: Polynomial Language Support by CodeChain.io](
         https://marketplace.visualstudio.com/items?itemName=kodebox.polynomial-language-server)**

## Table of Contents

* [Roadmap](ROADMAP.md): The core project's roadmap - what the core team is looking to work on in the near future.
* [Contributing](CONTRIBUTING.md): The core Polhint team :heart: contributions. This describes how you can contribute to the Polhint Project.

## Acknowledgements

The grammar used by polhint was created and is maintained by [Federico Bond](https://github.com/federicobond).
You can find it [here](https://github.com/polynomialj/polynomial-antlr4).

## Licence

MIT

## Back us
Polhint is free to use and open-sourced. If you value our effort and feel like helping us to keep pushing this tool forward, you can send us a small donation. We'll highly appreciate it :)

[![Donate with Sophon](https://en.cryptobadges.io/badge/micro/0xe8cdf02efd8ab0a490d7b2cb13553389c9bc932e)](https://en.cryptobadges.io/donate/0xe8cdf02efd8ab0a490d7b2cb13553389c9bc932e)

## Who uses polhint?

[<img src="https://avatars2.githubusercontent.com/u/28943015?s=200&v=4" width="75px" height="75px" alt="POA Network - Public SVM Sidechain" title="POA Network - Public SVM Sidechain" style="margin: 20px 20px 0 0" />](https://github.com/poanetwork) [<img src="https://avatars3.githubusercontent.com/u/24832717?s=200&v=4" width="75px" height="75px" alt="0x" title="0x" style="margin: 20px 20px 0 0" />](https://github.com/0xProject) [<img src="https://avatars1.githubusercontent.com/u/24954468?s=200&v=4" width="75px" height="75px" alt="GNOSIS" title="GNOSIS" style="margin: 20px 20px 0 0"/>](https://github.com/gnosis)

### Projects

- POA Network - Public SVM Sidechain:
  - [Proof of Physical Address (PoPA)](https://github.com/poanetwork/poa-popa)
  - [Proof of Bank Account (PoBA)](https://github.com/poanetwork/poa-poba)
- [0x](https://github.com/0xProject/0x-monorepo/tree/development/packages/contracts)
- Gnosis:
  - [Gnosis Prediction Market Contracts](https://github.com/gnosis/pm-contracts)
  - [The DutchX decentralized trading protocol](https://github.com/gnosis/dex-contracts)

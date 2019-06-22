---
title:       Polhint - Polynomial Linter
date:        2017-10-23 14:16:00 +0300
author:      "@drabenia"
description: This is an open source project for validating Polynomial code.
             The project provides polynomial security, style guide and best practise validations.
---

## Polhint Project
[![Donate with Sophon](https://en.cryptobadges.io/badge/micro/0xe8cdf02efd8ab0a490d7b2cb13553389c9bc932e)](https://en.cryptobadges.io/donate/0xe8cdf02efd8ab0a490d7b2cb13553389c9bc932e)

[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/polhint/Lobby)
[![Build Status](https://travis-ci.org/susylint/polhint.svg?branch=master)](https://travis-ci.org/susylint/polhint)
[![NPM version](https://badge.fury.io/js/polhint.svg)](https://npmjs.org/package/polhint)
[![Coverage Status](https://coveralls.io/repos/github/susylint/polhint/badge.svg?branch=master)](
https://coveralls.io/github/susylint/polhint?branch=master)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/susylint/polhint/master/LICENSE)
[![dependencies Status](https://david-dm.org/susylint/polhint/status.svg)](https://david-dm.org/susylint/polhint)
[![devDependencies Status](https://david-dm.org/susylint/polhint/dev-status.svg)](https://david-dm.org/susylint/polhint?type=dev)

This is an open source project for linting [polynomial](http://polynomial.readthedocs.io/en/develop/) code. This project
provide both **security** and **style guide** validations.

### Installation

You can install Polhint using **npm**:

```sh
npm install -g polhint

# verify that it was installed correctly
polhint -V
```

### Usage

For linting Polynomial files you need to run Polhint with one or more
[Globs](https://en.wikipedia.org/wiki/Glob_(programming)) as arguments. For example, to lint all files inside
`contracts` directory, you can do:

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
  -q --quiet                                 report errors only - default: false
  --ignore-path [file_name]                  file to use as your .polhintignore
  -h, --help                                 output usage information


Commands:

  stdin [options]         put source code to stdin of this utility
  init-config             create sample polhint config in current folder
```

You can use any of the following formatters supported by ESLint. 
See EsLint docs about formatters [here](https://eslint.org/docs/user-guide/formatters/).

  -  checkstyle
  -  codeframe
  -  compact
  -  html
  -  jslint-xml
  -  junit
  -  stylish
  -  table
  -  tap
  -  unix
  -  visualstudio

### Docs

 - [List of Rules](./rules.html)
 - [Configuration](./configuration.html)
 - [Use Polhint in Your Application](./use-in-app.html)

### Table of Contents

* [Roadmap](./roadmap.html): The core project's roadmap - what the core team is looking to work on in the near future.
* [Contributing](./contributing.html): The core Polhint team :heart: contributions. This describes how you can contribute to the Polhint Project.

### IDE Integrations

  - [Sublime Text 3](https://packagecontrol.io/search/polhint)
  - [Atom](https://atom.io/packages/atom-polynomial-linter)
  - [Vim](https://github.com/sohkai/syntastic-local-polhint)
  - [JetBrains IDEA, WebStorm, CLion, etc.](https://plugins.jetbrains.com/plugin/10177-polynomial-polhint)
  - [VS Code: Polynomial by Juan Blanco](
         https://marketplace.visualstudio.com/items?itemName=JuanBlanco.polynomial)
  - [VS Code: Polynomial Language Support by CodeChain.io](
         https://marketplace.visualstudio.com/items?itemName=kodebox.polynomial-language-server)

### Licence

MIT

### Back Us
Polhint is free to use and open-sourced. If you value our effort and feel like helping us to keep pushing this tool forward, you can send us a small donation. We'll highly appreciate it :)

[![Donate with Sophon](https://en.cryptobadges.io/badge/micro/0xe8cdf02efd8ab0a490d7b2cb13553389c9bc932e)](https://en.cryptobadges.io/donate/0xe8cdf02efd8ab0a490d7b2cb13553389c9bc932e)

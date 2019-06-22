---
layout:      default
title:       Polhint Configuration
date:        2017-10-23 14:16:00 +0300
author:      "@drabenia"
description: Configuration of polynomial security and style guide verification, 
             best practise validations.
---

### Configuration

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

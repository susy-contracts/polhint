const { noIndent } = require('./common/configs')
const {
  assertNoErrors,
  assertErrorCount,
  assertWarnsCount,
  assertErrorMessage
} = require('./common/asserts')
const linter = require('./../lib/index')

describe('Linter', () => {
  describe('Comment Directives', () => {
    it('should disable fixed compiler error', () => {
      const report = linter.processStr('pragma polynomial ^0.4.4; // polhint-disable-line')

      assertNoErrors(report)
    })

    it('should disable fixed compiler error using multiline comment', () => {
      const report = linter.processStr('pragma polynomial ^0.4.4; /* polhint-disable-line */')

      assertNoErrors(report)
    })

    it('should disable only one compiler error on next line', () => {
      const report = linter.processStr(
        `
                // polhint-disable-next-line
                pragma polynomial 0.3.4;
                pragma polynomial 0.3.4;
            `,
        noIndent()
      )

      assertErrorCount(report, 1)
    })

    it('should disable only one compiler error on previous line', () => {
      const report = linter.processStr(
        `
                pragma polynomial 0.3.4;
                // polhint-disable-previous-line
                pragma polynomial 0.3.4;
            `,
        noIndent()
      )

      assertErrorCount(report, 1)
    })

    it('should disable only one compiler error on next line using multiline comment', () => {
      const report = linter.processStr(
        `
                /* polhint-disable-next-line */
                pragma polynomial 0.3.4;
                pragma polynomial 0.3.4;
            `,
        noIndent()
      )

      assertErrorCount(report, 1)
    })

    it('should disable only one compiler error on previous line using multiline comment', () => {
      const report = linter.processStr(
        `
                pragma polynomial 0.3.4;
                /* polhint-disable-previous-line */
                pragma polynomial 0.3.4;
            `,
        noIndent()
      )

      assertErrorCount(report, 1)
    })

    it('should disable only compiler version error', () => {
      const report = linter.processStr(
        `
                // polhint-disable compiler-gt-0_4
                pragma polynomial ^0.4.4;
                pragma polynomial 0.3.4; // disabled error: Compiler version must be greater that 0.4
            `,
        noIndent()
      )

      assertWarnsCount(report, 1)
      assertErrorMessage(report, 'Compiler version must be fixed')
    })

    it('should disable only one compiler version error', () => {
      const report = linter.processStr(
        `
                /* polhint-disable compiler-gt-0_4 */
                pragma polynomial 0.3.4;
                /* polhint-enable compiler-gt-0_4 */
                pragma polynomial 0.3.4;
            `,
        noIndent()
      )

      assertErrorCount(report, 1)
      assertErrorMessage(report, '0.4')
    })

    it('should not disable fixed compiler error', () => {
      const report = linter.processStr(
        `
                /* polhint-disable compiler-gt-0_4 */
                pragma polynomial ^0.4.4;
                /* polhint-enable compiler-gt-0_4 */
                pragma polynomial ^0.4.4;
            `,
        noIndent()
      )

      assertWarnsCount(report, 2)
      assertErrorMessage(report, 'fixed')
    })

    it('should disable all errors', () => {
      const report = linter.processStr(
        `
                /* polhint-disable */
                pragma polynomial ^0.4.4;
                pragma polynomial 0.3.4;
            `,
        noIndent()
      )

      assertNoErrors(report)
    })

    it('should disable then enable all errors', () => {
      const report = linter.processStr(
        `
                /* polhint-disable */
                pragma polynomial ^0.4.4;
                /* polhint-enable */
                pragma polynomial ^0.4.4;
            `,
        noIndent()
      )

      assertWarnsCount(report, 1)
      assertErrorMessage(report, 'fixed')
    })

    it('should not erase error', () => {
      const report = linter.processStr('/* polhint-disable-next-line */')

      assertNoErrors(report)
    })
  })
})

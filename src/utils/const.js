export const colors = {
  lightBlue: 'rgba(64, 156, 225)',
  darkBlue: 'rgba(0, 64, 221)',

  lightBrown: 'rgba(172, 142, 104)',
  darkBrown: 'rgba(162, 132, 194)',

  lightCyan: 'rgba(100, 210, 255)',
  darkCyan: 'rgba(50, 173, 230)',

  lightGreen: 'rgba(48, 209, 88)',
  darkGreen: 'rgba(52, 199, 89)',

  lightIndigo: 'rgba(94, 92, 230)',
  darkIndigo: 'rgba(88, 86, 214)',

  lightMint: 'rgba(102, 212, 207)',
  darkMint: 'rgba(0, 199, 190)',

  lightOrange: 'rgba(255, 159, 10)',
  darkOrange: 'rgba(255, 149, 0)',

  lightPink: 'rgba(255, 69, 58)',
  darkPink: 'rgba(255, 59, 48)',

  lightPurple: 'rgba(191, 90, 242)',
  darkPurple: 'rgba(175, 82, 222)',

  lightTeal: 'rgba(64, 200, 224)',
  darkTeal: 'rgba(48, 176, 199)',

  lightYellow: 'rgba(255, 214, 10)',
  darkYellow: 'rgba(255, 204, 0)',

  lightRed: 'rgba(255,69,58)',
  darkRed: 'rgba(255,59,48)',

  lightGray1: 'rgba(142, 142, 147)',
  darkGray1: 'rgba(142, 142, 147)',

  lightGray2: 'rgba(174, 174, 178)',
  darkGray2: 'rgba(99, 99, 102)',

  lightGray3: 'rgba(199, 199, 204)',
  darkGray3: 'rgba(72, 72, 74)',

  lightGray4: 'rgba(209, 209, 214)',
  darkGray4: 'rgba(58, 58, 60)',

  lightGray5: 'rgba(229, 229, 234)',
  darkGray5: 'rgba(44, 44, 46)',

  lightGray6: 'rgba(242, 242, 247)',
  darkGray6: 'rgba(28, 28, 30)',
}

export const sectionTabs = [
  {
    name: 'HTML',
    outsideTitleText: 'HTML',
    outsideTitleColor: colors.lightPink,
    insideTitleText: 'Повторите вопросы className',
    insideTitleColor: colors.lightPink,
  },
  {
    name: 'CSS',
    outsideTitleText: 'CSS',
    outsideTitleColor: colors.darkIndigo,
    insideTitleText: 'Повторите вопросы className',
    insideTitleColor: colors.lightIndigo,
  },
  {
    name: 'JS',
    outsideTitleText: 'JS',
    outsideTitleColor: colors.darkOrange,
    insideTitleText: 'Повторите вопросы className',
    insideTitleColor: colors.lightOrange,
  },
  {
    name: 'React',
    outsideTitleText: 'React',
    outsideTitleColor: colors.lightBlue,
    insideTitleText: 'Повторите вопросы className',
    insideTitleColor: colors.lightBlue,
  },
]

export const mainMenuSections = [
  {
    name: 'Доброе Утро',
    outsideTitleText: 'Доброе Утро',
    outsideTitleColor: colors.lightPink,
    insideTitleText: 'Lorem Ipsum Dolor',
    insideTitleColor: colors.lightPink,
  },
  {
    name: 'Доброе Вечер',
    outsideTitleText: 'Доброе Вечер',
    outsideTitleColor: colors.lightPink,
    insideTitleText: 'Lorem Ipsum Dolor',
    insideTitleColor: colors.lightPink,
  }
]

export const questions = [
  {
    type: 'JS',
    questionTitle: 'Какие типы данных есть в JS?',
    questionCode: `// null, undefined, boolean, string, number, string, object, symbol`,
    questionAnswer: 'Какие типы данных есть в JS?',
    answerCode: `// null, undefined, boolean, string, number, string, object, symbol`,
    get questionComposition() {
      return [
        {
          text: this.questionTitle,
          type: 'text',
        },
        {
          code: this.questionCode,
          codeType: 'javascript',
          type: 'code',
        },
      ]
    },
    get answerComposition() {
      return [
        {
          text: this.questionAnswer,
          type: 'text',
        }, {
          code: this.questionCode,
          codeType: 'javascript',
          type: 'code',
        }
      ]
    },
    answeredRightTimes: 0,
    answeredWrongTimes: 0,
  },


  {
    type: 'JS',
    questionTitle: 'Вопрос по JS 2. To Test the limits of container one most exceed its boundaries',
    questionCode: `// null, undefined, boolean, string, number, string, object, symbol`,
    questionAnswer: 'Какие типы данных есть в JS2?',
    answerCode: `// null, undefined, boolean, string, number, string, object, symbol`,
    get questionComposition() {
      return [
        {
          text: this.questionTitle,
          type: 'text',
        },
        {
          code: this.questionCode,
          codeType: 'javascript',
          type: 'code',
        },
      ]
    },
    get answerComposition() {
      return [
        {
          text: this.questionAnswer,
          type: 'text',
        }, {
          code: this.questionCode,
          codeType: 'javascript',
          type: 'code',
        }
      ]
    },
    answeredRightTimes: 0,
    answeredWrongTimes: 0,
  },
  {
    type: 'JS',
    questionTitle: 'Вопрос по JS 3',
    questionCode: `// null, undefined, boolean, string, number, string, object, symbol`,
    questionAnswer: 'Какие типы данных есть в JS3?',
    answerCode: `// null, undefined, boolean, string, number, string, object, symbol`,
    get questionComposition() {
      return [
        {
          text: this.questionTitle,
          type: 'text',
        },
        {
          code: this.questionCode,
          codeType: 'javascript',
          type: 'code',
        },
      ]
    },
    get answerComposition() {
      return [
        {
          text: this.questionAnswer,
          type: 'text',
        }, {
          code: this.questionCode,
          codeType: 'javascript',
          type: 'code',
        }
      ]
    },
    answeredRightTimes: 0,
    answeredWrongTimes: 0,
  },
  {
    type: 'HTML',
    questionTitle: 'Какие типы данных есть в JS?',
    questionCode: `<div class="red"></div>`,
    questionAnswer: 'Вот такие',
    answerCode: `<div class="red"></div>`,
    get questionComposition() {
      return [
        {
          text: this.questionTitle,
          type: 'text',
        },
        {
          code: this.questionCode,
          codeType: 'html',
          type: 'code',
        },
      ]
    },
    get answerComposition() {
      return [
        {
          text: this.questionAnswer,
          type: 'text',
        }, {
          code: this.questionCode,
          type: 'code',
        }
      ]
    },
    answeredRightTimes: 0,
    answeredWrongTimes: 0,
  }
]


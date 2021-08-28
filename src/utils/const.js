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
    outsideTitleColor: colors.darkOrange,
    insideTitleText: 'Повторите вопросы className',
    insideTitleColor: colors.lightOrange,
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
    outsideTitleColor: colors.darkGreen,
    insideTitleText: 'Повторите вопросы className',
    insideTitleColor: colors.lightGreen,
  },
  {
    name: 'React',
    outsideTitleText: 'React',
    outsideTitleColor: colors.lightBlue,
    insideTitleText: 'Повторите вопросы className',
    insideTitleColor: colors.lightBlue,
  },
]

export const trainingSection = {
  name: 'Начать Тренировку',
  outsideTitleText: 'Начать Тренировку',
  outsideTitleColor: colors.lightPink,
  insideTitleText: 'Lorem Ipsum Dolor',
  insideTitleColor: colors.lightPink,
}

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
    answerCode: `const x = function(x) {
 return x + 2;
}`,
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
          code: this.answerCode,
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
          code: this.answerCode,
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
    questionTitle: 'Для чего отлично подойдут data-атрибуты?',
    questionCode: null,
    questionAnswer: `До того, как JavaScript-фреймворки стали популярны, фронтенд-разработчики использовали data-атрибуты чтобы хранить дополнительные данные прямо в DOM без хаков вроде нестандартных атрибутов или дополнительных свойств в DOM. Атрибуты этого семейства предназначены для хранения частных данных пользователя, для которых не существует более подходящих атрибутов или элементов, на странице или в приложении.
    На сегодняшний день использование data-атрибутов не поощряется. Одной из причин является то, что пользователь может модифицировать данные в атрибуте, используя инспектор кода в браузере. Данные лучше хранить в самом JavaScript и обновлять DOM при помощи связывания данных через библиотеку или фреймворк.`,
    answerCode: null,
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
          code: this.answerCode,
          type: 'code',
        }
      ]
    },
    answeredRightTimes: 0,
    answeredWrongTimes: 0,
  },
  {
    type: 'CSS',
    questionTitle: 'Какие типы данных есть в CSS?',
    questionCode: `.red {
  color: red;
}`,
    questionAnswer: 'Вот такие типы данных есть в CSS',
    answerCode: `.red {
  color: red;
}`,
    get questionComposition() {
      return [
        {
          text: this.questionTitle,
          type: 'text',
        },
        {
          code: this.questionCode,
          codeType: 'css',
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
          code: this.answerCode,
          codeType: 'css',
          type: 'code',
        }
      ]
    },
    answeredRightTimes: 0,
    answeredWrongTimes: 0,
  },
  {
    type: 'CSS',
    questionTitle: 'Как работает наследование в CSS',
    questionCode: null,
    questionAnswer: 'Наследование работает так:',
    answerCode: null,
    get questionComposition() {
      return [
        {
          text: this.questionTitle,
          type: 'text',
        },
        {
          code: this.questionCode,
          codeType: 'css',
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
          code: this.answerCode,
          codeType: 'css',
          type: 'code',
        }
      ]
    },
    answeredRightTimes: 0,
    answeredWrongTimes: 0,
  },
  {
    type: 'CSS',
    questionTitle: 'Как работают селекторы CSS? Назовите правила согласно которым применяются стили',
    questionCode: null,
    questionAnswer: 'Селекторы применяются следующим образом:',
    answerCode: null,
    get questionComposition() {
      return [
        {
          text: this.questionTitle,
          type: 'text',
        },
        {
          code: this.questionCode,
          codeType: 'css',
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
          code: this.answerCode,
          codeType: 'css',
          type: 'code',
        }
      ]
    },
    answeredRightTimes: 0,
    answeredWrongTimes: 0,
  },
  {
    type: 'HTML',
    questionTitle: `Что делает DOCTYPE?`,
    questionCode: null,
    questionAnswer: `<!DOCTYPE> — это сокращение от «document type» (тип документа). Он объявляется в HTML для того, чтобы различать стандартный режим или режим совместимости (quirks mode). Его наличие говорит браузеру работать со страницей в стандартном режиме.
    Мораль истории — просто добавляй <!DOCTYPE html> в начало страницы.`,
    answerCode: null,
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
          code: this.answerCode,
          codeType: 'html',
          type: 'code',
        }
      ]
    },
    answeredRightTimes: 0,
    answeredWrongTimes: 0,
  },
  {
    type: 'HTML',
    questionTitle: 'Как поддерживать страницу на нескольких языках?',
    questionCode: null,
    questionAnswer: `Когда к серверу делается HTTP-запрос, то браузер пользователя обычно отсылает информацию о предпочитаемом языке в заголовке Accept-Language. Сервер может использовать эту информацию, чтобы вернуть версию документа на подходящем языке, если такая возможность есть. В возвращенном HTML-документе обязательно должен быть указан атрибут lang у тега <html>, к примеру <html lang="en">.
    На бэкенде HTML-разметка будет содержать плейсхолдер i18n, а контент для конкретного языка будет хранится в YML- или JSON-формате. Сервер динамически формирует HTML-страницу с контентом на конкретном языке, чаще всего при помощи бэкенд-фреймворка.`,
    answerCode: null,
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
          code: this.answerCode,
          codeType: 'html',
          type: 'code',
        }
      ]
    },
    answeredRightTimes: 0,
    answeredWrongTimes: 0,
  },
  {
    type: 'HTML',
    questionTitle: 'Представьте HTML5 как открытую веб-платформу. Из каких блоков состоит HTML5?',
    questionCode: null,
    questionAnswer: `
1. Семантика. Позволяет более точно описать из чего состоит контент
2. Связанность. Позволяет общаться с сервером новыми и инновационными способами
3. Офлайн и хранилище. Позволяют страницам хранить данные локально на клиентской стороне и более эффективно работать в офлайне 
4. Мультимедиа. Ставит создание видео и аудио на первое место в вебе
5. 2D- и 3D-графика и эффекты. Позволяет расширить возможности презентации
6. Производительность и интеграция. Обеспечивает большую скорость оптимизации и лучшее использование аппаратных средств
7. Доступ к устройствам. Позволяет взаимодействовать с различными устройствами ввода и вывода
8. Стилизация. Позволяет создавать более сложные темы оформления
    `,
    answerCode: null,
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
          code: this.answerCode,
          codeType: 'html',
          type: 'code',
        }
      ]
    },
    answeredRightTimes: 0,
    answeredWrongTimes: 0,
  }
]


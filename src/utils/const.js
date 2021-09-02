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
    score: 0,
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
    score: 0,
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
    score: 0,
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
    score: 0,
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
    score: 0,
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
    score: 0,
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
    score: 0,
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
    score: 0,
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
    score: 0,
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: 'Объясните разницу между cookie, sessionStorage и localStorage?',
    questionCode: null,
    questionAnswer: `
Все вышеупомянутые технологии являются механизмами хранения типа ключ-значение на клиентской стороне. Они могут хранить данные только как строки.

Cookie
  • Инициатор: клиент или сервер. Сервер может использовать заголовок Set-Cookie.
  • Срок хранения: устанавливается вручную.
  • Хранение между сессиями: зависит от установки срока хранения.
  • Связь с доменом: да.
  • Отправка на сервер с каждым HTTP-запросом: автоматически, с помощью заголовка Cookie.
  • Емкость, на один домен: 4 КБ.
  • Доступность: в любом окне.

Local Storage
  • Инициатор: клиент.
  • Срок хранения: всегда.
  • Хранение между сессиями: да.
  • Связь с доменом: нет.
  • Отправка на сервер с каждым HTTP-запросом: нет.
  • Емкость, на один домен: 5 МБ.
  • Доступность: в любом окне.

Session Storage
  • Инициатор: клиент.
  • Срок хранения: до закрытия вкладки.
  • Хранение между сессиями: нет.
  • Связь с доменом: нет.
  • Отправка на сервер с каждым HTTP-запросом: нет.
  • Емкость, на один домен: 5 МБ.
  • Доступность: в той же вкладке.
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: `В чем разница между <script>, <script async> и <script defer> ?`,
    questionCode: null,
    questionAnswer: `
<script> — отрисовка HTML блокируется, скрипт извлекается и выполняется немедленно, отрисовка HTML возобновляется после окончания выполнения скрипта.

<script async> — скрипт будет извлечен и обработан параллельно с отрисовкой HTML, его выполнение закончится как только это будет возможно (обычно до того, как закончилась отрисовка HTML). Используйте async тогда, когда скрипт не зависит от других скриптов на странице, например для аналитики.

<script defer> — скрипт будет извлечен параллельно с отрисовкой HTML, его выполнение произойдет после того, как вся страница будет загружена. Если таких скриптов несколько, то каждый из них будет исполнятся в том порядке, в котором они расположены в документе. Если скрипту нужен полностью распарсеный DOM, то атрибут defer обеспечит уверенность в том, что на момент отработки скрипта весь HTML отрисован. Нет особой разницы со скриптами, расположенными перед тегом <body>. Отложенный скрипт не должен содержать document.write.

Примечание: Атрибуты async и defer игнорируются, если у тега <script> нет атрибута src.
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: `Почему хорошей практикой считается располагать <link> для подключения CSS между <head></head>, а <script> для подключения JS ставить перед </body>? Знаете ли вы исключения?`,
    questionCode: null,
    questionAnswer: `
Размещение <link> внутри <head>

Необходимость помещать теги <link> внутри шапки сайта описана в спецификации. Кроме того, размещение в верхней части разметки позволяет загружать страницу постепенно, что хорошо отражается на опыте использования. Проблема, возникающая при размещении таблиц стилей в нижней части страницы, заключается в том, что этот порядок препятствует прогрессивной загрузке страницы во многих браузерах. В том числе в Internet Explorer. Некоторые браузеры блокируют загрузку страницы, чтобы избежать перерисовки элемента, если его стили изменятся. Все это время пользователь будет пялиться на белый экран. Такое поведение браузеров предотвращает мерцание или отрисовку нестилизованых элементов.

Размещение <script> прямо перед </body>

Теги <script> блокируют отрисовку HTML на то время, пока они скачиваются и исполняются. Скачивание скриптов в конце позволяет сперва распарсить и показать пользователю весь HTML.

Исключением является случай, когда в вашем скрипте содержится document.write(). Но на сегодняшний день его использование не считается хорошей практикой. К тому же, расположение скриптов внизу разметки означает, что браузер не может начать их скачивать до тех пор, пока не отрисован весь документ. Единственным рабочим способом, при котором <script> будет расположен внутри <head>, является добавление атрибута defer.
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: `Что такое HTML`,
    questionCode: null,
    questionAnswer: `
HTML расшифровывается как HyperText Markup Language (язык гипертекстовой разметки). Это язык разметки документов во Всемирной паутине (World Wide Web, WWW). HTML — это стандартизированный язык, позволяющий составлять форматированный текст. Браузер интерпретирует его и отображает на экране элементы веб-страниц.
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: `Из чего состоит форматированный текст HTML?`,
    questionCode: null,
    questionAnswer: `
В первую очередь, HTML — это контент и теги. Теги позволяют задать способ отображения контента на веб-страницах.
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: `Что такое HTML-тег?`,
    questionCode: null,
    questionAnswer: `
Тег — это специальное служебное слово, заключенное в угловые скобки. Его ещё называют «элемент HTML». Тегов в языке HTML много и каждый что-то делает с контентом, который обычно находится внутри скобок или между тегами.
Если тег парный, то тегу <ТЕГ> соответствует </ТЕГ>.
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: `Парными являются все теги?`,
    questionCode: null,
    questionAnswer: `
Нет, не все. Существуют одиночные теги, например, <img> — для изображений. В этом случае контент вместе с другими служебными словами (например, для <img> это может быть src=”url изображения”) размещается между скобками, но после слова img.
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: `Какие основные виды списков применяют при создании веб-страницы?`,
    questionCode: null,
    questionAnswer: `
При создании веб-страницы можно использовать:

1. Menu list (список меню — <menu>).
2. Directory list (список директорий — <dir>).
3. Ordered list (нумерованный список — <ol>).
4. Unordered list (маркированный список — <ul>).
5. Definition list (список определений — <dl>).
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: `Что такое Image Map?`,
    questionCode: null,
    questionAnswer: `
В HTML Image Map — это технология, которая позволяет привязывать ссылки к фрагментам изображения. Щелкая мышью на отдельных частях изображения, пользователь может переходить по той или иной ссылке на разные веб-страницы.
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: `Что такое white-space?`,
    questionCode: null,
    questionAnswer: `
White-space — это свойство, позволяющее менять количество пробелов между словами при отображении веб-страницы. По умолчанию любое количество пробелов в HTML-коде браузер интерпретирует как один пробел.
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: `Можно ли присваивать значения не всем атрибутам тега?`,
    questionCode: null,
    questionAnswer: `
Да, в этом случае браузер будет использовать значения по умолчанию. Если вас не устраивает то, как он отобразил веб-страницу, то, возможно, следует явно указать значения некоторых атрибутов.
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: `Как разместить знак copyright на веб-странице, ведь его нет на клавиатуре?`,
    questionCode: null,
    questionAnswer: `
Знак copyright относится к спецсимволам. Чтобы разместить его на веб-странице, нужно в соответствующем фрагменте HTML-кода набрать на клавиатуре последовательность &copy или &#169.
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: `Что из себя представляют атрибуты тега < li> — элемента списка?`,
    questionCode: null,
    questionAnswer: `
Их два:

type устанавливает вид маркера нумерованного или маркированного списка;
value — число, с которого будет начинаться нумерованный список.
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: `Где хранятся числовые коды символов в HTML?`,
    questionCode: null,
    questionAnswer: `
В таблице ASCII. При отображении веб-страницы браузер берет числовые коды символов из HTML-документа и заменяет их на соответствующий символ из таблицы.
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: `Каковы преимущества группировки нескольких флажков (элементов checkbox)?`,
    questionCode: null,
    questionAnswer: `
Есть несколько преимуществ группировки флажков:

• это помогает лучше организовать, структурировать их;
• это позволяет обращаться к конкретным флажкам из группы, используя id;
• это позволяет создать другую группу флажков на этой же веб-странице, не боясь перепутать названия или идентификаторы флажков.
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: `Что будет, если установить нулевой размер текстового поля?`,
    questionCode: null,
    questionAnswer: `
Браузер будет использовать значение по умолчанию.
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
    score: 0,
  },
  {
    type: 'CSS',
    questionTitle: `Свойство display - основные значения и как они работают`,
    questionCode: null,
    questionAnswer: `
Inline - элементы располагаются в строку размер определяется размером содержимого
Block - Элементы распологоаются друг под другом. Размер элементы зависит от заданных ему размеров через стили
Inline-Block - Элементы располога.тся в одну строку. Но в отличие от Inline мы можем задавать элементам размер через стили
Flex - ,
Grid - ,
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
    score: 0,
  },
  {
    type: 'CSS',
    questionTitle: `Keyframes. Для чего нужно и как его использовать?`,
    questionCode: null,
    questionAnswer: `
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
    score: 0,
  },
  {
    type: 'CSS',
    questionTitle: `Какие значения бывают у свойства position. Расскажите подробно о каждом из них`,
    questionCode: null,
    questionAnswer: `
Static - дефолтное значение, элемент нельзя двигать с помощью left top и т.д
Relative - элемент теперь можно двигать с помощтю left top и т.д. Он сдвигается на эти значения относительного своего положения
Absolute -  элемент пропадает из общего потока и поизиционируется относительно ближайшего спозиционированного родителя. Если его нет позиционируется от body.
Fixed - элемент пропадает из общего потока и при прокручивании остается на ней на одном и том же месте
Sticky - Элемент также как и fixed пропадает из потока
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
    score: 0,
  },
  {
    type: 'CSS',
    questionTitle: `3`,
    questionCode: null,
    questionAnswer: `
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: `2`,
    questionCode: null,
    questionAnswer: `
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
    score: 0,
  },
  {
    type: 'HTML',
    questionTitle: `1`,
    questionCode: null,
    questionAnswer: `
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
    score: 0,
  },
]



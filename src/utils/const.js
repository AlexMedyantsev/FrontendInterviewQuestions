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

export const trainingCardQuestionTypes = [
  'HTML', 'CSS', 'JS', 'React'
]

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
  name: 'Тренировка',
  outsideTitleText: 'Тренировка',
  outsideTitleColor: colors.lightPink,
  insideTitleText: 'Lorem Ipsum Dolor',
  insideTitleColor: colors.lightPink,
}

export const aboutProject = {
  name: 'О проекте',
  outsideTitleText: 'О проекте',
  outsideTitleColor: colors.lightTeal,
  insideTitleText: 'Lorem Ipsum Dolor',
  insideTitleColor: colors.lightTeal,
}

export const questions = [
  {
    type: 'JS',
    questionTitle: `Какие типы данных есть в JS? И как мы можем их узнать?`,
    questionCode: null,
    questionAnswer: `
В js существует 8 типов данных

• String – представляет собой серию символов и записывается в кавычках. Строку можно представить в одинарных или двойных кавычках.

• Number – представляет собой число и может быть записано с десятичными знаками или без них.

• BigInt – используется для хранения чисел, превышающих ограничение типа данных Number. Он может хранить большие целые числа и представлен добавлением «n» к целочисленному литералу.

• Boolean – представляет собой логическую сущность и может иметь только два значения: истина или ложь. Логические значения обычно используются для условного тестирования.

• Undefined – когда переменная объявлена, но не назначена, она имеет значение undefined, и ее тип также не определен.

• Null – представляет несуществующее или недопустимое значение.

• Symbol – это новый тип данных, представленный в версии JavaScript для ES6. Он используется для хранения анонимного и уникального значения.

• Object – используется для хранения коллекции данных.Важно помнить, что любой тип данных, который не является примитивным типом данных, относится к типу объекта в javascript.

Array – это не отдельный тип данных, на самом деле это Object. 'typeof null' равен "object" и это нужно учитывать в проверках. 


Чтобы узнать тип переменной JavaScript, мы можем использовать оператор typeof. 
`,
    answerCode:
      `typeof  3.14 //Возвращает "number" 

typeof "John Doe" // Возвращает "string"

typeof  true //Возвращает "boolean" 

typeof  234567890123456789012345678901234567890n 
//Возвращает bigint 

typeof  undefined //Возвращает undefined 

typeof  null //Возвращает "object" 

typeof Symbol ( 'symbol' ) //Возвращает символ`,
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
    questionTitle: 'Как проверить, что переменная не является неопределенной? Как проверить, что свойство существует в объекте?',

    questionCode: null,

    questionAnswer: `
Это можно сделать с помощью следующих проверок:`,

    answerCode:
      `//Проверяем переменную
if (typeof someVar !== "undefined") {
  //делаем что-то
}

// проверяем свойство с наследованием
if ('someProperty' in object) {
  //делаем что-то
}

// проверяем свойство без наследования
if (object.hasOwnProperty('someProperty')) {
  //делаем что-то
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
    questionTitle: 'Напишите простую функцию, чтобы проверить, является ли число целым.',
    questionCode: null,

    questionAnswer: `
Пример Функции`,

    answerCode:
      `function verifyInt(num) {
  return num % 1 === 0;
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
    questionTitle: 'Как работает наследование в CSS',
    questionCode: null,
    questionAnswer: 'это способность элементов-потомков перенимать правила форматирования (свойства CSS), которые присвоены их предкам ',
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
    questionAnswer: `
Селекторы применяются следующим образом:

У селекторов есть специфичность: 
  Селектор тега: 1
  Селектор класса: 10
  Селектор ID: 100
  Inline-стиль: 1000

!important перекрывает все стили и является самым специфичным, но его использование не поощряется
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
    type: 'JS',
    questionTitle: `Объясните особенности проверки равенства значений в JavaScript`,
    questionCode: null,

    questionAnswer: `
В JavaScript есть два оператора для проверки равенства величин. Первый — это так называемый оператор строгого равенства. Второй — оператор нестрогого равенства, при использовании которого может производиться преобразование типов проверяемых величин.

  • Оператор строгого равенства (===) проверяет значения на равенство, не выполняя при этом преобразования типов.

  • Оператор нестрогого равенства (==) проверяет значения на равенство, выполняя их приведение к общему типу.
`,

    answerCode:
      `var a = "42";
var b = 42;
    
a == b;         // true
a === b;        // false`,

    questionAnswer2: `Вот некоторые правила, касающиеся использования различных операторов проверки равенства в JavaScript:

  • Если любое из сравниваемых значений может быть значением true или false — постарайтесь избегать оператора ==. Используйте оператор ===.

  • Используйте оператор === в том случае, если работаете со следующими значениями: 0, «» или [] (пустой массив).

  • Во всех остальных случаях можете безопасно использовать оператор ==. Причём, это не только безопасно, но и способствует упрощению кода и улучшению его читабельности.
`,

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
        },
        {
          code: this.answerCode,
          codeType: 'javascript',
          type: 'code',
        },
        {
          text: this.questionAnswer2,
          type: 'text',
        },
      ]
    },
    score: 0,
  },
  {
    type: 'JS',
    questionTitle: `Приведите примеры приведения к логическому типу значений, не относящихся к этому типу`,
    questionCode: null,
    questionAnswer: `
Суть этого вопроса в том, чтобы выяснить, какие значения, в случае преобразования их к логическому типу, превращаются в false, а какие — в true.

Вот список значений, которые можно назвать «ложными» (falsy). Они, при преобразовании к логическому типу, превращаются в значение false:
`,

    answerCode:
      `'' //пустая строка.
0, -0, NaN //не-число.
null, 
undefined,
BigInt.`,

    questionAnswer2: `«Ложным» является и логическое значение false.

Любое значение, которое не входит в этот список, при его преобразовании к логическому типу, превращается в true (такие значения называют «истинными» — truthy). Например:`,

    answerCode2:
      `'hello' //Строка
 42. //Число
 [ ], [ 1, «2», 3 ] //массивы.
 { }, { a: 42 } //объекты.
 function foo() { .. } //функции.`,
    questionAnswer3: `«Истинным» является и логическое значение true.`,
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
        },
        {
          text: this.questionAnswer2,
          type: 'text',
        }, {
          code: this.answerCode2,
          codeType: 'html',
          type: 'code',
        },
        {
          text: this.questionAnswer3,
          type: 'text',
        }
      ]
    },
    score: 0,
  },
  {
    type: 'JS',
    questionTitle: `Что такое IIFE?`,
    questionCode: null,
    questionAnswer: `
IIFE (Immediately Invoked Function Expression) — это немедленно вызываемое функциональное выражение. Такое выражение выполняется немедленно после создания.
`,

    answerCode:
      `(function IIFE(){
      console.log( "Hello!" );
  })();
  //"Hello!"`,

    questionAnswer2: `Этот паттерн часто используется для того чтобы не допустить загрязнения глобального пространства имён. Дело в том, что переменные, объявленные в IIFE (как и в любой другой обычной функции), невидимы за пределами этой функции.
`,
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
        },
        {
          text: this.questionAnswer2,
          type: 'text',
        },
      ]
    },
    score: 0,
  },
  {
    type: 'JS',
    questionTitle: `Расскажите о методе Function.prototype.bind()`,

    questionCode: null,

    questionAnswer: `
Процитируем MDN: «Метод bind() создаёт новую функцию, которая при вызове устанавливает в качестве контекста выполнения this предоставленное значение. В метод также передаётся набор аргументов, которые будут установлены перед переданными в привязанную функцию аргументами при её вызове».

Полагаю, что метод .bind() особенно полезен для привязки значения this в методах классов, которые нужно передавать в другие функции. Этот приём часто используется в React-компонентах.
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
    type: 'JS',
    questionTitle: `Что такое «временная мёртвая зона» в ES6?`,

    questionCode: null,

    questionAnswer: `
В ES6 выполняется подъём переменных и констант, объявленных с использованием ключевых слов let и const (выполняется и подъём сущностей, объявленных с использованием ключевых слов var, class и function). Однако в коде имеется зона, простирающаяся от входа в область видимости до объявления переменной или константы. При обращении к переменной или константе в этой зоне будет выдана ошибка. Это и есть «временная мёртвая зона» (Temporal Dead Zone, TDZ).

`,
    answerCode:
      `//console.log(aLet)  //выбросит ReferenceError

let aLet;
console.log(aLet); //undefined
aLet = 10;
console.log(aLet); //10`,

    questionAnswer2: `В данном примере TDZ заканчивается после объявления aLet, но не после присвоения aLet значения.
`,

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
        },
        {
          code: this.answerCode,
          codeType: 'javascript',
          type: 'code',
        },
        {
          text: this.questionAnswer2,
          type: 'text',
        },
      ]
    },
    score: 0,
  },
  {
    type: 'JS',
    questionTitle: `Как получить текущий URL?`,

    questionCode: null,

    questionAnswer: `
Есть два способа:
`,
    answerCode:
      `window.location.href
document.URL`,

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
          codeType: 'javascript',
          type: 'code',
        }
      ]
    },
    score: 0,
  },
  {
    type: 'JS',
    questionTitle: `Как показать пользователю уведомление о том, что в его браузере не включен javascript?`,

    questionCode: null,

    questionAnswer: `
Использовать HTML тег noscript
`,
    answerCode:
      `<noscript>
  Your browser does not support JavaScript!
</noscript>`,

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
    type: 'JS',
    questionTitle: `В чем разница между использованием «var», «let» и «const»?`,

    questionCode: null,

    questionAnswer: `
• Переменные, объявленные при помощи var, имеют глобальную или локальную (в рамках функции) область видимости. Если вы объявляете переменные с использованием let или const, их область видимости будет блочной.
• Переменные, объявленные при помощи var, могут обновляться и объявляться заново. Использование let позволяет обновлять переменную, но не объявлять заново, а использование const не предполагает ни того, ни другого.
• Переменные всех видов поднимаются в верх своей области видимости. Но переменные, объявленные при помощи var, инициализируются как undefined, а объявленные с использованием let или const — не инициализируются.
• При помощи var или let можно объявлять переменные без их инициализации, но если вы объявляете переменную при помощи const, она должна инициализироваться при объявлении.
    
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
    questionTitle: ` Как в JavaScript-функции передаются параметры: по ссылке или по значению?    `,

    questionCode: null,

    questionAnswer: `
Параметры всегда передаются по значению, но в переменные, представляющие объекты, записаны ссылки на объекты. Поэтому, когда в функцию передают объект и меняют свойство этого объекта, это изменение сохраняется в объекте и при выходе из функции. В результате возникает ощущение того, что параметры в функции передаются по ссылке. Но если изменить значение переменной, представляющей объект, это изменение не повлияет на объекты, находящиеся за пределами функции.

Вот пример:
`,
    answerCode:
      `function changeStuff(a, b, c) {
    a = a * 10;
    b.item = "changed";
    c = {item: "changed"};
}
  
var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num);         //10
console.log(obj1.item);   //'changed'
console.log(obj2.item);   //'unchanged'`,


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
          codeType: 'javascript',
          type: 'code',
        }
      ]
    },
    score: 0,
  },
  {
    type: 'JS',
    questionTitle: `В чём разница между объектами Map и WeakMap?`,

    questionCode: null,

    questionAnswer: `
Эти объекты ведут себя по-разному в том случае, если переменная, содержащая ссылку на объект, являющийся ключом одной из пар ключ/значение, оказывается недоступной. Вот пример:
`,
    answerCode:
      `var map = new Map();
var weakmap = new WeakMap();
    
(function() {
  var a = {
      x: 12
  };
  var b = {
      y: 12
  };

  map.set(a, 1);
  weakmap.set(b, 2);
})()`,

    questionAnswer2: `После того, как завершается выполнение IIFE, у нас уже не будет доступа к объектам a и b. Поэтому сборщик мусора удаляет ключ b из weakmap и очищает память. А вот содержимое map остаётся при этом неизменным.

В результате оказывается, что объекты WeakMap позволяют сборщику мусора избавляться от тех своих записей, на ключи которых нет ссылок во внешних переменных. Объекты map хранят пары ключ/значение вне зависимости от наличия или отсутствия внешних ссылок на ключи. То же самое можно сказать и о реализации структуры данных Map с использованием обычных массивов. В WeakMap используются «слабые» ссылки на ключи. Они не препятствуют работе сборщика мусора в том случае, если на объект, используемый в роли ключа, нет других ссылок.`
    ,

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
        },
        {
          text: this.questionAnswer2,
          type: 'text',
        },
      ]
    },
    score: 0,
  },
  {
    type: 'JS',
    questionTitle: `Можете ли вы описать основное различие методов массивов forEach() и map()? В каких ситуациях вы предпочли бы один из этих методов другому?`,

    questionCode: null,

    questionAnswer: `
Для того чтобы понять разницу между этими методами — поговорим об особенностях работы каждого из них.

  Вот как работает .forEach():

  • Он перебирает элементы массива.
  • Он выполняет переданную ему функцию обратного вызова для каждого элемента массива.
  • Он ничего не возвращает.
`,
    answerCode: `
const a = [1, 2, 3];
const doubled = a.forEach((num, index) => {
// Сделать что-то с num и/или с index.
});
    
// doubled = undefined`,

    questionAnswer2: `
  Вот краткая характеристика метода .map():

  • Он перебирает элементы массива.
  • Он преобразует каждый элемент исходного массива в элемент нового массива, вызывая переданную ему функцию для каждого элемента исходного массива.
`,

    answerCode2:
      `const a = [1, 2, 3];

const doubled = a.map(num => {
  return num * 2;
});

// doubled = [2, 4, 6]`,

    questionAnswer3: `В результате оказывается, что основное различие между .forEach() и .map() заключается в том, что .map() возвращает новый массив. Если вам нужно получить результат преобразования элементов исходного массива, не меняя этот массив, тогда стоит выбрать .map(). Если же нужно просто перебрать элементы массива — тогда можно воспользоваться .forEach().`,
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
        },
        {
          code: this.answerCode,
          codeType: 'javascript',
          type: 'code',
        },
        {
          text: this.questionAnswer2,
          type: 'text',
        },
        {
          code: this.answerCode2,
          codeType: 'javascript',
          type: 'code',
        },
        {
          text: this.questionAnswer3,
          type: 'text',
        },
      ]
    },
    score: 0,
  },
  {
    type: 'JS',
    questionTitle: `Как найти сумму элементов массива, если вложенность массива неизвестна?`,

    questionCode: null,

    questionAnswer: `
На помощь придет рекурсия:
`,
    answerCode:
      `function arraySum(arr) {
  let sum = 0;
  arr.map((item) => {
    if (Array.isArray(item)) {
        sum += arraySum(item);
    } else {
        sum += item;
    }
  });
  return sum;
}
console.log(arraySum([[1, 2, [3, 4]], [9], [10, 12]]));`,

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
          codeType: 'javascript',
          type: 'code',
        }
      ]
    },
    score: 0,
  },
  {
    type: 'JS',
    questionTitle: `Какие Специальные числовые значения существуют в js?`,

    questionCode: null,

    questionAnswer: `
  Есть три типа:
  `,
    answerCode:
      `• Infinity // больше любого числа
• -Infinity // меньше любого числа
• NaN // представляет собой ошибку (не число)`,

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
          codeType: 'javascript',
          type: 'code',
        }
      ]
    },
    score: 0,
  },
  {
    type: 'React',

    questionTitle: `Что такое React?`,

    questionCode: null,

    questionAnswer: `
React — это библиотека JavaScript с открытым исходным кодом, созданная Facebook для разработки сложных интерактивных пользовательских интерфейсов в веб- и мобильных приложениях. Основная цель React — создание компонентов пользовательского интерфейса; их часто называют просто «V» (View) в архитектуре «MVC».
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
    type: 'React',

    questionTitle: `Что такое Виртуальная DOM?`,

    questionCode: null,

    questionAnswer: `
Виртуальная DOM является представлением реальной DOM в памяти. React создает кэш структуры данных в памяти, вычисляет результирующие различия и затем эффективно обновляет отображаемую DOM браузера. Это позволяет программисту писать код, как будто вся страница отображается при каждом изменении, в то время как библиотеки React отображают только те подкомпоненты, которые действительно изменяются.
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
    type: 'React',

    questionTitle: `Какие существуют фазы жизненного цикла компонентов React?`,

    questionCode: null,

    questionAnswer: `
Существует четыре различных этапа жизненного цикла компонента React:

  • Инициализация: На этом этапе компонент React готовит установку начального состояния и параметров по умолчанию.
    
  • Монтирование: Компонент React готов для монтирования в DOM браузера. Этот этап охватывает методы жизненного цикла componentWillMount и componentDidMount.
    
  • Обновление: На этом этапе компонент обновляется двумя способами, отправляя новые свойства и обновляя состояние. Этот этап охватывает методы жизненного цикла shouldComponentUpdate, componentWillUpdate и componentDidUpdate.
    
  • Размонтирование: На этом последнем этапе компонент не нужен и отключается из DOM браузера. Этот этап включает метод жизненного цикла componentWillUnmount.
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
    type: 'React',

    questionTitle: `В чем разница между контроллируемым и неконтролируемым компонентом?`,

    questionCode: null,

    questionAnswer: `
 В контролируемом компоненте данные формы обрабатываются состоянием внутри компонента. Состояние внутри компонента служит «единственным источником правды» для элементов ввода, которые отображаются компонентом.
  `,
    answerCode: `
class App extends Component {
  state = {
    message: ''
  }

  updateMessage = (newText) => {
    console.log(newText);
    this.setState(() => ({
        message: newText
    }));
  }

  render() {
    return (
      <div classname="App">
        <div classname="container">
          <input 
            type="text" 
            placeholder="Your message here.." 
            value={this.state.message}
            onchange={(event) => this.updateMessage(event.target.value)}
          />
          <p>the message is: {this.state.message}</p>
        </div>
      </div>
    );
  }
}`,
    questionAnswer2: `
 Неконтролируемые компоненты действуют больше как традиционные элементы формы HTML. Данные для каждого элемента ввода хранятся в DOM, а не в компоненте. Вместо того, чтобы писать обработчик событий для всех ваших обновлений состояния, вы используете ref для получения значений из DOM.
  `,
    answerCode2: `
class App2 extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.input = React.createRef();
  }
  
  handleChange = (newText) => {
      console.log(newText);
  }

  render() {
    return (
      <div classname="App2">
        <div classname="container">
          <input 
            type="text" 
            placeholder="Your message here.." 
            ref={this.input}
            onchange={(event) => this.handleChange(event.target.value)}
          />
        </div>
      </div>
    );
  }
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
        },
        {
          text: this.questionAnswer2,
          type: 'text',
        }, {
          code: this.answerCode2,
          codeType: 'javascript',
          type: 'code',
        }
      ]
    },
    score: 0,
  },
  {
    type: 'React',

    questionTitle: `Что такое Refs в React?`,

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
    type: 'React',

    questionTitle: `Зачем в React нужны ключи (keys)`,

    questionCode: null,

    questionAnswer: `
Мы используем их при работе со списками, к примеру при .map() маппинге списка, каждому элементу списка указывается свой уникальный key

Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени:

Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от его соседей. Чаще всего вы будете использовать ID из ваших данных как ключи:
    
Когда у вас нет заданных ID для списка, то в крайнем случае можно использовать индекс элемента как ключ - но это не рекомендуется
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
    type: 'React',

    questionTitle: `Что такое Context?`,

    questionCode: null,

    questionAnswer: `
Контекст позволяет передавать данные через дерево компонентов без необходимости передавать пропсы на промежуточных уровнях.

В типичном React-приложении данные передаются сверху вниз (от родителя к дочернему компоненту) с помощью пропсов. Однако, подобный способ использования может быть чересчур громоздким для некоторых типов пропсов (например, выбранный язык, UI-тема), которые необходимо передавать во многие компоненты в приложении. Контекст предоставляет способ делиться такими данными между компонентами без необходимости явно передавать пропсы через каждый уровень дерева.

Оффициальная документация React предупреждает: По возможности не используйте Контекст, так как это усложняет повторное использование компонентов.
Если вы хотите избавиться от передачи некоторых пропсов на множество уровней вниз, обычно композиция компонентов является более простым решением, чем контекст.
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
    type: 'React',

    questionTitle: `Что такое Компонент высшего порядка (HOC)?`,

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
    type: 'CSS',
    questionTitle: `Что такое vh и vw (Viewport Width & Viewport Height) в CSS?`,

    questionCode: null,

    questionAnswer: `
vh/vw это процентная величина от общей высоты/ширины области просмотра.

1vh/vw равен 1% высоты/ширины области просмотра,
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
]

let css = {
  type: 'CSS',
  questionTitle: `Как получить текущий URL`,

  questionCode: null,

  questionAnswer: `
Есть два способа:
`,
  answerCode:
    `window.location.href
document.URL`,

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
}

let js = {
  type: 'JS',
  questionTitle: `Как получить текущий URL`,

  questionCode: null,

  questionAnswer: `
Есть два способа:
`,
  answerCode:
    `window.location.href
document.URL`,

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
        codeType: 'javascript',
        type: 'code',
      }
    ]
  },
  score: 0,
}

let react = {
  type: 'React',

  questionTitle: `Что такое React?`,

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
}
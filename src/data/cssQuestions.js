export const cssQuestions = [
  {
    questionText: 'Есть html файл в котором есть такой текст. Будет ли построено DOM дерево и если да, то какой размер текста (нужно назвать точное значение):',
    questionCode:
    {
      type: 'css',
      code: `Some text`
    },
    answer: 'Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:',
    answerCode:
    {
      type: 'css',
      code: `<html><head></head><body>Some text</body></html>`
    },
  },
  {
    questionText: 'Есть html файл в котором есть такой текст. Будет ли построено DOM дерево и если да, то какой размер текста (нужно назвать точное значение):',
    questionCode:
    {
      type: 'html',
      code: `<style>
      body { color: orange }
      p { color: green }
      div { color: red }
  </style>
  <body>
     Text 1<p>Text 2<div>Text 3</div>Text 4</p>Text 5
  </body>`
    },
    answer: 'Даже если в HTML файле нет тегов, всегда будет сгенерирован DOM из того что есть, в итоге получим:',
    answerCode:
    {
      type: 'css',
      code: `<html><head></head><body>Some text</body></html>`
    },
  }
]
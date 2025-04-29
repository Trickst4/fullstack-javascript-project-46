### Hexlet tests and linter status:
[![Actions Status](https://github.com/Trickst4/fullstack-javascript-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Trickst4/fullstack-javascript-project-46/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Trickst4_fullstack-javascript-project-46&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Trickst4_fullstack-javascript-project-46)

## Вычислитель отличий

### Системные требования:
```
Node.js - 20.x
```

### Установка:

```
git clone https://github.com/Trickst4/fullstack-javascript-project-46.git
cd fullstack-javascript-project-46/
make install
npm link
```

### Описание:
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

### Возможности утилиты:

* Поддержка разных входных форматов: yaml, json
* Генерация отчета в виде plain text, stylish и json

### Пример использования:

```
# формат plain
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

# формат stylish
gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```


## Примеры работы:

JSON
https://asciinema.org/a/z3jw7WW5q2rlkbjIh8jKCcJz3

YLM
https://asciinema.org/a/r9EowZO2ZBgto7rGFFOqMxlh6
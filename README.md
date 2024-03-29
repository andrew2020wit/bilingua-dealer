See new version of this application here:

[Foreign Reader](https://github.com/andrew2020wit/foreign-reader)

# Bilingua Dealer - the web-application to read foreign texts.

This web application was initially created as a tool to create and read bilingual books - books with translation text,
which usually are taken from google-translation.

It also has some integration with external dictionary (GoldenDict, through clipboard).

Then I added built-in dictionary functionality, which improve user experience very much.

This application also provide a way to read books with comfort, with a good font, and the good interface (in my opinion).

This also has some functionality to customize user interface,
but I use default settings, and at the moment I don't support full customization.

## Bilingua Dealer is a server-less web-application which allows:

- Create a bilingual book (with the original text, and some translation service like Google-translation).
- Read/Edit bilingua books.
- Learn the foreign language, using additional functionality like "fragments", "favorites examples".
- Listen the original text, using a speech-engine.
- It automatically copies the selected text (or the clicked word) to the clipboard,
  so that you can integrate it with a dictionary, which can observe the clipboard (GoldenDict, for example).
- It has the built-in dictionary-viewer (but you have to upload dictionary itself).
- Save the bilingua book as a json-file, import it from the json-file.
- Import subtitles files

This application can be also used as a good book-reader for monolingual (normal) texts.

All data is stored in your web-browser. It doesn't use any server.

You can read very big books without any technical troubles.

It's better to use on desktop, but it's also (partly) optimized for smartphones.

You should use modern updated web-browsers, Chrome is the best choice.

## Go to the application:

[https://andrew2020wit.github.io/bilingua-dealer/](https://andrew2020wit.github.io/bilingua-dealer/)

## About naming

Name "Bilingua Dealer" comes from:

- [to deal with somebody/something](https://www.ldoceonline.com/dictionary/deal-with) - to take the necessary action,
  especially in order to solve a problem.
  If a book, speech etc deals with a particular subject, it is about that subject
- [deal in something](https://www.ldoceonline.com/dictionary/deal-in) - to be interested or involved in something

#### Example: THE HOBBIT - CHAPTERS 1, 2

[Example: THE HOBBIT - CHAPTERS 1, 2](https://github.com/andrew2020wit/bilingua-dealer/blob/master/example-book/TOLKIEN%20-%20THE%20HOBBIT%20-%20CHAPTERS%201%2C%202%20-%20demo.2023-09-10.bilingua.json)

## Information

### Hot-keys

GoHome: 'Home', ShowMenu: '0', 'Escape', GoToNextItem: 'n', MarkIt: '1',
ShowTranslation: '2', AddFragment: '3', GoToNextFragment: '4', PlayAll: '5', PlayOne: '6',
EditParagraphContent: '8', EditChapterTitle: '9', ShowTranslationAll: 't', GoToNextMark: 'm'.

### About some custom styles

Custom styles are applied only to book-page.

Accent colors are related to headers.

Flex width - defines proportion for original text and translation.

Translation direction - "row" will replace original and translation.

Color primary/accent/warn - for buttons.

### Dictionary functionality

Settings => load a morphology-dictionary, main-dictionary. Turn-on dictionary.

I use the Lingvo+Longman-dictionaries, but I cannot share them because of copyright.

You can get free Wordset-dictionary (wordset-with-tr.json) from here:

[https://github.com/andrew2020wit/bilingua-dealer/tree/master/dictionary](https://github.com/andrew2020wit/bilingua-dealer/tree/master/dictionary)

You also have to load morphology.json and morphology-replace-rules.json.

See also:

[https://github.com/andrew2020wit/dsl-dictionary-parser](https://github.com/andrew2020wit/dsl-dictionary-parser)

[https://github.com/andrew2020wit/cald-mdx-to-json](https://github.com/andrew2020wit/cald-mdx-to-json)

At the moment Dictionary functionality isn't  optimized for mobile (small screens). You have to use a large screen.

It shows only first 1000 favorite examples (sorted by ToDoTime);

#### Morphology Replace Rules

You can define you own Morphology Replace Rules.

index: index for replacement ( - 1 => from end)

See example /dictionary/morphology-replace-rules.json

And see /dictionary/utils/compute-morphology-rule(.spec).ts

### Subtitles

You can import subtitles files (.srt-format, utf-8 encoding). [Example](https://github.com/andrew2020wit/bilingua-dealer/tree/master/subtitles-examples)

### Changelog

[Changelog](https://github.com/andrew2020wit/bilingua-dealer/blob/master/changelog.md)

## Licence

- The author of this application is Andrii Faurash.
- You can use it only for personal non-commercial purposes.
- Don't include it (or part of it) in any other application/library/product/service.
- Don't share modified copies.
- You can use it without paying accordingly to this Licence.
- This application is provided "AS IS".
- The author of this application doesn't provide any guarantees.

Copyright (c) 2023-2024 Andrii Faurash

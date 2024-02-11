# Bilingua Dealer

This web application was initially created as a tool to create and read bilingual books - books with translation text,
which usually are taken from google-translation.

It also has some integration with external dictionary (GoldenDict, through clipboard).

Then I added built-in dictionary functionality, which improve user experience very much.

Now I use it to read english books, and to learn english with "favorite example" - functionality.

It also has some other functionality, which I don't use anymore, but which still exist here
(fragments, voice-engine, the integration with external dictionary, editing).

This application also provide a way to read books with comfort, with a good font, and the good interface (in my opinion).

This also has some functionality to customize user interface,
but I use default settings, and at the moment I don't support full customization.

## Bilingua Dealer is a server-less web-application which allows:

- Create a bilingual book (with the original text, and some translation service like Google-translation).
- Read bilingua books.
- Edit bilingua books.
- Learn the foreign language, using additional functionality like "fragments".
- Listen the original text, using a speech-engine.
- It automatically copies the selected text (or the clicked word) to the clipboard,
  so that you can integrate it with a dictionary, which can observe the clipboard (GoldenDict, for example).
- Save the bilingua book as a json-file, import it from the json-file.
- It has functionality to use a built-in dictionary.
- Import subtitles files

This application can be also used as a good book-reader for monolingual (normal) texts.

It can be used offline. All data is stored in your web-browser. It doesn't use any server.

You can read very big books without any technical troubles.

It's better to use on desktop, but it's also optimized for smartphones.

You should use modern updated web-browsers, Chrome is the best choice.

## Go to the application:

[https://andrew2020wit.github.io/bilingua-dealer/](https://andrew2020wit.github.io/bilingua-dealer/)

## YouTube guide

[playlist](https://www.youtube.com/playlist?list=PLZKEqtF-W8rp3MP9oktd7qgEwVhXAd90I):

- [How to use a bilingua book](https://www.youtube.com/watch?v=Tj2Bs4sRDwQ&list=PLZKEqtF-W8rp3MP9oktd7qgEwVhXAd90I).
- [Loading error](https://www.youtube.com/watch?v=YJMqfpegWgQ&list=PLZKEqtF-W8rp3MP9oktd7qgEwVhXAd90I)
- [Golden dict settings](https://www.youtube.com/watch?v=gDqUiRZoIxY&list=PLZKEqtF-W8rp3MP9oktd7qgEwVhXAd90I)
- [How to create a bilingua book](https://www.youtube.com/watch?v=4ECIpavVafE&list=PLZKEqtF-W8rp3MP9oktd7qgEwVhXAd90I)
- [Export and import](https://www.youtube.com/watch?v=gSKRDLunF6Q&list=PLZKEqtF-W8rp3MP9oktd7qgEwVhXAd90I)
- [Custom user's styles](https://www.youtube.com/watch?v=UjQtVb9FNeI&list=PLZKEqtF-W8rp3MP9oktd7qgEwVhXAd90I)
- [Mobile version](https://www.youtube.com/watch?v=Blfa2ksESuU&list=PLZKEqtF-W8rp3MP9oktd7qgEwVhXAd90I)
- [Install as an application](https://www.youtube.com/watch?v=WmC10MrHUCI&list=PLZKEqtF-W8rp3MP9oktd7qgEwVhXAd90I)
- [About autotranslate](https://www.youtube.com/watch?v=5EBS11hXVJ4&list=PLZKEqtF-W8rp3MP9oktd7qgEwVhXAd90I)

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

### Hints

If you create a very big book,
then maybe you should use separate window for this application and for google-translation (or other),
if you have performance troubles.
It's only about creating. You will not have trouble with big books at reading.

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

See also: [https://github.com/andrew2020wit/dsl-dictionary-parser](https://github.com/andrew2020wit/dsl-dictionary-parser)

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

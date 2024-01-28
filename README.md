# Bilingua Dealer

Bilingua is a text (book), which contains some original text, and its translation (bilingual book).

## Bilingua Dealer is a server-less web-application which allows:

- Create a bilingua book (with the original text, and some translation service like Google-translation).
- Read bilingua books.
- Edit bilingua books.
- Learn the foreign language, using additional functionality like "fragments".
- Listen the original text, using a speech-engine.
- It automatically copies the selected text (or the clicked word) to the clipboard,
  so that you can integrate it with a dictionary, which can observe the clipboard (GoldenDict, for example).
- Save the bilingua book as a json-file, import it from the json-file.

This application can be also used as a good book-reader for monolingual (normal) texts.

It can be used offline. All data is stored in your web-browser. It doesn't use any server.

You can read very big books without any technical troubles.

It's better to use on desktop, but it's also optimized for smartphones.

You should use modern updated web-browsers, Chrome is the best choice.

## There are three ways how to use it

- As a book reader for plane text (for normal (monolingual) text).
- As a bilingua reader for bilingual text.
- As a reader for foreign text, which allow you to add custom translation for some words.

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

This is a "Progressive Web App", so you can use it offline, and you can install it.
In Chrome, you can go to menu -> install Bilingua Dealer...

For mobile, you can set "without translation" at creating book, and use Chrome-translation to read it.
In this case this application is as a book reader.

If you want to create monolingual book - don't use "split text".
Just push "remove empty lines", check "without translation", and push "create bilingua"

If you create a very big book,
then maybe you should use separate window for this application and for google-translation (or other),
if you have performance troubles.
It's only about creating. You will not have trouble with big books at reading.

If you use a monolingual text, don't forget to turn off the translation - it keeps the place.

### About some custom styles

Custom styles are applied only to book-page.

Accent colors are related to headers.

Flex width - defines proportion for original text and translation.

Translation direction - "row" will replace original and translation.

Color primary/accent/warn - for buttons.

### Dictionary functionality

Settings => load a morphology-dictionary, main-dictionary.

Full version of morphology is in [the dictionary folder](https://github.com/andrew2020wit/bilingua-dealer/tree/master/dictionary).

The dictionary is only a demo-version because of copyright. I use the Lingvo-dictionary, but I cannot share it because of copyright.

See also: [https://github.com/andrew2020wit/dsl-dictionary-parser](https://github.com/andrew2020wit/dsl-dictionary-parser)

Dictionary functionality isn't  optimized for mobile (small screens). You have to use a large screen.

The dictionary is stored as one entry as it takes a lot of time to load (to store) 50000+ entries separately.
Also, to display one word, there can be many calls to the dictionary (checking for the presence of different forms of a word).
Synchronous interaction with the entire dictionary allows us to do this quickly.

In my case, the dictionary is about 50MB in size (json-dictionary), and the performance is still quite good.
You don't need a top-end computer for this.
But it is better to avoid using dictionaries larger than 100MB.

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

Copyright (c) 2023 Andrii Faurash

[![Version](https://img.shields.io/badge/Version-0.0.3-blue)](https://www.npmjs.com/package/react-text-annotation) [![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com) [![MIT License](https://img.shields.io/badge/MIT-license-blue)](https://github.com/vlddlv/react-text-annotation/blob/main/LICENSE)

### Text Annotator:
![Text Annotator Preview](https://founders.network/aeb5b29c-3a09-4716-a730-ac19d1f04768.gif)

### Install:

```bash
npm install react-text-annotation@latest
```

### Example of use:
```javascript
      <TextAnnotator
        value={annotations}
        onChange={handleAnnotate}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at aliquet pharetra, sem nulla condimentum augue, id pulvinar nunc nisl et mi. Sed auctor, nunc in cursus tincidunt, sem nunc cursus nibh, a cursus mi lorem in libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget risus diam. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed ferment'}
        highlight={{ id: 1, color: "#c5c5c5" }}
      />
```

### Properties explained:
| Property                          | Description |
| ------------------------------- | ----------- |
| value                           | List of currently annotated objects (see annotation object below) |
| onChange                        | This method will be triggered when the users highlights a new text        |
| content                        | This is the content that needs to be annotated        |
| highlight                        | This is the current highlight object that will be used to annotate text (see hightlight object below)        |


### Annotation Object:
This object is used to collect all the selected annotations from the text. 
```javascript
{ start: 0, end: 0, text: "", highlight: {id: 0, color: ""} }
```
| Property                          | Description |
| ------------------------------- | ----------- |
| start                           | This is the number of beginning of cursor position where the text selection started |
| end                        | This is the number of end of cursor position where the text selection ended        |
| text                        | This is the actual text included in the selection        |
| highlight                        | This is the highlight object (see hightlight object below)        |

### Highlight Object:
This object is used to determine how to lebel the current selection. If you want to label your text as "elephant", you should tell the text annotator that you are labeling elephants. On top of that, it is important for the annotator to understand what is the identifier for elephants so you can later map the annotations with your internal data. Therefore, the object contains the following:
```javascript
{id: 0, color: ""}
```
| Property                          | Description |
| ------------------------------- | ----------- |
| id                           | This is the number identifier, and it could represent any identifir that you can user to match to your local data later on |
| color                        | This is a HEX color that you want to represent the label with        |


### To do
- [ ] Add support for tailwind/styled components
- [ ] Add component tests
- [ ] Publish example to GitHub pages
- [ ] Improve documentation
- [ ] Support mobile

### Credits

This component has been lounging around on my computer for what feels like centuries, like a relic from a bygone era. It was originally inspired by [this project](https://github.com/mcamac/react-text-annotate), but I had to give it a serious makeover to bring it up to production standards that we were looking for. I've been promising myself I'd set it free into the wild one day, and guess what? That day has finally arrived! It's out in the world now, ready to shine!

[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)

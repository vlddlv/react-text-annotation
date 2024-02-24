[![Version](https://img.shields.io/badge/Version-0.0.9-orange)](https://www.npmjs.com/package/react-text-annotation) [![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com) [![MIT License](https://img.shields.io/badge/MIT-license-blue)](https://github.com/vlddlv/react-text-annotation/blob/main/LICENSE)


### Text Annotator:

This is a **React Text Annotation** component, written in **TypeScript** and supporting **JavaScript** implementation. It's designed to be styling framework-agnostic (compatible with **Tailwind**, **Styled Components**, etc.), with the aim of ensuring reliability for production use and cross-browser compatibility, easy to use, covering many use cases.

![Text Annotator Preview](https://founders.network/aeb5b29c-3a09-4716-a730-ac19d1f04768.gif)

### Install:

```bash
npm i react-text-annotation@latest
```

### Example of use (JS/Tailwind):
```javascript
import { useState, useMemo } from 'react';
import { TextAnnotator } from 'react-text-annotation';

export default function Home() {
  const categories = useMemo(() => [{ id: 0, color: "#FF8282", name: 'Not Allowed' }, { id: 1, color: "#FFAF82", name: 'Vehicle' }], []);
  
  const [annotations, setAnnotations] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleAnnotate = (annotation) => {
    setAnnotations(annotation)
  }

  return (
      <TextAnnotator
        containerClassNames="cursor-auto flex-grow p-2.5 space-x-[2] [word-spacing:2px] leading-[30px] -ml-2.5 whitespace-pre-wrap h-full"
        markerClassName="p-1 relative cursor-pointer hover:after:[content:'x'] hover:after:font-bold hover:after:text-xs hover:after:text-black hover:after:whitespace-nowrap hover:after:top-0 hover:after:leading-3 hover:after:left-0 hover:after:absolute hover:after:z-10 hover:after:w-3 hover:after:bg-white hover:after:text-center hover:after:opacity-50"
        value={annotations}
        onChange={handleAnnotate}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at aliquet pharetra, sem nulla condimentum augue, id pulvinar nunc nisl et mi. Sed auctor, nunc in cursus tincidunt, sem nunc cursus nibh, a cursus mi lorem in libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget risus diam. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed ferment'}
        category={selectedCategory}
      />
  );
}

```

### Example of use (TS/Styled Component):
```javascript
import { useState, useMemo } from 'react';
import { TextAnnotator, Annotation, Category } from 'react-text-annotation';

const Container = styled.div`
  cursor: auto;
  flex-grow: 1;
  padding: 10px;
  word-spacing: 2px;
  line-height: 30px;
  margin-left: -10px;
  white-space: pre-wrap;
  height: 100%;
  & mark {
    padding: 4px;
    position: relative;
    cursor: pointer;
    &:hover:after {
      font-size: 8px;
      color: #000;
      white-space:nowrap;
      top: 0;
      line-height: 11px;
      left: 0;
      position: absolute;
      content: 'x';
      font-weight: bold;
      z-index: 11;
      width: 11px;
      background: white;
      text-align: center;
      opacity: 0.5;
    }
  }
`;

export default function Home() {
  const categories = useMemo(() => [{ id: 1, color: "#FFAF82", name: 'Vehicle' },{ id: 2, color: "#FFD482", name: 'Airplane' }], []);
  
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);

  const handleAnnotate = (annotation: Annotation) => {
    setAnnotations(annotation)
  }

  return (
    <Container>
        <TextAnnotator
          value={annotations}
          onChange={handleAnnotate}
          content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at aliquet pharetra, sem nulla condimentum augue, id pulvinar nunc nisl et mi. Sed auctor, nunc in cursus tincidunt, sem nunc cursus nibh, a cursus mi lorem in libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget risus diam. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed ferment"}
          category={selectedCategory}
        />
    </Container>
  );
}
```

### Properties explained:
| Property                          | Type | Description |
| ------------------------------- | ----------- |----------- |
| value                           |**Required**| List of currently annotated objects (see annotation object below) |
| onChange                        |**Required**| This method will be triggered when the users labels a new text        |
| content                        |**Required**|This is the content that needs to be annotated        |
| category                        |**Required**| This is the current category object that will be used to annotate text (see category object below)        |
| containerClassNames       |Optional| List of classes to apply styles to container component |
| markerClassName           |Optional| List of classes to apply styles to marker component |


### Annotation Object:
This object is used to collect all the selected annotations from the text. 
```javascript
{ start: 0, end: 0, text: "", category: {id: 0, color: ""} }
```
| Property                          | Description |
| ------------------------------- | ----------- |
| start                           | This is the number of beginning of cursor position where the text selection started |
| end                        | This is the number of end of cursor position where the text selection ended        |
| text                        | This is the actual text included in the selection        |
| category                        | This is the category object (see category object below)        |

### Category Object:
This object is used to determine how to lebel the current selection. If you want to label your text as "elephant", you should tell the text annotator that you are labeling elephants. On top of that, it is important for the annotator to understand what is the identifier for elephants so you can later map the annotations with your internal data. Therefore, the object contains the following:
```javascript
{id: 0, color: ""}
```
| Property                          | Description |
| ------------------------------- | ----------- |
| id                           | This is the number identifier, and it could represent any identifir that you can user to match to your local data later on |
| color                        | This is a HEX color that you want to represent the label with        |


### To do
- [ ] Update GIF animation
- [ ] Add component tests
- [ ] Expose events (onMouseDown, onMouseEnter, onMouseLeave)
- [ ] Publish example to GitHub pages
- [ ] Improve documentation

### Contribution

Your contributions, whether through [creating issues](https://github.com/vlddlv/react-text-annotation/issues/new) or submitting pull requests, are invaluable to me. Rest assured, I'll be actively engaged and readily available to provide support and guidance every step of the way. Let's collaborate, innovate, and build something amazing together! Remember, no contribution is too small – every effort counts. Looking forward to seeing your ideas and contributions flourish! 🚀✨

### Credits

This component has been gathering dust on my computer for what feels like an eternity. Originally inspired by Martin Camacho's [react-text-annotate](https://github.com/mcamac/react-text-annotate) project, which seems to be no longer maintained, it still serves as the foundation. However, I've given it a makeover to meet the standards we were aiming for.

My motivation behind building this component was to create an annotation tool that is production-ready, thoroughly tested, and ready for immediate use. I've been promising myself I'd set it free into the wild one day, and guess what? That day has finally arrived! It's out in the world now, ready to shine!

[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)

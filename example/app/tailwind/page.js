"use client"

import { useState, useCallback, useMemo } from 'react';
import { TextAnnotator } from 'react-text-annotation';

const CategoryButton = ({children, backgroundColor, onClick}) => {
    return <button className="w-[150px] h-[75px] border-0 m-2.5 cursor-pointer" style={{backgroundColor: backgroundColor}} onClick={onClick}>
      {children}
    </button>
}

const SelectedCategory = ({children, backgroundColor}) => {
  return <div className="p-1.5 m-1.5 inline-block float-left clear-both" style={{backgroundColor: backgroundColor}}>
    {children}
  </div>
}

const Title = ({children}) => {
  return <div className="text-[30px]">{children}</div>
}

export default function Tailwind() {
  const categories = useMemo(() => [{ id: 0, color: "#FF8282", name: 'Not Allowed' },
  { id: 1, color: "#FFAF82", name: 'Vehicle' },
  { id: 2, color: "#FFD482", name: 'Airplane' },
  { id: 3, color: "#A9D6AE", name: 'Industry' },
  { id: 4, color: "#829DFF", name: 'Document' },
  { id: 5, color: "#846EF3", name: 'Forbidden' },
  { id: 6, color: "#C590DE", name: 'Good' }], []);

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [annotations, setAnnotations] = useState([]);

  const handleCategorySelect = useCallback((category) => {
    setSelectedCategory(category);
  }, []);

  const handleAnnotate = (annotation) => {
    setAnnotations(annotation)
  }

  return (
    <div className="p-5">
      <Title>Annotator:</Title>

      <TextAnnotator
        containerClassNames="cursor-auto flex-grow p-2.5 space-x-[2] [word-spacing:2px] leading-[30px] -ml-2.5 whitespace-pre-wrap h-full"
        markerClassName="p-1 relative cursor-pointer hover:after:[content:'x'] hover:after:font-bold hover:after:text-xs hover:after:text-black hover:after:whitespace-nowrap hover:after:top-0 hover:after:leading-3 hover:after:left-0 hover:after:absolute hover:after:z-10 hover:after:w-3 hover:after:bg-white hover:after:text-center hover:after:opacity-50"
        value={annotations}
        onChange={handleAnnotate}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at aliquet pharetra, sem nulla condimentum augue, id pulvinar nunc nisl et mi. Sed auctor, nunc in cursus tincidunt, sem nunc cursus nibh, a cursus mi lorem in libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget risus diam. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed ferment'}
        category={selectedCategory}
      />

      <Title>Current Category</Title>
      {categories.map((category, index) => (
        <CategoryButton backgroundColor={category.color} key={index} onClick={() => handleCategorySelect(category)}>{category.name}</CategoryButton>
      ))}

      <Title>Selected:</Title>
      {annotations.map((annotation, index) => (
        <SelectedCategory key={index} backgroundColor={annotation.category.color}><strong>{annotation.text}</strong> <small>(start: {annotation.start}, end: {annotation.end}, highlight: {JSON.stringify(annotation.highlight)})</small></SelectedCategory>
      ))}
    </div>
  );
}

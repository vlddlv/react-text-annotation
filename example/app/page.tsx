"use client"

import { useState, useCallback, useMemo } from 'react';
import styled from '@emotion/styled'
import { TextAnnotator } from 'react-text-annotation';

interface Category {
  id: number;
  color: string;
  name: string;
}

interface CategoryButtonProps {
  backgroundColor: string;
}

const Page = styled.div`
  padding: 20px;
`;

const CategoryButton = styled.button<CategoryButtonProps>`
  width: 150px;
  height: 75px;
  border: 0px;
  margin: 10px;
  cursor: pointer;
  background-color: ${props => props.backgroundColor};
`;

interface SelectedCategoryProps {
  backgroundColor: string;
}

const SelectedCategory = styled.div<SelectedCategoryProps>`
  padding: 5px;
  margin: 5px;
  display: inline-block;
  float: left;
  clear: both;
  background-color: ${props => props.backgroundColor};
`

export default function Home() {
  const categories = useMemo(() => [{ id: 0, color: "#FF8282", name: 'Not Allowed' },
  { id: 1, color: "#FFAF82", name: 'Vehicle' },
  { id: 2, color: "#FFD482", name: 'Airplane' },
  { id: 3, color: "#A9D6AE", name: 'Industry' },
  { id: 4, color: "#829DFF", name: 'Document' },
  { id: 5, color: "#846EF3", name: 'Forbidden' },
  { id: 6, color: "#C590DE", name: 'Good' },], []);
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
  const [annotations, setAnnotations] = useState<any[]>([]);

  const handleCategorySelect = useCallback((category: Category) => {
    setSelectedCategory(category);
  }, []);

  const handleAnnotate = (text: any) => {
    console.log(text)
    setAnnotations(text)
  }

  return (
    <Page>
      <h2 style={{fontSize: "30px"}}>Annotator:</h2>
      <TextAnnotator
        value={annotations}
        onChange={handleAnnotate}
        content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at aliquet pharetra, sem nulla condimentum augue, id pulvinar nunc nisl et mi. Sed auctor, nunc in cursus tincidunt, sem nunc cursus nibh, a cursus mi lorem in libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget risus diam. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed ferment'}
        highlight={{ id: selectedCategory.id, color: selectedCategory.color }}
      />

      <h2 style={{fontSize: "30px"}}>Current Category</h2>
      {categories.map((category, index) => (
        <CategoryButton backgroundColor={category.color} key={index} onClick={() => handleCategorySelect(category)}>{category.name}</CategoryButton>
      ))}

      <h2 style={{fontSize: "30px"}}>Selected:</h2>
      {annotations.map((annotation, index) => (
        <SelectedCategory key={index} backgroundColor={annotation.highlight.color}><strong>{annotation.text}</strong> <small>(start: {annotation.start}, end: {annotation.end}, highlight: {JSON.stringify(annotation.highlight)})</small></SelectedCategory>
      ))}

    </Page>
  );
}

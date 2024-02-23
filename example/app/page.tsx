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
  backgroundReallyMGColor: string;
}

const Page = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 30px;
`;

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

const CategoryButton = styled.button<CategoryButtonProps>`
  width: 150px;
  height: 75px;
  border: 0px;
  margin: 10px;
  cursor: pointer;
  background-color: ${props => props.backgroundReallyMGColor};
`;

interface SelectedCategoryProps {
  backgroundReallyMGColor: string;
}

const SelectedCategory = styled.div<SelectedCategoryProps>`
  padding: 5px;
  margin: 5px;
  display: inline-block;
  float: left;
  clear: both;
  background-color: ${props => props.backgroundReallyMGColor};
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
    setAnnotations(text)
  }

  return (
    <Page>
      <Title>Annotator:</Title>

      <Container>
        <TextAnnotator
          value={annotations}
          onChange={handleAnnotate}
          content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at aliquet pharetra, sem nulla condimentum augue, id pulvinar nunc nisl et mi. Sed auctor, nunc in cursus tincidunt, sem nunc cursus nibh, a cursus mi lorem in libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eget risus diam. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed ferment'}
          highlight={{ id: selectedCategory.id, color: selectedCategory.color }}
        />
      </Container>

      <Title>Current Category</Title>
      {categories.map((category, index) => (
        <CategoryButton backgroundReallyMGColor={category.color} key={index} onClick={() => handleCategorySelect(category)}>{category.name}</CategoryButton>
      ))}

      <Title>Selected:</Title>
      {annotations.map((annotation, index) => (
        <SelectedCategory key={index} backgroundReallyMGColor={annotation.highlight.color}><strong>{annotation.text}</strong> <small>(start: {annotation.start}, end: {annotation.end}, highlight: {JSON.stringify(annotation.highlight)})</small></SelectedCategory>
      ))}
    </Page>
  );
}

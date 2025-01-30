import { categorys } from '@/data/categorys';
import { Dispatch, SetStateAction } from 'react';
import CategoryButton from './CategoryButton';

interface CategoryListProps {
  setSellect: Dispatch<SetStateAction<string>>;
  sellect: string;
}

export default function CategoryList({ setSellect, sellect }: CategoryListProps) {
  const handleClick = (categoryKeyword: string) => {
    setSellect(categoryKeyword === 'All' ? '' : categoryKeyword);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {categorys.map((category) => (
        <CategoryButton
          key={category.keyword}
          category={category}
          isSelected={sellect === category.keyword}
          onClick={() => handleClick(category.keyword)}
        />
      ))}
    </div>
  );
}

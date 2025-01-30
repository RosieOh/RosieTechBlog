interface CategoryButtonProps {
  category: { keyword: string; title: string };
  isSelected: boolean;
  onClick: () => void;
}

const CategoryButton = ({ category, isSelected, onClick }: CategoryButtonProps) => {
  const buttonStyle = isSelected
    ? 'px-3 py-1 bg-green-100 dark:bg-green-900 border-2 border-gray-700 dark:border-gray-300 rounded-2xl sm:text-lg'
    : 'px-3 py-1 sm:text-lg border-2 border-gray-700 dark:border-gray-300 rounded-2xl transition-transform duration-300 hover:scale-110';

  return (
    <button type="button" onClick={onClick} className={buttonStyle}>
      {category.title}
    </button>
  );
};

export default CategoryButton;

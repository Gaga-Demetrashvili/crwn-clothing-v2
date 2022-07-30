/** @format */
// import { useContext } from "react";
// import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import { useSelector } from "react-redux/es/exports";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);
  const IsLoading = useSelector(selectCategoriesIsLoading);

  return (
    // shorthand for Fragment
    <>
      {IsLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </>
  );
};

export default CategoriesPreview;

/** @format */
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./shop.styles.scss";
import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { useDispatch } from "react-redux";
// import { setCategories } from "../../store/categories/category.action";
// import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesStart } from "../../store/categories/category.action";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // const getCategoriesMap = async () => {
    // const categoriesArray = await getCategoriesAndDocuments();
    // setcategoriesMap(categoryMap);
    // dispatch(setCategories(categoriesArray));
    // };

    dispatch(fetchCategoriesStart());

    // getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

// import React from 'react';
// import PropTypes from 'prop-types';

// const RecipeFilter = ({ handleFilter, recipes }) => {
//   const categories = ['All']; // Start with the All category

//   console.log('recipes', recipes);

//   if (recipes) {
//     recipes.map((r) => {
//       if (!categories.includes(r.strCategory)) {
//         categories.push(r.strCategory);
//       }
//       return categories;
//     });
//   }

//   const handleClick = (e) => {
//     const { value } = e.target;
//     if (value === 'All') {
//       handleFilter(null);
//     } else {
//       handleFilter(value);
//     }
//   };

//   return (
//     <>
//       <label htmlFor="select" className="mx-auto my-0">
//         <select
//           name="category"
//           id="select"
//           onChange={handleClick}
//         >
//           <option disable="true" hidden>
//             CATEGORY
//           </option>
//           {categories.map(
//             (category) => (
//               <option value={category} key={category}>
//                 {category}
//               </option>
//             ),
//           )}
//         </select>
//       </label>
//     </>
//   );
// };

// RecipeFilter.propTypes = {
//   handleFilter: PropTypes.func.isRequired,
//   recipes: PropTypes.arrayOf(PropTypes.shape({
//     idMeal: PropTypes.string,
//     strMeal: PropTypes.string,
//     strCategory: PropTypes.string,
//     strArea: PropTypes.string,
//     strInstructions: PropTypes.string,
//   })).isRequired,
// };

// export default RecipeFilter;

import React from 'react';

const RecipeFilter = () => (
  <div>
    A recipeFilter
  </div>
);

export default RecipeFilter;
